import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

import styles from '../styles/Global.module.scss'

const searchedReducer = state => state.searched;

const HistoryPage = () => {
    
    const searched = useSelector(searchedReducer)reverse();

    useEffect(() => {
        console.log(searched);
    }, [])

    return (
        <div className={styles.styledDiv}>
            <h1 className={styles.changeH1}>History</h1>
            {
                searched.map(searchTerm => {
                    return <p>{searchTerm}</p>;
                })
            }
        </div>
    );
}

export default HistoryPage;
