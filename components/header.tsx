"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  }
  const handleType = () => {
    setShowType(!showType);
  }
  const handleCollection = () => {
    setShowCollection(!showCollection);
  }
  return (
    <header className="w-full h-[70px] text-black fixed top-0 px-3 z-50 border-b border-b-black bg-white">
      <div className="absolute bg-white w-[300px] h-screen border-l border-l-black flex flex-col items-end" style={{right: showNav ? "0" : "-300px", transition: ".4s ease"}}>
        <Image src={"/icons/x.svg"} width={"100"} height={"100"} alt="exit" className="h-[30px] w-[30px] m-4 cursor-pointer" onClick={handleNav}/>
        <div className="flex-1 flex flex-col self-start ml-[50px] w-full mt-5">
          <div className="flex flex-col relative cursor-pointer" onClick={handleType}>
            <p className="text-[20px]">Украшения</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[16px] w-[16px] ml-[130px] absolute"/>
          </div>
          <div className="overflow-hidden ml-4" style={{height: !showType ? "0" : "120px", transition: ".5s ease"}}>
            <p className="cursor-pointer font-normal">Кольца</p>
            <p className="cursor-pointer font-normal">Подвески</p>
            <p className="cursor-pointer font-normal">Браслеты</p>
            <p className="cursor-pointer font-normal">Серьги</p>
            <p className="cursor-pointer font-normal">Аксессуары</p>
          </div>
          <div className="flex flex-col cursor-pointer" onClick={handleCollection}>
            <p className="text-[20px]">Коллекции</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[16px] w-[16px] ml-[130px] absolute"/>
          </div>
          <div className="overflow-hidden ml-4" style={{height: !showCollection ? "0" : "25px", transition: ".5s ease"}}>
            <p className="cursor-pointer font-normal">WAXIO / BRITVA</p>
          </div>
          <p className="cursor-pointer text-[20px]">На заказ</p>
          <p className="cursor-pointer text-[20px]">О нас</p>
        </div>
      </div>
      <div className="flex justify-between items-center h-full">
        <Link href={"/"}>
          <p className="text-[30px]">WAXIO</p>
        </Link>
          <Image src={"/icons/menu.svg"} width={"100"} height={"100"} alt="menu" className="h-[30px] w-[30px] cursor-pointer" onClick={handleNav}/>
      </div>
    </header>
  );
}

export default Header;