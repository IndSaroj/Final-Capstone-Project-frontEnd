import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header() {

    // const [currentUser, setCurrentUser] = useState('')
    // useEffect(() => {
    //   let user = sessionStorage.getItem('mytoken');
      
    //   setCurrentUser(user);
      
    // }, [])

    const navigate = useNavigate();
    function clearstorage() {
      sessionStorage.removeItem('mytoken');
      navigate("/Login");

      

    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-sm" style={{ backgroundColor: "#42145F" }} >
                <div className="container-fluid">
                    <h2><Link className="navbar-brand text-light" to="/">  </Link></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse margin space" id="navbarSupportedContent ">
                    <ul className="navbar-nav space me-auto mb-2 mb-lg-0">
                            <li className="nav-item hover-underline-animation" >
                                <Link className="nav-link nav-space active" style={{ color: "#FFFFFF" }} aria-current="page" to="/Personal">Personal</Link>
                            </li>
                            <li className="nav-item hover-underline-animation">
                                <Link className="nav-link nav-space active" style={{ color: "#FFFFFF" }} aria-current="page" to="/">Premier</Link>
                            </li>
                            <li className="nav-item hover-underline-animation">
                                <Link className="nav-link nav-space active" style={{ color: "#FFFFFF" }} aria-current="page" to="/">Business</Link>
                            </li>
                            <li className="nav-item hover-underline-animation">
                                <Link className="nav-link nav-space active" style={{ color: "#FFFFFF" }} aria-current="page" to="/">Corporate & Institution</Link>
                            </li>                           
                        </ul>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                        {!sessionStorage.getItem('mytoken') ?
                        <div>
                            {/* <Link className='hover-underline-animation nav-link nav-space active' style={{ color: "#FFFFFF" }} aria-current="page" to="/register"> Register</Link> */}
                            <Link className='hover-underline-animation nav-link nav-space active' style={{ color: "#FFFFFF" }} aria-current="page" to="/login"> Log in</Link>
                           
                            </div>                         

                            : null}
             {sessionStorage.getItem('mytoken') ?
            <div>
                <a className="btn btn-outline me-2" style={{backgroundColor: "#CC0066", color: "white"}} onClick={clearstorage} >Logout</a>
            </div>
            : null}
            
            </div>
                    </div>

                </div>
            </nav>
            <nav className="navbar navbar-expand-sm" style={{ backgroundColor: "white" }} >
                <div className="container-fluid">
                    <h2><Link className="navbar-brand text-light" to="/"> <img className='logo' src='./logo.png' alt='logo' /> </Link></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                           
                            <li className="nav-item dropdown hover-underline" >
                                <Link className="nav-link dropdown-toggle" style={{ color: "#086978" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="loan">Loan</Link></li>
                                    <li><Link className="dropdown-item" to="progressBar">Loan Status</Link></li>
                                    <li><Link className="dropdown-item" to="/">Overdraft</Link></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><Link className="dropdown-item" to="bankAccounts">Bank Accounts</Link></li>
                                </ul>
                            </li>
                           
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/" >Help and support</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/">You and Your money</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/dashboard">Banking with us</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/">Climate</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/">Contact US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
