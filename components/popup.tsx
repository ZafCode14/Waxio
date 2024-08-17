/* eslint-disable @next/next/no-img-element */
"use client";
import useWindowWidth from "@/hooks/width";
import Link from "next/link";
import Telegram from "./telegram";
import Vk from "./vk";
import { useState } from "react";

interface GifProp {
  gif: string;
  display: string;
  className: string;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  message: string;
}
function Popup({ gif, display, setShowPopup, className, title, message }: GifProp) {
  const width = useWindowWidth();
  const [overTelegram, setOverTelegram] = useState(false);
  const [overVk, setOverVk] = useState(false);

  return (
    <div className="fixed top-10 left-0 flex justify-center items-center z-[3000]" style={{
      width: width >= 640 ? "calc(100vw - 300px)" : "100vw",
      height: "calc(100vh - 70px)",
      display: display,
    }} onClick={() => setShowPopup(prev => !prev)}>
      <div className="bg-white w-[400px] max-w-[90%] border border-black p-5 flex flex-col items-center">
        <h2 className="text-[28px] text-black font-bold">{title}</h2>
        <div className="h-[240px] overflow-hidden flex justify-center self-center">
          <img
            src={gif}
            alt="cat meme gif"
            className={className}
          />
        </div>
        <p className="text-[20px] my-5">{message}</p>
        <Link href={"https://t.me/waxio_w"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-black px-10 py-2 w-[230px] mb-3" onMouseEnter={() => setOverTelegram(true)} onMouseLeave={() => setOverTelegram(false)} style={{
          backgroundColor: overTelegram ? "black" : "transparent",
          transition: ".4s ease"
        }}>
          <Telegram color={overTelegram ? "white" : "black"} className="h-8 w-8 mr-4"/>
          <p className="text-[20px]" style={{
            color: overTelegram ? "white" : "black",
          }}>Telegram</p>
        </Link>
        <Link href={"https://vk.com/waxiojwlr"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-black px-10 py-2 w-[230px]" onMouseEnter={() => setOverVk(true)} onMouseLeave={() => setOverVk(false)} style={{
          backgroundColor: overVk ? "black" : "transparent",
          transition: ".4s ease"
        }}>
          <Vk color={overVk ? "white" : "black"} className="h-8 w-8 mr-4"/>
          <p className="text-[20px]" style={{
            color: overVk ? "white" : "black"
          }}>ВКонтакте</p>
        </Link>
      </div>
    </div>
  );
}

export default Popup;