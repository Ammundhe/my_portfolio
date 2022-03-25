import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import NavBar from "./component/NavBar";
import Intro from "./component/Header/Intro";
import ContactUs from "./component/ContactUs/ContactUs";



const App=()=>{
    return(
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Intro/>}/>
                    <Route path="/contact-page" element={<ContactUs/>}/>
                </Routes>
            </Router>
        </div>
      
    )
}
export default App;