import React from 'react'
import styles from './serachresult.module.css'

const SearchResult = (props) => {

    return (
        <div className={styles.search_resultParent}>
            {props.showdata.map((val) => {
                return (
                    <div className={styles.search_resultChildren} key={val}>
                        <p>{`${val.charAt(0).toUpperCase()}${val.slice(1)}`}</p>
                        <button title='Visit the bookmark website' > <i>visit</i></button>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResult