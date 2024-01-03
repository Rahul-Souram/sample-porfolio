import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Footer, Navbar } from "./components";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/work" Component={Work} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
