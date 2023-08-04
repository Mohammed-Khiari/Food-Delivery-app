import React, { createContext, useContext, useReducer } from "react"

export const StateContext = createContext(); 

export const StateProvider = ( {reducer, initialeState, children} ) => (
    <StateContext.Provider value={useReducer(reducer, initialeState)}>
        {children}
    </StateContext.Provider>
    )


export const useStateValue = () => useContext(StateContext);  

