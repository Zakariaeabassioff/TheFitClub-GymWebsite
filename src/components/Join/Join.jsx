import React from 'react'
import './Join.css'

const Join = () => {

  return (
    <div className='join'>
        <div className='join-text'>
            <div className='underline'></div>
            <span>
                <span className='stroke-text'>ready to</span><span> level up</span>
            </span>
            <span>
                <span>your body</span><span className='stroke-text'> with us?</span>
            </span>
        </div>
        <div className='join-input'>
            <form action="" className='email-container'>
                <input type="email" name='user_email' placeholder='Enter your Email address'/>
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join