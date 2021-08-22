import React from 'react'
import { Link } from "react-router-dom";

const NavComponent = () => {
    return (
        <div>
            <Link to="/search">Search</Link>
            <Link to="/history">History</Link>
        </div>
    )
}

export default NavComponent
