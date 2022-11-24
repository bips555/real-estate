import React from 'react'
import Hserivces from '../Data/Hservices'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import { Link } from 'react-router-dom';
import Hslider from '../Data/Hslider';
function Home() {
  return (
   <>
   <div className='container py-5'>
    <div className='row align-items-center'>
    <div className='col-lg-4 text-center py-5'>
   <p className='welcome fs-4'> WELCOME</p>
<h1 className=' py-5 fw-bolder'>Find Your Lost Belongings Here..</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur error ducimus eos iste sit amet?.</p>
<div className='.box1 text-center py-4'>
 <a href='#buy' className='text-decoration-none'> <span className='fs-10 mx-3 buy border-4 p-2'>Buy Now </span></a>
  <span className='fs-10 rent p-2'>Rent Now </span>
</div>
    </div>
    <div className='col-lg-8'>
      <img className='w-100' src='https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?w=2000' style={{maxWidth:'100%'}}/>
    </div>
    </div>
   </div>
   <div className='container mx-auto py-5'>
    <h1 className="fw-bold text-center py-5 ">Some Of Our Features</h1>
<div className='row'>
  {Hserivces.slice(0,3).map((a)=>(
    <div className='col-lg-4 col-md-6 d-flex justify-content-center align-items-center'>
      <div className="card scales border-0 shadow-lg p-3 mb-5 bg-body rounded my-3  bg-white " style={{width: '18rem',}}>
        <div className='hove'>
      <img className='py-3 w-25 card-img-top rounded mx-auto d-block ' src={a.img} alt="..."/>
     
      <div className="card-body textg text-center">
        <h3 className="card-title">{a.heading}</h3>
        <p className="card-text">{a.title}</p>
        </div>
      </div>
    </div>
    
    </div>
  ))}
  <Link to='/services' className='text-decoration-none text-center fs-3 text-primary'>SEE OUR FULL SERVICES</Link>
</div>

<div className='row'>
<h1 className="fw-bold text-center py-5 ">Luxury apartments for you</h1>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{    
        400: {
          width: 400,
          slidesPerView: 1,
        },
        640: {
          width: 640,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      
    >
       {Hslider.map((d) => (
      <SwiperSlide>
            
    <div id='buy' className="card   align-items-center justify-content-center  rounded-start my-5  border-0 shadow-lg p-3 mb-5 hey" style={{width: '18rem'}}>
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


      </SwiperSlide>
       ))}
     
    </Swiper>
</div>
</div>
<div className='mx-auto py-5'>
<h2 className='fw-bold text-center py-5'>SEARCH OUR AGENTS</h2>
<div className='row d-flex gap-5 backgg text-dark py-5 col-lg-12 col-md-12 col-12 px-5 justfiy-content-center'>

<div className='form-check'>
<div className="mb-3 form-check ">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">Real Estate Agents</label>
 
</div>
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">Loan Agents</label>
 
</div>
<div className='row gap-5 '>
<div className='col-lg-2 col-md-6 col-12'><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/></div>
<div className='col-lg-2 col-md-6 col-12'><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"/></div>
<div className="dropdown col-lg-2 col-md-6 col-12">
  <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    license state
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">1</a></li>
    <li><a className="dropdown-item" href="#">2</a></li>
    <li><a className="dropdown-item" href="#">3</a></li>
  </ul>
</div>
<div className='col-lg-12'>
<button className="btn btn-outline-light text-dark text-lg-start" style={{width: '400px',}} type="submit" >Search for your agents</button>
</div>

</div>
</div>
</div>



</div>


   </>
  )
}
export default Home