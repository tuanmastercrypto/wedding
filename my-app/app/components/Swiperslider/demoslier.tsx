"use client";

import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
 
}

// interface ButtonProps {
//   id: number;
//   text: string;
//   link: string;
//   type: string;
// }

interface DemoSliderProps {
  data: Slide[];
}
import { Heart } from "lucide-react";
const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <div className="relative w-full  round-md" style={{ height: "calc(100vh - 210px)" }}>
        <Swiper
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
            effect={'cube'}
          loop={true}
          modules={[Autoplay, Pagination, EffectFade]}
          className="h-full"
        >
          {data.map(({ id, image,  }) => (
            <SwiperSlide key={id}>
              <div className="relative h-full w-full   rounded-md ">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-contain bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  
                  <div className="row">
                                    <div className="col col-12">
                                        <h1 className="text-6xl">
                                        <span className="inline-block align-middle font-bold text-white  ">Văn Tuần</span>
                                        <Heart className="inline-block align-middle w-5 h-5 text-pink-500 mx-1" />
                                        <span className="inline-block align-middle font-bold text-white">Mỹ Ngọc</span>
                                        </h1>

                                        <div className="relative inline-block">
                                        <span className="relative text-lg text-white px-4">
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-[35px] h-px bg-gray-300"></span>
                                            15/04/2025
                                            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-[35px] h-px bg-gray-300"></span>
                                        </span>
                                        </div>


                                    </div>
                                    
                                
                   
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DemoSlider;
