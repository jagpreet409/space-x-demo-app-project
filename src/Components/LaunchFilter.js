import React from 'react';

function LaunchFilter(props) {
    return (
        <>
            <button className="btn btn-outline-success mr-4 btn-sm" value={props.data} style={{ margin: "5px" }} onClick={props.handleClick}>{props.data}</button>
        </>
    );

}

export default LaunchFilter