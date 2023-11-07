import React, { createContext, useState } from 'react';
import Ui from './23Ui';
export const Thmesd=createContext()
function Pratice(props) {
    const[themes,setTheme]=useState(true);
    const Btn=()=>{
        console.log("click");
        setTheme((themes)=>!themes);
    }
    return (
        <div>
            <Thmesd.Provider value={themes}>
                <button className='btn btn-dark' onClick={Btn}>Button</button>
                <Ui/>
            </Thmesd.Provider>
        </div>
    );
}

export default Pratice;