import {createContext, useContext} from "react"

//adding some default values to the context, so when cntext is created it should have some value already

// jb v context call hoga/invoke hoga to humein darkTheme aur lightTheme methods v sath me milenge

export const ThemeContext= createContext({
    themeMode: "light",
    darkTheme: ()=> {},
    lightTheme: ()=> {},
})

//below code will export the context provider that will wrap the components who wants to have acess of context

export const ThemeProvider= ThemeContext.Provider

//exporting custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}

