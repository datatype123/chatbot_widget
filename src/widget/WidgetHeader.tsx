import React, { useState } from "react";
import "./main.css";

//TODO viet them cai nut thong bao chatbot dang hoat dong

const IconHeader = () => {
  
  return (
    <div
      className="iconHeader"
    >
      <img src={require("../assets/header_chatbot.png")} alt="Chatbot" />
      
    </div>
  );
};

const WidgetHeader = () => {
  const [status, setStatus] = useState("on");
  return (
    <div className="widget_header">
      <div className="left">
        <IconHeader />
        <div className="title_container">
          <h2 >Main Title</h2>
          <div className="status_container" >
            <div className={`status ${status ? "on" : "off"}`}></div>
            <p>{status === "on" ? "Online" : "Offline"}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <button className="menu-btn">⋮</button>
      </div>
    </div>
  );
};

export default WidgetHeader;
