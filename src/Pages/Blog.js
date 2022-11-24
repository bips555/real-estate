import React from "react";

function Blog() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center py-5">
        Interesting Insights From People
      </h2>
      <div className="row">
        <div className="col-lg-8 border pt-3 col-lg-6 col-12">
          <img
            className="w-100"
            src="https://cdn.tlcinteriors.com.au/wp-content/uploads/2019/10/master-bedroom-with-navy-quilt-cover-set-property-styling-melbourne.jpg"
          />

          <div className="admin d-flex pt-3 fw-bold fs-5">
            <p className="mx-5"> Written by Admin </p>
            <p className="mx-5"> 21 August, 2020</p>
            <p className="text-lg "> 32 Comments</p>
          </div>
          <h2 className="w-bold text-start py-5" f>
            How Can You Choose the Right Property
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Ecespiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quci velit modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div className="col-lg-4">
       
          <div className="cardc p-3 my-5">
          <h4 className="text-light text-center">Categories</h4>
        <ul className="list-group  shadow-lg  mb-5 bg-body rounded border-bottom">
  
  <li className="list-group-item p-3">Property</li>
  <li className="list-group-item p-3">Luxury House</li>
  <li className="list-group-item p-3">Real Estate</li>
  <li className="list-group-item p-3">Luxury Appartments </li>
  <li className="list-group-item p-3">Commercial House </li>
  <li className="list-group-item p-3">Residential House</li>
  





</ul>
</div>
<div className="cardc p-3">
          <h5 className="text-light text-center">Recent Posts</h5>
        <ul className="list-group  shadow-lg  mb-5 bg-body rounded border-bottom">
  
  <li className="list-group-item p-3">
    <div className="row"><div className="col-lg-4">
    <img className="w-100" src="https://cdn.tlcinteriors.com.au/wp-content/uploads/2019/10/master-bedroom-with-navy-quilt-cover-set-property-styling-melbourne.jpg"></img>
  </div>
  <div className="col-lg-8">
    <h5>How Can Choose the Right Property</h5>
    <p>June 11, 2022</p></div></div></li>
  <li className="list-group-item p-3">
  <div className="row"><div className="col-lg-4">
    <img className="w-100" src="https://cdn.tlcinteriors.com.au/wp-content/uploads/2019/10/master-bedroom-with-navy-quilt-cover-set-property-styling-melbourne.jpg"></img>
  </div>
  <div className="col-lg-8">
    <h5>Modern Luxury Living Room Design Ideas</h5>
    <p>March 11, 2022</p></div></div>
  </li>
  <li className="list-group-item p-3">
  <div className="row"><div className="col-lg-4">
    <img className="w-100" src="https://cdn.tlcinteriors.com.au/wp-content/uploads/2019/10/master-bedroom-with-navy-quilt-cover-set-property-styling-melbourne.jpg"></img>
  </div>
  <div className="col-lg-8">
    <h5>Luxury Property is Might Be First Choose?</h5>
    <p>August 11, 2022</p></div></div>
  </li>
  
  

  










</ul>
</div>

        </div>
      </div>
    </div>
  );
}

export default Blog;
