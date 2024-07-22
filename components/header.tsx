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
    <header className="w-full h-[70px] text-black fixed top-0 px-3 z-50 border-b-2 border-b-black bg-color-white">
      <div className="absolute bg-color-white w-[300px] h-screen border-l border-l-black flex flex-col items-end" style={{right: showNav ? "0" : "-300px", transition: ".4s ease"}}>
        <Image src={"/icons/x.svg"} width={"100"} height={"100"} alt="exit" className="h-[20px] w-[20px] m-4 cursor-pointer" onClick={handleNav}/>
        <div className="flex-1 flex flex-col self-start ml-[50px] w-full mt-5">
          <div className="flex flex-col relative cursor-pointer justify-center" onClick={handleType}>
            <p className="text-[20px]">Украшения</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-[160px] absolute" style={{
              transform: showType ? "rotate(180deg)" : "rotate(0deg)"
            }}/>
          </div>
          <div className="overflow-hidden ml-4" style={{height: !showType ? "0" : "190px", transition: ".5s ease"}}>
            <p className="cursor-pointer font-normal py-1">Кольца</p>
            <p className="cursor-pointer font-normal py-1">Подвески</p>
            <p className="cursor-pointer font-normal py-1">Браслеты</p>
            <p className="cursor-pointer font-normal py-1">Серьги</p>
            <p className="cursor-pointer font-normal py-1">Аксессуары</p>
            <p className="cursor-pointer font-normal py-1">Все Украшения</p>
          </div>
          <div className="flex flex-col cursor-pointer justify-center mt-4" onClick={handleCollection}>
            <p className="text-[20px]">Коллекции</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-[160px] absolute" style={{
              transform: showCollection ? "rotate(180deg)" : "rotate(0deg)"
            }}/>
          </div>
          <div className="overflow-hidden ml-4" style={{height: !showCollection ? "0" : "30px", transition: ".5s ease"}}>
            <p className="cursor-pointer font-normal">WAXIO / BRITVA</p>
          </div>
          <p className="cursor-pointer text-[20px] mt-4">На заказ</p>
          <Link href={"/about"}>
            <p className="cursor-pointer text-[20px] mt-4" onClick={handleNav}>О нас</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center h-full">
        <Link href={"/"}>
          <Image src={"/icons/waxio.svg"} width={"100"} height={"100"} alt="menu" className="h-[100px] w-[100px] cursor-pointer"/>
        </Link>
          <Image src={"/icons/menu.svg"} width={"100"} height={"100"} alt="menu" className="h-[30px] w-[30px] cursor-pointer" onClick={handleNav}/>
      </div>
    </header>
  );
}

export default Header;