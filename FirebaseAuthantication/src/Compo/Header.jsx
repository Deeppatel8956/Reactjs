import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <>
        <div className="four">
         
            <img width="50"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8-OtPea5NstSx90DMULW8cenOlxI8THaJg&usqp=CAU" alt="" />
         
         <li><Link to='/sign'>Sign </Link></li>
         <li><Link to='/login'>Login</Link></li>
            </div>
        </>
    );
}

export default Header;