import React, { useEffect, useState } from "react";
import styles from "./mainbody.module.css"
import Search from "./search";
import CatogoryShow from "./catogoryshow"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'

const Body = () => {
    const [bookmark, setBookmarks] = useState([])

    useEffect(() => {
        const bookmarkcollectionRef = collection(db, "bookmarks")
        const getbookmarksData = async () => {
            try {
                const bookmarksdata = await getDocs(bookmarkcollectionRef)
                const data = bookmarksdata.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                console.log(data)
                setBookmarks(data)
            } catch (error) {
            }
        }
        getbookmarksData()
    }, [])



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
                <Search />
            </div>
            <div className={styles.dynamicbody}>
                {bookmark.map((value) => {
                    return (
                        <CatogoryShow
                            name={value.name}
                            key={value.id}
                            description={value.description}
                            link={value.link} />
                    )

                })}
            </div>
        </div>
    )
}

export default Body