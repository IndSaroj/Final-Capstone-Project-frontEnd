import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './IntrestFreeLoan.css'

export default function IntrestFreeLoan() {

    


        return (
          <div>
      
                <div className="card center" style= {{width: "50rem"}} >
                    <h5 className="card centertxt mt-2 text-center rounded" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}> Service is our, Courage is yours. Pay the intrest in your intrest </h5>
                    <h6 className="card centertxt mt-2 text-center rounded" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }} >Avail our newly launch scheme - Intrest Free Loan</h6>
                    
                    <img className='mt-2 centerimg' src='./ZeroPercent.png'   height='300' width='900' alt='Car loan'/>
                    
                </div>
                 
      
                <div className='col d-flex '> 
                
                    <h5 className="card-title center">Documents required for intrest free loan (For salaried/self-employed)</h5>
                   </div>
      
                <div className='center'>
                    <h5>Please keep below documents handy !</h5>
                    <ul className='list'>
                        <li>Pan Card</li>
                        <li>Three months salary slip(for salaried)</li>
                        <li>Three months bank statement(for self-employed)</li>
                    </ul>
                </div>
      
                <div className='center'>
                    <h5>Please check the below eligibility before applying</h5>
                    <ul className='list'>
                        <li>Age - you must not be less than 21 and more than 65</li>
                        <li>Income for Salaried person should be more than 2.5 LPA</li>
                        <li>Income for Self-Employed should be more than 2 LPA. </li>
      
                    </ul>
                </div>
      
                <div className='text center'>
                    <p>For any queries please refer <Link className="" style={{ color: "#B10103" }} aria-current="page" 
                    to="/faq">FAQ's</Link></p> 
                    
                </div>
                <div className='text center'>
                
                        <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/loanApplication">Proceed</Link>
                      
                </div>
      
          </div>
        )
      }
     