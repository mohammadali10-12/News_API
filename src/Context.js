import React, { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

let Api = 'http://hn.algolia.com/api/v1/search?'

const initialState = {

    isLoading: true,
    query: 'HTML',
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = createContext();

const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);


    const FetchApi = async (url) => {
 
dispatch({type:'is_oadig'});
        try {
            const resp = await fetch(url)
            const data = await resp.json();
        
            dispatch({
                type: 'get_stories',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        FetchApi(`${Api}query=${state.query}&page=${state.page}`);
    }, []);
    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )

}

const useCustomHook = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useCustomHook }

