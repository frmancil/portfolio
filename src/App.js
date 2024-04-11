import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route index element={<Hero/>}></Route>
          <Route path="/Hero" element={<Hero/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Portfolio" element={<Portfolio/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
