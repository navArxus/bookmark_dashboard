import React from "react";
import styles from "./catogoryshow.module.css"
import { AiOutlineDelete , AiOutlineEdit , AiOutlineInfoCircle } from "react-icons/ai";

const dynamicbody = () => {
    return (
        <React.Fragment>
            <div className={styles.dynamic_container}  >
                <div className={styles.controls}>
                    <span><AiOutlineDelete/></span>
                    <span><AiOutlineInfoCircle/></span>
                    <span><AiOutlineEdit/></span>
                </div>

                <div className={styles.dynamic_container_content}>
                    <div className={styles.dynamic_container_text}>
                        <h2>title</h2>
                        <p>description</p>
                    </div>
                    <a href="/">
                        <button><i>visit</i></button>
                    </a>
                </div>
            </div>


        </React.Fragment>
    )
}

export default dynamicbody