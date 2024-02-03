import React, { useState, useEffect } from "react";

function useTypingEffect(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
}

function Home() {
  const [processDescription, setProcessDescription] = useState("");
  const [response, setResponse] = useState("");
  const [formattedResponse, setFormattedResponse] = useState("");

  useEffect(() => {
    if (response) {
      const formatted = JSON.stringify(JSON.parse(response), null, 2);
      setFormattedResponse(formatted);
    }
  }, [response]);

  const typingResponse = useTypingEffect(formattedResponse, 30);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/generate-rwd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: processDescription }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      setResponse("Failed to fetch response");
    }
  };

  return (
    <div>
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <h2>Process Description:</h2>
                      <textarea
                        onChange={(e) => setProcessDescription(e.target.value)}
                        className="form-control form-control-message"
                        name="message"
                        id="message"
                        placeholder="Enter Process Description....."
                        rows={3}
                        required
                      />
                    </div>
                    <div className="text-right">
                      <button
                        className="btn btn-primary solid blank"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  {typingResponse && (
                    <>
                      <h2>RESPONSE:</h2>
                      <pre
                        className="response-box"
                        style={{
                          border: "1px solid #ddd",
                          marginTop: "20px",
                          padding: "10px",
                          whiteSpace: "pre-wrap",
                          wordWrap: "break-word",
                        }}
                      >
                        {typingResponse}
                      </pre>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
