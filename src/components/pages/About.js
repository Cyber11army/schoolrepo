import React from 'react';
import VMC from '../inc/Vmc';
import Gallery1 from '../images/Gallery1.jpg';
import Gallery2 from '../images/Gallery 2.jpg';
import Gallery3 from '../images/Gallery3.jpg';
import Gallery4 from '../images/Gallery4.jpg';
import Gallery5 from '../images/Gallery5.jpg';
// import {Link} from 'react-router-dom';
import Slider1 from '../images/Principal.jpg'
import Slider2 from '../images/Manager.jpg'
import Slider3 from '../images/Director.jpg'

function About() {
    return (
        <div>
      <section className="py-4 text-dark" id="bg-info">
        <div className="contaimer">
            <div className="row">
                <div className="col-md-4 my-auto">
                        <h4>About Us</h4>
                </div>
                <div className="col-md-8 my auto">
                    <h6 className="float-end">
                        Home/ About Us
                    </h6>

                </div>

            </div>

        </div>

    </section>
    <section className="section bg-light border-bottom">
        <div className="container text center">
            
                        <h5 className="main-heading text-center">Our School</h5>
                        <div className="underline mx-auto"></div>
                        <p className="text-justify" id="text-responsive"><strong>

                                "Welcome to [Cherry Blossom Kinder Garten], where childhood dreams take flight! 
                                Our play school is a nurturing and vibrant environment designed to inspire curiosity,
                                creativity, and a love for learning in young children. We believe that every child is unique,
                                and we provide a safe and supportive space for them to explore, play, and grow.

                                At [Cherry Blossom Kinder Garten], we focus on holistic development, encompassing social,
                                emotional, cognitive, and physical aspects of a child's growth. Our experienced and caring 
                                educators create engaging activities that foster imagination, critical thinking, and 
                                problem-solving skills. We understand the importance of a child's early years in shaping their 
                                future, and we are committed to providing a foundation for lifelong learning.

                                Our play school features age-appropriate facilities, stimulating play areas, and a curriculum 
                                that promotes hands-on exploration and fun. We prioritize safety, hygiene, and a warm, 
                                welcoming atmosphere to ensure both children and parents feel at ease.

                                Join us at [Cherry Blossom Kinder Garten] and embark on an exciting journey of discovery, 
                                friendship, and joy. Together, we'll nurture young minds and prepare them for a bright future 
                                filled with endless possibilities."
                                </strong>
                            </p>
                
                    <p>
                    <div className="row" >
                    <div className="col-md-12 mb-5 text-center">
                    <h2 className="main-heading text-center" >About Owners </h2>
                        <div className="underline mx-auto"></div>
                    <div className="col-md-3" id="inner-card">
                        <div className="card shadow">
                                <img id="Owner" src={Slider1} className="w-100 border-bottom " alt="Services"/>
                            <div className="card-body text-center">
                                <h6>Our Principal</h6>
                                <div className="underline mx-auto"></div>
                                <p>Mrs Komal Sharma</p>
                        </div>
                        </div>
                        </div> 
                        
                        <div className="col-md-3" id="inner-card">
                        <div className="card shadow">
                                <img id="Owner" src={Slider2} className="w-100 border-bottom " alt="Services"/>
                            <div className="card-body text-center">
                                <h6>Our Manager</h6>
                                <div className="underline mx-auto"></div>
                                <p>Mr Naresh Sharma</p>
                        </div>
                        </div>
                        </div>
                        
                        <div className="col-md-3" id="inner-card">
                        <div className="card shadow">
                                <img id="Owner" src={Slider3} className="w-100 border-bottom " alt="Services"/>
                            <div className="card-body  text-center">
                                <h6>Our Director</h6>
                                <div className="underline mx-auto"></div>
                                <p>Mr Nitin Jain</p>
                        </div>
                        </div>
                        </div>
                        </div>
                </div>
                    </p>

                </div>

                <div className="row">
                <div className="col-md-12 mb-5 text-center">
                    <h3 className="main-heading">School Gallery</h3>
                    <div className="underline mx-auto"></div>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                           <div class="carousel-inner">
                               <div class="carousel-item active">
                                   <img src={Gallery1} class="img-fluid  d-block w-100 h-75" alt="..."/>
                          </div>
                          <div class="carousel-item">
                                   <img src={Gallery2} class="img-fluid  d-block w-100 h-75" alt="..."/>
                          </div>
                          <div class="carousel-item">
                                   <img src={Gallery3} class="img-fluid  d-block w-100 h-75" alt="..."/>
                         </div>
                         <div class="carousel-item">
                                   <img src={Gallery4} class="img-fluid  d-block w-100 h-75" alt="..."/>
                         </div>
                         <div class="carousel-item">
                                   <img src={Gallery5} class="img-fluid  d-block w-100 h-75" alt="..."/>
                         </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                           
                           
                           
                           
                     
                           
                           
                           
                           
                    

                    

                </div>

            </div>

    </section>
    {/* Our Vision,mission and values */}
    <VMC />
    </div>
    

    );
   
}

export default About;