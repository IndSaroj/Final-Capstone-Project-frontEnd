import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import StepNavigation from "../StepNavigation/StepNavigation";
function ProgressBar() {
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
  return (
    <div>
    <div>
    <h5 className="card center text-center mt-5 mb-5" style={{ backgroundColor: "#086978", color: "#FFFFFF" }}>
    Check your Loan status</h5>
    </div>
    <div className="ProgressBar center text-center">
      <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
      {/* <p className="center">Selected Step: {currentStep}</p> */}
      <div className="col center">
      {/* <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Previous Step</button>
      <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Next Step</button> */}
    </div>
    </div>
    <div className='row'>
          <div className='col-md-4 offset-md-2 mt-2'>
            <table className='table table-warning'>
                <thead>
                    <tr>
                       
                        <th>Email</th>
                        {/* <th>Income</th>
                        <th>Vehichle Price</th>
                        <th>Loan Amount</th>
                        <th>Loan Duration</th>
                        <th>Age of Applicants</th>
                        <th>Employement Type</th>
                        <th>PAN No.</th> */}
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applicantarray.map(data =>
                        <tr key={data.email}>                        
                            <td>{data.email}</td>
                            {/* <td>{data.income}</td>
                            <td>{data.vehicleprice}</td>
                            <td>{data.loanamount}</td>
                            <td>{data.term}</td>
                            <td>{data.age}</td>
                            <td>{data.emptype}</td>
                            <td>{data.pan}</td> */}
                            <td>{data.status}</td>             
                            </tr>).filter((data)=>data.key===sessionStorage.getItem('currentuser'))
                    }
                </tbody>
            </table>
            {/* {user} */}
          </div>
          </div>
    </div>
  );
}
export default ProgressBar