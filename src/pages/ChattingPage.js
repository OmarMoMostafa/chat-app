import React, { useState } from "react";
import ChatList from "../compnents/ChatList";
import Chat from "../compnents/Chat";

function ChattingPage() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row flex-grow-1 app">
        {/* Sidebar */}
        <ChatList sideBar={sideBar} />
        {/* Main Content */}
        <Chat sideBar={sideBar} setSideBar={setSideBar} />
      </div>
    </div>
  );
}

export default ChattingPage;
