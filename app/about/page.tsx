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
    <main className="flex flex-col items-center justify-center mx-3 font-bold text-[#494949] min-h-[80vh]" style={{
      maxWidth: width >= 1024 ? "calc(100% - 300px)" : "100%"
    }}>
      <h1 className="mt-20 mb-2 text-center text-[20px] text-black">WAXIO - больше, чем просто украшения.</h1>
      <div className="flex flex-col md:w-[500px]">
        <div className="w-full border border-black"></div>
        <p className="my-[10px]"><b className="text-[18px] text-black">WAXIO</b> - это движение, в основе которого лежит любовь к современности и стилю.</p>
        <p className="my-[10px]">Мы создаем украшения, которые не просто украшают, а отражают вашу индивидуальность и помогают вам выразить свою внутреннюю красоту.</p>
        <p className="my-[10px]">В наше время, в погоне за модой и трендами, мы зачастую теряем идентичность своего стиля. Каждый день тысячи людей задумываются над поиском себя.</p>
        <p className="my-[10px]"><b className="text-[18px] text-black">Стиль</b> - это неотъемлемая часть самореализации и самовыражения.  Он подчеркивает вашу уникальность. </p>
        <p className="my-[10px]"><b className="text-[18px] text-black">WAXIO</b> - это не просто бренд, это стиль жизни, это выражение вашей индивидуальности.</p>
        <div className="w-full border border-black"></div>
        <p className="self-center text-black">Будьте собой с WAXIO.</p>
      </div>
    </main>
  );
}
