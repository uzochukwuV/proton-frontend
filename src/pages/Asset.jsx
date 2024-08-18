/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {RiStockLine} from 'react-icons/ri'
import {FaTractor} from 'react-icons/fa'
import {AiTwotoneBank} from 'react-icons/ai'
import {GiHouse,GiOilPump} from 'react-icons/gi'
import {SiBitcoin} from 'react-icons/si'
import {BsCheckSquare} from 'react-icons/bs'
import { AnimatePresence,motion } from 'framer-motion'
import {GiChart} from 'react-icons/gi'

const Asset = () => {
    const [tabs,setTabs] = useState([
        {
            id:1,
            title:'Forex',
            content:'we are here again',
            header:'forex and arbitrage trading',
            body:[
            "With deep knowledge and understanding of foreign exchange markets, we engage in forex trading activities. Our experts leverage advanced tools and analysis techniques to identify favorable currency pairs, analyze market conditions, and execute trades with precision."],
            active:true,
            icon:GiChart,
            bg:'How-Citizenship-by-Investment-Unlocks-the-Potential-of-Cryptocurrency.webp'
        },
        {
            id:2,
            title:'Crypto',
            content:'we are here again',
            header:'crypto currency and NFTs',
            body:[
                "We offer access to a diverse range of cryptocurrencies, including well-established ones like Bitcoin and Ethereum, as well as emerging altcoins. Our team of experienced traders closely monitors market trends and employs various strategies to take advantage of price fluctuations and generate potential profits."],
            active:false,
            icon:SiBitcoin,
            bg:'Which-Type-of-Investment-Has-the-Highest-Risk.jpg'
        },
        {
            id:3,
            title:'Real Estate',
            content:'we are here again',
            header:'real estate and housing',
            body:[
                "Our expertise extends to the real estate sector, where we identify and invest in lucrative properties and development projects, maximizing returns in this tangible asset class, We participate in real estate development projects, partnering with reputable developers to bring innovative residential and commercial properties to life. This allows our clients to access pre-construction or redevelopment opportunities."],
            active:false,
            icon:GiHouse,
            bg:'real.jpg'
        },
        {
            id:4,
            title:'Oil',
            content:'we are here again',
            header:'crude oil investment',
            body:[
                "As a key player in the energy sector, we actively monitor and invest in crude oil opportunities. We analyze market dynamics, geopolitical factors, and supply-demand trends to identify investment opportunities in both upstream and downstream segments. Our investments may include exploration and production companies, oilfield services, refining, and distribution."],
            active:false,
            icon:GiOilPump,
            bg:'original_imageshttpsg.foolcdn.comeditorialimag.width-880_py99TiM.webp'
        },
        {
            id:5,
            title:'Agriculture',
            content:'we are here again',
            header:'argro -tech investment',
            body:[
                "We understand the importance of agriculture as a vital industry that feeds nations and supports economic growth. We invest in various aspects of agriculture, including crop production, livestock, agribusiness, and agricultural technology. Our investments aim to capitalize on the increasing demand for food, changing consumer preferences, and advancements in agricultural practices"],
            active:false,
            icon:FaTractor,
            bg:'Invest4Land-Agriculture-Real-Estate-Investment-Investing-Farmland-Farming-Agrobusiness-Investor-Property-Managed-Farmland-Turkey-Spain-Almond-Walnut0.jpg'
        },
    ])

    const changeContent =(id)=>{
        setTabs(tabs.map(tab => (tab.id === id ? {...tab,active:true} : {...tab,active:false})))
        console.log(tabs)
    }
  return (
    <div className='roadmap-section'>
    <div className="why-choose-us-text-container">
        <div className="header" data-aos="fade-up">
            <span className="header-line"></span>
            <h2>our multi-million dollar assets</h2>
        </div>
        <h1 data-aos="fade-up">industries we invest in</h1>
        <p data-aos="fade-up">
        Here are our major investments from which we build investors' profits. These investments and their underlying assets were carefully selected, using high-end fundamental and technical analysis.
        </p>
    </div>
    <div className="roadmap-container" data-aos="fade-up" >
        <div className="widget-container">
            {
                tabs.map(tab =>
                    <div className={`widget-tab ${tab.active === true ? 'show-line' : ''}`} onClick={()=>{changeContent(tab.id)}}>
                        <p>{tab.title}</p>
                        <span className="widget-line"></span>
                    </div>
                )
            }
        </div>
        <motion.div className="tab-content asset-content" layout animate={{opacity:1}} initial={{opcaity:0}} exit={{opacity:0}}>
        <AnimatePresence>
            {
                tabs.map(tab => tab.active === true &&
                    <>
                    <motion.div className="tab-text" >
                        <h2>
                            {tab.header}
                        </h2>
                        <span className='thin-line'></span>
                        <ul>
                            {tab.body.map(list => <li>{list}</li>)}
                        </ul> 
                    </motion.div>
                    <motion.div className="tab-img-container">
                        <img src={`${tab.bg}`} alt="" />
                    </motion.div> 
                    </>
                )
            }
        </AnimatePresence>
        </motion.div>
    </div>
</div>
  )
}

export default Asset