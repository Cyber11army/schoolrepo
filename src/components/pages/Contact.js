import React,{useState} from 'react';
import axios from 'axios';



function Contact() {
    
    const[name , setName] = useState('')
    const[phone , setPhone] = useState('')
    const[email , setEmail] = useState('')
    const[msg , setMsg] = useState('')
   

    let submit=async(e)=>{
        e.preventDefault()

        try{
            alert("submitted")
            await axios.post("http://localhost:8000/",{
                name,phone,msg,email
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <div>
        <section className="py-4 text-dark" id="bg-info">
        <div className="container">
            <div className="row">
                <div className="col-md-4 my-auto">
                        <h4>Contact Us</h4>
                </div>
                <div className="col-md-8 my auto">
                    <h6 className="float-end">
                        Home/ Contact Us
                    </h6>

                </div>

            </div>

        </div>

        </section>
        <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                    <h5 className="main-heading">Contact Us</h5>
                           <div className="underline"></div>
                           <hr/>
                           <form action="POST">
                           <div className="form-group">
                               <label className="mb-1"><strong>Full Name</strong></label>
                               <input type="text"  className="form-control" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Full Name" required/> 
                           </div>
                           <div className="form-group">
                               <label className="mb-1"><strong>Phone Number</strong></label>
                               <input type="number" className="form-control" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone Number" reqired/> 
                           </div>
                           <div className="form-group">
                               <label className="mb-1"><strong>Email</strong></label>
                               <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" required/> 
                           </div>
                           <div className="form-group">
                               <label className="mb-1"><strong>Message</strong></label>
                               <textarea name="text" rows="3" className="form-control" onChange={(e)=>{setMsg(e.target.value)}} placeholder="Type Your Message......" required></textarea>
                           </div>
                           
                           <div className="form-group py-3">
                               <button type="button" onClick={submit} className="btn btn-primary shadow w-100">Send Message</button>
                           </div>
                        </form>
                    </div>
                    <div className="col-md-6 border-start">
                           <h5 className="main-heading">Address Information</h5>
                           <div className="underline"></div>
                           <p>
                              Khekra(Baghpat),UP-250101
                           </p>
                           <p> Call Us: 
                           <a href="tel:+917409488021">
                               +91 7409488021
                           </a>
                           </p>
                           <p>
                              Email: cherryblossomkindergarten@gmail.com
                           </p>
                    </div>

                </div>

            </div>

        </div>

        </div>
       </section>
    </div>
    );
   
}

export default Contact;