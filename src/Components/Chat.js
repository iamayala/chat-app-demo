import React, { useContext, useEffect } from 'react'
import ChatSingle from './ChatSingle'
import { DataContext } from './DataProvider'

function Chat() {

    const [messages, setMessages] = useContext(DataContext)

    const handleSelectMessage = (id) => {
        const newMessages = [...messages]
        newMessages.forEach((message, index) => {
            if (index === id) {
                message.selected = !message.selected
            }
        })
        setMessages(newMessages)
    }

    const handleEditMessages = (editMessage, id) => {
        const newMessages = [...messages]
        newMessages.forEach((message, index) => {
            if (index === id) {
                message.message = editMessage
            }
        })
        setMessages(newMessages)
    }

    return (
        <div className = "chat_section scrollbar" >
            {
                messages.map((message, index) => <ChatSingle
                        id = {index}
                        key = {index}
                        message = {message}
                        handleSelect = {handleSelectMessage}
                        handleEditMessages = {handleEditMessages}
                    />
                )
            }
        </div>
    )
}

export default Chat
