import { IconButton, Snackbar } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function UploadFile() {
        const nav = useNavigate();
        const [file, setFile] = useState()
        const [err, setErr] = useState()
        const [open, setOpen] = useState(false);
    const handleclose = () => {
        setOpen(false)
        nav('/dashboard')
        return;
    }
    const action = (
        <React.Fragment>
            <IconButton size='small' color='success' onClick={handleclose}>
                <CloseIcon></CloseIcon>
            </IconButton>
        </React.Fragment>
    )
        function handleChange(event) {
          setFile(event.target.files[0])
        }
    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:8088/files/upload';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        formData.append('username', sessionStorage.getItem('mytoken'));
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        axios.post(url, formData, config).then((response) => {
          console.log(response.data);
          setOpen(true);
        });
      }
  return (
        <div>
            <h5 className="card center text-center" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>
                Complete your Application process by uploading the documents</h5>
            <p className='m-5' style={{ color: "#086978" }}><b><h5> Documents required:</h5> </b>
                <ul className='m-3'>
                    
                    <li>Three months salary slip <b>(for salaried person)</b></li>
                    <li>Three months bank statement<b>(for self-employed)</b></li>
                </ul>
            </p>
            <p className='m-5' style={{ color: "#086978" }}><b><h5>Checklist for uploading documents:</h5> </b>
                <ul className='m-3'>
                    <li>Your <b>full name </b> must appear on all uploaded documents.</li>
                    <li>Ensure that all information on the document is <b>readable</b>.</li>
                    <li>If a document is in a language other than <b>English,</b> a certified English translation must also be included.</li>
                    <li><b>Do not upload all your supporting documents as one file. </b> Create one PDF for each type of document you are required to upload.</li>
                    <li><b>Multipage documents should be saved as a single PDF document. </b> Please ensure that all pages of the document are in the correct order.</li>
                    <li>Your PDF document must not be <b>password protected.</b></li>
                    <li> File size should not be <b>less than 2kb </b> and <b>more than 200MB.</b></li>
                    <li>Your PDF document must not be <b>password protected.</b></li>
                </ul>
            </p>
            <form className='center'>
            </form>
            <div className="mb-2 center">
                <label for="formFileSm" className="card center text-center" style={{ backgroundColor: "#EA7613", color: "#FFFFFF" }}>Upload your documents</label>
                <input className="form-control form-control-sm mt-4" id="formFileSm" type="file" onChange={handleChange} />
            </div>
            <div className='mt-2 center'>
                <button type="button" className="btn" style={{ backgroundColor: "#086978", color: "#FFFFFF" }} onClick={handleSubmit}>Submit</button>
            </div>
            <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleclose}
                    message="Upload Successful, you can check the application progress under Loan Status"
                    action={action}
                    anchorOrigin={{
                        vertical:'top',
                        horizontal: 'center',
                    }}
                />
        </div>
    )
}