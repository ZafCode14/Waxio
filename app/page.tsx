"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

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
      width: width >= 1024 ? "calc(100% - 300px)" : "100%"
    }}>
      <section className="w-full h-[600px] bg-color-white mb-3">
        <div className="flex flex-col justify-end items-center p-3 h-full"
        style={{
          backgroundImage: width < 700 ? "url('/images/photo_0x01.png')" : "url('/images/photo_0x02.png')",
          backgroundSize: "cover"
        }}
        >
          <h1 className="text-[22px] text-center px-3 font-bold">Ваши идеи - наши заботы</h1>
          <Link href={'/custom'}>
            <button className="border-2 border-black py-3 w-[300px] mt-5 hover:bg-black hover:text-white max-w-[90%]"><p className="text-[20px]">Перейти</p></button>
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row flex-wrap md:justify-between">
        <Link href={"/jewelry?collection=waxio-britva&type=all"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 md:w-[49.5%] bg-[length:100%] hover:bg-[length:120%]" style={{
          backgroundImage: "url('/images/photo_0x03.jpg')",
          backgroundPosition: "center",
          transition: ".4s ease", 
        }}>
          <p className="text-[white] text-[20px]">WAXIO / BRITVA</p>
        </Link>
        <Link href={"/jewelry?collection=skeleton&type=all"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 md:w-[49.5%] bg-[length:100%] hover:bg-[length:120%]" style={{
          backgroundImage: "url('/images/photo_0x04.png')",
          backgroundPosition: "center",
          transition: ".4s ease"
        }}>
          <p className="text-[white] text-[20px]">SKELETON</p>
        </Link>
        <Link href={"/jewelry?collection=geometric&type=all"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 md:w-[100%] bg-[length:100%] hover:bg-[length:120%]" style={{
          backgroundImage: "url('/images/photo_0x05.png')",
          backgroundPosition: "center",
          transition: ".4s ease"
        }}>
          <p className="text-[white] text-[20px]">GEOMETRIC</p>
        </Link>
        <Link href={"/jewelry?collection=pohui&type=all"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 md:w-[49.5%] bg-[length:100%] hover:bg-[length:120%]" style={{
          backgroundImage: "url('/images/photo_0x06.png')",
          backgroundPosition: "center",
          transition: ".4s ease"
        }}>
          <p className="text-[white] text-[20px]">POHUI</p>
        </Link>
        <Link href={"/jewelry?collection=fracture&type=all"} className="h-[210px] md:h-[300px] w-full flex justify-center items-center mb-3 md:w-[49.5%] bg-[length:100%] hover:bg-[length:120%]" style={{
          backgroundImage: "url('/images/photo_0x07.png')",
          backgroundPosition: "center",
          transition: ".4s ease",
        }}>
          <p className="text-[white] text-[20px]">FRACTURE</p>
        </Link>
      </section>
    </main>
  );
}
