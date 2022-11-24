import React from 'react'
import Hslider2 from '../Data/Hslider2'
import Hslider from '../Data/Hslider'

function Properties() {
  return (
   <div className='container py-5'>
    <div className='row'>
      <h2 className='text-center'>Houses</h2>
      {Hslider2.map((x) => (
     
            <div className='col-lg-3 col-md-6 col-12'>
     <div id='buy' className="card  gove mx-auto   rounded-start my-5  border-0 shadow-lg p-3 mb-5 hey align-items-center justify-content-center" style={{width: '18rem'}}>
   <img src={x.img} className="card-img-top" alt="..." />
   <div className="card-body text-center">
  
 <h5>{x.b}</h5>
 <h3>{x.e}</h3>
 <ul className='list-unstyled d-flex gap-2'>
 {x.f}
 </ul>
 <div className="price">{x.g}</div>
 <button  className='fs-10 mx-3 my-3 buy border-4 p-2'>Buy Now</button>
 </div>
    
   </div>
 
   </div>
     
        ))}
    </div>
    <div className='row'>
      <h2 className='text-center'>Apartments</h2>
      {Hslider.slice(0,4).map((d) => (
     <div className='col-lg-3  col-md-6 col-12'>
            
    <div id='buy' className="card  gove   rounded-start my-5  border-0 shadow-lg p-3 mb-5 hey mx-auto align-items-center justify-content-center" style={{width: '18rem'}}>
  <img src={d.img} className="card-img-top" alt="..." />
  <div className="card-body text-center">
 
<h5>{d.b}</h5>
<h3>{d.e}</h3>
<ul className='list-unstyled d-flex gap-2'>
{d.f}
</ul>
<div className="price">{d.g}</div>
<button  className='fs-10 mx-3 my-3 buy border-4 p-2'>Buy Now</button>
</div>
   
  </div>
</div>

    
       ))}
    </div>
   </div>
  )
}

export default Properties