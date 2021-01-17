import React, { useContext, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { DataContext } from './DataProvider'

function Header() {

    const [selectAll, setSelectAll] = useState (false)
    const [messages, setMessages] = useContext(DataContext)

    const handleSelectAll = () => {
        const newMessages = [...messages]
        newMessages.forEach((message) => {
            message.selected = !selectAll
        })
        setMessages(newMessages)
        setSelectAll(!selectAll)
    }

    const handleAllSelected = () => {
        return messages.filter (message => message.selected === false)
    }

    const handleDelete = () => {
        setMessages(handleAllSelected())
        setSelectAll(false)
    }

    if (messages.length === 0) {
        
        return (
            <div className = "chat_header" >
                <div className = "avatar" ></div>
                <div className = "chat_name" >
                <span className = "chat_name_name" >Chat name</span>
                <span className = "chat_name_online" >Online</span>
                </div>
                <div>
                    <IconButton
                        onClick = {handleDelete}
                    >
                        <DeleteOutlineIcon/>
                    </IconButton>
                    <IconButton>
                        {handleAllSelected().length}
                    </IconButton>
                </div>
            </div>
        )
    } else {
        return (
            <div className = "chat_header" >
                <div className = "avatar" ></div>
                <div className = "chat_name" >
                <span className = "chat_name_name" >Chat name</span>
                <span className = "chat_name_online" >Online</span>
                </div>
                <div>
                    <IconButton 
                        onClick = {handleSelectAll} 
                        value = {selectAll}
                    >
                        <CheckBoxOutlineBlankIcon/>
                    </IconButton>
                    <IconButton
                        onClick = {handleDelete}
                    >
                        <DeleteOutlineIcon/>
                    </IconButton>
                    <IconButton>
                        {handleAllSelected().length}
                    </IconButton>
                </div>
            </div>
        )
    }

}

export default Header
