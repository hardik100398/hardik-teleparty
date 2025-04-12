import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import { ChatMessage } from "../types";
import { client, handler } from "../lib/teleparty";
import { SocketMessageTypes } from "teleparty-websocket-lib";

const Chat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    handler.onMessage(SocketMessageTypes.SEND_MESSAGE, (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const sendMessage = () => {
    client.sendMessage({ body: input });
    setInput("");
  };

  return (
    <div className="p-4">
      <MessageList messages={messages} />
      <div className="flex gap-2 mt-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input flex-grow"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="btn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
