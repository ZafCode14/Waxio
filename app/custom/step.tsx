import Image from "next/image";

interface Props {
  number: string;
  title: string;
  imageUrl: string;
  text: string;
  order: boolean;
}
function Step({ number, title, imageUrl, text, order }:Props) {
  return (
    <div className={`flex flex-col max-w-full w-[1200px] `}>
      <div className={`flex h-[100px] sm:h-[170px] border-y border-white items-center ${order && "flex-row-reverse"}`}>
        <p className={`w-[40%] text-[54px] sm:text-[64px] text-center`}>{number}</p>
        <p className={`flex-1 px-5 bg-[rgb(255,255,255)] text-[black] h-full flex items-center sm:text-[32px] md:pl-20 lg:pl-32`}>{title}</p>
      </div>
      <div className={`flex items-center`}>
        <Image
          src={imageUrl}
          alt="custom image"
          width={2000}
          height={1080}
          className={`w-[40%]`}
        />
        <p className={`text-[10px] px-5 font-[100] sm:text-[16px] md:text-[20px] lg:text-[26px]`}>{text}</p>
      </div>
    </div>
  );
}

export default Step;