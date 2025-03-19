import React, { useState, useEffect } from "react";
import "./main.css";
import {
  CloseOutlined
} from "@ant-design/icons";
import { checkStatus } from "../api/messages.tsx";
const IconHeader = () => {
  return (
    <div className="iconHeader">
      <img src={require("../assets/header_chatbot.png")} alt="Chatbot" />
    </div>
  );
};

const WidgetHeader:React.FC = () => {
  const [status, setStatus] = useState("on");

  useEffect(() => {
    checkStatus().then((data) => {
      console.log(data['status']);  
      if (data['status'] === true) {
        setStatus("on");
      } else {
        setStatus("off");
      }
    });
  }, [setStatus]);


  return (
    <div className="widget_header">
      <div className="left">
        <IconHeader />
        <div className="title_container">
          <h2> Chat Bot</h2>
          <div className="status_container">
            <div className={`status ${status ? "on" : "off"}`}></div>
            <p>{status === "on" ? "Online" : "Offline"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetHeader;
