import React from 'react'
import './page.css'
import Header from '../components/Header/Header'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Asset from './Asset'
import Contact from '../components/contact/Contact'
const Aboutpage = () => {
  return (
    <main className='landpage'>
    <Header />
      <section className='about-landpage'>
        <div className="about-page-text">
          <h3>about ocean volte</h3>
          <span className="small-thin-line"></span>
        </div>
      </section>
      <About />
      <Asset />
      <Contact />
      <Footer />
    </main>
  )
}

export default Aboutpage