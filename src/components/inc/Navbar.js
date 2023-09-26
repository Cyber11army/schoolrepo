import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Slider1 from '../images/logo.png';
import {useEffect} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Navbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleclose = () => setShow(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const hardcodedEmail = 'cbkgadmin@gmail.com'; // Replace with your hardcoded email
  const hardcodedPassword = 'cbkgadmin123'; // Replace with your hardcoded password

  const handleClose = () => {
    // Prevent closing the popup if the admin is not logged in
    if (loggedIn) {
      setShow(false);
    }
  };

  const handleSubmit = () => {
    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Successful login
      alert('Login successful!'); // Replace with your logic for a successful login
      setLoggedIn(true);
      handleClose();
    } else {
      setError('Invalid email or password');
    }
  };
  

  useEffect(() => {
    window.onload = () => {
      setShow(true);
    };
  }, []);


  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    return (
      <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {error && <div className="text-danger">{error}</div>}
          </Form>
          <button class="btn btn-success mt-4" onClick={handleclose} ><Link class="nav-link active text-white" to="/">
             Go to home page</Link></button>
        </Modal.Body>
        <Modal.Footer>
        {loggedIn ? (
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        )}
        </Modal.Footer>
      </Modal>




        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="Navbar">
        <div class="container-fluid">
        <img src={Slider1} class="me-2 " height="60" alt="Cherry Blossom Kinder Garten" loading="lazy" />
          <Link to="/" class="navbar-brand pt-3" id="school-responsive">
           <strong> Cherry Blossom Kinder Garten</strong></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-3">
              <li class="nav-item">
                <Link to="/" class="nav-link active text-white" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }} ><strong>Home</strong></Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link active text-white" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}><strong>About Us</strong></Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link active text-white" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}><strong>Contact Us</strong></Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>Dropdown</strong>
                </a>
                <ul class="dropdown-menu ">
                  <li><Link class="dropdown-item" to="/staff" onClick={handleShow}>Update Staff info</Link></li>
                   <li><Link class="dropdown-item" to="/staffinfo" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>Staff info</Link></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
             
            </ul>
            <form class="d-flex pt-3 nav-item dropdown" role="search" >
              <input class="form-control me-2  dropdown-toggle" href="/" role="button" id="myInput" data-bs-toggle="dropdown"
               onKeyUp={myFunction} aria-expanded="false" type="search" placeholder="Search" aria-label="Search"/> 
              <ul class="dropdown-menu p-1" id="myUL">
                   <h5><strong>Results</strong></h5>
                   <hr/>
                   <li><Link class=" nav-link active " to="/" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>Home</Link></li>
                   <li><Link class=" nav-link active " to="/about" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>About Us</Link></li>

                  <li><Link class=" nav-link active" to="/contact" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>Contact Us</Link></li>
                  <li><Link class=" nav-link active" to="/staff" onClick={handleShow}>Update Staff info</Link></li>
                   <li><Link class=" nav-link active" to="/staffinfo" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>Staff info</Link></li>
                  </ul>
              {/* <button class="btn btn-outline-success" onKeyUp={myFunction} type="submit">Search</button> */}
              
            </form>
            
          </div>
        </div>
      </nav>
      </>
    );
   
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



export default Navbar;