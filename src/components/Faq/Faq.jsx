import React from 'react'
import './faq.css'
import { useState } from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'
const Faq = () => {
    const [faqs,setFaqs] = useState([
        {
            id:1,
            active:true,
            question:'What is Ocean Volte?',
            answer:"OceanVolte is an online platform that maximizes the slight differences in prices of global forex exchange rate and investment in real estate, stocks/commodities and agriculture to inturn satisfy her clients.",
        },
        {
            id:2,
            active:false,
            question:'where does the investment go into?',
            answer:'Ocean Volte reinvests the funds generated from this platform into real estate and oil exploration industries around the world. these industries generate enough revenue to constantly satisfy the clients returns, and keep the company running',
        },
        {
            id:3,
            active:false,
            question:'What are the advantages of joining this platform?',
            answer:'Your account will be managed by a professional money manager. We monitor the financial markets every day and regularly review your portfolio to ensure that an optimal blend of investments is being used to meet your individual goals. This provides our clients with many benefits, including more time to pursue what really interests them.',
        },
        {
            id:4,
            active:false,
            question:'how do i withdraw my funds?',
            answer:'its as easy as you can possibly imagine, you just have to go to the withdrawal page. select your withdrawal method, enter amount to withdraw, then paste your wallet address and submit. then wait for like 30 minutes after placing withdrawal order and there you go, your wallet address will be credited.',
        },
        {
            id:5,
            active:false,
            question:'What cryptocurrencies can I use?',
            answer:'Ocean Volte supports at least 3 crypto currencies for transactions which include BTC, USDT, ETHEREUM. We plan on supporting more crypto currencies in the near future.',
        },
    ])

    const dropDown = (id)=>{
        setFaqs(
        faqs.map(faq => faq.id === id ? {...faq, active:!faq.active} : {...faq, active:false}))
        console.log(faqs)
    }
  return (
    <div className='faq-section' id='faq'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1919 274" className='svg-line'>
        <path fill="none" stroke="#565674" stroke-dasharray="12" d="M-150,908.21396 C-151.16508,816.022735 -42.010869,767.607158 177.462632,762.967229 C506.672884,756.007334 405.185109,537.831699 865.446032,604.840708 C1325.70696,671.849717 1270.71837,423 1687.44603,540.526473 C2104.17369,658.052946 2011.79501,428.896794 2076.92909,423 C2075.67597,582.585165 2075.67597,744.323151 2076.92909,908.21396 L-150,908.21396 Z" opacity=".5" transform="translate(-1 -508)"/>
      </svg>
        <div className="faq-wrapper">
            <div className="why-choose-us-text-container faq-p">
                <div className="header" data-aos="fade-up">
                    <span className="header-line"></span>
                    <h2>faq</h2>
                </div>
                <h1 data-aos="fade-up">frequently asked questions</h1>
                <p data-aos="fade-up">
                We’ve provided some information about OceanVolte, OceanVolte Plans, cryptocurrencies, and few other common questions you might want to ask. If you have any other questions, contact our live support system or email address.
                </p>
            </div>
        </div>
        <div className="faq-container">
            {
                faqs.map(faq =>
                    <div className="faq-card" key={faq.id} data-aos="fade-up">
                        <div className="question-tab">
                            <h2>{`${faq.question}`}</h2>
                            <span className={`dropdown-btn ${faq.active && 'rotate'}`} onClick={()=>{
                                dropDown(faq.id)
                            }}>
                                <HiOutlineChevronDown />
                            </span>
                        </div>
                        
                        <div className={`answer-tab ${faq.active && 'drop'}`}>
                            <p>{faq.answer}</p>
                        </div>  
                        
                    </div>
                )
            }
        </div>

    </div>
  )
}

export default Faq