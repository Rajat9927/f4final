import './App.css';
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Finalprofile from "./Components/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Finalprofile" element={<Finalprofile />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
