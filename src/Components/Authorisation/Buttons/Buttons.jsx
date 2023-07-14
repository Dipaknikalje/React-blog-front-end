import React from 'react'
import './Buttons.css'
import { NavLink } from 'react-router-dom'
import { useLogin } from '../../../Utility/LoginProvider'

const Buttons = () => {
  const {state,dispatch}=useLogin()

  const handleClick=()=>{
    dispatch({type:"USER" , payload:false})
    localStorage.clear()
    window.alert("logout successfully")
  }

  const RenderButton=()=>{
    if (state){
      return(
        <>
        <div className='btn-ctn'>
        <button className="btn"><NavLink to='/login' onClick={handleClick}>Logout</NavLink></button> 
        </div>         
        </>
      )
    }
    else{
      return (
        <div>
          <div className="btn-ctn">
            <button className="btn"><NavLink to='/login'>Login</NavLink></button>
            <button  className="btn">
              <NavLink to='/register'>Register</NavLink>
            </button>
          </div>
        </div>
      )

    }
  }
  return (
    <>
    <RenderButton/>
    </>
  )
 
}

export default Buttons
