import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () =>{
    return(
        <nav>
            <h2>
                <Link to="/">Comfy</Link>
            </h2>
            <Link to="/movie/1">Movie</Link>
            <Link to="/search">Search</Link>
        </nav>
    )
}

export default Navbar