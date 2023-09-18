import React, { useState } from "react";
import styles from "./catogoryshow.module.css"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineInfoCircle , AiOutlineArrowRight } from "react-icons/ai";

const Dynamicbody = (props) => {
    const [clickeed,setclickeed] = useState(false)
    const checkingHandler = () => {
        setclickeed(!clickeed)
    }
    return (
        <div className={`${styles.dynamic_container}  ${clickeed && styles.bordergreen}`}  onClick={checkingHandler}>
            <div className={styles.controls}>
                <span><AiOutlineDelete /></span>
                <span><AiOutlineInfoCircle /></span>
                <span><AiOutlineEdit /></span>
            </div>

            <div className={styles.dynamic_container_content}>
                <div className={styles.dynamic_container_text}>
                    <h4>{`${props.name.charAt(0).toUpperCase()}${props.name.slice(1)}`}</h4>
                    <p>{props.description}</p>
                </div>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <button><i>visit</i> <span className={styles.icon}><AiOutlineArrowRight size={"14px"}/></span> </button>
                </a>
            </div>
        </div>
    )
}

export default Dynamicbody