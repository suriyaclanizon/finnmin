import React from 'react'
import logo1 from "./image/logo1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap';
import './fin.css';
function Contact() {
    return (
        <>
            <div className='contact'>
                <h1 className='hsize'>Contact Us</h1>
                <div class='row'>
                    <div class='col-lg-6 col-md-6 co-12'>
                        <div className='leftpart'>
                            <div class='row'>
                                <div class='col-lg-6 col-md-6 co-12'>
                                    <lable for="Name*" class="for" >Name*
                                    </lable>
                                    <input type="name" class="form-control" id="name"
                                        placeholder="Enter Your Name"></input>
                                    <lable for="email" class="for">Email ID*
                                    </lable>
                                    <input type="email ID" class="form-control" id="email"
                                        placeholder="Enter Your Email ID"></input>
                                    <lable for="Phone Number" class="for">Phone Number*
                                    </lable>
                                    <input type="Phone Number" class="form-control" id="Phone number"
                                        placeholder="Enter Your Name"></input>
                                    <div class='row'>
                                        <div class='col-lg-4 col-md-4 col-12 px-4'>
                                            <button type="button" class="submitbutton"
                                            >Submit</button>
                                        </div>
                                        <div class='col-lg-6 col-md-6 col-12 px-4'>
                                            <button type="button" class="cancelbutton" >Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-lg-6 col-md-6 col-12'>
                                    <label for="Message" class="for"
                                    >Massage*</label>
                                    <textarea class="form-control" id="Message" placeholder="Enter Your Message"
                                        rows="4"  ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-lg-6 col-md-6 col-12'>
                        <div class="rightpart">
                            <img src={logo1}

                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;