import React from 'react'
import { Link, Navigate } from 'react-router-dom'
export default function Dashboard() {



  if (sessionStorage.getItem('mytoken')) {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Carosel1.png" className="d-block w-100" alt="Carosel" />
          </div>
          <div className="carousel-item">
            <img src="/Carosel3.png" className="d-block w-100" alt="Carosel" />
          </div>
          <div className="carousel-item">
            <img src="/Carosel4.png" className="d-block w-100" alt="Carosel" />
          </div>
          <div className="carousel-item">
            <img src="/Carosel5.png" className="d-block w-100" alt="Carosel" />
          </div>
          <div className="carousel-item">
            <img src="/Carosel6.png" className="d-block w-100" alt="Carosel" />
          </div>
          <div className="carousel-item">
            <img src="/Carosel7.png" className="d-block w-100" alt="Carosel" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row m-5">
        <div className="col-sm-4 mt-2">
          <div className="card" style={{ width: "18rem" }}>
            <img src="SavingAccount.png" className="card-img-top" alt="Savings" />
            <div className="card-body">
              <h5 className="card-title">Accounts</h5>
              <p className="card-text">Explore exclusive benefits of our different accounts.</p>
              <Link className="btn mb-2" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Explore Savings Accounts</Link>
              <Link className="btn mb-2" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Explore Current Accounts</Link>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Explore Deposite Accounts</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mt-2">
          <div className="card" style={{ width: "18rem" }}>
            <img src="CreditCard.png" className="card-img-top" alt="Savings" />
            <div className="card-body">
              <h5 className="card-title">Credit Card</h5>
              <p className="card-text">We offer the best reward card. Check Now!!</p>
              <Link className="btn mb-2" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Gold Credit Card</Link>
              <Link className="btn mb-2" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Platinum Credit Card</Link>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Titanium Credit Card</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mt-2">
          <div className="card" style={{ width: "18rem" }}>
            <img src="DebitCard1.png" className="card-img-top" alt="Savings" />
            <div className="card-body">
              <h5 className="card-title">Debit Card</h5>
              <p className="card-text">Make the most with our feature rich Debit Card. Explore below !!</p>
              <Link className="btn mb-2" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Rubyx Debit Card</Link>
              <Link className="btn mb-2" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Gold Debit Card</Link>
              <Link className="btn" style={{backgroundColor: "#086978", color: "white"}} aria-current="page" to="/">Titanium Debit Card</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5px'>
        <img src="/Insurance.png" className="rounded mx-auto d-block" alt="..." />
        <p className='m-5'><h3><b>Why Insurance?</b></h3><p>Insurance helps you to protect what is important to you. Our range of third party insurance products covers everything from your health and life, to your home and travels. Enjoy peace of mind and unmatched convenience with insurance products facilitated by us.</p>
          <ul>
            <li><Link style={{ color: "#086978", textDecoration: 'none' }} to="/">Life Insurance</Link></li>
            <li><Link style={{ color: "#086978", textDecoration: 'none' }} to="/">Health Insurance</Link>
              <ul>
                <li><Link style={{ color: "#086978", textDecoration: 'none' }} to="/">Complete Health Insurance Policy</Link></li>
                <li><Link style={{ color: "#086978", textDecoration: 'none' }} to="/">Health Care Plus</Link></li>
                <li><Link style={{ color: "#086978", textDecoration: 'none' }} to="/">Personal Protect Insurance Policy</Link></li>
              </ul>
            </li>
            <li><Link style={{ color: "#086978", textDecoration: 'none' }} to="/">Home Insurance</Link></li>
            <li><Link style={{ color: "#086978", textDecoration: 'none' }} to="/">Car Insurance</Link></li>
            <li><Link style={{ color: "#086978", textDecoration: 'none' }} to="/">Two Wheeler Insurance</Link></li>
          </ul>
        </p>
        <div className='m-4 row'>
           <img src="/Wealth.png" className="rounded" style={{ width: "30rem" }}/>
           <div className='mt-5' style= {{width: "50rem"}} >
              <h5 className="card center text-center" style={{ backgroundColor: "#EA7613", color: "#FFFFFF" }}>Plan your retirement</h5>
              <p className='mt-3'>Even with a high paying job and enough savings, investing in the right stocks, assets or other instruments is important to improve your personal finance. Better money management is all it takes to reduce expenditure and invest more. Let's get to know how investment planning can improve your financial health.</p>
              <p>Good financial management habits are built over time. Whether you save or invest, the way you utilise your money directly impacts your financial health. Savings alone cannot entail long-term financial planning; investments become necessary.</p>
              </div>
              <div className='mt-3'>
                <h5>Retirement Investment Plans:</h5>
                <p>When it comes to financial well-being, planning for retirement should be the priority. Early investment planning will help you accumulate adequate funds post retirement.
                <ul className='mt-3'>
                  <li>Senior Citizens' Savings Scheme: The SCSS is a government-sponsored scheme for your retirement. One of the safest investment options with an interest rate of 7.4% p.a., you can begin with a minimum investment of Rs 1,000 and continue investing for a tenure of 5 years. The scheme can be extended for a period of 3 years.</li>
                  <li>NPS: National Pension Scheme or NPS is a voluntary pension plan that is also backed by the government, designed to facilitate a regular income post retirement. Any individual from 18 years to 70 years can invest in it and earn good returns at the rate of 9% to 12% p.a.</li>
                </ul>
                </p>
                <h5 className='mt-3'>Market-linked investments:</h5>
                <p className='mt-3'>Such investments yield better, as returns are dependent on the market performance. Even amateur investors with a proper financial guidance can invest in such assets and gain good returns. You need to select the best investment plan for yourself, depending on your risk appetite and preferences:
                <ul className='mt-3'>
                  <li>Mutual Funds: Even if the yields are market-linked, you can still earn good returns by investing in equity, debt, bonds or other assets. Diversification is the key when you are investing in MF as this helps to spread your money across multiple assets and avoid risks</li>
                  <li>Stocks: To invest in stock means buying a share of ownership in a company. For long-term investors this is a good bet as it provides generous returns. Again, the returns fluctuate as per the market conditions.</li>
                </ul>
                </p>
                <h5 className='mt-3'>Tax-Savings Investments:</h5>
                <p className='mt-3'>There are various tax planners or tax saving instruments available in the market to help you claim tax deductions under Section 80C and 80D of the Income Tax Act, 1961. Some of the notable investment plans include Life Insurance, Health Insurance, Equity Linked Savings Scheme (ELSS), SCSS, FDs, NPS, ULIP, etc.</p>
                <h5 className='mt-3'>The Final Note:</h5>
                <p className='mt-3'>There is a misconception that you need big bucks to get started with investments; however, the process of building a solid portfolio can begin with smaller contributions that grow over the course of time as your income increases.</p>
                <p className='mt-2'>T&C Apply*</p>
              </div>
        </div>
        <Link className="btn m-4" style={{backgroundColor: "#086978", color: "white",}} aria-current="page" to="/">Invest Now!</Link>
      </div>
    </div>
  )
}

return <Navigate to="/login" />
      }