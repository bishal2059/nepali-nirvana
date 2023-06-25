import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/main/Main";
import Login from "./Pages/login/Login";
import Signup from "./Pages/Signup/Signup";

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
