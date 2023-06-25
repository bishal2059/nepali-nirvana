import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/SignupPage/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
