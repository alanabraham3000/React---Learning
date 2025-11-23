import React, { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const color ="pink";

    return(
        <>
            <ThemeContext.Provider value={color}>
                {children}
            </ThemeContext.Provider>
        </>
    )
};



export const useTheme = () => useContext(ThemeContext);