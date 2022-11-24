import React from 'react'

function Contact() {
  return (
    <>
<div className='backg my-3 text-center'>
  <h3 className='py-5 fs-1 text-white'>Get in Touch</h3>
  <form className="row g-5 py-5 container mx-auto">
  <div className="col-md-6 ">
    
    <input type="name" class="form-control" id="inputEmail4" placeholder='Enter Full Name*'/>
  </div>
  <div className="col-md-6 ">
    
    <input type="email" class="form-control" id="inputPassword4" placeholder='Email Address'/>
  </div>
  <div className="col-md-6">
    
    <input type="subject" class="form-control" id="inputEmail4" placeholder='Subject'/>
  </div>
  <div className="col-md-6 ">
   
    <input type="phone_no" class="form-control" id="inputPassword4" placeholder='Phone Number'/>
  </div>
  
  <div className="col-md-12 mx-auto">
   
  <div class="mb-3 col-lg-6">
  
  <textarea class="form-control " id="exampleFormControlTextarea1" rows="4" placeholder='Your Messages... '></textarea>
</div>
<div class="d-grid gap-3 my-5 ">
  
  <button class="btn btn-primary" type="button">Send Message</button>
</div>
   
  </div>
  
</form>
</div>
</>
  )
}

export default Contact