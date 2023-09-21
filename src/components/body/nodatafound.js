import React from "react";
import nodatafoundIMG from "../../assets/no_data_found.png"
import styles from "./nodatafound.module.css"

const Nodatafound = () => {

    return (
        <div className={styles.nodata}>
            <img src={nodatafoundIMG} alt="No data found" />
        </div>
    )
}
export default Nodatafound