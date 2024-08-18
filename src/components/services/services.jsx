import React from 'react'
import './services.css'
import { useNavigate } from 'react-router-dom'



const Service = () => {
    const navigate = useNavigate();

    const myServices = [
        {
            id: 1,
            img: './gold.jpg',
            body: 'At OceanVolte, we specialize in providing comprehensive services in the field of gold mining, ensuring profitable and sustainable operations.',
            header: "gold mining"
        },
        {
            id: 2,
            img: './real.jpg',
            body: 'Trust us to be your trusted partner in navigating the dynamic real estate market, we ensure that you make sound real estate investments and maximize your returns in this thriving sector ',
            header: "real estate"
        },
        {
            id: 3,
            img: './invest.jpg',
            body: 'At OceanVolte we guide you through the dynamic Forex and cryptocurrency markets. We will help you navigate these markets with confidence and potentially achieve favorable returns. ',
            header: "forex/crypto market"
        }
    ]

  return (
    <div className='why-choose-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2> our services </h2>
            </div>
            <h1 data-aos="fade-up">the best of us</h1>
            <p data-aos="fade-up">Discover the perfect blend of unparalleled performance and security with our ultra-fast and secure solution.
            </p>
        </div>

        <div className="why-choose-us-card-container"> 

            {myServices.map(myService => 

                <div className="services-card" data-aos="fade-up" key={myService.id}>

                    <span className="service-card-img">
                        <div className="service-img"></div>
                        <img src={myService.img} alt="file not found" />
                    </span>

                    <div className="services-card-body">
                        <h2>{myService.header}</h2>
                        <p>{myService.body} </p>
                    </div>

                    <div className="service-btn">

                        <button className='launch-btn mobile-launch'
                    onClick={()=>{
                        navigate('/login')
                    }}>
                        
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                    <span>Buy Plan</span>

                        </button>

                    </div>

                    </div>
                )}
                
                </div>

        </div>
  )
}

export default Service