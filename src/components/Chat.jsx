import React, { useContext } from "react";
import '../styles/chat-st.css'
import Cam from "../images/cam.png"
import Add from "../images/add.png"
import More from "../images/more.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
    const { data } = useContext(ChatContext)

    return(
        <div className="chat">
            <div className="chatInfo">
                <span className="ch-br-hd">{data.user?.displayName}</span>
                <div className="chatIcons">
                <img className="ch-br-ic" src={Cam} alt="" />
                <img className="ch-br-ic" src={Add} alt="" />
                <img className="ch-br-ic" src={More} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );

};

export default Chat;