"use client";
import Image from "next/image";
import Link from "next/link";
import Telegram from "./telegram";
import Vk from "./vk";
import Instagram from "./instagram";
import useWindowWidth from "@/hooks/width";

function Footer() {
  const width = useWindowWidth();

  return (
    <footer className="relative w-full bg-color-white flex flex-col justify-center items-center h-[140px] sm:h-[250px] bg-gradient-to-b from-[#222222] to-[#8E8E8D]">
      <div className="w-full flex flex-col items-center overflow-hidden">
          {/** Logo */}
          <Link href={"/"}>
            <Image 
              src={"/icons/logoWhite.svg"} 
              width={"100"} 
              height={"100"} 
              alt="exit" 
              className="w-[60px] sm:w-[100px] my-4 cursor-pointer"
            />
          </Link>

          {/** Social Media Icons */}
          <div className="flex">
            <Link href="https://www.instagram.com/waxio.jwlr?igsh=MXVubGV1bWZmdjVkOA==" target="_blank" rel="noopener noreferrer" className={`bg-[#4B4B4B] rounded-full p-2 sm:p-3`}>
              <Instagram color="white" className="h-[14px] w-[14px] sm:w-[24px] sm:h-[24px] cursor-pointer"/>
            </Link>
            <Link href="https://vk.com/waxiojwlr" target="_blank" rel="noopener noreferrer" className={`bg-[#4B4B4B] rounded-full p-2 mx-3 sm:mx-8 sm:p-3`}>
              <Vk color="white" className="h-[14px] w-[14px] sm:w-[24px] sm:h-[24px] cursor-pointer"/>
            </Link>
            <Link href="https://t.me/waaxio" target="_blank" rel="noopener noreferrer" className={`bg-[#4B4B4B] rounded-full p-2 sm:p-3`}>
              <Telegram color="white" className="h-[14px] w-[14px] sm:w-[24px] sm:h-[24px] cursor-pointer"/>
            </Link>
          </div>

          {/** Horizontal Line */}
          <div className="px-5 w-full">
            <div className="border-b border-white w-full mt-5 sm:mb-5"></div>
          </div>

          {/** All right Reserved */}
          <p className={`text-[10px] sm:text-[20px] flex-1 flex items-center text-white`}>All rights are reserved</p>
      </div>
    </footer>
  );
}

export default Footer;