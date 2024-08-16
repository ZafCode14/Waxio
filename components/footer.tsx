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
    <footer className="relative w-full bg-color-white flex flex-col justify-center items-center text-black mt-5" style={{
  width: width >= 640 ? "calc(100% - 300px)" : "100%"
}}>
      <div className="bg-[#3D3D3D] h-[60px] w-full flex justify-between items-center overflow-hidden">
          <Link href={"/"}>
            <Image src={"/icons/logo.svg"} width={"100"} height={"100"} alt="exit" className="h-[50px] w-[50px] m-4 cursor-pointer"/>
          </Link>
          <div className="flex">
            <Link href="https://t.me/waaxio" target="_blank" rel="noopener noreferrer">
              <Telegram color="white" className="h-[30px] w-[30px] cursor-pointer"/>
            </Link>
            <Link href="https://vk.com/waxiojwlr" target="_blank" rel="noopener noreferrer">
              <Vk color="white" className="h-[30px] w-[30px] mx-4 cursor-pointer"/>
            </Link>
            <Instagram color="white" className="h-[30px] w-[30px] mr-4 cursor-pointer"/>
          </div>
      </div>
    </footer>
  );
}

export default Footer;