import React, { useState } from "react";

function ChatInput() {
  const [msgTxt, setMsgTxt] = useState("");
  const txtChangeHandler = (e) => {
    setMsgTxt(e.target.value);
  };

  const sendMsgHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chat-footer">
      <form className="d-flex w-100" onSubmit={sendMsgHandler}>
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Type a message"
          value={msgTxt}
          onChange={txtChangeHandler}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
