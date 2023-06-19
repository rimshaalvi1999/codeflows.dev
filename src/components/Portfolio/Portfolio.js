import React from 'react'
import './Portfolio.css'
import project1 from '../../assets/portfolio-project-1.webp';
import project2 from '../../assets/project2.webp';
import project3 from '../../assets/project3.webp';
import project4 from '../../assets/project4.webp';
import project5 from '../../assets/project5.webp';
import project6 from '../../assets/project6.webp';
export default function Portfolio() {
  return (
    <div className='portfolio-main'>

      <div className='potfolio-heading' >
        <h2>Codeflows Portfolio</h2>
      </div>
      <div className='portfolio-para'>
        <p>
          Webflow projects that we work on.
        </p>
      </div>
      {/* ////////////////////////////////// */}
      <div className='inner-div-internalpart1'>
        <div className='inner-div-internalpart-pic wrapper'  >
          <img id='portfolio-projects-pic' src={project1} alt="" />
          <h3 id='pic-caption'>AMastas</h3>
          <p id='pic-caption2'>Autofill search and filtring system</p>
        </div>
        <div className='inner-div-internalpart-pic wrapper'>
          <img id='portfolio-projects-pic' src={project2} alt="" />
          <h3 id='pic-caption'>AMastas</h3>
          <p id='pic-caption2'>Autofill search and filtring system</p>
        </div>
      </div>

      {/* ///////////// */}

      <div className='inner-div-internalpart2'>
        <div className='inner-div-internalpart-pic'>
          <img id='portfolio-projects-pic' src={project3} alt="" />
          <div>
          <div>
          <h3 id='pic-caption'>AMastas</h3>
          <p id='pic-caption2'>Autofill search and filtring system</p>
          </div>
          <div>
            <img src="https://assets.website-files.com/6390ccac206b2dabb754420e/63984f5164d52cde10d4109b_faq-icon.svg" alt="" />
          </div>
          </div>
        </div>
        <div className='inner-div-internalpart-pic'>
          <div>
          <img id='portfolio-projects-pic' src={project4} alt="" />
          <h3 id='pic-caption'>AMastas</h3>
          </div>
          <p id='pic-caption2'>Autofill search and filtring system</p>
        </div>
      </div>

      {/* /////////////// */}

      <div className='inner-div-internalpart3'>
        <div className='inner-div-internalpart-pic'>
          <img id='portfolio-projects-pic' src={project5} alt="" />
          <h3 id='pic-caption'>AMastas</h3>
          <p id='pic-caption2'>Autofill search and filtring system</p>
        </div>
        <div className='inner-div-internalpart-pic'>
          <img id='portfolio-projects-pic' src={project6} alt="" />
          <h3 id='pic-caption'>AMastas</h3>
          <p id='pic-caption2'>Autofill search and filtring system</p>
        </div>
      </div>
     </div>
  )
}
{/* <p id='pic-caption2'>Autofill search and filtring system</p> */}
