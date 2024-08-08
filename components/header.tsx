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
    <header className="w-full h-[70px] text-black fixed top-0 px-3 z-50 bg-color-yellow">
      <div className="absolute bg-color-yellow w-[300px] h-screen flex flex-col items-end" style={{
        right: showNav ? "0" : `${width >= 1024 ? "0" : "-300px"}`, 
        transition: ".4s ease",
        zIndex: "1000"
        }}>
        <Image src={"/icons/x.svg"} width={"100"} height={"100"} alt="exit" className="h-[20px] w-[20px] m-4 cursor-pointer" onClick={handleNav} priority style={{
          display: width >= 1024 ? "none" : "block"
        }}/>
        <div className="flex-1 flex flex-col self-start ml-[50px] w-full mt-5">
          <div className="flex flex-col relative cursor-pointer justify-center lg:mt-14" onClick={handleType}>
            <p className="text-[20px]">Украшения</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-[160px] absolute" style={{
              transform: showType ? "rotate(180deg)" : "rotate(0deg)"
            }}/>
          </div>
          <div className="overflow-hidden ml-4 flex flex-col" style={{height: !showType ? "0" : "190px", transition: ".5s ease"}}>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=%2Cskeleton%2Cgeometric%2Cpohui%2Cwaxio-britva%2Cother%2Cfracture&type=ring")}>Кольца</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=%2Cskeleton%2Cgeometric%2Cpohui%2Cwaxio-britva%2Cother%2Cfracture&type=pendant")}>Подвески</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=%2Cskeleton%2Cgeometric%2Cpohui%2Cwaxio-britva%2Cother%2Cfracture&type=bracelet")}>Браслеты</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=%2Cskeleton%2Cgeometric%2Cpohui%2Cwaxio-britva%2Cother%2Cfracture&type=earring")}>Серьги</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=%2Cskeleton%2Cgeometric%2Cpohui%2Cwaxio-britva%2Cother%2Cfracture&type=accessory")}>Аксессуары</p>
            <p className="cursor-pointer font-normal py-1" onClick={() => handleLinkClick("/jewelry?collection=%2Cskeleton%2Cgeometric%2Cpohui%2Cwaxio-britva%2Cother%2Cfracture&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory")}>Все Украшения</p>
          </div>
          <div className="flex flex-col cursor-pointer justify-center mt-4" onClick={handleCollection}>
            <p className="text-[20px]">Коллекции</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-[160px] absolute" style={{
              transform: showCollection ? "rotate(180deg)" : "rotate(0deg)"
            }}/>
          </div>
          <div className="overflow-hidden ml-4" style={{height: !showCollection ? "0" : "195px", transition: ".5s ease"}}>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=waxio-britva&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory")}>WAXIO / BRITVA</p>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=skeleton&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory")}>SKELETON</p>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=geometric&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory")}>GEOMETRIC</p>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=pohui&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory")}>POHUI</p>
            <p className="cursor-pointer font-normal" onClick={() => handleLinkClick("/jewelry?collection=fracture&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory")}>FRACTURE</p>
          </div>
          <p className="cursor-pointer text-[20px] mt-4" onClick={() => handleLinkClick("/custom")}>На заказ</p>
          <p className="cursor-pointer text-[20px] mt-4" onClick={() => handleLinkClick("/about")}>О нас</p>
          <div className="flex absolute bottom-[70px] right-[20px]">
            <svg width="100" height="84" viewBox="0 0 100 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] m-4 cursor-pointer">
              <path d="M53.1 65.0504C51.5 66.6204 49.92 68.1503 48.36 69.6903C45.89 72.1103 43.42 74.5303 40.97 76.9703C40.27 77.6703 39.54 78.1803 38.53 77.7003C37.55 77.2303 37.55 76.3503 37.61 75.4303C38.08 68.8703 38.52 62.3003 39.03 55.7403C39.07 55.2303 39.45 54.6504 39.84 54.2904C47.94 46.8004 56.07 39.3305 64.19 31.8605C69.22 27.2305 74.26 22.5903 79.29 17.9603C79.53 17.7403 79.84 17.5404 79.98 17.2604C80.1 17.0104 80.17 16.5402 80.03 16.3902C79.83 16.1902 79.41 16.1303 79.1 16.1603C78.83 16.1903 78.59 16.4304 78.34 16.5804C60.91 27.2404 43.47 37.8904 26.04 48.5704C25.35 48.9904 24.77 49.0704 24 48.8004C16.99 46.3804 9.95999 44.0005 2.93999 41.6205C1.00999 40.9605 0.139986 39.9803 0.119986 38.4103C0.0999857 36.8703 0.92 35.8603 2.76 35.1603C26.73 25.9803 50.7 16.8005 74.67 7.62046C80.36 5.44046 86.05 3.26045 91.75 1.10044C93.75 0.340445 95.61 0.660426 97.2 2.08043C98.76 3.46043 99.32 5.21036 98.87 7.26036C98.38 9.52036 97.89 11.7804 97.4 14.0404C92.64 35.6304 87.89 57.2204 83.13 78.8104C83.04 79.2404 82.96 79.6804 82.84 80.1004C81.97 83.1704 78.6 84.2804 75.97 82.3104C72.17 79.4704 68.4 76.5903 64.62 73.7303C61.1 71.0703 57.58 68.4003 54.06 65.7403C53.77 65.5203 53.47 65.3204 53.1 65.0604V65.0504Z" fill="black"/>
            </svg>
            <svg width="142" height="84" viewBox="0 0 142 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] m-4 cursor-pointer">
              <path d="M141.85 77.6001V80.0901C140.89 82.3201 139.07 83.1299 136.79 83.1799C136.24 83.1899 135.69 83.2 135.13 83.2C130.99 83.2 126.83 83 122.7 83.26C118.5 83.52 115.34 81.9299 112.61 78.9199C109.42 75.4099 106.26 71.8499 102.78 68.6399C99.4799 65.5899 95.8499 62.89 92.2499 60.2C90.5399 58.92 88.4699 58.34 86.2599 58.51C84.4099 58.65 83.5799 59.2999 83.2999 61.1499C83.1299 62.2799 83.0299 63.4401 83.0199 64.5901C82.9899 69.0101 83.0499 73.4301 83.0199 77.8501C82.9999 80.3901 82.0299 81.6299 79.6099 82.3999C78.9599 82.6099 78.2799 82.7801 77.5999 82.8701C72.1099 83.5801 66.6699 83.2599 61.2999 81.8899C48.4499 78.6099 37.9999 71.4399 29.5899 61.4199C19.3599 49.2299 11.1799 35.69 5.10986 20.96C3.15986 16.23 1.91986 11.2101 0.359863 6.32009C0.359863 5.49009 0.359863 4.6601 0.359863 3.8301C1.03986 1.5901 2.71989 0.780027 4.88989 0.760027C9.62989 0.730027 14.3799 0.739988 19.1199 0.719988C23.7799 0.689988 25.8899 0.2299 28.3299 7.1299C31.3199 15.6099 34.9399 23.82 39.6799 31.47C42.3099 35.72 45.3699 39.7199 48.4399 43.6599C49.4999 45.0199 51.0999 46.0799 52.6499 46.9099C54.3899 47.8399 55.7999 46.9901 56.2399 45.0601C56.4199 44.2601 56.5199 43.4201 56.5199 42.6001C56.5499 34.8201 56.5999 27.03 56.5499 19.25C56.5199 15.08 55.2599 11.2801 52.4799 8.07009C51.9699 7.48009 51.4799 6.85996 51.0699 6.18996C49.6199 3.80996 50.9599 1.10004 53.7399 0.770036C54.2899 0.710036 54.8399 0.719988 55.3999 0.719988C60.7899 0.719988 66.1799 0.719988 71.5599 0.719988C74.1399 0.719988 76.7199 0.690027 79.2999 0.760027C81.2899 0.820027 82.3799 1.71994 82.7699 3.66994C82.9899 4.78994 83.0299 5.95011 83.0399 7.10011C83.0599 16.5401 83.0399 25.9799 83.0599 35.4199C83.0599 36.4299 83.1199 37.4599 83.3499 38.4299C83.8399 40.4899 85.2899 41.2601 87.1999 40.3701C88.4299 39.8001 89.6899 39.0501 90.5799 38.0501C93.4899 34.8001 96.4599 31.5701 99.0099 28.0401C104.15 20.9401 108.18 13.1699 111.71 5.14992C112.92 2.39992 114.88 0.760007 117.95 0.740007C123.52 0.700007 129.09 0.670017 134.67 0.750017C138.3 0.800017 139.83 2.76995 138.61 6.17995C137.4 9.57995 136.03 13.0201 134.14 16.0701C129.03 24.3201 123.66 32.41 118.3 40.5C115.62 44.54 115.63 45.8401 119.05 49.3401C119.21 49.5001 119.38 49.6601 119.54 49.8301C122.58 52.9701 125.71 56.04 128.65 59.27C133.74 64.88 139.04 70.3501 141.88 77.6001H141.85Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-full">
        <Link href={"/"}>
          <Image src={"/icons/waxio.svg"} width={"100"} height={"100"} alt="waxio" className="h-[100px] w-[100px] cursor-pointer" priority/>
        </Link>
        <Image src={"/icons/menu.svg"} width={"100"} height={"100"} alt="menu" className="h-[30px] w-[30px] cursor-pointer" onClick={handleNav} style={{
          transform: "scaleY(0.8)"
        }}/>
      </div>
    </header>
  );
}

export default Header;