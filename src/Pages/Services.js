import React from 'react'

import Hserivces from '../Data/Hservices'
function Services() {
  return (
    <>
    <div className='container py-5'>
      <div className='row'>
        <h1 className='fw-bold text-center'>ALL of our services</h1>
        {Hserivces.map((a)=>(
    <div className='col-lg-4 col-md-6 d-flex justify-content-center align-items-center'>
      <div className="card scales border-0 shadow-lg p-3 mb-5 bg-body rounded my-3  bg-white " style={{width: '18rem',}}>
        <div className='hove'>
      <img className='py-3 w-25 card-img-top rounded mx-auto d-block ' src={a.img} alt="..."/>
     
      <div className="card-body textg text-center text-center ">
        <h3 className="card-title">{a.heading}</h3>
        <p className="card-text">{a.title}</p>
      <a href='#details'>  <div className=' rm p-2 mx-auto'>Read More</div></a>
        </div>
      </div>
    </div>
    
    </div>
  ))}
  <div className='col-lg-12'>
  <h2 className='fw-bold text-center py-5'>Services Details</h2>
  
  <table>
	<thead>
	<tr>
		<th>Services</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr id='details'>
		<td className='v'>Customized Duplex Layout</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
	
	</tr>
	<tr>
		<td className='v'>High-Level Security</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
		
	</tr>
  <tr>
		<td className='v'>Royal Touch Paint</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
		
	</tr>
  <tr>
		<td className='v'>Large Space Around</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
		
	</tr>
  <tr>
		<td className='v'> Good Neighbourhood
</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
		
	</tr>
  <tr>
		<td className='v'>Best Quality</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
		
	</tr>
  <tr>
		<td className='v'>Financial Recovery</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
		
	</tr>
  <tr>
		<td className='v'>Property Management</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
		
	</tr>
  <tr>
		<td className='v'>Renovation House</td>
		<td>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
		
	</tr>

	</tbody>
</table>
  </div>
      </div>
    </div>
    </>
  )
}

export default Services