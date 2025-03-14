import React from "react";
import "./main.css";

const Suggest = () => {
  return (
    <button className="suggest_btn">
      <span className="emoji">😄</span>
      <p>Happy</p>
    </button>
  );
};

const MessageInput = () => {
  return (
    <div className="message_input">
      <div className="suggest_container">
        <Suggest/>
        <Suggest/>
        <Suggest/>
        <Suggest/>
        <Suggest/>
        <Suggest/>
        <Suggest/>
        <Suggest/>
        <Suggest/>
      </div>
      <div className="input_container">
        <input type="text" placeholder="Nhập tin nhắn của bạn..." />
        <button className="send_btn">➤</button>
      </div>
    </div>
  );
};

export default MessageInput;
