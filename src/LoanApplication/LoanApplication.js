import { Button, IconButton, Snackbar, TextField} from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import CloseIcon from '@mui/icons-material/Close'

export default function LoanApplication() {

    const nav = useNavigate();
    const [err, setErr] = useState('');
    const [open, setOpen] = useState(false);
    const handleclose = () => {
        setOpen(false)
        nav('/uploadFile')
        return;
    }
    const action = (
        <React.Fragment>
            <IconButton size='small' color='inherit' onClick={handleclose}>
                <CloseIcon></CloseIcon>
            </IconButton>
        </React.Fragment>
    )

    var user=sessionStorage.getItem("username");
    var token= sessionStorage.getItem("mytoken");

  

    const formik = useFormik({
        initialValues: {
            
            email:'',
            income:'',
            vehicleprice:'',
            loanamount:'',
            term:'',
            age:'',
            emptype:'',
            pan:'',
            


        },
        
        onSubmit: values => {
            axios.post('http://localhost:8080/api/applicant/application', values,{
            headers: {
                'Authorization':`Bearer ${token}`
              }})
                .then(res => {
                    setOpen(true)
                    console.log(res);
                   
                })
                .catch(error => setErr(error.message))
        },

        validationSchema: yup.object().shape({
            email: yup.string().email('Check your email format...ex: xyz@abc.com')
                .required('Email cannot be blank')
            ,
            income: yup.string().required('Enter your annual income')
            ,
            loanamount: yup.string().required('Enter the loan amount')
            ,
            term: yup.string().required('Enter the term/duration of loan')
            ,
            age: yup.number().min(21, 'Sorry!! minimum age required is 21')
            .required('Enter your age as of today')
            ,
            emptype: yup.string().required('Enter your employment type')
            ,
            pan: yup.string().matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, { message: "Please enter valid PAN number.", excludeEmptyString: false })
            .required('Enter your valid PAN number'),


        })
    })


  return (

<div className='container mt-5 align-item-center col-4 shadow p-3 mb-5 bg-body' >
            <div className=" align-item-center ">
                <div className="text-light mt-2 py-2 rounded text-center" style={{ backgroundColor: "#42145F" }}>
                    <h2>Loan Application</h2>

                </div>
                <div className='container mt-2 align-item-cente shadow p-1 mb-2 rounded text-center'>
                    {
                        err !== '' ? <span className="text-center alert alert-danger">{err}</span> : <span></span>
                    }
                    </div>

                <form onSubmit={formik.handleSubmit} className='mt-2'>

                    <div className="row">
                        <div className="col text-center mb-2 mt-2">
                            {
                                formik.errors.email && formik.touched.email ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='email' id="email" error
                                        label="E-mail*"
                                        helperText={formik.errors.email} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' id="email" label="Enter your E-mail*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='email' />
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.income && formik.touched.income ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='income' id="income" error
                                        label="income*"
                                        helperText={formik.errors.income} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='income' id="income" label="Enter your annual income*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='income' />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.vehicleprice && formik.touched.vehicleprice ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='vehicleprice' id="vehicleprice" error
                                        label="vehicleprice*"
                                        helperText={formik.errors.vehicleprice} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='vehicleprice' id="vehicleprice" label="Enter your car x-showroom price*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='vehicleprice'/>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.loanamount && formik.touched.loanamount ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='loanamount' id="loanamount" error
                                        label="loanamount*"
                                        helperText={formik.errors.loanamount} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='loanamount' id="loanamount" label="Enter your loan amount*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='number' />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.term && formik.touched.term ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='term' id="term" error
                                        label="term*"
                                        helperText={formik.errors.term} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='term' id="term" label="Enter loan term/duration(No of years)*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='term'/>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.age && formik.touched.age ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='age' id="age" error
                                        label="age*"
                                        helperText={formik.errors.age} fullWidth sx={{ width: '48ch' }}  />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='age' id="age" label="Enter your age as of today*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='age' />
                            }
                        </div>
                        </div>
                        
                        <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.emptype && formik.touched.emptype ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='emptype' id="emptype" error
                                        label="emptype*"
                                        helperText={formik.errors.emptype} fullWidth sx={{ width: '48ch' }}  />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='emptype' id="emptype" label="Salried/Self-Employed*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='emptype' />
                            }
                        </div>
                        </div>
                        <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.pan && formik.touched.pan ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='pan' id="pan" error
                                        label="pan*"
                                        helperText={formik.errors.pan} fullWidth sx={{ width: '48ch' }}  />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='pan' id="pan" label="Enter your pan number*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='pan' />
                            }
                        </div>
                        </div>
                    
                    
                    <div className="row">
                        <div className='className="col text-center mb-2' >
                            <Button type='submit' variant="contained" style={{ backgroundColor: "#086978" }}>Submit</Button>
                        </div>
                    </div>

                </form>

                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleclose}
                    message="Application submitted successfully, please upload the required dcouments"
                    action={action}
                    anchorOrigin={{
                        vertical:'top',
                        horizontal: 'center',
                    }}
                />

       </div>
    </div>
  )
}
