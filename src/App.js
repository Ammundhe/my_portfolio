import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import NavBar from "./component/NavBar";
import Intro from "./component/Header/Intro";
import ContactUs from "./component/ContactUs/ContactUs";
import AboutMe from "./component/AboutMe/AboutMe";
import ProjectDetails from "./component/ProjectDetails";



const App=()=>{
    return(
        <div style={{margin:"0", padding:"0%"}}>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Intro/>}/>
                    <Route path="/contact-page" element={<ContactUs/>}/>
                    <Route path="/about-me" element={<AboutMe/>}/>
                    <Route path="/project-details" element={<ProjectDetails/>}/>
                </Routes>
            </Router>
        </div>
      
    )
}
export default App;