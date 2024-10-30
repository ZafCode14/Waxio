"use client";
import useWindowWidth from "@/hooks/width";
import Image from "next/image";

export default function About() {
  const width = useWindowWidth();

  return (
    <main className="relative z-0 flex flex-col items-center font-bold text-color-black">
      {/** Hero Section */}
      <div className="text-white h-[300px] sm:h-[500px] overflow-hidden">
        <h1 className="absolute top-[160px] sm:top-[250px] z-0 font-bold w-full text-[15px]  sm:text-[40px] flex justify-center">О НАС</h1>
        <p className="absolute top-[200px] sm:top-[280px] z-0 font-[100] text-[12px] sm:text-[32px] sm:mt-10 w-full flex justify-center">Будьте собой с WAXIO.</p>
        <Image
          alt="hero image"
          src={'/images/aboutHero.png'}
          width={2000}
          height={1080}
          className={`h-full object-cover`}
        />
      </div>
      <div className="flex flex-col md:w-[1000px] max-w-full h-full px-5 text-white font-[100] text-[11px] sm:text-[26px] my-10">
        <p className="my-[5px] mt-10 mb-5"><b className="font-bold">WAXIO</b> - это движение, в основе которого лежит любовь к современности и стилю.</p>
        <p className="my-[5px]">Мы создаем украшения, которые не просто украшают, а отражают вашу индивидуальность и помогают вам выразить свою внутреннюю красоту.</p>
        <p className="my-[5px] mb-5">В наше время, в погоне за модой и трендами, мы зачастую теряем идентичность своего стиля. Каждый день тысячи людей задумываются над поиском себя.</p>
        <p className="my-[5px] mb-5"><b className="font-bold">Стиль</b> - это неотъемлемая часть самореализации и самовыражения.  Он подчеркивает вашу уникальность. </p>
        <p className="my-[5px] mb-10"><b className="font-bold">WAXIO</b> - это не просто бренд, это стиль жизни, это выражение вашей индивидуальности.</p>
      </div>
    </main>
  );
}
