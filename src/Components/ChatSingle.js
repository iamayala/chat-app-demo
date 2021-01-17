import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

function ChatSingle({message, id, handleSelect, handleEditMessages}) {

    const [edit, setEdit] = useState(false)
    const [editMessage, setEditMessage] = useState(message.message)

    const EditButton = () => {
        setEdit(true)
    }

    const SaveButton = (id) => {
        setEdit(false)
        if (editMessage) {
            handleEditMessages(editMessage, id)
        } else {
           setEditMessage = message.message 
        }
    }

    if (edit) {
        return (
            <div className = {`chat__message ${ true && 'chat_recvr'}`} >
                  {/* <span className = "chat__name" >Serge</span> */}
                  <span className = "message_icons" >
                      <IconButton onClick = {() => SaveButton(id)}>
                          <CheckCircleIcon/>
                      </IconButton>
                  </span>
                  <div className = 'message_div'>
                    <input 
                        type = "text"
                        value = {editMessage}
                        onChange = {e => setEditMessage(e.target.value)} 
                    />
                    <span className = "time_stamp_edit" >00:00 PM</span>
                  </div>
            </div>
        )
    } else {
        return (
            <div className = {`chat__message ${ true && 'chat_recvr'}`} >
                  {/* <span className = "chat__name" >Serge</span> */}
                  <span className = "message_icons" >
                      <IconButton onClick = {EditButton} className = {message.selected ? "disappear" : "" } >
                          <EditIcon/>
                      </IconButton>
                      <IconButton onClick = { () => handleSelect(id)} >
                          <CheckBoxOutlineBlankIcon/>
                      </IconButton>
                  </span>
                  <div className = {`message_div ${ message.selected && 'active'}`} >
                    <p id = {id} >{message.message}</p>
                    <span className = "time_stamp" >00:00 PM</span>
                  </div>
            </div>
        )        
    }
}

export default ChatSingle
