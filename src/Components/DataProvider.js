import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const messageStore = JSON.parse(localStorage.getItem('messageStore'))
        if (messageStore) {
           setMessages(messageStore) 
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('messageStore', JSON.stringify(messages))
    }, [messages])

    return (
        <DataContext.Provider value = {[messages, setMessages]} >
            {props.children}
        </DataContext.Provider>
    )
}
