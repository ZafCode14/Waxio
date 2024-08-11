"use client";
import { useEffect, useState } from "react";

export default function About() {
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
    <main className="flex flex-col items-center mx-3 font-bold text-color-black" style={{
      minHeight: "calc(100vh - 60px)",
      maxWidth: width >= 640 ? "calc(100% - 325px)" : "100%"
    }}>
      <div className="flex flex-col md:w-[500px] max-w-full h-full">
        <h1 className="mt-[95px] mb-2 text-center text-[24px] text-black self-start">О НАС</h1>
        <p className="my-[5px]"><b className="text-[18px] text-black">WAXIO</b> - это движение, в основе которого лежит любовь к современности и стилю.</p>
        <p className="my-[5px]">Мы создаем украшения, которые не просто украшают, а отражают вашу индивидуальность и помогают вам выразить свою внутреннюю красоту.</p>
        <p className="my-[5px]">В наше время, в погоне за модой и трендами, мы зачастую теряем идентичность своего стиля. Каждый день тысячи людей задумываются над поиском себя.</p>
        <p className="my-[5px]"><b className="text-[18px] text-black">Стиль</b> - это неотъемлемая часть самореализации и самовыражения.  Он подчеркивает вашу уникальность. </p>
        <p className="my-[5px]"><b className="text-[18px] text-black">WAXIO</b> - это не просто бренд, это стиль жизни, это выражение вашей индивидуальности.</p>
        <p className="self-center text-black text-[20px] mt-[70px]">Будьте собой с WAXIO.</p>
      </div>
    </main>
  );
}
