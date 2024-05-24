import { BrowserRouter, Routes, Route } from "react-router-dom";

import Activation from "./pages/Activation";
import ChattingPage from "./pages/ChattingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/sign-in" element={<SignInPage />} />
          <Route exact path="/sign-up" element={<SignUpPage />} />
          <Route exact path="/activation" element={<Activation />} />
          <Route exact path="/" element={<ChattingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
