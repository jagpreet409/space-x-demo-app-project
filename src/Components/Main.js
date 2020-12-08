import React, { useState, useEffect } from 'react'
import LandFilter from './LandFilter'
import Navbar from './Navbar'
import LaunchFilter from './FilterData'
import Card from '../Card/Card'
import FilterData from './FilterData'

function Main() {

    const yearDetail = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    const launchDetail = ["true", "false"]
    const landDetail = ["true", "false"]
    const onLoadUrl = 'https://api.spaceXdata.com/v3/launches?limit=8'
    const [spacexData, setSpacexData] = useState([])
    const [loading, setLoading] = useState(false)
    const [Hidecard, setHidecard] = useState(false)
    const [yearCard, setYear] = useState([])
    const [showYearCard, setYearCard] = useState(false)
    const [launchCard, setLaunch] = useState([])
    const [showLaunchCard, setLaunchCard] = useState(false)
    const [landCard, setLand] = useState([])
    const [showLandCard, setLandCard] = useState(false)
    const [err, seterr] = useState(false)

    useEffect(() => {
        fetch(onLoadUrl)
            .then(res => res.json())
            .then(
                result =>
                    setSpacexData(
                        result
                    ),
                setLoading(false)

            )
    }, [])

    const hide = () => {
        setHidecard(true)

    }
    const handleClickYearFilter = (event) => {
        const launchYear = event.target.value
        setLoading(true)
        fetch("https://api.spacexdata.com/v3/launches?limit=8&launch_success=true&land_success=true&launch_year=" + launchYear)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.length > 0) {
                        setYear(result)
                        setYearCard(true)
                        setLaunchCard(false)
                        setLandCard(false)
                        setLoading(false)

                    }
                    else {
                        seterr(true)
                        setLaunchCard(false)
                        setLandCard(false)
                        setLoading(false)
                    }

                    hide();
                },
                (error) => {
                    alert("Unable to fetch Data...")
                }
            )
    }
    const handleLaunchData = (event) => {
        setLoading(true)
        let isSuccessLaunch = event.target.value
        fetch("https://api.spaceXdata.com/v3/launches?limit=8&launch_success=" + isSuccessLaunch)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.length > 0) {
                        setYearCard(false)
                        setLandCard(false)
                        setLoading(false)
                        setLaunch(result)
                        setLaunchCard(true)
                        seterr(false)
                    }
                    hide();

                },
                (error) => {
                    alert("Unable to fetch Data...")
                }
            )
    }
    const handleLandData = (event) => {
        setLoading(true)
        let isLandSuccessful = event.target.value
        fetch("https://api.spaceXdata.com/v3/launches?limit=8&launch_success=true&land_success=" + isLandSuccessful)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.length > 0) {
                        setLand(result)
                        setLandCard(true)
                        setLoading(false)
                        setYearCard(false)
                        setLaunchCard(false)
                        seterr(false)

                    }
                    else {
                        seterr(true)
                        setYearCard(false)
                        setLaunchCard(false)
                        setLoading(false)
                    }
                    hide();

                },
                (error) => {
                    alert("Unable to fetch Data...")
                }
            )
    }
    return (
        <React.Fragment>

            <Navbar id='navbar' />
            {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
                <>
                    <div className="col-md-2" >
                        <div className="card mb-2 shadow-sm">
                            <div className="card-body">
                                <h3>Filters</h3>
                                <hr />
                                <span className="p-6" >Launch Year</span>
                                <hr />

                                {yearDetail.map(year => (

                                    <FilterData id='FilterData' data={year} hide={hide} handleClick={handleClickYearFilter} />

                                ))}
                                <hr />
                                <span className="p-6" >Successful Launch</span>
                                <hr />
                                {launchDetail.map(values => (
                                    <LaunchFilter id='LaunchFilter' data={values} hide={hide} handleClick={handleLaunchData} />
                                ))}
                                <hr />
                                <span className="p-6" >Successful Landing</span>
                                <hr />
                                {landDetail.map(values => (

                                    <LandFilter id='LandFilter' data={values} hide={hide} handleClick={handleLandData} />
                                ))}

                            </div>

                        </div>

                    </div >
                    <div className="grid-container">
                        {!Hidecard ? spacexData.map((data, i) => {
                            return <Card key={i} datas={data} />
                        }) : null}

                        {showYearCard ? yearCard.map((data, i) => {
                            return <Card key={i} datas={data} />
                        }) : err ? <h1><center>No data found.....</center></h1> : null}

                        {showLaunchCard ? launchCard.map((data, i) => {
                            return <Card key={i} datas={data} />
                        }) : null}

                        {showLandCard ? landCard.map((data, i) => {
                            return <Card key={i} datas={data} />
                        }) : null}
                    </div>

                </>
            )}

        </React.Fragment>
    )
}

export default Main
