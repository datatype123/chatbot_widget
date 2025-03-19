import React, { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
  setUserInput,
  addMessage,
} from "../redux/store.tsx";
import "./main.css";
import { chatNormalConversation } from "../api/messages.tsx";

const MessageInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const newMessage = {
        content: inputValue.trim(),
        sender_type: "user" as const,
        // timestamp: new Date().toISOString(),
      };
      dispatch(addMessage({ message: newMessage }));

      dispatch(setUserInput(inputValue.trim()));
      await chatNormalConversation(dispatch, inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="message_input"> 
      <div className="input_container">
        <input
          type="text"
          placeholder="Nhập tin nhắn của bạn..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send_btn" onClick={handleSendMessage}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
