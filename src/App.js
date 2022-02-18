import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Contact from "./pages/contact/Contact";
import { useState,useEffect } from "react";
import About from "./pages/about/About";
import Event from "./pages/event/Event";
import Blog from "./pages/blogs/Blog";
import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import "./App.css";
import ScrollToTop from "./pages/ScrollToTop";
 

function App() {
  const [loading,setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },1000)
  },[])
  return (
    <>
    {
      loading ?
      <div className="loader">
        <HashLoader color={"#1be1ea"} loading={loading}  size={50} margin={2}/>
         
      </div>
      :
      <Router>
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/join" element={<Join/>} />
          <Route path="/*" element={<Home/>}/>
          <Route path="/*/" element={<Home/>}/>
        </Routes>
      </Router>
    }
    </>
  );
}

export default App;
