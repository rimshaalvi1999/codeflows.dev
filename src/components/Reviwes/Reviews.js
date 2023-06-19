import React from 'react'
import './Reviews.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Reviews() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Desktop screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Tablet screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 820, // Tablet screens
        settings: {
          slidesToShow: 4,
        },
      },
      
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };



  const goToNext = () => {
    sliderRef.slickNext();
  };

  const goToPrev = () => {
    sliderRef.slickPrev();
  };

  let sliderRef;


  return (
    <div className='reviews-main'>

      <div className='review-heading' >
        <h2>Clients Love Us</h2>
        <div>
        <div className="custom-navigation">
            <button onClick={goToPrev}> <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="1" fill-rule="evenodd" clip-rule="evenodd" d="M10.0867 16.3933L41.3181 16.3933V21.3933L10.3277 21.3933L22.9448 34.0104L19.4093 37.5459L2.40389 20.5405L0.63612 18.7728L2.40389 17.005L19.4092 -0.000358582L22.9448 3.53517L10.0867 16.3933Z" fill="currentColor"></path>
            </svg></button>
            <button onClick={goToNext}><svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5493 16.3933L0.317871 16.3933V21.3933L31.3083 21.3933L18.6912 34.0104L22.2267 37.5459L39.2321 20.5405L40.9999 18.7728L39.2321 17.005L22.2267 -0.000358582L18.6912 3.53517L31.5493 16.3933Z" fill="currentColor"></path>
            </svg></button>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////// */}
      <div className='inner-div-internalpart-1'>
        <div className="carousel">
          <Slider {...settings} 
          ref={(ref) => (sliderRef = ref)}>
            <div className='internal-review' >
              <img className='image-review' src="./review1.PNG" alt="Image 1" />
            </div>
            <div className='internal-review'>
              <img className='image-review' src="./review2.PNG" alt="Image 2" />
            </div>
            <div className='internal-review'>
              <img className='image-review' src="./review3.PNG" alt="Image 3" />
            </div>
            <div className='internal-review'>
              <img className='image-review' src="./review3.PNG" alt="Image 3" />
            </div>
            <div className='internal-review'>
              <img className='image-review' src="./review2.PNG" alt="Image 2" />
            </div>
            <div className='internal-review'>
              <img className='image-review' src="./review1.PNG" alt="Image 1" />
            </div>
          
          </Slider>

          
        </div>
      </div>



    </div>


  )
}
