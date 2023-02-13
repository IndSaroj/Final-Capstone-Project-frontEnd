import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='roww'>
    <div className="container">
    <footer className="py-5 mt-10">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h4>Products</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 hover-underline-animation" ><Link to='./' className="nav-link p-0" style={{ color: "#FFFFFF" }} >Bank Accounts</Link></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Investments</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Buy Now Pay Later</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Mortgages</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Insurance</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h4>Life Moments</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>View all Life Moments</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Managing Your Money</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Struggling Finacially</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Financial Health Check</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Bereavement</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h4>Help and Support</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Support</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Security</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Climate Change Hub</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Learning with Natwest</a></li>
            <li className="nav-item mb-2 hover-underline-animation"><a href="#" className="nav-link p-0 " style={{ color: "#FFFFFF" }}>Detecting and Preventing Financial Crime</a></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h4>Subscribe to our newsletter</h4>
            <h6>Monthly digest of what's new and exciting from us.</h6>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <h6>&copy; Copyright © National Westminster Bank plc 2022.</h6>
      </div>
    </footer>
  </div>
    </div>
  )
}