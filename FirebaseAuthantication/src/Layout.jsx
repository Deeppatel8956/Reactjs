import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Compo/Header';
import Footer from './Compo/Footer';
function Layout(props) {
    return (
        <>
         <Header/>
         <Outlet/>
         <Footer/>   
        </>
    );
}

export default Layout;