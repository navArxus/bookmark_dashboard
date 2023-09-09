import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Addoption = (props) => {
    return (
        <React.Fragment>
            <span onClick={props.chnageaddinputhandler}>
                <AiOutlinePlusCircle size="20px" />
            </span>
            <p onClick={props.chnageaddinputhandler} >Add catogrory</p>
        </React.Fragment>
    )
}

export default Addoption