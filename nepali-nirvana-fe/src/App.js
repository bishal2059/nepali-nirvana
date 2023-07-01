import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/SignupPage/Signup";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
