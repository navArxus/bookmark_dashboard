import React, { useState ,useEffect} from "react"
import styles from "./search.module.css"
import { AiOutlineSearch } from "react-icons/ai";
import SearchResult from "./searchresult";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'

const Search = () => {
    const [userinput,setuserinput] = useState("")
    const [bookmark, setBookmarks] = useState([])
    const [filtereddata,setfiltereddata] = useState([])

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
    
    const fetchdata = (value) => {
        const results = bookmark.filter((val) => {
            return (val.name.toLowerCase().includes(value.toLowerCase()))
        })
        setfiltereddata(results)
    }
    const searchchangeHandler = (event) => {
        setuserinput(event.target.value)
        fetchdata(event.target.value)
    }

    return (
        <div className={styles.parent}>
            <div className={styles.staticbody_bottom}>
                <input type="text" placeholder="Search bookmarks..." onChange={searchchangeHandler}  /><button> <AiOutlineSearch size={"20px"} /> </button>
            </div>
            <div className={styles.staticbody_search_result}>
                <div className={styles.nestedstaticbody_result}>
                    {(userinput !== "" && filtereddata.length > 0) ? <SearchResult showdata={filtereddata} /> : null}
                </div>
            </div>
        </div>
    )
}

export default Search