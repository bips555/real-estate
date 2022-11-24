import React from "react";

function Header() {
  return (
    <>
      <header className="text-light d-none d-lg-block backg">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-3">
              <h3 >REAL ESTATE NEPAL</h3>
            </div>
            <div className="col-lg-7 d-flex gap-3 d-flex align-items-center justify-content-center">
              <p className="fw-bold fs-5 pt-3">Customer care:</p>
              <p className="fw-bold fs-5 text-danger pt-3">+981011354657</p>
              <li className="list-unstyled fs-4 text-white">
                <i class="bi bi-facebook"></i>
              </li>
              <li className="list-unstyled fs-4 text-white">
                <i class="bi bi-whatsapp"></i>
              </li>
            </div>
            <div className="col-lg-2 d-flex align-items-center justify-content-center">
              <ul className="list-unstyled d-flex gap-3 justify-content-end">
                <li className="pt-3 gap-3">
                  <i class="bi bi-person-fill"></i>   </li>
                  <li className="pt-3 gap-3">    LOGIN</li>
             
                <li className="pt-3">
                  <i class="bi bi-pc-display-horizontal"></i></li>
                  <li className="pt-3">   SIGN UP</li>
                
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
