import React, { useRef } from "react";
import styles from "./addinput.module.css"

const Addinput = (props) => {
    const newcat = useRef("") 
    const inputHandler = () =>{
        props.newcatdata(newcat.current.value)
        // console.log(newcat.current.value)
    }

    return (
        <div className={styles.addinput}>
            <small>Enter catogory Name</small>
            <input type="text" autoFocus ref={newcat} />
            <div className={styles.btn}>
                <button onClick={props.chnageaddinputhandler}>Cancel</button>
                <button   onClick={inputHandler}>Add</button>
            </div>
        </div>
    )
}

export default Addinput