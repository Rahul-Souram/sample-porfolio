import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import NavBar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
