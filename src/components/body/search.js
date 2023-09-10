import React from "react"
import styles from "./search.module.css"
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.staticbody_bottom}>
                <input type="text" placeholder="Search bookmarks..." /><button> <AiOutlineSearch size={"20px"} /> </button>
            </div>
            <div className={styles.staticbody_search_result}>
                <div className={styles.nestedstaticbody_result}>
                    <p>h</p>
                    <p>h</p>
                    <p>h</p>
                    <p>h</p>
                    <p>h</p>
                    <p>h</p>
                    <p>h</p>
                    <p>h</p>
                </div>
            </div>
        </div>
    )
}

export default Search