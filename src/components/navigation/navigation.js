import React, { useState } from "react";
import styles from './navigation.module.css'
import arcuslogo from "../../assets/ArcusLogo.png"
import { AiOutlineSetting } from "react-icons/ai";
import DropDownsetting from "./settingbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Navigation = (props) => {
    const [settingmenu, setsettingmenu] = useState(false)
    const catogries = ['Entariment', 'Games', 'Programming', 'Styles', "Communication","office","anime","op sites"]
    const settingdropdownandler = () => {
        setsettingmenu(!settingmenu)
    }
    const catchangeHandler = (val) => {
        // hellooo
    }

    return (
        <section>
            <div className={styles.uppersection}>
                <div className={styles.logo}>
                    <img src={arcuslogo} alt="logo" />
                    <p>arcus.io</p>
                </div>
                <div className={styles.home}>
                    <p>Bookmarks menu</p>
                    <div className={styles.setting} title="setting">
                        <div className={styles.forrotate} onClick={settingdropdownandler}>
                            <AiOutlineSetting size='25px' />
                        </div>
                        <div className={styles.DropDownsetting}>
                            {settingmenu && <DropDownsetting />}
                        </div>
                    </div>
                </div>
                <small>Catogries</small>
                <div className={styles.catogries}>
                    {catogries.map((cat) => {
                        return (
                            <div className={styles.catogrieseach} onClick={catchangeHandler.bind(null, cat)}>
                                {console.log(cat)}
                                <p>{cat}</p> <MdOutlineKeyboardArrowRight size='20px' />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.line}></div>
                <div className={`${styles.addcategories} `} >
                    <span>
                        <AiOutlinePlusCircle size="20px" />
                    </span>
                    <p>Add catogrory</p>
                </div>
            </div>
            <div className={styles.lowersection}>
                <div className={styles.dismiss_msg}>
                    <div className={styles.dismiss_msg_text}>
                        <small>Note :</small>
                        <small>Get up to date with our docs and Blog <br /> <a href="/">Go to site</a> </small>
                    </div>
                </div>
                <footer>
                    <small>Developed & Managed &#10084; By :</small>
                    <small>arcus.io(Nav)</small>
                </footer>
            </div>
        </section>
    )
}
export default Navigation