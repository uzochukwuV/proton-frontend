import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {IoCloseOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const [bgColor, setBgColor] = useState(false)
    const changeOnScroll = ()=>{
        if(window.scrollY >= 90){
            setBgColor(true)
        }
        else{
            setBgColor(false)
        }
    }
    window.addEventListener('scroll', changeOnScroll)
    const navigate = useNavigate()
  return (
    <motion.header className={`${bgColor && 'scroll-color'}`}
        initial={{ opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.65}}
    >
        <div className="logo-container">
            <img src="/Drawing1.svg" alt="" className='logo' onClick={()=>{
                navigate('/')
            }}/>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                    <span className='line'></span>
                </li>
                <li>
                    <Link to="/about">about</Link>
                    <span className='line'></span>
                </li>
                <li>
                    <Link to="/faq">faqs</Link>
                    <span className='line'></span>
                </li>
                <li>
                    <Link to="/policy">our policy</Link>
                    <span className='line'></span>
                </li>
                <li>
                    <Link to="/buybitcoin">buy bitcoin</Link>
                    <span className='line'></span>
                </li>
            </ul>
        </nav>
        <div className="sign-up-btn-container">
            <button className='signup-btn' onClick={()=>{navigate('/login')}}>login</button>
        </div>
        <div class="mobile-menu-container" onClick={()=>{
            setShowModal(!showModal)
        }}>  
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
        </div>
        <div className={`menu-modal ${showModal ? 'showing-modal' : ''}`}>
            <ul>
                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <Link to='/faq'>faq</Link>
                <Link to='/buybitcoin'>buy bitcoin</Link>
                <Link to='/policy'>our policy</Link>
                <Link to='/signup'>signup</Link>
                <Link to='/login'>login</Link>
            </ul>
        </div>
    </motion.header>
  )
}

export default Header