import { useState } from "react";
import { API_URL } from "./config";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async (question) => {
    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      return data.answer;

    } catch (error) {
      console.error(error);
      return "Something went wrong 🙏";
    }
  };

  const handleAsk = async () => {
    if (!question) return;

    setLoading(true);

    const answer = await askAI(question);

    setResponse(answer);
    setLoading(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>🙏 Naman Darshan AI</h2>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question..."
      />

      <button onClick={handleAsk}>Ask</button>

      {loading && <p>Thinking...</p>}
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;