import React, { createContext, useState } from 'react'

export const CountContext = createContext();

export default function CountContextProvider(props) {

    const [count, setCount] = useState(30)

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {props.children}
        </CountContext.Provider>
    )
}
