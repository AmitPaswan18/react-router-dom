import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Messages from "./components/Messages.jsx";
import ShowMessages from "./components/ShowMessages.jsx";

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
