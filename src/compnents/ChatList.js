import React from "react";

function ChatList({ sideBar }) {
  return (
    <div
      className={`col-md-3 p-0 chat-sidebar ${sideBar ? "show" : ""}`}
      id="sidebar"
    >
      <h5 className="mb-0 pb-2 pt-2 border-bottom border-dark">Chat List</h5>
      <div className="list-group list-group-flush">
        <a href="/" className="list-group-item list-group-item-action active">
          Chat 1
        </a>
      </div>
    </div>
  );
}

export default ChatList;
