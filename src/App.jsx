import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");

  const askAI = async () => {
    const res = await fetch("http://127.0.0.1:8000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🙏 Naman Darshan AI Assistant</h1>

      <input
        type="text"
        placeholder="Ask about darshan..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "400px",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button onClick={askAI}>Ask</button>

      <div style={{ marginTop: "30px" }}>
        <h3>Reply:</h3>
        <p>{reply}</p>
      </div>
    </div>
  );
}

export default App;