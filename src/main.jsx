import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import About from "./components/common/About.jsx";
import Contact from "./components/common/Contact.jsx";
import Messages from "./components/common/Messages.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowMessages from "./components/common/ShowMessages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="messages" element={<Messages />} />
      <Route path="messages/:messageId" element={<ShowMessages />} />
    </Routes>
  </Router>
);
