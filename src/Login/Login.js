import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, IconButton, Snackbar, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import axios from 'axios';
import * as yup from 'yup'

export default function Login() {


    const nav = useNavigate();
    const [err, setErr] = useState('')
    const [open, setOpen] = useState(false);
    const handleclose = () => {
        setOpen(false)
        nav('/Dashboard')
        
        
        return;
       
    }
    function mov(){
        nav('/ForgotPassword');
    }
    
    const action = (
        <React.Fragment>
            <IconButton size='small' color='success' onClick={handleclose}>
                <CloseIcon></CloseIcon>
            </IconButton>
        </React.Fragment>
    )



    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {

            axios.post(`http://localhost:8080/login`,values)
               .then(res => {
                console.log(res);
                // sessionStorage.setItem('mytoken', values.username);
                sessionStorage.setItem('mytoken',res.data.token);
                sessionStorage.setItem('currentuser',res.data.currentuser);

                if(values.username === 'admin@natwest.com'){                   
                    nav('/admin')

                } else {
                    setOpen(true)
                }
          
               })
         
                .catch(error => setErr(error.message))
                     
                
        },

        validationSchema: yup.object().shape({
            username: yup.string().email('Enter the valid Email Id').required('The field cannot be left empty'),
            password: yup.string().required('Password cannot be left blank')
        })


    })

    return (
        <div className='container mt-5 align-item-center col-4 shadow p-3 mb-5 bg-body'>
            <div className='align-item-center' >
                
                    <div className="text-light mt-2 py-1 rounded text-center" style={{ backgroundColor: "#42145F" }}>
                        <h2>Login</h2>
                        </div>
                        <div className='container mt-2 align-item-cente shadow p-1 mb-2 rounded text-center'>
                        {
                            err !== '' ? <span className="text-center alert alert-danger">{err}</span> : <span></span>
                        }

                        </div>
               
                <form onSubmit={formik.handleSubmit} className='mt-2'>
                    <div className="row">
                        <div className="col text-center mt-2 mb-2">
                            {
                                formik.errors.username && formik.touched.username ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='username' id="username" error
                                        label="username*"
                                        helperText={formik.errors.username} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='username' id="username" label="Enter your E-mail*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='username'/>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mt-2 mb-2">
                            {
                                formik.errors.password && formik.touched.password ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='password' id="password" error
                                        label="Password*"
                                        helperText={formik.errors.password} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' id="password" label="Enter your Password*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='password' />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className='className="col text-center mb-2 ' >
                            <Button type='submit' variant="contained" style={{ backgroundColor: "#086978" }} > Continue</Button>
                        
                        
                            <Button type='submit' className="m-2" variant="contained" style={{ backgroundColor: "#086978" }} onClick={mov}> Forgot Password</Button>
                        </div>
                        <div>  <Link className='hover-underline-animation nav-link nav-space active' 
                        style={{ color: "#FFFFFF" }} aria-current="page" to="/register"><h5 className='py-1 rounded text-center' style={{ backgroundColor: "#42145F" }}>SignUp Here !!</h5> </Link></div>
                    </div>


                </form>
                
                <Snackbar
                    open={open}
                    autoHideDuration={1000}
                    onClose={handleclose}
                    message="Login Successfull"

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
