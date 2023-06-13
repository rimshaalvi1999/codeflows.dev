import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <header className='section-home-header is-seashell'>
      <div className='padding-global'>
        <div className='container'>

          <nav className='navigation'>
            <a href="">
              <img className='brand-logo' src="https://assets.website-files.com/6390ccac206b2dabb754420e/63932e0b14410c2e961d38ab_Logo.svg" alt="" />
            </a>
          </nav>

          {/* ////////////////////////////////////// */}

          <div className='padding-section-large bottom-padding-large-on-desktop'>
            <div className='home-header_component'>
              <div className='max-width-large'>
                <div className='padding-bottom padding-medium'>
                  <h1 data-w-id='2384f9a0-5da0-0927-3f2e-5fb46e8b538c' className='text-align-center'>
                    <span className='dedicated-span'>A Dedicated</span>
                    <span className='javascript-logo'>Javascript

                    </span>
                    Developer for
                    <span className='webflow-logo'>
                      Webflow
                    </span>
                  </h1>
                </div>
              </div>


              <div className='padding-bottom padding-large'>
                <div className='is-relative'>
                  <p data-w-id='7f271074-fa97-dc3d-5bb0-d5f0e9c37777' className='text-size-medium text-weight-medium text-align-center'>
                    Get a Javascript | Webflow developer for all your webflow projects for a
                    <span className='text-color-orange fee-logo'>
                      flat monthly fee.

                    </span>

                  </p>
                </div>
              </div>
              <a href="#pricing" data-w-id='a280c01e-fd6d-7b3e-ff85-f504fc03990a' className='button w-button'>See Pricing</a>

            </div>
          </div>
        </div>
      </div>



    </header>
  )
}
