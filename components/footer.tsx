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
        <footer className="relative w-full bg-color-white flex flex-col justify-center items-center text-black border-t-2 border-t-black pt-5 mt-3" style={{
      width: width >= 1024 ? "calc(100% - 300px)" : "100%"
    }}>
            <div className="flex flex-col items-center border-t-2 border-black w-[80%] pb-4">
                <Image src={"/icons/waxio.svg"} width={"100"} height={"100"} alt="exit" className="h-[auto] w-[150px] m-4 cursor-pointer"/>
                <Link href={'/about'}>
                    <p className="text-[20px] cursor-pointer">О бренде</p>
                </Link>
            </div>
            <div className="bg-color-black h-[100px] w-full flex justify-between items-center">
                <Image src={"/icons/logo.svg"} width={"100"} height={"100"} alt="exit" className="h-[60px] w-[60px] m-4 cursor-pointer"/>
                <div className="flex">
                    <Image src={"/icons/telegram.svg"} width={"100"} height={"100"} alt="exit" className="h-[40px] w-[40px] m-4 cursor-pointer"/>
                    <Image src={"/icons/vk.svg"} width={"100"} height={"100"} alt="exit" className="h-[40px] w-[40px] m-4 cursor-pointer"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;