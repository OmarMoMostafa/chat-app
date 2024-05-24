import React from "react";
import ChatInput from "./ChatInput";

function Chat({ sideBar, setSideBar }) {
  const toggleHandler = () => {
    if (sideBar) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  };

  const coverClickHandler = () => {
    setSideBar(false);
  };

  return (
    <div className="col-md-9 p-0 chat-main">
      <div className="chat-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Chat 1</h5>
        <button onClick={toggleHandler} className="btn d-md-none toggle">
          {sideBar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`cover ${sideBar ? "show" : ""}`}
        onClick={coverClickHandler}
      ></div>
      <div className="chat-messages">
        {/* "me" classname = my messages */}
        <div className="chat-message me">
          <div className="message-text">Hello, how are you?</div>
        </div>
        <div className="chat-message">
          <div className="message-text">
            I'm good, thank you! How about you?
          </div>
        </div>
      </div>
      {/* message input */}
      <ChatInput />
    </div>
  );
}

export default Chat;
