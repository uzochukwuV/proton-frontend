import React ,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import './profile.css'
import Userdashboardheader from '../userdashboardheader/Userdashboardheader'
import {BsImage} from 'react-icons/bs'
import {RxUpload} from 'react-icons/rx'
import Swal from 'sweetalert2'
const Profile = ({route}) => {
  const [country,setCountry] = useState()
  const [zipCode,setZipCode] = useState()
  const [state,setState] = useState()
  const [phone,setPhone] = useState()
  const [address,setAddress] = useState()
  const navigate = useNavigate()
  const [userData, setUserData] = useState()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const firstnameRef = useRef(userData ? userData.firstname : null)
  useEffect(()=>{
    if(localStorage.getItem('token')){
        const getData = async()=>{
            const req = await fetch(`${route}/api/getData`,{
                headers: {
                'x-access-token': localStorage.getItem('token')
                }
            })
            const res = await req.json()
            setUserData(res)
            console.log(res)
        }
        getData()
    }
    else{
        navigate('/login')
    }
      
},[])


  // upload proof image code starts here 
  const [showImage,setShowImage]= useState() 
  const uploadProof = async (file)=>{
    const formData = new FormData
    formData.append('file',file)
    formData.append('upload_preset','upload');
    const req = await fetch('https://api.cloudinary.com/v1_1/vdaaiifq/image/upload',
      {
      method:'POST',
      body:formData,
    }
    )
    const res = await req.json()
    if(res){
        setShowImage(res.secure_url)
    }
}

  // update user info function 

  const updateUserData = async()=>{
      const req = await fetch(`${route}/api/updateUserData`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'x-access-token': localStorage.getItem('token')
        },
        body:JSON.stringify({
          country:country,
          state:state,
          phonenumber:phone,
          zipcode:zipCode,
          profilepicture:showImage,
          address:address
        })
      })
      const res = await req.json()
      if(res.status === 200){
        Toast.fire({
          icon: 'success',
          title:  `profile successfully updated`
        })
      }
      else if(res.status === 400){
        Toast.fire({
          icon: 'warning',
          title:  `no changes were made`
        })
      }
      else{
        Toast.fire({
          icon: 'warning',
          title:  `internal server error`
        })
      }
  }


  const checkStatus=()=>{
    if(showImage !== undefined){
      return(<img src={`${showImage}`} alt="" className='profile-circle-img'/>)
    }
    else{
      return( <BsImage /> )
    }
  }


  return (
    <div>
        <Userdashboardheader route={route}/>
        <div className="profile-page">
          <div className="page-header"> 
              <h2>Profile Settings</h2>
              <p>Choose an investment plan to start earning immediately</p>
          </div>
          <div className="profile-form-conatainer">
            <form action="" className="profile-form" onSubmit={(e)=>{
              e.preventDefault()
              updateUserData()
            }}>
              <div className="upper-chamber">
                <div className="profile-picture-upload-container">
                    <div className="profile-circle">
                        {
                          userData && showImage === undefined ? <img src={`${userData.profilepicture}`} alt="" className='profile-circle-img'/>   :
                          checkStatus()
                        }
                    </div>
                    <label htmlFor="file-input" className='upload-icon'>
                      <RxUpload />
                      <input type="file" accept='.jpg, .png, .svg, .webp, .jpeg' name="images" id="file-input" className='proof-input' required onChange={(e)=>{
                                 const image = e.target.files[0]
                                 uploadProof(image)
                            }}/>
                    </label>
                </div>
                <div className="first-input-container">
                  <div className="profile-input-container">
                    <label htmlFor="firstname" className='label'>firstname</label>
                    <input type="text" id='firstname'  placeHolder={userData ? userData.firstname : ''} ref={firstnameRef}/>
                  </div>
                  <div className="profile-input-container">
                    <label htmlFor="lastname" className='label'>lastname</label>
                    <input type="text" id='lastname' placeHolder={userData ? userData.lastname : ''}/>
                  </div>
                  <div className="profile-input-container">
                    <label htmlFor="email" className='label'>email</label>
                    <input type="text" id='email' value={userData ? userData.email : ''} readOnly/>
                  </div>
                  <div className="profile-input-container">
                    <label htmlFor="phone-number" className='label'>phone number</label>
                    <input type="tel" id='phone-number' onChange={(e)=>{
                      setPhone(e.target.value)
                    }} required placeHolder={userData ? userData.phonenumber : ''}/>
                  </div>
                </div>
              </div>
              <div className="lower-chamber">
                  <div className="profile-input-container">
                    <label htmlFor="country" className='label'>country</label>
                    <input type="text" id='country' onChange={(e)=>{
                      setCountry(e.target.value)
                    }} required placeHolder={userData && userData.country }/>
                  </div>
                  <div className="profile-input-container">
                    <label htmlFor="address" className='label'>address</label>
                    <input type="text" id='address' onChange={(e)=>{
                      setAddress(e.target.value)
                    }} required placeHolder={userData && userData.address }/>
                  </div>
                  <div className="profile-input-container">
                    <label htmlFor="state" className='label'>state</label>
                    <input type="text" id='state' onChange={(e)=>{
                      setState(e.target.value)
                    }} required placeHolder={userData && userData.state}/>
                  </div>
                  <div className="profile-input-container">
                    <label htmlFor="zip code" className='label'>zip code</label>
                    <input type="text" id='zip code' onChange={(e)=>{
                      setZipCode(e.target.value)
                    }} required placeHolder={userData && userData.zipcode}/>
                  </div>
              </div>
              <input type="submit" value="update" className='update-profile-btn'/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Profile