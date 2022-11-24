import React from "react";

function Footer() {
  return (
    <footer className="mt-5 backg text-white px-auto py-1">
      <div className="container border-bottom">
        <div className="row d-flex mx-auto">
          <div className="col-lg-3 col-12 col-sm-6 lh-sm">
          <img className="w-50 rounded-5  my-3" src="https://static.vecteezy.com/system/resources/thumbnails/006/309/644/small/creative-real-estate-logo-design-house-logo-design-real-estate-icon-vector.jpg"/>
          <p className="p">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quae corrupti quasi magni consectetur temporibus itaque perspiciatis explicabo rem pariatur.
            </p>
          </div>
          <div className="col-lg-3 col-12 col-sm-6 lh-lg">
            <h3 className="py-3">SERVICES</h3>
            <ul className="list-unstyled">
              <li>Property on Sale</li>
              <li> About Us</li>
              <li> About Us</li>
              <li>our team</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 col-sm-6">
            <h3 className="py-3">CONTACT INFO</h3>
            <ul className="list-unstyled lh-lg">
              <li>
                {" "}
                <b>
                  {" "}
                  <b> Monday - Friday :</b>
                </b>{" "}
                9 am to 6 pm
              </li>
              <li>
                <b>
                  <b>Saturday - Sunday :</b>
                </b>{" "}
                9 am to 2 pm
              </li>
              <li>
                <b>
                  <b>Phone :</b>{" "}
                </b>
                +977 9832482837
              </li>
              <li>
                <b>
                  <b>Email :</b>
                </b>{" "}
                subsbips@gmaol.com
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 col-sm-6">
            <h3 className="py-3">GALLERY</h3>
            <div className="images d-flex flex-wrap gap-3">
                
         <img className="w-25 imgover" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg"/>
          <img className="w-25 imgover" src="http://cdn.home-designing.com/wp-content/uploads/2009/06/bedroom-with-bay-window.jpg"/>
          <img className="w-25 imgover" src="https://thearchitecturedesigns.com/wp-content/uploads/2018/07/11.Master-Bedroom-Designs.jpg"/>
          <img className="w-25 imgover" src="http://cdn.home-designing.com/wp-content/uploads/2014/09/bachelor-bedroom.jpeg"/>
          <img className="w-25 imgover" src="http://cdn.home-designing.com/wp-content/uploads/2015/05/huge-bedroom-design.png"/>
        
          <img className="w-25 imgover" src="https://dornob.com/wp-content/uploads/2009/07/Modern-Bedroom-Design-Ideas.jpg"/>
         
          </div>
          </div>
        </div>
      </div>
      <div className="container text-center fw-bold">
       <p className="pt-3"> Copyright © 2022. All Rights Reserved By REAL ESTATE NEPAL.</p>
      </div>
    </footer>
    
  );
}

export default Footer;
