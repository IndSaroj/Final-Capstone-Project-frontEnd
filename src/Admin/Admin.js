import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { object } from 'yup';
export default function Admin() {

    var token= sessionStorage.getItem("mytoken");
    var user= sessionStorage.getItem("currentuser");
    
    const nav = useNavigate();
    const [applicantarray, setApplicantarray] = useState ([]);
    const [err, setErr] = useState ('')
    useEffect(()=>{
       axios.get(`http://localhost:8080/api/applicant/loanapplication`, {
            headers: {
                'Authorization':`Bearer ${token}`
              }})
    
        .then(result  => setApplicantarray(result.data))
        
        
        .catch(error => setErr(error.message))
    },[])

    function approveLoan(email) {

        const obj = {'status':'approved','email':email}
       
    axios.put(`http://localhost:8080/api/applicant/updateApplication/${email}`, obj,{
        headers:{
        'Authorization':`Bearer ${token}`,
        'content-Type': 'application/json'}
 
    }).then(res => {

        
        console.log(res);

        nav('/Email')
    })}

   
    function rejectLoan(email){

        const obj = {'status':'rejected','email':email}

        axios.put(`http://localhost:8080/api/applicant/updateApplication/${email}`, obj,{
        headers:{
        'Authorization':`Bearer ${token}`,
        'content-Type': 'application/json'}
 
    }).then(res => {
        
        console.log(res);

        nav('/Email')
    })}

   

 
    return (
        <div>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <div className='mt-2 text-center text-light rounded p-2' style={{ backgroundColor: "#086978" }}>
                        <h2> Loan Applicantions List</h2>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 offset-md-2 mt-2'>
                    <table className='table table-warning table-hover '>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Income</th>
                                <th>Vehichle Price</th>
                                <th>Loan Amount</th>
                                <th>Loan Duration</th>
                                <th>Age of Applicants</th>
                                <th>Employement Type</th>
                                <th>PAN No.</th>
                                <th>Status </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applicantarray.map(data =>
                                    <tr key={data.id}>

                                        <td>{data.email}</td>
                                        <td>{data.income}</td>
                                        <td>{data.vehicleprice}</td>
                                        <td>{data.loanamount}</td>
                                        <td>{data.term}</td>
                                        <td>{data.age}</td>
                                        <td>{data.emptype}</td>
                                        <td>{data.pan}</td>

                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                            <li className="nav-item dropdown hover-underline" >
                                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Select
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item" onClick={approveLoan.bind(this, data.email)}>Approve</li>
                                                    <li className="dropdown-item" onClick={rejectLoan.bind(this,data.email,)}>Reject</li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}
