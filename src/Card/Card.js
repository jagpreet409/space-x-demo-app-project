import React, { useEffect, useState } from 'react';
import './Style.css';

export function Card({ datas }) {
    const [landSuccess, setlandSuccess] = useState('')

    const data = {
        missionName: datas ? datas ? datas.mission_name : null : null,
        missionId: datas ? datas ? datas.mission_id : null : null,
        url: datas ? datas ? datas.links ? datas.links.mission_patch_small : null : null : null,
        launchYear: datas ? datas ? datas.launch_year : null : null,
        launchSuccess: datas ? datas ? datas.launch_success : null : null,
    }
    useEffect(() => {

        setlandSuccess(datas ? datas ? datas.rocket ? datas.rocket.first_stage.cores[0].land_success : null : null : null
        )

    }, [datas ? datas ? datas.rocket ? datas.rocket.first_stage.cores[0].land_success : null : null : null])


    return (
        <div className="Card">
            <div className="Card__img">
                <img src={data.url} alt="" />
            </div>
            <div className="Card__name">
                {data.missionName}
            </div>
            <div className="Card__types">
                <p className="title"><b>Mission Id : </b></p>
                <p>{data.missionId}</p>

            </div>
            <div className="Card__info">
                <div className="Card__datas Card__datas--weight">
                    <p className="title">Launch Year :{data.launchYear}</p>
                </div>
                <div className="Card__datas Card__datas--weight">
                    <p className="title">Launch Success : {data.launchSuccess.toString()}</p>

                </div>
                <div className="Card__datas Card__datas--ability">
                    <p className="title">Land Success : {landSuccess ? landSuccess.toString() : "false"}</p>
                </div>
            </div>
        </div>



    );
}

export default Card;
