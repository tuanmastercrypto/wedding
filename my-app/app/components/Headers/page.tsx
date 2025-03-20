'use client'
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <div
      id="header"
      className="fixed top-0 left-0 w-full z-50 bg-white md:bg-violet-50 text-center text-4xl font-dancing-script md:relative"
    >
      <div className="row">
        <div className="col col-12">
          <h1 className="text-3xl">
            <span className="inline-block align-middle font-bold">Văn Tuần</span>
            <Heart className="inline-block align-middle w-5 h-5 text-pink-500 mx-1" />
            <span className="inline-block align-middle font-bold">Mỹ Ngọc</span>
          </h1>

          <div className="relative inline-block">
            <span className="relative text-sm text-gray-500 px-4">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-[35px] h-px bg-gray-300"></span>
              Just Married
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-[35px] h-px bg-gray-300"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
