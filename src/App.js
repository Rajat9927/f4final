import './App.css';
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    alert("My code is working perfectly on Local server, it is not working correctly after hosting on Github, Please Click HomePage Button to load data.After that it will work fine, I can show you on my local serverr, Please call or whatsapp 9927941725, That's why I have added this nav bar to make homepage accesbile, but in local server it it working fine.")
})
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
