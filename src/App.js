import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Staff from './components/pages/Staff';


import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Staffinfo from './components/pages/Staffinfo';
function App() {
    return (
         
     <body className="background"> 
      <div className="container">
        
        <div className="card shadow">
        
          <BrowserRouter>
            <div className="card-body">
            <Navbar/>
                <hr className=" pt-5"/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/staff" element={<Staff/>} />
                <Route path="/staffinfo" element={<Staffinfo/>} />
                
                 
            </Routes>
            <Footer/>
            </div>
          </BrowserRouter>
        </div>

    </div>
    </body>
 

    );
   
}

export default App;

