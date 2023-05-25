import React, { useState } from "react";
import axios from "axios";
export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <>
      <div className="container container-sm p-1">
        {" "}
        <h1 className="title text-center text-darkGreen">AI Search</h1>
        <form className="form" onSubmit={handleSubmit} style={{ "display": "flex", "justifyContent": "center" }}>
          <div className="form-group">
            <input
              className="shadow-sm"
              type="text"
              placeholder="Ask anythng..."
              value={prompt}
              onChange={handlePrompt}
              style={{ "borderRadius": "5px 0 0 5px", "outline": "none", "padding": "0.89rem", "border": "none" }}
            />
          </div>{" "}
          <button className="btn btn-accept w-100" type="submit">
            Go
          </button>
        </form>
      </div>

      <div className="bg-darkGreen  mt-2 border-5" style={{"border":"1px solid grey","margin":"2rem 1rem","borderRadius":"5px","background":"#0a0a0a","color":"white","padding":"0  0.8rem"}}>
        <p className="text-light">
          {response}
          <p style={{"color":"white","fontSize":"12px","borderTop":"1px solid white"}}>universalworkstation.netlify.app</p>
        </p>
      </div>
      
    </>
  );
}