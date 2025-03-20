'use client'
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";
export default function whis() {
  return (
    <div  className="m-2 text-center text-4xl font-dancing-script  align-center  ">
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
              
            <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto">

                  <div className="flex w-full lg:w-1/2 h-[709] md:h-[709px] overflow-hidden">
                 


                      <Image
                       src="/images/c1.jpg"
                      className="w-full h-full object-cover "
                        width={200}
                        height={200}
                        alt="Văn Tuần "
                    />









                  </div>
                  <div className="w-full lg:w-1/2 bg-gray-100 h-[209] md:h-[709px] flex items-center">
                    <div className="p-6 lg:p-10">
                      <h2 className="text-2xl font-bold mb-4 text-md">Văn Tuần</h2>
                      <p className="text-gray-700  comforta1 text-sm">

                      <TextAnimate animation="blurInUp" by="character" duration={5}>
                      Cảm ơn em đã xuất hiện trong cuộc đời anh, cùng anh chia sẻ những niềm vui, nỗi buồn,
                        những khó khăn và thử thách. Anh yêu em nhiều lắm, chúng ta sẽ cùng nhau xây dựng
                        một mái ấm hạnh phúc em nhé. Yêue
                     </TextAnimate>
                       
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row w-full max-w-screen-xl mx-auto ">
                
                  <div className="w-full lg:w-1/2 bg-gray-100  h-[209] md:h-[709px]  flex items-center">
                    <div className="p-6 lg:p-10">
                    <h2 className="text-2xl font-bold mb-4 text-md">Mỹ ngọc</h2>
                      <p className="text-gray-700  comforta1 text-sm">
                      <TextAnimate animation="blurIn" as="h1"  duration={10}>
      
                      Giữa hàng triệu người, chúng mình chọn ở lại bên nhau.  
                      Không phải vì hoàn hảo, mà vì thấu hiểu và bao dung.  
                      Anh đến như một làn gió mát lành, xoa dịu những tổn thương cũ.  
                      Tình yêu của anh không ồn ào, nhưng đủ sâu để em thấy an yên.  
                      Chúng ta kết hôn, không vì đúng lúc… mà vì đúng người.

                </TextAnimate>

                      </p>
                    </div>
                  </div>
                  <div className="flex w-full lg:w-1/2 h-[709] md:h-[709px] overflow-hidden">
                    
                  <Image
                       src="/images/DSC03672.jpg"
                      className="w-full h-full object-cover "
                        width={200}
                        height={200}
                        alt="Mỹ Ngọc "
                    />

                  </div>
                </div>

              </div>
                            


          

                  
                    
                
          </div>
      </div>
                  







  )
  ;
}
