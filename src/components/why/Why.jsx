import React from 'react'
import './why.css'
import {BsShieldShaded} from 'react-icons/bs'
import {SlChart} from 'react-icons/sl'
import {GrStackOverflow} from 'react-icons/gr'
const Why = () => {
  return (
    <div className='why-choose-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>why choose us</h2>
            </div>
            <h1 data-aos="fade-up">best qualities</h1>
            <p data-aos="fade-up">Discover the perfect blend of unparalleled performance and security with our ultra-fast and secure solution.
            </p>
        </div>
        <div className="why-choose-us-card-container">
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">01</span>
                <BsShieldShaded />
                <h2>Ultra Fast & Secure</h2>
                <p>Embrace scalability like never before as our solution seamlessly adapts to your growing needs..</p>
            </div>
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">02</span>
                <SlChart />
                <h2>Highly Scalable</h2>
                <p>Seamlessly adapt to your evolving needs with our highly scalable infrastructure, enabling you to scale with ease.</p>
            </div>
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">03</span>
                <GrStackOverflow />
                <h2>Reliable & Low Cost</h2>
                <p>Experience excellence firsthand with our best-in-class qualities that set us apart from the competition.</p>
            </div>
        </div>
    </div>
  )
}

export default Why