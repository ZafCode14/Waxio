"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

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

  const handleNav = () => {
    setShowNav(!showNav);
  }
  const handleType = () => {
    setShowType(!showType);
  }
  const handleCollection = () => {
    setShowCollection(!showCollection);
  }

  const handleLinkClick = (href: string) => {
    handleNav();
    router.push(href);
  }

  return (
    <header className="w-full h-[70px] text-black fixed top-0 px-3 z-50 border-b-2 border-b-black bg-color-white">
      <div className="absolute bg-color-white w-[300px] h-screen border-l border-l-black flex flex-col items-end" style={{right: showNav ? "0" : `${width > 1024 ? "0" : "-300px"}`, transition: ".4s ease"}}>
        <Image src={"/icons/x.svg"} width={"100"} height={"100"} alt="exit" className="h-[20px] w-[20px] m-4 cursor-pointer" onClick={handleNav} priority style={{
          display: width > 1024 ? "none" : "block"
        }}/>
        <div className="flex-1 flex flex-col self-start ml-[50px] w-full mt-5">
          <div className="flex flex-col relative cursor-pointer justify-center lg:mt-14" onClick={handleType}>
            <p className="text-[20px]">Украшения</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-[160px] absolute" style={{
              transform: showType ? "rotate(180deg)" : "rotate(0deg)"
            }}/>
          </div>
          <div className="overflow-hidden ml-4 flex flex-col" style={{height: !showType ? "0" : "190px", transition: ".5s ease"}}>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=all&type=ring")}>Кольца</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=all&type=pendant")}>Подвески</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=all&type=bracelet")}>Браслеты</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=all&type=earring")}>Серьги</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=all&type=accessory")}>Аксессуары</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=all&type=all")}>Все Украшения</p>
          </div>
          <div className="flex flex-col cursor-pointer justify-center mt-4" onClick={handleCollection}>
            <p className="text-[20px]">Коллекции</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-[160px] absolute" style={{
              transform: showCollection ? "rotate(180deg)" : "rotate(0deg)"
            }}/>
          </div>
          <div className="overflow-hidden ml-4" style={{height: !showCollection ? "0" : "195px", transition: ".5s ease"}}>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=waxio-britva&type=all")}>WAXIO / BRITVA</p>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=skeleton&type=all")}>SKELETON</p>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=geometric&type=all")}>GEOMETRIC</p>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=pohui&type=all")}>POHUI</p>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=fracture&type=all")}>FRACTURE</p>
          </div>
          <p className="cursor-pointer text-[20px] mt-4">На заказ</p>
          <p className="cursor-pointer text-[20px] mt-4" onClick={() => handleLinkClick("/about")}>О нас</p>
        </div>
      </div>
      <div className="flex justify-between items-center h-full">
        <Link href={"/"}>
          <Image src={"/icons/waxio.svg"} width={"100"} height={"100"} alt="waxio" className="h-[100px] w-[100px] cursor-pointer" priority/>
        </Link>
        <Image src={"/icons/menu.svg"} width={"100"} height={"100"} alt="menu" className="h-[30px] w-[30px] cursor-pointer" onClick={handleNav}/>
      </div>
    </header>
  );
}

export default Header;