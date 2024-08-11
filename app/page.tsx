"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
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
    <main className=" flex flex-col items-center justify-start px-3" style={{
      width: width >= 640 ? "calc(100% - 300px)" : "100%"
    }}>
      <section className="w-full h-[600px] bg-color-white mb-3 mt-[83px] relative overflow-hidden flex justify-center items-center">
        <Image src={`/images/photo_0x0${width < 700 ? "1" : "2"}.png`} width={"2000"} height={"1000"} alt="waxio" className="absolute h-full object-cover" priority/>
        <div className="flex flex-col justify-end items-center p-3 h-full relative">
          <h1 className="text-[22px] text-center px-3 font-bold">Ваши идеи - наши заботы</h1>
          <Link className="w-full flex justify-center" href={'/custom'}>
            <button className="border-2 border-black py-1 w-[300px] mt-5 hover:bg-black hover:text-white max-w-[90%]"><p className="text-[20px]">Перейти</p></button>
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row flex-wrap md:justify-between">
        <Link href={"/jewelry?collection=waxio-britva&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"} className="overflow-hidden h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 lg:w-[49.5%] relative" style={{
        }}>
          <Image src={"/images/photo_0x03.jpg"} width={"2000"} height={"2000"} alt="waxio" className="cursor-pointer absolute h-full object-cover" priority/>
          <p className="text-[white] text-[20px] relative">WAXIO / BRITVA</p>
        </Link>
        <Link href={"/jewelry?collection=skeleton&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 lg:w-[49.5%] overflow-hidden relative">
          <Image src={"/images/photo_0x04.png"} width={"2000"} height={"2000"} alt="waxio" className="cursor-pointer absolute h-full object-cover" priority/>
          <p className="text-[white] text-[20px] relative">SKELETON</p>
        </Link>
        <Link href={"/jewelry?collection=geometric&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 md:w-[100%] overflow-hidden relative">
          <Image src={"/images/photo_0x05.png"} width={"2000"} height={"2000"} alt="waxio" className="h-full object-cover cursor-pointer absolute" priority/>
          <p className="text-[white] text-[20px] relative">GEOMETRIC</p>
        </Link>
        <Link href={"/jewelry?collection=pohui&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 lg:w-[49.5%] overflow-hidden relative">
          <Image src={"/images/photo_0x06.png"} width={"2000"} height={"2000"} alt="waxio" className="h-full object-cover cursor-pointer absolute" priority/>
          <p className="text-[white] text-[20px] relative">POHUI</p>
        </Link>
        <Link href={"/jewelry?collection=fracture&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 lg:w-[49.5%] overflow-hidden relative">
          <Image src={"/images/photo_0x07.png"} width={"2000"} height={"2000"} alt="waxio" className="h-full object-cover cursor-pointer absolute" priority/>
          <p className="text-[white] text-[20px] relative">FRACTURE</p>
        </Link>
      </section>
    </main>
  );
}
