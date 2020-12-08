import React from 'react'
import '../Card/Style.css'
function LandFilter(props) {
    console.log(props.data)

    return (
        <div>
            <button className="btn btn-outline-success mr-4 btn-sm" style={props.data === 'true' ? { margin: "5px" } : { marginLeft: '5.5em', marginTop: '-4.9em' }} value={props.data} onClick={props.handleClick}>{props.data}</button>
        </div >
    )
}

export default LandFilter
