import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setSubmittedData(null);
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }
    else {
      setSubmittedData({ name : name , email : email, message : message });
    }
  };

  return (

      <div className="App">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            data-testid="name-input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            data-testid="email-input"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            data-testid="message-input"
          />
          <button type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
        {error && (
          <p data-testid="error-message" className="error">
            {error}
          </p>
        )}
        {submittedData && (
          <div data-testid="submitted-data" className="submitted-data">
            <h2>Submitted Information</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
  );
}

export default App;
