import React from "react";
import { DislikeOutlined, LikeOutlined, CheckOutlined } from "@ant-design/icons";
import "./main.css";

interface MessageFrameProps {
  message: string;
  type: 'bot' | 'user';
  time: string;
}

const MessageFrame: React.FC<MessageFrameProps> = ({ message, type, time }) => {
  return (
    <div className="message-bubble">
      <div className={`bubble-content ${type}`}>
        {message}
      </div>
      {type === 'bot' && (
        <div className="reaction-buttons">
          <button className="reaction-btn">
            <LikeOutlined
              style={{
                color: "black",
              }}
            />
          </button>
          <button className="reaction-btn">
            <DislikeOutlined
              style={{
                color: "black",
              }}
            />
          </button>
        </div>
      )}
      <div className={`message_time ${type}`}>
        <p>{time}</p>
        {type === 'user' && (
          <div className="sent-status">
            <CheckOutlined className="check-icon" />
            <CheckOutlined className="check-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageFrame;
