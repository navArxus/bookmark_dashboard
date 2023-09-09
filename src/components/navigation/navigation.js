import React, { useEffect, useState } from "react";
import styles from './navigation.module.css'
import arcuslogo from "../../assets/ArcusLogo.png"
import { AiOutlineSetting } from "react-icons/ai";
import DropDownsetting from "./settingbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { collection, getDocs ,addDoc} from 'firebase/firestore'
import { db } from '../../firebase-config'
import Addinput from "./addinput"
import Addoption from "./addoption"



const Navigation = (props) => {
    const [settingmenu, setsettingmenu] = useState(false)
    const [catogries, setcatogries] = useState([])
    const [isaddinput, setisaddinput] = useState(false)

    // Adding a ref to category collection
    const catogorycollectionRef = collection(db, "catogory")
    useEffect(() => {
        const getcatogoryData = async () => {
            const catogoryData = await getDocs(catogorycollectionRef);
            // console.log(catogoryData.docs.map((doc) => ({...doc.data() , id:doc.id})))
            setcatogries(catogoryData.docs.map((doc) => (doc.data().name)))
        }
        getcatogoryData()
    }, [catogorycollectionRef])

    const settingdropdownandler = () => {
        setsettingmenu(!settingmenu)
    }
    const catchangeHandler = (val) => {
        console.log(val)
    }

    const addinputToogle = () =>{
        setisaddinput(!isaddinput)
    }
    const newcatdataHandler = async (val) =>{
        addDoc(catogorycollectionRef,{name:val,visited:0})
        setisaddinput(false)
        const getcatogoryData = async () => {
            const catogoryData = await getDocs(catogorycollectionRef);
            // console.log(catogoryData.docs.map((doc) => ({...doc.data() , id:doc.id})))
            setcatogries(catogoryData.docs.map((doc) => (doc.data().name)))
        }
        getcatogoryData()

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
                            <div className={styles.catogrieseach} onClick={catchangeHandler.bind(null, cat)} key={Math.random()}>
                                <p>{cat}</p> <MdOutlineKeyboardArrowRight size='20px' />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.line}></div>
                <div className={`${styles.addcategories} `} >
                    {isaddinput ? <Addinput chnageaddinputhandler={addinputToogle}  newcatdata={newcatdataHandler} /> : <Addoption chnageaddinputhandler={addinputToogle}/>}
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