
import React from 'react';

function FilterData(props) {

    return (
        <button className="btn btn-outline-success mr-2 btn-sm" value={props.data} style={{ margin: "5px" }} onClick={props.handleClick}> {props.data}</button>

    );
}

export default FilterData;