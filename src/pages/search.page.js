import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";

import addToList from '../store/actionTypes';
import styles from '../styles/Global.module.scss';

const SearchPage = () => {

    const dispatch = useDispatch();

    let [searchTerm, setSearchTerm] = useState('');
    let [searching, setSearching] = useState(false);
    let [algolQueryResults, setAlgolQueryResults] = useState([]);

    useEffect(() => {

        if (searchTerm === '') {
            setSearching(false);
            return;
        };

        setSearching(true);
        setAlgolQueryResults([]);

        const delayFn = setTimeout(() => {
            axios.get(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
            .then(res => setAlgolQueryResults(res.data.hits));
            dispatch({ type: addToList, payload: searchTerm });
            setSearching(false);
        }, 1000)

        return () => clearTimeout(delayFn);
    }, [searchTerm])
        
    return (
        <div className={styles.styledDiv}>
            <h1 className={styles.changeH1}>Search</h1>
            <input value={searchTerm} type="text" onChange={e => setSearchTerm(e.target.value) } />
            { 
              (searching) ? <p>Searching for the results...</p> : 
              (searchTerm !== '') ? <p>Search results for <b>{searchTerm}</b>.</p> : <></> 
            }

            {
                (searchTerm !== '') ?
                <>
                    {algolQueryResults.map(results => {
                        return (
                            <div key={results.objectID}>
                                <p><b>{results.title}</b> by {results.author}</p>
                            </div>   
                        )
                    })}
                </>
                :<></>
            }
            
        </div>
    );
}

export default SearchPage