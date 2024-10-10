/* eslint-disable no-unused-vars */
import React from 'react'
import './plan.css'
import { useState } from 'react'
import {RxDash} from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import {GiChart} from 'react-icons/gi'


const Plan = () => {
    const navigate = useNavigate()

    const [withdrawMethods,setWithdrawalMethods] = useState([
      {
        id:1,
        min:'$100',
        max:'$999',
        type:'basic ',
        percent:'4',
        duration:'24 hours (tier 1)',
        ref: '10%'
      },
      {
        id:2,
        min:'$1000',
        max:'$4999',
        type:'forex/crypto (tier 1)',
        percent:'8',
        duration:'48 hours',
        ref: '10%'
      },
      {
        id:3,
        min:'$5000',
        max:'$20000',
        type:'stock (tier 1)',
        percent:'14',
        duration:'21 days',
        ref: '10%'
      },
      {
        id:4,
        min:'$10000',
        max:'$49999',
        type:'agro-techonology (tier 1)',
        percent:'18',
        duration:'60 day(s)',
        ref: '10%'
      },
      {
        id:5,
        min:'$50000',
        max:'$500000',
        type:'real estate (tier 1)',
        percent:'32',
        duration:'120 day(s)',
        ref: '10%'
      },
      {
        id:6,
        min:'$50000',
        max: 'Unlimited',
        type:'Gold',
        percent:'30',
        duration:'365 days',
        ref: '10%'
      },
      ])

  return (
    <div className='plan-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>our plans</h2>
            </div>
            <h1 data-aos="fade-up">choose an investment plan</h1>
            <p data-aos="fade-up">choose an investment plan of your choice, but remember , the bigger the investment the bigger the return</p>
        </div>
        <div className="plan-card-container">
                  
        {
          withdrawMethods.map(method => (
            <div className="plan" key={method.id }>

<div className="inner">
			<span className="pricing">

				<span>
					{method.percent} <small> % </small>
				</span>
			</span>

			<h2 className="title">{method.type}</h2>

			<ul className="features">

				<li>
					<span className="iconxx">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>Min:</strong> {method.min} </span>
				</li>

				<li>
					<span className="iconxx">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>Max: </strong> {method.max} </span>
				</li>

				<li>
					<span className="iconxx">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span> <strong>Duration: </strong>{method.duration}</span>
				</li>

				<li>
					<span className="iconxx">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span> <strong>Refferal Commission: </strong>{method.ref}</span>
				</li>

			</ul>
			<div className="action"  onClick={()=>{
                        navigate('/login')
                      }}>
      <Link to='#' className='button'>Choose plan</Link>
			</div>
		</div>
	</div>
    
          ))
        }
                  
        </div>
    </div>
  )
}

export default Plan