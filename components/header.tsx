"use client";
import Image from "next/image";
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
      <div className="absolute bg-gray-200 w-[300px] h-screen border-l border-l-black flex flex-col items-end" style={{right: showNav ? "0" : "-300px", transition: ".4s ease"}}>
        <Image src={"/icons/x.svg"} width={"100"} height={"100"} alt="exit" className="h-[30px] w-[30px] m-4" onClick={handleNav}/>
        <div className="flex-1 flex flex-col justify-center self-center">
          <div className="flex flex-col relative" onClick={handleType}>
            <p>Ukrasheniya</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[16px] w-[16px] ml-[130px] absolute"/>
          </div>
          <div className="self-center overflow-hidden" style={{height: !showType ? "0" : "75px", transition: ".5s ease"}}>
            <p>type 1</p>
            <p>type 2</p>
            <p>type 3</p>
          </div>
          <div className="flex flex-col" onClick={handleCollection}>
            <p>Kolletcii</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[16px] w-[16px] ml-[130px] absolute"/>
          </div>
          <div className="self-center overflow-hidden" style={{height: !showCollection ? "0" : "75px", transition: ".5s ease"}}>
            <p>type 1</p>
            <p>type 2</p>
            <p>type 3</p>
          </div>
          <p>Sozday Svoyo</p>
          <p>O Nas</p>
        </div>
      </div>
      <div className="flex justify-between items-center h-full">
          <Image src={"/logo.svg"} width={"100"} height={"100"} alt="logo" className="h-[50px] w-[50px]" priority/>
          <Image src={"/icons/menu.svg"} width={"100"} height={"100"} alt="menu" className="h-[40px] w-[40px]" onClick={handleNav}/>
      </div>
    </header>
  );
}

export default Header;