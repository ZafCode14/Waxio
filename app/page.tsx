"use client"
import Link from "next/link";
import Image from "next/image";
import Collection from "@/components/collection";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sectionRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        const scrolled = (scrollLeft / maxScrollLeft) * 100;
        setScrollPercentage(scrolled);
      }
    };

    const section = sectionRef.current;
    section?.addEventListener("scroll", handleScroll);

    return () => {
      section?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className=" flex flex-col items-center justify-start">
      {/** Hero Section */}
      <section className="w-full h-[300px] sm:h-[500px] bg-color-white relative overflow-hidden flex items-end justify-center">
        <div className={`w-full h-full absolute top-0 left-0 flex items-end`}>
          <Image
            src={'images/hero.png'}
            alt="hero image"
            width={1560}
            height={1080}
            className={` object-cover w-full h-full lg:h-auto`}
          />
        </div>
        <div className={`absoute z-10 px-5 pb-10 sm:pb-24 lg:pb-32 w-[1200px] max-w-[full]`}>
          <p className={`hidden sm:block text-[40px] font-bold text-[white] leading-[40px] mb-5`}>Ваши идеи - <br/>наши заботы</p>
          <p className={`text-[white] text-[11px] sm:text-[20px] font-[100] mb-10`}>Превратите свои самые <br/>смелые идеи в реальность</p>
          <Link className={``} href={'/custom'}>
            <button className={`
              bg-[#D9D9D9] text-[#4B4B4B] sm:bg-transparent sm:text-[white] sm:underline sm:underline-offset-4
              rounded-md text-[10px] sm:text-[20px] 
              font-bold px-2 py-1
              `}>СОЗДАЙ СВОЁ</button>
          </Link>
        </div>
      </section>

      {/** Collections Section */}
      <section ref={sectionRef} className={`w-[1200px] max-w-full`}>
        <h2 className={`text-white absolute left-5 z-10 mt-3 text-[12px] sm:text-[24px] sm:static sm:pl-5 sm:my-10`}>Коллекции</h2>
        <div className={`flex overflow-x-auto sm:flex-wrap sm:justify-center lg:justify-between relative sm:px-5`}>
          <Collection
            href={"/jewelry?collection=waxio-britva&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"}
            imageSrc={"/images/waxioCollection.png"}
            name={"WAXIO / BRITVA"}
          />
          <Collection
            href={"/jewelry?collection=skeleton&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"}
            imageSrc={"/images/skelletonCollection.png"}
            name={"SKELLETON"}
          />
          <Collection
            href={"/jewelry?collection=geometric&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"}
            imageSrc={"/images/geometricCollection.png"}
            name={"GEOMETRIC"}
          />
          <Collection
            href={"/jewelry?collection=fracture&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory"}
            imageSrc={"/images/fractureCollection.png"}
            name={"FRACTURE"}
          />
        </div>
        <div className="relative">
          <div className={`sm:hidden absolute z-10 flex justify-center w-full bottom-1`}>
            <div className={`
              ${scrollPercentage <= 16.15 ? "bg-[#ffffff]" : "bg-[#8E8E8D]"} 
              w-1 h-1 m-1 
              rounded-full
            `}></div>
            <div className={`
              ${scrollPercentage > 16.15 && scrollPercentage <= 50 ? "bg-[#ffffff]" : "bg-[#8E8E8D]"} 
              w-1 h-1 m-1 
              rounded-full
            `}></div>
            <div className={`
              ${scrollPercentage > 50 && scrollPercentage <= 83 ? "bg-[#ffffff]" : "bg-[#8E8E8D]"} 
              w-1 h-1 m-1 
              rounded-full
            `}></div>
            <div className={`
              ${scrollPercentage > 83 ? "bg-[#ffffff]" : "bg-[#8E8E8D]"} 
              w-1 h-1 m-1 
              rounded-full
            `}></div>
          </div>
        </div>
      </section>

      {/** Jewlery Section */}
      <section className={`w-full flex flex-col items-center`}>
        <h2 className={`ml-5 mt-2 mb-1 text-white text-[12px] sm:text-[24px] w-[1200px] max-w-full sm:my-10 sm:pl-5`}>Украшения</h2>
        <div className={`flex overflow-x-auto w-full`}>
          {[11, 5, 17, 24, 1, 18, 12, 9, 7, 19].map((index) => {
            return (
              <Link href={`/jewelry/${index}`} key={index} className={`min-w-[33%] sm:min-w-[250px] md:min-w-[300px] mx-[1px] sm:mr-3`}>
                <Image
                  src={`/images/items/${index}/photo1.png`}
                  alt="Item photo"
                  width={1000}
                  height={1080}
                  className={`w-full rounded-md`}
                />
              </Link>
            )
          })
          }
        </div>
      </section>

      {/** Text */}
      <section className={`text-white text-[12px]: sm:text-[30px] md:text-[40px] text-center my-10 md:my-20`}>
        <h3 className={``}>Делаем цацки со <br/> свежим взглядом</h3>
      </section>
    </main>
  );
}