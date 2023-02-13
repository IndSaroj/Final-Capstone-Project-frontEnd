import React from 'react'
import { Link } from 'react-router-dom'
import './CarLoan.css'

export default function Loan() {
  return (
    <div>
    

      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
          <h5 className="card center text-center mb-2 mt-2" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>0%  car loan for first year </h5>
          <img src='./loan_car2' className="card-img-top" alt='Car loan'/>
            <div className="card-body">
              <h5 className="card-title">Get your dream car at 0% for first year </h5>
              <p className="card-text">Get your car loan approved digitally to purchase vehicle of your choice. Easy Loan at Attractive Interest Rates with zero percent intrest for the first year, minimum documentation is required & no hidden or prepayment Charges. Quick Approval in 3 steps. <p><b>Step 1 -</b> Login</p> <p><b>Step 2 -</b> Select your loan preference</p> <p><b>Step 3 -</b> Submit the loan application</p></p>
              
                  <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/zeropercentloan">Avail Car Loan at 0% intrest rate</Link>
                
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
          <h5 className="card center text-center mb-2 mt-2" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>Car Loan at Free Intrest Rate </h5>
          <img src='./Car_loan1.png' className="card-img-top" alt='Car'/>
            <div className="card-body">
              <h5 className="card-title">You can afford your dream car <b>key</b> at free intrest rate .</h5>
              <p className="card-text">Why worried? You need a car with intrest free loan? We came up with a solution where you can avail car loan upto 30% of total valuation of your car by just paying minimum one time as a loan fees. Minimum documentation Instant approval in 30 minutes. Please follow the steps. <p className='mt-2'><b>Step 1 -</b> Login</p> <p><b>Step 2 -</b> Select your loan preference</p> <p><b>Step 3 -</b> Submit the loan application</p></p>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/intrestFreeLoan">Avail Car Loan at free intrest rate</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
