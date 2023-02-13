import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Loan.css'

export default function Loan() {

  if (sessionStorage.getItem('mytoken')) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-4 ">
          <div className="card">
            <div className="card-body">
            <h5 className="card center text-center mb-2" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>Personal Loan </h5>
              <img src='./PersonalLoan.png' className="card-img-top" alt='Car loan'/>
              <h5 className="card-title">No Restriction On Fund Usage </h5>
              <p className="card-text">Personal Loan is an unsecured loan that caters to all your financial needs such as travel, home renovation, applying online courses, medical emergency or wedding. You can easily apply for Personal Loan, online up to Rs 50 lakh depending upon your eligibility without any collateral security. With our Personal Loan EMI calculator, you can also check the Personal Loan EMI that you are entitled to pay every month. Also, with our instant Personal Loan online services, you can get access to the funds within 3 seconds.</p>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Apply for Personal Loan</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <h5 className="card center text-center" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>Car Loan </h5>
            <img src='./CarLoan.png' className="card-img-top" alt='Car loan'/>
            <h5 className="card-title"> Experience our pocket friendly car loan</h5>
              <p className="card-text">With the advancement of latest technologies, life is changing faster and so do the car models. New facelift versions and new variants are launching quite frequently making it difficult to resist the temptation for upgrading to the car of latest technology.</p>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/carLoan">Book your dream car</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <h5 className="card center text-center mb-1" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>Home Loan </h5>
            <img src='./HomeLoan.png' className="card-img-top" alt='Car loan'/>
            <h5 className="card-title"> Your dream home is step away</h5>
            <h6><b>What is home Loan?</b></h6>
            <p>A home loan is essentially a financing option where funds are provided to an individual or an entity for the purchase, construction, extension, or renovation of a residential property.</p>
              <p className="card-text"> Our home Loan is a one-stop solution to own your dream home. Whether your goal is to purchase or build a new house, we offer a wide range of products to meet your requirements. We offer affordable Home Loans at attractive interest rates for a tenure of up to 30 years.Your Home Loan journey becomes simpler due to nil documentation required.</p>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Avail home loan now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-2'>
      <div className="row">
        <div className="col-sm-4 ">
          <div className="card">
            <div className="card-body">
            <h5 className="card center text-center mb-1" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>Education Loan </h5>
            <img src='./EdcationLoan.png' className="card-img-top" alt='Car loan'/>
              <h5 className="card-title">Your Education loan is just a click away</h5>
              <p className="card-text">Going abroad for higher studies? Or there’s a course that is domestic and expensive? Whatever be your reason for higher studies, it’s understood that higher education is often very expensive, with the rising cost of education. But that shouldn’t stop you!
              We understand about your career aspirations and offer the needed Student Loans, for successfully aiding your journey to higher education. Getting an Education Loan through us is an easy and simple process. We aim at providing financial support for aspiring students, for pursuing professional higher education in India and overseas. Spark your carier with our best education loan.</p>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Get Education Loan Now</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <h5 className="card center text-center mb-1" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>Gold Loan </h5>
            <img src='./GoldLoan.png' className="card-img-top" alt='Car loan'/>
            <h5 className="card-title">Gold Loan helps power your dream</h5>
            <p>A loan against your gold jewellery is known as Gold Loan or a Jewel Loan. Salient features of Gold Loan like ease of documentation and instant disbursal, make it an easy and convenient way of securing funds.</p>

              <p className="card-text">Gold Loan is a one-stop solution for all your financial needs. You can get a Loan against Gold for a variety of purposes, including business, personal, education, medical, agriculture and others. We offers attractive interest rates on Gold Loan and ensures complete safety of your jewellery. No need to worry about EMIs. Repay your loan easily at the end of the loan tenure.</p>
              <p>You can now walk-into any of our branch offering Gold loans with your jewellery and you can avail gold loan for any value from Rs. 50,000 to Rs. 1 crore instantly. With our simple and easy documentation process, the loan can be availed across the counter instantly.</p>
              
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Get Instant Gold Loan</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
            <h5 className="card center text-center mb-1" style={{ backgroundColor: "#42145F", color: "#FFFFFF" }}>Loan On Securities </h5>
            <img src='./SecuritiesLoan.png' className="card-img-top" alt='Car loan'/>
            <h5 className="card-title">Expand your business. Add to the celebrations.</h5>

              <p className="card-text">Whether you own a residential, commercial or special use property, it is an asset that can be used as collateral against a loan, when you have a financial requirement. Monetary problems pertaining to business expansion, child’s higher studies, wedding or medical emergency can strike anytime, but it can be settled conveniently, if you own a property. You can easily secure a loan by mortgaging your property by any individual or entity who owns a property in his/her name.</p>
              <p>Applying for a Loan Against Property involves a simple online application process for salaried employees, business professionals and self-employed individuals, who own residential, commercial, or a special purpose property in their name. Enjoy comfortable EMIs with a long tenure of up to 15 years and also avail an Overdraft with it.</p>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Avail Loan Against Secutities</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
return <Navigate to="/login" />
}

