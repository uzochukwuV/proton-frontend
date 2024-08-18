import React from 'react'
import './feature.css'
import {FaStackOverflow} from 'react-icons/fa'
import {IoAnalyticsOutline} from 'react-icons/io5'
import {BsWindowSidebar} from 'react-icons/bs'
import {
    BiSupport
} from 'react-icons/bi'
// import {AiOutlineFund} from 'react-icons/ai'
const Feature = () => {
  return (
    <div className=' feature-section' id='feature'>
        <div className="about-wrapper feature-wrapper">
        <div className="why-choose-us-text-container about-text">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>special features</h2>
            </div>
            <h1 data-aos="fade-up">Our features and benefits</h1>
            <p data-aos="fade-up">
                 The Ocean Volte ecosystem is based on blockchain and we solved issues of current and future
            </p>
        </div>
        <div className="feature-card-container" data-aos="fade-up">
            <div className="feature-card" data-aos="fade-up">
                <div className="feature-card-text-container">
                    <FaStackOverflow/>
                    <h2>identify asset</h2>
                    <p>We identify high potential assets using our intelligent financial markets systems, combined with expert advice.</p>
                </div>
            </div>
            <div className="feature-card" data-aos="fade-up">
                <div className="feature-card-text-container" >
                    <IoAnalyticsOutline />
                    <h2>analyze risk</h2>
                    <p>We carry out risk-reward analysis to determine the risk exposure for each asset we select.</p>
                </div>
            </div>
            <div className="feature-card" data-aos="fade-up">
                <div className="feature-card-text-container">
                    <BiSupport />
                    <h2>periodic support</h2>
                    <p>All our plans yields circle profits depending on the plan activated. All that is required from a user is to activate any of the available plans</p>
                </div>
            </div>
            <div className="feature-card" data-aos="fade-up">
                <div className="feature-card-text-container">
                    <BsWindowSidebar />
                    <h2>manage portfolio</h2>
                    <p>We create and manage client portfolio using artificial intelligence and expert investment managers.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Feature