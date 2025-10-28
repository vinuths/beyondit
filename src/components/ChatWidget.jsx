import React, { useState, useEffect, useRef } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can we assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const messagesEndRef = useRef(null);

  // Handle resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Responsive styles
  const styles = {
    container: {
      position: "fixed",
      bottom: isMobile ? 12 : 24,
      right: isMobile ? 12 : 24,
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    widget: {
      width: isMobile ? "90vw" : 320,
      height: isMobile ? "80vh" : 420,
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
      padding: isMobile ? 12 : 16,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: 600,
      fontSize: isMobile ? "1rem" : "1.1rem",
    },
    closeButton: {
      background: "transparent",
      border: "none",
      color: "white",
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      cursor: "pointer",
    },
    messages: {
      flexGrow: 1,
      padding: isMobile ? 12 : 16,
      overflowY: "auto",
      backgroundColor: "#f9fafb",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    messageBot: {
      maxWidth: "80%",
      padding: "10px 14px",
      borderRadius: "18px 18px 18px 2px",
      fontSize: isMobile ? "0.85rem" : "0.9rem",
      wordWrap: "break-word",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      backgroundColor: "#e0e7ff",
      color: "#1e40af",
      alignSelf: "flex-start",
    },
    messageUser: {
      maxWidth: "80%",
      padding: "10px 14px",
      borderRadius: "18px 18px 2px 18px",
      fontSize: isMobile ? "0.85rem" : "0.9rem",
      wordWrap: "break-word",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      alignSelf: "flex-end",
    },
    footer: {
      padding: isMobile ? "10px 12px" : "12px 16px",
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
      fontSize: isMobile ? "0.95rem" : "1rem",
      resize: "none",
      outline: "none",
      boxSizing: "border-box",
    },
    textareaFocus: {
      borderColor: "#667eea",
      boxShadow: "0 0 5px rgba(102, 126, 234, 0.7)",
    },
    sendButton: {
      width: "100%",
      backgroundColor: "#5a67d8",
      color: "white",
      padding: isMobile ? "8px 0" : "10px 0",
      borderRadius: 8,
      fontWeight: 600,
      fontSize: isMobile ? "0.95rem" : "1rem",
      border: "none",
      cursor: "pointer",
    },
    openButton: {
      backgroundColor: "#5a67d8",
      color: "white",
      padding: isMobile ? 14 : 16,
      borderRadius: "50%",
      boxShadow: "0 8px 16px rgba(90, 103, 216, 0.6)",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

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
            <button onClick={sendMessage} style={styles.sendButton}>
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
        >
          <FaComments size={isMobile ? 20 : 24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
