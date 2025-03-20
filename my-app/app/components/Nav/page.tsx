'use client'
import "../../globals.css";
import { HeartPulse } from "lucide-react";
import { Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger, } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Nav() {
  return (
    <div id="nav" className="m-2 text-center text-4xl font-dancing-script  align-center pt-20  md:pt-0 ">
        <div className="hidden md:block">
                <div className="list_nav">
                    <div className="item_nav">
                        <ul className="list-none gap-2 ">
                            <li className="inline-block mx-2 text-sm">
                                <a href="#coup" className="text-gray-700 hover:text-blue-700  comfortaa">Cặp đôi</a>
                               
                            </li>
                            <li className="inline-block mx-2 text-sm">
                               
                                <a href="#stroy" className="text-black-700 hover:text-blue-700  comfortaa">Chuyện tình yêu</a>
                            </li>
                               <li className="inline-block mx-2 text-sm">
                               
                                <a href="#ablum" className="text-gray-700 hover:text-blue-700  comfortaa">Album Hình Cưới</a>
                            </li>
                            <li className="inline-block mx-2 text-sm">
                               
                               <a href="#wishes" className="text-gray-black hover:text-blue-700  comfortaa">Gửi lời chúc</a>
                           </li>
                           
                            


                        </ul>
                    </div>
                </div>
           
        </div>
        <div className="block md:hidden">
             <div className="list_nav flex gap-2  justify-between items-center"> 
                <div className="logo  inline-block">
                    <a href="#home"><span className="inline-block">VT</span> <HeartPulse className="inline-block text-red-700"></HeartPulse> <span className="inline-block">MN</span></a>
                </div>

                <div className="menu inline-block">
                    <Drawer direction="right" >

                    <DrawerTrigger asChild>
                    <Menu className="h-10 w-10"></Menu>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Wedding</DrawerTitle>
            <DrawerDescription>Tính năng</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
          <div className="list_nav">
                    <div className="item_nav">
                        <ul className="list-none gap-2 ">
                            <li className=" mx-2 text-md border-2 border-dotted  p-2 text-center">
                                <a href="#coup" className="text-gray-700 hover:text-blue-700  comfortaa">Cặp đôi</a>
                               
                            </li>
                            <li className="  mx-2 text-md border-2 border-dotted  p-2 text-center">
                               
                                <a href="#stroy" className="text-black-700 hover:text-blue-700  comfortaa">Chuyện tình yêu</a>
                            </li>
                               <li className=" mx-2 text-ơmd border-2 border-dotted  p-2 text-center">
                               
                                <a href="#ablum" className="text-gray-700 hover:text-blue-700  comfortaa">Album Hình Cưới</a>
                            </li>
                            <li className="  mx-2 text-md border-2 border-dotted  p-2 text-center">
                               
                               <a href="#wishes" className="text-gray-black hover:text-blue-700  comfortaa">Gửi lời chúc</a>
                           </li>
                           
                            


                        </ul>
                    </div>
                </div>

            
          </div>
          <DrawerFooter>
            
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
                    
                    
                    </Drawer>
                </div>
            </div>
        </div>
            







    </div>
  );
}
