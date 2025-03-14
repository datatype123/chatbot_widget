import React from "react";
import WidgetHeader from "./WidgetHeader.tsx";
import "./main.css";
import MessageList from "./MessageList.tsx";
import MessageInput from "./MessageInput.tsx";



const WidgetChabot =()=>{
    return (
        <div className="WidgetChatbot">
            <WidgetHeader/>
            <MessageList />
            <MessageInput/>
        </div>
    );
}

export default WidgetChabot;