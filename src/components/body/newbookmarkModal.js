import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./newbookmarkModal.module.css"
import ctx from "../../store/context-config"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase-config";

const Overlay = (props) => {

    const [title, settitle] = useState("")
    const [catogory, setcatogory] = useState("")
    const [link, setlink] = useState("")
    const [desc, setdesc] = useState("")
    const [avaicatogries, setavaicatogries] = useState([])
    const [newbookmarkobj, setnewbookmarkobj] = useState({})

    const reqCtx = useContext(ctx)
    useEffect(() => {
        if (catogory.trim() !== "" && title.trim() !== "" && link.trim() !== "" && desc.trim() !== "") {
            console.log(catogory, title, link, desc)
            let tempnewbookmarkobj =  {catogory:catogory,description:desc,link:link,name:title,visited:0}
            console.log(tempnewbookmarkobj)
            setnewbookmarkobj(tempnewbookmarkobj)
        }
    }, [catogory, title, link, desc])

    useEffect(() => {
        const catogoryrefcollection = collection(db, "catogory")
        const getData = async () => {
            try {
                const catdata = await getDocs(catogoryrefcollection)
                setavaicatogries(catdata.docs.map((doc) => (doc.data().name)))
            } catch (error) {
                console.error("Custom error firebase not connected")
            }
        }
        getData()
    }, [])
    console.log(avaicatogries)
    const databseinsertdata = () => {
        const catogoryrefcollection = collection(db, "bookmarks")
        addDoc(catogoryrefcollection,newbookmarkobj)
        reqCtx.setisModal();
        window.location.reload()
    }



    return (
        <div className={styles.overlay}>
            <div className={styles.card}>
                <header> <h2>Create new bookmark</h2> </header>
                <div className={styles.newbookmark_form}>
                    <div className={styles.title}>
                        <p>Enter Title</p>
                        <input type="text" placeholder="eg.. google , unstop etc" onChange={(val) => settitle(val.target.value)} />
                    </div>
                    <div className={styles.catogory}>
                        <p className={styles.margin_left}>Enter Catogory</p>
                        <select onChange={(val) => setcatogory(val.target.value)} placeholder="Select catogory">
                            {/* <option value="1">1</option> */}
                            {avaicatogries.map((val) => {
                                return <option value={val}>{val}</option>
                            })}
                        </select>
                    </div>
                    <div className={styles.link}>
                        <p>Enter link</p>
                        <input type="url" placeholder="https://bearcus.in/" onChange={(val) => setlink(val.target.value)} />
                    </div>
                    <div className={styles.description}>
                        <p>Enter description</p>
                        <input type="textarea" placeholder="short description for better understanding" onChange={(val) => setdesc(val.target.value)} />
                    </div>
                </div>
                <div className={styles.footer}><button onClick={reqCtx.setisModal} >Cancel</button><button onClick={databseinsertdata}>Add bookmark</button></div>
            </div>
        </div>
    )
}

const Modal = () => {
    return (
        <div>
            {ReactDOM.createPortal(<Overlay />, document.getElementById("modal"))}
        </div>
    )
}
export default Modal 
