import React from 'react'
import { Nav} from 'react-bootstrap';

function Footer() {
  return (
    <div className='Footer'>
       <div class="contact">
                                <div class="container">
                                  <div class="row">
                                    <div class="col-sm-6 mb-3">
                                    <Nav>
                                    <Nav.Link href="#home">Home</Nav.Link>

<Nav.Link href="#features">Explore</Nav.Link>
<Nav.Link href="#pricing">About Us</Nav.Link>
<Nav.Link href="#pricing">Contact Us</Nav.Link>
</Nav>
                                    </div>
                                    <div class="col-sm-6">

                                  <p class="address"> © 2022-2035 Fin-N-Min.com</p>
                                    </div>
                </div>
                </div>
    </div>
    </div>
  );
}

export default Footer;