'use client'
import DemoSlider from "./demoslier";
import dataSlider from "./dataimage.json";
import Image from "next/image";
export default function Swiperss() {
  return (
    <div className="m-2 text-center text-4xl font-dancing-script  align-center">
       
        
        <div className="row items-center ">
            <div className="col col-12 bg-fuchsia-50">
              
               <div className=" flex justify-center items-center">
                    <Image
                        src="/images/hoa.png"
                   className="rounded-full  md:w-40 md:h-40 w-20 h-20"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />
                    </div>
            
                <div className="relative inline-block">
                <span className="relative text-sm text-gray-500 px-4">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-[35px] h-px bg-gray-300"></span>
                     Cô dâu Chú rể
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-[35px] h-px bg-gray-300"></span>
                </span>
                </div>


            </div>



            <div className="mt-2">
            <main className="flex  flex-col items-center justify-between">
                <DemoSlider data={dataSlider} />
                </main>
            </div>

            </div>
     



    </div>
  );
}
