import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

import Footer from './Footer/Footer'
import Personal from './Personal/Personal';
import Loan from './Loan/Loan';
import Login from './Login/Login';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import { Suspense } from 'react';
import ZeroPercentLoan from './ZeroPercentLoan/ZeroPercentLoan';
import Faq from './Faq/Faq';
import LoanApplication from './LoanApplication/LoanApplication';
import CarLoan from './CarLoan/CarLoan'
import IntrestFreeLoan from './IntrestFreeLoan/IntrestFreeLoan';
import Admin from './Admin/Admin';
import UploadFile from './UploadFile/UploadFile';
import ForgotPassword from './Login/ForgotPassword';
import ProgressBar from './ProgressBar/ProgressBar';
import Step from './Step/Step';
import StepNavigation from './StepNavigation/StepNavigation';
import Email from './Email/Email';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div><h2> Page is loading ... </h2></div>}>
          <Header />

          <Routes>
          <Route path='/' element= {<Personal /> } />
               <Route path='/loan' element= {<Loan /> } />
               <Route path='/login' element= {<Login /> } />
               <Route path='/forgotPassword' element= { <ForgotPassword /> } />
               <Route path='/register' element= {<Register /> } />
               <Route path='/dashboard' element = {<Dashboard /> } />
               <Route path='/personal' element= {<Personal /> } />
               <Route path='/zeropercentloan' element= { <ZeroPercentLoan /> } />
               <Route path='/faq' element={ <Faq /> } />
               <Route path='/loanApplication' element= { <LoanApplication /> } />
               <Route path='/carloan' element= { <CarLoan /> } />
               <Route path='/intrestFreeLoan' element= { <IntrestFreeLoan /> } />
               <Route path='/admin' element= { <Admin /> } />
               <Route path='/uploadFile' element= { <UploadFile /> } />
               <Route path='/progressBar' element={<ProgressBar />} />
               <Route path='/step' element={<Step />} />
               <Route path='/stepNavigation' element={<StepNavigation />} />             
               <Route path='/email' element={<Email />} />
               <Route path='*' element={<PageNotFound />} />
          </Routes>

          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;