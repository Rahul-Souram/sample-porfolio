import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
