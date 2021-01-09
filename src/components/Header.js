import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="main-head">
            <nav>
           
                <ul className="nav">
        
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li >
                        <Link to="/books">Books</Link>
                    </li>
                    <li >
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li >
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
