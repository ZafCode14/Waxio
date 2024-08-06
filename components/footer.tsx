"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Footer() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.scrollTo(0, 0);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
        <footer className="relative w-full bg-color-white flex flex-col justify-center items-center text-black" style={{
      width: width >= 1024 ? "calc(100% - 300px)" : "100%"
    }}>
            <div className="flex flex-col items-center border-t border-black w-[95%] py-10">
                <Link href={'/about'}>
                    <p className="text-[20px] cursor-pointer font-normal">О бренде</p>
                </Link>
            </div>
            <div className="bg-[#3D3D3D] h-[60px] w-full flex justify-between items-center overflow-hidden">
                <Link href={"/"}>
                  <Image src={"/icons/logo.svg"} width={"100"} height={"100"} alt="exit" className="h-[50px] w-[50px] m-4 cursor-pointer"/>
                </Link>
                <div className="flex">
                    <Image src={"/icons/telegram.svg"} width={"100"} height={"100"} alt="exit" className="h-[30px] w-[30px] m-4 cursor-pointer"/>
                    <Image src={"/icons/vk.svg"} width={"100"} height={"100"} alt="exit" className="h-[30px] w-[30px] m-4 cursor-pointer"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;