import { createContext, useContext, useState } from "react";

const ThemeContex=createContext()


const ThemeProvider=({children})=>{
    const [isdarkmode,setIsdarkmode]=useState(false)

    const toggletheme=()=>{
        setIsdarkmode((prevmode)=>!prevmode)
    }

    return(
        <ThemeContex.Provider value={{isdarkmode,toggletheme}}>
            {children}
        </ThemeContex.Provider>
    );
};

const usetheme=()=>{
    return useContext(ThemeContex)
}
export {usetheme,ThemeProvider}