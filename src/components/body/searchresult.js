import React from 'react'
import styles from './serachresult.module.css'

const SearchResult = (props) => {

    return (
        <div className={styles.search_resultParent}>
            {props.showdata.map((val) => {
                return (
                    <div className={styles.search_resultChildren} key={val.id}>
                        <p> <span> {`${val.name.charAt(0).toUpperCase()}${val.name.slice(1)}`} </span>&nbsp;<small>{val.catogory}</small></p>
                        <a href={val.link}>
                            <button title='Visit the bookmark website' > <i>visit</i></button>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResult