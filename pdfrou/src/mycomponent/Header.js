import React from 'react'
import PropTypes from 'prop-types';


export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-center " id='companyy' ><h3>The Yoga Roots &#x2730;</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">More Info</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">contact us</a></li>
              <li><a className="dropdown-item" href="#">feedback</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
             
            </ul>
          </li>
        </ul>
        <h6>Hope are happy with our services &#x2730;</h6>
      </div>
    </div>
  </div>
</nav>
    
   /*<nav classNameName="navbar navbar-expand-lg bg-light" >
    <div classNameName="container-fluid">
      <a classNameName="navbar-brand" href="#">{props.title}</a>
      <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span classNameName="navbar-toggler-icon"></span>
      </button>
      <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
        <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
          
          
          <li classNameName="nav-item dropdown">
            <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul classNameName="dropdown-menu">
              <li><a classNameName="dropdown-item" href="#">Action</a></li>
              <li><a classNameName="dropdown-item" href="#">Another action</a></li>
              <li><hr classNameName="dropdown-divider"/></li>
              <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li classNameName="nav-item">
            <a classNameName="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form classNameName="d-flex" role="search">
          <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button classNameName="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    
  
  </nav>*/
   
  )
}
Header.propTypes={
  title:PropTypes.string,
}
Header.propTypes={
  
}
/*className Swimming extends React.Component{
  static PropTypes={
    jumping:PropTypes.bool,
    playerLaughing:PropTypes.func
  };
}*/