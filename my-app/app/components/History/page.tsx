'use client';
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  Card,
  CardContent,

} from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
export default function His() {
  return (
    <section className=" md:p-2 ">






        <div className="row items-center align-center  ">
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
            
                <div className="flex justify-center ">
                  <span className="relative text-sm text-gray-500 px-4">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-[35px] h-px bg-gray-300"></span>
                      Câu chuyện tình
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-[35px] h-px bg-gray-300"></span>
                  </span>
                </div>


            </div>
          </div>









          <div className="story-section bg-white py-[70px] shadow-[0px_4px_13.65px_7.35px_rgba(178,201,211,0.16)] relative">
          <ul className="relative">
           
            <div className=" hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-[#c89d9c]"></div>
           
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#c89d9c] rounded-full z-10"></div>

            
            {/* <li className="relative overflow-hidden md:mb-10 md:p-10 ">
              <div className="w-full md:w-1/2 md:float-left pr-0 text-right px-4   ">
              
                  <p className="px-1 md:px-10 text-2xl text-center md:text-right ">

                  <TextAnimate animation="blurIn" as="h1"  duration={10}>
          
                    Chúng mình vẫn luôn nghĩ rằng tìm được đối phương là một điều may mắn.
                  
                    Bởi giữa hàng triệu triệu sự dối trá chúng ta vẫn có 1 tình yêu chân thành.
                  
                    Tình yêu của mình không hoàn hảo, nhưng luôn đủ đầy sự chân thật và dịu dàng.
                    
                    Mỗi ánh mắt, mỗi cái nắm tay đều là một lời hứa không lời nhưng đầy ý nghĩa.
                  
                    Chúng ta đã cùng nhau lớn lên, cùng nhau trưởng thành qua từng ngày bên nhau.
                  
                    Và rồi em nhận ra: hạnh phúc không phải ở đâu xa, mà chính là khi có anh ở cạnh.

                  </TextAnimate>

                  </p>

              </div>
              <div className="w-full  md:w-1/2  flex  justify-center  md:block md:float-left px-4">
                
                                      <Image
                                      src="/images/c1.jpg"
                                      className=" object-cover object-top  md:ml-4"
                                        width={400}
                                        height={400}
                                        alt="Văn Tuần "
                                    />
                
              </div>

             
              <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-[3px] border-[#c89d9c] rounded-full z-10"></div>
             
              <div className="hidden md:block absolute bottom-2 left-[calc(50%-140px)] w-[110px] border-b-2 border-dashed border-[#c89d9c]"></div>
            </li> */}

            {/* case1 */}
            <li className="relative overflow-hidden md:mb-10 md:p-10">
              
                <div className="w-full md:w-1/2 md:float-left px-4  flex justify-items-end  md:block ">
                <Card className="relative overflow-hidden md:mr-4 ">
                              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                             
                              <CardContent>
                              <Image
                                    src="/images/c1.jpg"
                                    className="object-cover object-top     rounded-lg "
                                    width={400}
                                    height={400}
                                    alt="Văn Tuần"
                                  />
                              </CardContent>
                             
                            </Card>
                </div>

             
                <div className="w-full md:w-1/2 md:float-left pr-0 text-left px-4  md:max-w-[500px]">
                  <p className="px-1 py-2 md:px-10 text-2xl text-center md:text-left">

                    <TextAnimate animation="slideUp" by="word" duration={5}>
                        
                Chúng mình vẫn luôn nghĩ rằng tìm được đối phương là một điều may mắn.
               
               Bởi giữa hàng triệu triệu sự dối trá chúng ta vẫn có 1 tình yêu chân thành.
              
               Tình yêu của mình không hoàn hảo, nhưng luôn đủ đầy sự chân thật và dịu dàng.
               
               Mỗi ánh mắt, mỗi cái nắm tay đều là một lời hứa không lời nhưng đầy ý nghĩa.
             
               Chúng ta đã cùng nhau lớn lên, cùng nhau trưởng thành qua từng ngày bên nhau.
              
               Và rồi em nhận ra: hạnh phúc không phải ở đâu xa, mà chính là khi có anh ở cạnh.
                      </TextAnimate>
                                      
                  </p>
                </div>

              
                <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-[3px] border-[#c89d9c] rounded-full z-10"></div>

              
                <div className="hidden md:block absolute bottom-2 right-[calc(50%-140px)] w-[110px] border-b-2 border-dashed border-[#c89d9c]"></div>
            </li>

            <li className="relative overflow-hidden md:mb-10 md:p-10">
              
                <div className="w-full md:w-1/2 md:float-right px-4  flex justify-items-start md:block ">

                <Card className="relative overflow-hidden  md:ml-4">
                              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                             
                              <CardContent>
                              <Image
                                    src="/images/DSC03672.jpg"
                                    className="object-cover object-top   rounded-lg "
                                    width={400}
                                    height={400}
                                    alt="Văn Tuần"
                                  />
                              </CardContent>
                             
                            </Card>
                 
                </div>

             
                <div className="w-full md:w-1/2 md:float-end  px-4  md:max-w-[500px]">
                  <p className="px-1 py-2 md:px-10 text-2xl text-center ">

                    <TextAnimate animation="slideUp" by="word" duration={5}>
                      a
                        
                        Chúng mình vẫn luôn nghĩ rằng tìm được đối phương là một điều may mắn.
                      
                      Bởi giữa hàng triệu triệu sự dối trá chúng ta vẫn có 1 tình yêu chân thành.
                      
                      Tình yêu của mình không hoàn hảo, nhưng luôn đủ đầy sự chân thật và dịu dàng.
                      
                      Mỗi ánh mắt, mỗi cái nắm tay đều là một lời hứa không lời nhưng đầy ý nghĩa.
                    
                      Chúng ta đã cùng nhau lớn lên, cùng nhau trưởng thành qua từng ngày bên nhau.
                      
                      Và rồi em nhận ra: hạnh phúc không phải ở đâu xa, mà chính là khi có anh ở cạnh.
                      </TextAnimate>
                                      
                  </p>
                </div>

              
                <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-[3px] border-[#c89d9c] rounded-full z-10"></div>
             
             <div className="hidden md:block absolute bottom-2 left-[calc(50%-140px)] w-[110px] border-b-2 border-dashed border-[#c89d9c]"></div>
            </li>

          </ul>
</div>

    </section>
  );
}
