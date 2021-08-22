import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '../styles/Global.module.scss'

const SearchPage = () => {
    let [searchTerm, setSearchTerm] = useState('');
    let [searching, setSearching] = useState(false);
    let [algolQueryResults, setAlgolQueryResults] = useState([]);

    useEffect(() => {

        if (searchTerm === '') return;

        setSearching(true);
        setAlgolQueryResults([]);

        const delayFn = setTimeout(() => {
            axios.get(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
            .then(res => {
                console.log(res.data.hit);
                setAlgolQueryResults(res.data.hits)
            })
            setSearching(false);
        }, 3000)

        return () => clearTimeout(delayFn)
    }, [searchTerm])
        
    return (
        <div className={styles.styledDiv}>
            <h1 className={styles.changeH1}>Search</h1>
            <input value={searchTerm} type="text" onChange={e => setSearchTerm(e.target.value) } />
            { (searchTerm !== '') ? <p>Search results for <b>{searchTerm}</b>.</p> : <></> }
            { (searching)?<p>Searching for the results...</p>:<></> }
            {algolQueryResults.map(results => {
                return (
                    <div key={results.objectID}>
                        <p><b>{results.title}</b> by {results.author}</p>
                    </div>   
                )
            })}
        </div>
    );
}

export default SearchPage