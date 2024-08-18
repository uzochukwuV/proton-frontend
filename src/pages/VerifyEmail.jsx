import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
const VerifyEmail = ({route}) => {
    const [validUrl,setValiUrl] = useState(true)
    const params = useParams()
    useEffect(()=>{
            const verifyEmailUrl = async()=>{
                try {
                    const url = `${route}/${params.id}/verify/${params.token}`
                    const req = await fetch(url,{
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    const res = await req.json()
                    console.log(res)
                    setValiUrl(true)
                } catch (error) {
                    console.log(error)
                    setValiUrl(false)
                }
            }
            verifyEmailUrl()
    },[params])
  return (
    <>
    <Header />
    <div>
        {
            validUrl ? 
            <div className="success-page">
                <img src="/success.jpg" alt="success_img" className='success-img' />
                <h3>email verified successfully!</h3>
                <Link to='/login' >login</Link>
            </div> : 
            <div className="failure-page">
                <img src="/404.jpg" alt="404_img" className='failure-img' />
                <h3>link has expired</h3>
                <Link to='/' >home</Link>
            </div>
        }
    </div>
    </>

  )
}

export default VerifyEmail