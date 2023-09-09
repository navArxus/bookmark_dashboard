import React from "react";
import styles from "./mainbody.module.css"
import { AiOutlineSearch } from "react-icons/ai";

const Body = () => {
    return (
        <div className={styles.body}>
            <div className={styles.staticbody}>
                <div className={styles.staticbody_top}>
                    <h1>Welcome user</h1>
                    <button>Create New</button>
                </div>
                <div className={styles.staticbody_bottom}>
                    <input type="text" name="" id="" /><button> <AiOutlineSearch/> </button>
                </div>
            </div>
            <div className={styles.dynamicbody}></div>
        </div>
    )
}

export default Body