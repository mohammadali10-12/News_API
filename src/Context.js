import React,{createContext,useContext} from 'react'

const AppContext = createContext();

const AppProvider = ({children}) =>{



    return(
        <AppContext.Provider value={'Mohammadali'}>
            {children}
        </AppContext.Provider>
    )

}

const useCustomHook = ()=>{
    return useContext(AppContext);
}

export  {AppProvider, AppContext, useCustomHook}

