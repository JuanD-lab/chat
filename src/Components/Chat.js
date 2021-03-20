import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "../hooks/useAuth";
import { useChat } from "../hooks/useChat";
import { useRouteMatch } from "react-router-dom";
import '../App.css';

let socket;

function Chat() {
  const { params } = useRouteMatch();
  const { name, room } = params;

  const { user } = useAuth();
  const { messages, setMessages, users, setUsers } = useChat();

  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    if (user) {
      socket = io("https://academlo-chat.herokuapp.com/", {
        query: {
          token: user.token,
        },
      });

      socket.emit("join", { name, room }, (error) => {
        if (error) {
          console.log(error.toString());
        }
      });

      socket.on("message", (message) => {
        setMessages(message);
      });

      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
    }
  }, [user]);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="Chat">
      <div className="chat-container">
              {messages.map((message, index) => {
                const { user, text } = message;
                return (
                  <div key={index + 1} className="message-item">
                    {user === user.username ? (
                      <div className="message message-right">
                        <div>
                          <p className="username-chat">{user.username}</p>
                          <p>{text}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="message message-left">
                        <div>
                          <p className="username-chat">{user}</p>
                          <p>{text}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            <input
              type="text"
              placeholder="write you message"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
              }
            />
            <button onClick={(event) => sendMessage(event)}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
