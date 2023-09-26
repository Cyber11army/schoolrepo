import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function Footer(){
    useEffect(() => {
        //  scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <section className="section footer bg-dark text-white">
            <div className="container-fluid">
                <div className="row" id="text-responsive">
                    <div className="col-md-4 text-center">
                        <br/>
                        <h5 id="text-responsive">Our School Information</h5>
                        <hr/>
                        <div ><p className="text-white ">Principal : Mrs Komal Sharma</p>
                        <p className="text-white ">Manager  : Mr Naresh Sharma</p>
                        <p className="text-white ">Director : Mr Nitin Jain</p></div>

                    </div>
                    <div className="col-md-4 text-center">
                        <br/>
                        <h5 id="text-responsive">Quick Link</h5>
                        <hr/>
                        <div><Link to="/" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>Home</Link></div>
                        <div><Link to="/about" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>About</Link></div>
                        <div><Link to="/contact" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>Contact</Link></div>
                        <div><Link to="/" onClick={() => {
                           window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                   }}>Blog</Link></div>

                    </div>
                    <div className="col-md-4 text-center">
                        <br/>
                        <h5 id="text-responsive">Contact information</h5>
                        <hr/>
                        <div><p className="text-white mb-1">Khekra ,Baghpat,UP -250101</p></div>
                        <div><p className="text-white mb-1">Call Us On:</p></div>
                        <div><a className="text-white mb-1" href="tel:+917409488021"> +91 7409488021</a></div>
                        <div><a className="text-white mb-1" href="tel:+917838552727">+91 7838552727</a></div>
                        <div><p className="text-white mb-1">cherryblossomkindergarten@gmail.com</p></div>
           
                    </div>
                </div>

            </div>
        </section>
    );
  

}
export default Footer;