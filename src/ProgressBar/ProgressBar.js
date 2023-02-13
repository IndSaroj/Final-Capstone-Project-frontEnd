import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import StepNavigation from "../StepNavigation/StepNavigation";
export default function ProgressBar() {
    const labelArray = ['Started', 'submitted', 'In Progress', 'Completed', 'Confirmed']
    const [currentStep, updateCurrentStep] = useState(1);
    function updateStep(step) {
        updateCurrentStep(step);
    }
    var token= sessionStorage.getItem("mytoken");
    var user= sessionStorage.getItem("currentuser");

    const [applicantarray, setApplicantarray] = useState ([]);
    const [error, setErr] = useState()
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/applicant/loanapplication`, {
            headers: {
                'Authorization':`Bearer ${token}`
              }})
        .then(result  => {
            console.log(result);
            setApplicantarray(result.data)})
        .catch(error => setErr(error.message))
    },[])

    if (sessionStorage.getItem('mytoken')) {
  return (
    <div>
         
          <div className="card center" style={{ width: "50rem" }} >
              <div>
              <h5 className="card centertxt mt-2 text-center rounded" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}> Loan Status </h5>
                  <h6 className="card centertxt mt-2 center rounded" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }} >
                      {
                          applicantarray.map(data =>
                              <tr key={data.email}>
                                  <td className="row center">Hi {data.email} !!</td>
                                  <td className="row center">Your loan application status is {data.status}</td>
                              </tr>).filter((data) => data.key === sessionStorage.getItem('currentuser'))
                      }
                  </h6>
              </div>
              <img className='mt-2 centerimg' src='./approved.png' height='300' width='900' alt='Car loan' />
          </div>
      </div>
    
  );
}
return <Navigate to="/login" />
      }
      


      


