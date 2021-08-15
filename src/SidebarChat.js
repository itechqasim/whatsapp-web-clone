import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";
function SidebarChat({ addNewChat }) {
    const createChat = () => {
        const roomName= prompt("Please enter name for chat");

        if(roomName) {
            // do some clever database stuff...
              
        }

    };
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar /> 
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
     <div onClick={createChat} className="sidebarChat">
        <h2>Add new chat</h2>
     </div>
    );
}

export default SidebarChat;
        