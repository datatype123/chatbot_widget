import React, { useEffect, useRef, useState } from 'react';
import { chatNormalConversation } from '../api/messages.tsx';
import { addMessage, setLoading, useAppDispatch, useAppSelector } from '../redux/store.tsx';
import type { Message } from '../redux/store.tsx';
import ReactMarkdown from 'react-markdown';
import "./main.css";

const MessageList: React.FC = () => {
  const messages = useAppSelector((state) => state.chat.normalMessage);
  const isLoading = useAppSelector((state) => state.chat.isLoading);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const dispatch = useAppDispatch();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!messages || messages.length === 0) {
      setIsInitialLoading(true);
    } else {
      setIsInitialLoading(false);
      scrollToBottom();
    }
  }, [messages]);

  const formatMessageContent = (content: string) => {
    
    const parts = content.split('```');
    
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <div key={index} className="code-block">
            <pre>
              <code>{part.trim()}</code>
            </pre>
          </div>
        );
      }
      return (
        <div key={index} className="text-block">
          <ReactMarkdown>{part.trim()}</ReactMarkdown>
        </div>
      );
    });
  };

  if (isInitialLoading) {
    return (
      <div className="initial-loading">
        <div className="loading-spinner"></div>
        <div className="loading-text">Đang tải tin nhắn...</div>
      </div>
    );
  }

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.sender_type === 'user' ? 'user-message' : 'bot-message'}`}
        >
          <div className="bubble-content">
            {formatMessageContent(message.content)}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="loading-indicator">
          Đang xử lý...
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
