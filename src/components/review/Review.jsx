import React, {useRef,useState} from 'react'
import './review.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


const Review = () => {
    
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div className='review-section'>
    {/* <div className="why-choose-us-text-container review-head-container">
            <div className="header review-header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>what our custormers are saying</h2>
            </div>
            <h1 data-aos="fade-up">custormer reviews</h1>
        </div> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper review-swiper"
        data-aos="fade-up"
      >
        <SwiperSlide className='review-swiper-slide'>
          <div className="swiper-slide-content">
            <img src="/photo-1624797432677-6f803a98acb3.jpg" alt="" className='review-img'/>
            <small className="investor-name">
              peter hathen
            </small>
            <small className='investor-title'>investor</small>
            <ImQuotesLeft />
              <p> wow! i couldn't believe what my eyes saw at first, but guess what...
            it was real. I had never seen such a fast withdrawal process in any
            investment platform, Kudos to Buterinnfend
              </p>
            <ImQuotesRight />
          </div>
        </SwiperSlide>
        <SwiperSlide className='review-swiper-slide'>
          <div className="swiper-slide-content">
            <img src="/istockphoto-1342247162-170667a.jpg" alt="" className='review-img'/>
            <small className="investor-name">
              jack richard
            </small>
            <small className='investor-title'>investor</small>
            <ImQuotesLeft />
              <p>this platform is absolutely amazing, tested and trusted. the
            custormer service is top nutch, investment plans are mind blowing, i
            am down for this project.
              </p>
            <ImQuotesRight />
          </div>
        </SwiperSlide>
        <SwiperSlide className='review-swiper-slide'>
          <div className="swiper-slide-content">
            <img src="/istockphoto-1322849492-170667a.jpg" alt="" className='review-img'/>
            <small className="investor-name">
              jermane kunt
            </small>
            <small className='investor-title'>investor</small>
            <ImQuotesLeft />
              <p>this is one of the best investment platform i've come accross so
            far. As an investor, from a professional stand point, the
            percentages are directly comparable with the investment range.
              </p>
            <ImQuotesRight />
          </div>
        </SwiperSlide>
        <SwiperSlide className='review-swiper-slide'>
          <div className="swiper-slide-content">
            <img src="/istockphoto-1133598770-170667a.jpg" alt="" className='review-img'/>
            <small className="investor-name">
              michael johson
            </small>
            <small className='investor-title'>investor</small>
            <ImQuotesLeft />
              <p>for the first time, i could withdraw my investment proceeds
            successfully. thanks to ultimate investment-co for creating a
            platform like this.
              </p>
            <ImQuotesRight />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default Review