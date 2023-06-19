import React from 'react'
import './Footer.css'
import twitterimage from '../../assets/icons8-twitter-48.png';
import linkedinimage from '../../assets/icons8-linkedin-48.png';
import instagramimge from '../../assets/icons8-instagram-48.png';
export default function Footer() {
  return (
    <>
      <div className='footer-main'>
        {/* //////////////////////// */}
        <div className='upper-div'>
          <div className='headings' >
            <h2>Have Projects in Your Mind?
              Let’s Work Together</h2>
          </div>
          <div className='paras'>
            <p>
              Get a guided tour through CodeFlows, and find out how you and your team can change the way you source custom code, forever.
            </p>
          </div>
          <div className='btn-pr'>
            <a href="#" className='button w-button '>Let's Start Your Project</a>
          </div>
        </div>
          {/* <img src="https://assets.website-files.com/6390ccac206b2dabb754420e/63a0c6b60bea3337228ddf1b_orange-bracket-icon.webp" alt="" class="icon_orange-bracket-header"></img>

          <img src="https://assets.website-files.com/6390ccac206b2dabb754420e/63a0c6b6c43de849388e0475_blue-bracket-icon.webp" alt="" class="icon_blue-bracket-header"></img> */}
        
      </div>
      {/* ////////////////////////////// */}
      <div className='lower-div'>
        <div className='lower-inner-div'>
          <div className='copyright-div'>
            @
            <span id='copyright-year'>2023</span>
            CodeFlow | All rights reserved
          </div>
          <div className='social-icons-div'>
            <ul className='social-ul'>
              <li> <img id='twitterimage' src={twitterimage} alt=" twitter-image" /> </li>
              <li> <img id='linkedinimage' src={linkedinimage} alt="linkeidn-image" /></li>
              <li> <img id='instagramimage' src={instagramimge} alt="instagram-image" /></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
