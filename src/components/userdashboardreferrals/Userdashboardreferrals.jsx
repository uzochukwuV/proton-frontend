import React, {useState,useEffect,useRef}from 'react'
import { useNavigate } from 'react-router-dom'
import {MdOutlineContentCopy} from 'react-icons/md'
import Userdashboardheader from '../userdashboardheader/Userdashboardheader'
import './userdashboardreferrals.css'
const Userdashboardreferrals = ({route}) => {
  const [clipBoard, setClipBoard] = useState(false)
  const [loader,setLoader] = useState(false)
    const copy = ()=>{
        navigator.clipboard.writeText(clipRef.current.value)
    }
    const clipRef = useRef(null)
  const navigate = useNavigate()
  const [userData, setUserData] = useState()
  useEffect(()=>{
    setLoader(true)
    if(localStorage.getItem('token')){
        const getData = async()=>{
            const req = await fetch(`${route}/api/getData`,{
                headers: {
                'x-access-token': localStorage.getItem('token')
                }
            })
            const res = await req.json()
            setUserData(res)
            setLoader(false)
        }
        getData()
    }
    else{
        navigate('/login')
    }
      
},[])
  return (
    <div>
        <Userdashboardheader route={route}/>
        {
        loader && 
          <div className="wifi-loader-container">
            <div class="loader">
              <span class="l">L</span>
              <span class="o">o</span>
              <span class="a">a</span>
              <span class="d">d</span>
              <span class="i">i</span>
              <span class="n">n</span>
              <span class="g">g</span>
              <span class="d1">.</span>
              <span class="d2">.</span>
            </div>
        </div>
      }
          {userData && userData.referred.length !== 0 ? 
          <div className="page-swiper-wrapper">
          <div className="page-header">
              <h3>checkout your referral logs</h3>
              <h2>Referral Logs</h2>
              <p>refer more friends to get a <b>100 USD</b> bonus</p>
          </div>
          <div className="transaction-container no-ref">
            <table>
                <thead>
                  <tr>
                    <td>Firstname</td>
                    <td>Lastname</td>
                    <td>Joined At</td>
                    <td>Email</td>
                    <td>Bonus Earned</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    userData.referred.map(refer =>
                      <tr>
                        <td>{refer.firstname}</td>
                        <td>{refer.lastname}</td>
                        <td>{refer.date}</td>
                        <td>{refer.email}</td>
                        <td>${refer.bonus} USD</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              </div>
            </div>
          :
          <div className="page-swiper-wrapper">
          <div className="failure-page no-referral-page">
            <img src="/eadb74787dda41cc6333341e55293432.gif" alt="" className='failure-img'/>
            <p>You haven't referred any user yet, click below to copy your referral link</p>
            <div className="click-to-copy-container">
                <input type="text" value='ac4d43bccf48793e5efc70d5fb1afb42eeca6622bbdb220fb62b63b66ff00f0a' ref={clipRef}/>
                <button className={`clipboard-btn ${clipBoard ? 'copied' : ''}` } onClick={()=>{
                    copy()
                    setClipBoard(!clipBoard)
                }}>
                    {
                        clipBoard ?
                        'copied!' : <MdOutlineContentCopy />
                    }
                </button>
            </div>
          </div>
          </div>
          }
         
    </div>
  )
}

export default Userdashboardreferrals