import Home from "./Pages/Home/Home";
import StyledGlobalCss from "./styledGlobalCss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
import Messenger from "./Pages/messenger/Messenger";

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <StyledGlobalCss />
      <Router>
        <Routes>
          <Route exact path="/" element={user?<Home />:<Login />} />
          <Route path="/login" element={user? <Navigate to="/" />: <Login />} />
          <Route path="/register" element={user? <Navigate to="/" />:<Register />} />
          <Route path="/profile/:userId" element={<Profile />} />
          
          <Route path="/messenger" element={<Messenger />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
