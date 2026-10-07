import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;