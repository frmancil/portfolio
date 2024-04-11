import About from "./components/About";
import Resources from "./components/Resources";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Work from "./components/Work";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Work" element={<Work/>}></Route>
          <Route path="/Resources" element={<Resources/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
