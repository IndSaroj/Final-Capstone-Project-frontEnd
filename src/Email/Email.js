import React from 'react'
import emailjs from 'emailjs-com'
// import { useNavigate } from 'react-router-dom';
export default function Email() {
    // const nav = useNavigate();
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_60h5lop', 'template_8d2tyoh', e.target,'haHFdx_cN8fyzNurd').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }
//   function admin(){
//     alert("Email sent")
//     nav('/admin')
//   }
  return (
    <div className='container border'
    style={{marginTop:"50px",
    width: "50%",
    backgroundImage:`url('https://www.pptgrounds.com/wp-content/uploads/2013/03/Green-Design-Tree-Backgrounds-800x600.jpg')`,
    backgroundPosition: "center",
    backgroundSize:"cover",
    }}>
    <h1 style={{marginTop:'25px', textAlign:"center"}}>Email Form</h1>
    <form className='row' style={{margin:"25px 85px 75px 100px" }} onSubmit={sendEmail}>
      <label>Name</label>
      <input type='text' name='NatWest' className='form-control'/>
      <label>Email</label>
      <input type='email' name='user_email' className='form-control' />
      <label>Message</label>
      <textarea name='message' rows='4' className='form-control'/>
      <input type='submit'  value='send' className='form-control btn btn-primary'
        style={{marginTop:"30px"}} 
      
      />

    </form>
    </div>
  )
}




