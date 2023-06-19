import React from 'react'
import './Logos.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect,useState } from 'react';
export default function Logos() {



  let [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, 
    autoplay:true,
    slidesToScroll: 1,
    autoplay: isMobile, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024, // Desktop screens
        settings: {
          slidesToShow: 4,
        },
      },
      
      {
        breakpoint: 912, // Tablet screens
        settings: {
          slidesToShow: 3,
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
        breakpoint: 540, // Mobile screens
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ]
  };
  let logosImages = [
    { name: 'first', img: 'folk_Logo_white.svg' },
    { name: 'second', img: 'be_sight_white_logo.svg' },
    { name: 'third', img: 'maki_white-logo.svg' },
    { name: 'fourth', img: 'amastas_white_logo.svg' },
    { name: 'fifth', img: 'bigblue-white-logo.svg' },
    { name: 'sixth', img: 'vooggt_white_logo.svg' },
  ]
  return (
    <div className='Logos-main'>
      {/* <div className='backimage'> */}
      <div className='inner-div-internalpart-1'>
       <div className="carousel-logo">
      <Slider {...settings}>
        {
          logosImages.map((log,index)=>{
            return  <div className='internal-revieww' key={index}>
            <img className='image-revieww' src={log.img} alt={log.name} />
          </div>
          })
        }
      </Slider>
        </div>
    </div>
        </div>

    // </div>
  )
}
