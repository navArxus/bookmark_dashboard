import React from "react";
import styles from "./mainbody.module.css"
import Search from "./search";
import CatogoryShow from "./catogoryshow"

const Body = () => {
    return (
        <div className={styles.body}>
            <div className={styles.staticbody}>
                <div className={styles.staticbody_top}>
                    <div className={styles.staticbody_top_text}>
                    <h1>Welcome user</h1>
                    <small>Hello! Glad to see you <br /> Store all of you bookmark here without limitation</small>
                    </div>
                    <button>Create New</button>
                </div>
                <Search/>
            </div>
            <div className={styles.dynamicbody}>
                <CatogoryShow/>
            </div>
        </div>
    )
}

export default Body