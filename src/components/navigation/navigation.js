import React, { useContext, useEffect, useState } from "react";
import styles from './navigation.module.css'
import arcuslogo from "../../assets/ArcusLogo.png"
import { AiOutlineSetting } from "react-icons/ai";
import DropDownsetting from "./settingbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import Addinput from "./addinput"
import Addoption from "./addoption"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ctx from "../../store/context-config"



const Navigation = (props) => {
    const [settingmenu, setsettingmenu] = useState(false)
    const [catogries, setcatogries] = useState([])
    const [isaddinput, setisaddinput] = useState(false)
    const [changingdata, setchangingdata] = useState(false)

    const catctx = useContext(ctx)
    // Adding a ref to category collection


    useEffect(() => {
        // console.log("useEffect in action")
        const catogorycollectionRef = collection(db, "catogory")
        const getcatogoryData = async () => {
            try {
                const catogoryData = await getDocs(catogorycollectionRef);
                setcatogries(catogoryData.docs.map((doc) => (doc.data().name)))
            } catch (error) {
                // alert("Error occured unable to fetch data 1 \n Message : " + error)
            }
        }
        getcatogoryData()
    }, [changingdata])


    const settingdropdownandler = () => {
        setsettingmenu(!settingmenu)
    }
    const catchangeHandler = (val) => {
        catctx.setSelectedCatogory(val)

    }  

    const addinputToogle = () => {
        setisaddinput(!isaddinput)
    }
    const newcatdataHandler = async (val) => {
        const catogorycollectionRef = collection(db, "catogory")
        try {
            addDoc(catogorycollectionRef, { name: val, visited: 0 })
            toast.success('Category added successfuly ', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            // console.log("completed")
        } catch (error) {
            // console.log("uncompleted")
            alert("Error occured unable to post data 2\n Message : " + error)
        }
        setchangingdata(!changingdata)
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
                    {isaddinput ? <Addinput chnageaddinputhandler={addinputToogle} newcatdata={newcatdataHandler} /> : <Addoption chnageaddinputhandler={addinputToogle} />}
                </div>

            </div>
            {/* Toast for success */}
            <ToastContainer />
            <div className={styles.lowersection}>
                <div className={styles.dismiss_msg}>
                    <div className={styles.dismiss_msg_text}>
                        <small>Note :</small>
                        <small>Get up to date with our docs and Blog &nbsp; <a href="/">Go to site</a> </small>
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