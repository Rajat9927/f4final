import React from 'react';
import { Link,NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <ul className="topnav">
            
            <li className="right"><Link to="/">Home Page</Link></li>
            
        </ul>
    )
}

export default Navbar