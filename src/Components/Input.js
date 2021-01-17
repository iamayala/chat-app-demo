import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from './DataProvider'

function Input() {

    const [messages, setMessages] = useContext(DataContext)
    const [addMessage, setAddMessage] = useState('')
    const inputMessage = useRef()

    const handleSendMessage = e => {
        e.preventDefault()
        setMessages([...messages, {message: addMessage, selected: false}])
        setAddMessage('')
        inputMessage.current.focus()
    }

    useEffect(() => {
        inputMessage.current.focus()
    }, [])

    return (
        <div className = "input_section" >
            <form className = "input_section_form" onSubmit = {handleSendMessage} >
                <input 
                    type = "text" 
                    placeholder = "Write Something"
                    value = {addMessage}
                    ref = {inputMessage}
                    onChange = {e => setAddMessage(e.target.value)}
                    required />
                <button type = "submit" >Send</button>
            </form>
        </div>
    )
}

export default Input
