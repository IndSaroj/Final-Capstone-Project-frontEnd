import { Button, IconButton, Snackbar, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup)

export default function Register() {

    const nav = useNavigate();
    const [err, setErr] = useState('');
    const [open, setOpen] = useState(false);
    const handleclose = () => {
        setOpen(false)
        nav('/login')
        return;
    }
    const action = (
        <React.Fragment>
            <IconButton size='small' color='inherit' onClick={handleclose}>
                <CloseIcon></CloseIcon>
            </IconButton>
        </React.Fragment>
    )

    const formik = useFormik({
        initialValues: {
            username: '',
            name: '',
            address: '',
            acnumber: '',
            phoneno: '',
            password: '',
            confirmpassword: '',

        },

        onSubmit: values => {
            axios.post('http://localhost:8080/api/user/register',values)
                .then(res => {
                   setOpen(true)
                })
                .catch(error => setErr(error.message))
        },

        validationSchema: yup.object().shape({
            username: yup.string().email('Check your email format...ex: xyz@abc.com')
                .required('Email cannot be blank')
            ,
            name: yup.string().min(3, 'First name cannot be less than three character!')
                .max(50, 'Too Long!')
                .required('First name cannot be blank')
            ,
            address: yup.string().required('Address cannot be blank')
            ,
            acnumber: yup.string().matches(/^[1-9]\d{10}$/, { message: "Please enter valid number.", excludeEmptyString: false })
                .required('A/C no cannot be blank')
            ,
            phoneno: yup.string().matches(/^[6-9]\d{9}$/, { message: "Please enter valid number.", excludeEmptyString: false })
                .required('Mobile no cannot be blank')
            ,
            password: yup.string().min(8, 'password should be minimum 8 character')
                .minLowercase(1, 'Must have one lower case')
                .minUppercase(1, 'Must have one upper case')
                .minSymbols(1, 'Must have one special character')
                .required('Password cannot be blank'),
            confirmpassword: yup.string().test('password-match','Passwords must match',
                      function pass(value) { return this.parent.password === value}),
        })
    })

    return (
        <div className='container mt-5 align-item-center col-4 shadow p-3 mb-5 bg-body' >
            <div className=" align-item-center ">
                <div className="text-light mt-2 py-2 rounded text-center" style={{ backgroundColor: "#42145F" }}>
                    <h2>Register</h2>

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
                                formik.errors.username && formik.touched.username ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='username' id="username" error
                                        label="username*"
                                        helperText={formik.errors.username} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='username' id="username" label="Enter your E-mail*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='username' />
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.name && formik.touched.name ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='name' id="name" error
                                        label="Name*"
                                        helperText={formik.errors.name} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='name' id="name" label="Enter your name*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='name' />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.address && formik.touched.address ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='address' id="address" error
                                        label="Address*"
                                        helperText={formik.errors.address} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='address' id="address" label="Enter your address*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='address'/>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.acnumber && formik.touched.acnumber ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='acnumber' id="acnumber" error
                                        label="acnumber*"
                                        helperText={formik.errors.acnumber} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='acnumber' id="acnumber" label="Enter your A/c No*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='number' />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.phoneno && formik.touched.phoneno ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='phoneno' id="phoneno" error
                                        label="phoneno*"
                                        helperText={formik.errors.phoneno} fullWidth sx={{ width: '48ch' }} />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='phoneno' id="phoneno" label="Enter your Mobile no*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='number'/>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.password && formik.touched.password ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='password' id="password" error
                                        label="Password*"
                                        helperText={formik.errors.password} fullWidth sx={{ width: '48ch' }}  />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' id="password" label="Enter your Password*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='password' />
                            }
                        </div>
                        <div className="row">
                        <div className="col text-center mb-2">
                            {
                                formik.errors.confirmpassword && formik.touched.confirmpassword ?
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        name='confirmpassword' id="confirmpassword" error
                                        label="confirmpassword*"
                                        helperText={formik.errors.confirmpassword} fullWidth sx={{ width: '48ch' }}  />
                                    : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='confirmpassword' id="confirmpassword" label="confirmpassword*" variant="outlined"
                                        fullWidth sx={{ width: '48ch' }} type='confirmpassword' />
                            }
                        </div>
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
                    autoHideDuration={1000}
                    onClose={handleclose}
                    message="Registered Successfully"
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
