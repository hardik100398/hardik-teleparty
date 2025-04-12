import React from "react";
import { ChatMessage } from "../types";

const MessageList: React.FC<{ messages: ChatMessage[] }> = ({ messages }) => (
  <div className="h-64 overflow-y-auto border p-2">
    {messages.map((msg, idx) => (
      <div key={idx} className="mb-2">
        {msg.isSystemMessage ? (
          <em className="text-gray-500">{msg.body}</em>
        ) : (
          <span>
            <strong>{msg.userNickname || "Unknown"}:</strong> {msg.body}
          </span>
        )}
      </div>
    ))}
  </div>
);

export default MessageList;
