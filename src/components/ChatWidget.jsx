import React, { useState, useEffect, useRef } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can we assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input.trim() }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for your message! We'll get back to you shortly.",
        },
      ]);
    }, 1500);
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Styles as JS objects
  const styles = {
    container: {
      position: "fixed",
      bottom: 24,
      right: 24,
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      userSelect: "none",
    },
    widget: {
      width: 320,
      height: 420,
      backgroundColor: "#fff",
      borderRadius: 12,
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    header: {
      background: "linear-gradient(90deg, #5a67d8, #4c51bf)",
      color: "white",
      padding: 16,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: 600,
      fontSize: "1.1rem",
    },
    closeButton: {
      background: "transparent",
      border: "none",
      color: "white",
      fontSize: "1.3rem",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    messages: {
      flexGrow: 1,
      padding: 16,
      overflowY: "auto",
      backgroundColor: "#f9fafb",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    messageBot: {
      maxWidth: "70%",
      padding: "10px 14px",
      borderRadius: "18px 18px 18px 2px",
      fontSize: "0.9rem",
      lineHeight: 1.3,
      wordWrap: "break-word",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      backgroundColor: "#e0e7ff",
      color: "#1e40af",
      alignSelf: "flex-start",
    },
    messageUser: {
      maxWidth: "70%",
      padding: "10px 14px",
      borderRadius: "18px 18px 2px 18px",
      fontSize: "0.9rem",
      lineHeight: 1.3,
      wordWrap: "break-word",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      alignSelf: "flex-end",
    },
    footer: {
      padding: "12px 16px",
      borderTop: "1px solid #e2e8f0",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      backgroundColor: "white",
    },
    textarea: {
      width: "100%",
      border: "1px solid #cbd5e0",
      borderRadius: 8,
      padding: "10px 12px",
      fontSize: "1rem",
      resize: "none",
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color 0.3s ease",
    },
    textareaFocus: {
      borderColor: "#667eea",
      boxShadow: "0 0 5px rgba(102, 126, 234, 0.7)",
    },
    sendButton: {
      width: "100%",
      backgroundColor: "#5a67d8",
      color: "white",
      padding: "10px 0",
      borderRadius: 8,
      fontWeight: 600,
      fontSize: "1rem",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    openButton: {
      backgroundColor: "#5a67d8",
      color: "white",
      padding: 16,
      borderRadius: "50%",
      boxShadow: "0 8px 16px rgba(90, 103, 216, 0.6)",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    },
  };

  // To handle focus style for textarea (inline styles can't handle :focus)
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={styles.container}>
      {open && (
        <div style={styles.widget}>
          <header style={styles.header}>
            <h3 style={{ margin: 0 }}>Chat with us</h3>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              style={styles.closeButton}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#cbd5e0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              <FaTimes />
            </button>
          </header>

          <main style={styles.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={msg.from === "user" ? styles.messageUser : styles.messageBot}
              >
                <p style={{ margin: 0 }}>{msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </main>

          <footer style={styles.footer}>
            <textarea
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onEnterPress}
              placeholder="Type your message..."
              style={{
                ...styles.textarea,
                ...(isFocused ? styles.textareaFocus : {}),
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button
              onClick={sendMessage}
              style={styles.sendButton}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#4c51bf")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#5a67d8")
              }
            >
              Send
            </button>
          </footer>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          style={styles.openButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#4c51bf";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(76, 81, 191, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#5a67d8";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(90, 103, 216, 0.6)";
          }}
        >
          <FaComments size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
