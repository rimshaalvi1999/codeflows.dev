import React from 'react'
import './Howwork.css'
import myImage from '../../assets/works.png'
export default function Howwork() {
  return (
    <div className='mainn'>
    {/* <div className='how-works'>
      <div className='animation-pic'>
        <img src={myImage} alt="" />
      </div>
      <div className='how-work-content'>
        <div className='content-heading'>
          <h2>How it's Work</h2>
        </div>
        <div>
      
          <ul>
            <li>Signup for a plan and get your Personalised Dashboard Link via email.</li>
            <li>On the Trello dashboard and post as many requests as you'd like.</li>
            <li>Receive your tasks within a few business days on average, Monday to Friday.</li>
          </ul>
        </div>
      </div>
    </div> */}
<div className='how-works'>

<div className='how-works-pic'>
  {/* <div className='iconn'> */}
   <img src={myImage} alt="" />
  {/* </div> */}
  
</div>
<div className='how-work-content'>
  {/* <div className='iconn'> */}
    {/* <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="" /> */}
  {/* </div> */}
  <div className='content-heading'>
          <h2>How it's Work</h2>
        </div>
  <div>
          <ul>
            <li>Signup for a plan and get your Personalised Dashboard Link via email.</li>
            <li>On the Trello dashboard and post as many requests as you'd like.</li>
            <li>Receive your tasks within a few business days on average, Monday to Friday.</li>
          </ul>
        </div>
      </div>
</div>
</div>
    
  )
}
