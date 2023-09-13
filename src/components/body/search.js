import React, { useState } from "react"
import styles from "./search.module.css"
import { AiOutlineSearch } from "react-icons/ai";
import SearchResult from "./searchresult";

const Search = () => {
    const [userinput,setuserinput] = useState("")
    const [filtereddata,setfiltereddata] = useState([])
    
    const fetchdata = (value) => {
        const defaultValue = ["entariment", "entar", "office", "games", "programming"];
        const results = defaultValue.filter((val) => {
            return (val.toLowerCase().includes(value.toLowerCase()))
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