import React from "react";
import "./main.css";
import MessageFrame from "./MessageFrame.tsx";


const MessageList = () => {
  return (
    <div className="message_container" >
      <MessageFrame 
        message="Xin chào! Tôi có thể giúp gì cho bạn?"
        type="bot"
        time="12:00"
      />


      <MessageFrame 
        message="Tôi cần hỗ trợ về sản phẩm"
        type="user"
        time="12:01"
        />
    </div>
  );
};

export default MessageList;
