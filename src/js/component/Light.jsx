import React from "react";
import PropTypes from 'prop-types';

const Light = (props) =>{
    const {color, active, click} = props
    return(
    <button onClick={() => click(color)} className={`light ${color} ${color == active ? "active" : "" } `}></button>
    )
}

Light.propTypes = {
    color: PropTypes.string,
    active: PropTypes.string
}

export default Light