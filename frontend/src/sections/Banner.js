import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
const Banner = () => {
    return (
        <>
        <h1 className="text-2xl text-black font-bold my-10  py-8">
            OUR <span className=' text-green-500'>PRODUCTS</span> 
          </h1>
        <div className="w-[90%] mx-auto my-10 p-5">
          
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove = {false}
            navigation={{ clickable: true }}
           
          >
            <SwiperSlide>
              <div className="rounded w-full grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div className=''>
                        <img className='' src="https://s.alicdn.com/@sc04/kf/U30a84e239fda48e69a4dd3e100c74500w.jpg_720x720xz.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-7xl uppercase py-2'>Custom Logo Micro Fiber</h1>
                        <p className='text-2xl'>Custom Logo Micro Fiber Microfiber Sunglasses Glasses Optical Lens Cleaning Cloth For Watch and Eyew</p>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded w-full grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img src="https://s.alicdn.com/@sc04/kf/H215f101b40334809a3a485e089be56ccB.jpg_720x720xz.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-7xl uppercase py-2'>Hot Sale Kitchen Towels</h1>
                        <p className='text-2xl'>Hot Sale Kitchen Towels 100% Cotton Kitchen Towel Tea Towels Set - Kitchen Cleaning Cloths Supplier</p>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded w-full grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img src="https://s.alicdn.com/@sc04/kf/U23f2932c6e7a414aa507d4f444b79f1fq.jpg_720x720xz.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-7xl uppercase py-2'>Stripe Kitchen Set</h1>
                        <p className='text-2xl'>100% Cotton Butcher Stripe Kitchen Set, Aprons 70x90cm Single gloves 18x32cm Double gloves 18x92cm</p>
                    </div>
              </div>
            </SwiperSlide>
           
            
          </Swiper>
        </div>
      </>
    );
};

export default Banner;