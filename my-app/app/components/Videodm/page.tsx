'use client'
import { Play } from "lucide-react";
import "./style.css";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { TextAnimate } from "@/components/magicui/text-animate";
export default function Videodemo() {
  return (
    <div  className="m-2 text-center text-4xl font-dancing-script  align-center">
       
      <div
      className="
     
      w-full 
      bg-cover
      md:bg-contain
      bg-center 
      bg-no-repeat 
      text-center 
      px-4 
      py-20 
      md:py-0 
      md:h-[80vh] 
      md:max-h-[80vh]
      md:py-10
      flex 
      flex-col 
      justify-center 
      items-center
      border-t-[3px] 
      border-b-[3px] 
      border-[#c89d9c]
    "
   
      style={{ backgroundImage: "url('./images/DSC04171.jpg')" }}
    >
      <div className="max-w-2xl text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-pink-800 mb-4">
        <TextAnimate animation="blurInUp" by="character" once>
        Xem video của Tùn với Ngọc
    </TextAnimate>
       
        </h2>
        <p className="text-black text-base md:text-lg">
        <TextAnimate animation="blurInUp" by="character" duration={5}>
        Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá.
    </TextAnimate>
         
        </p>
      </div>

      <div className="video-btn">
        <Dialog>
          
          <DialogTrigger
  onClick={() => {
    // Gửi sự kiện yêu cầu tắt nhạc
    window.dispatchEvent(new Event("pause-music"));
  }}
>
  <Play className="inline-block text-gray-500 w-12 h-12 hover:text-pink-600 transition duration-300" />
</DialogTrigger>
         
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tình yêu như cành hoa đào?</DialogTitle>
              <DialogDescription>
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/cxVkzigbE7E?si=I-lFzWa-rCsCc1rv"
                  title="YouTube video player"
                  allowFullScreen
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

    </div>

    </div>
  );
}
