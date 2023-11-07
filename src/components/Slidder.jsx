
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
const Slider = ({img,img1,img2,img3,img4,img5}) => {
    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        height       : '80vh',
      };
    return (
        <div>
        <Splide 
        options={ options }
        aria-label="My Favorite Images">
        
  <SplideSlide>
    <img className='w-full h-full' src={img}alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={img1} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={img2} alt="Image 3"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={img3} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={img4} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={img5} alt="Image 2"/>
  </SplideSlide>
</Splide>    
        </div>
    );
};

export default Slider;