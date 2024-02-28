import React from 'react';
import { usetheme } from './ThemeContext';

function Ninteen(props) {
    let{isdarkmode,toggletheme} =usetheme()
    return (
        <>
         <label htmlFor="">
            <input type="checkbox" checked={isdarkmode} onChange={toggletheme} />
            Dark Mode
        </label>   
        </>
    );
}

export default Ninteen;