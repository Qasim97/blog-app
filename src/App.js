import TopBar from "./components/topbar/Topbar";
// import Login from "./pages/login/Login";
// import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home"
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
