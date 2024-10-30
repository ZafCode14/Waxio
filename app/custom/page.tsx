"use client";
import Image from "next/image";
import useWindowWidth from "@/hooks/width";
import { useState } from "react";
import Step from "./step";
import Telegram from "@/components/telegram";
import Link from "next/link";
import Vk from "@/components/vk";

export default function Custom() {
  const width = useWindowWidth();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-bold text-white relative z-0 bg-[#101312] w-full">
      {/** Hero Section */}
      <div className="text-white h-[300px] sm:h-[500px] overflow-hidden flex items-center justify-center w-full">
        <div className="w-[1200px] max-w-full absolute top-32 pl-5">
          <h1 className="z-0 font-bold text-[14px] sm:text-[40px]">СОЗДАЙ СВОЮ <br/> ИСТОРИЮ</h1>
          <p className="sm:top-[250px] z-0 font-[100] text-[10px] w-[210px] sm:w-[500px] sm:text-[24px] sm:pr-5">Наш бренд предлагает услуги по созданию индивидуальных украшений, превращая вашу идею в изделие, отражающее ваш стиль и индивидуальность</p>
        </div>
        <Image
          alt="hero image"
          src={'/images/customHero.png'}
          width={2000}
          height={1080}
          className={`h-full object-cover`}
        />
      </div>
      <div className="w-[1200px] max-w-full">
        <p className="text-[10px] w-[245px] ml-5 my-8 sm:my-20 sm:text-[20px] sm:w-[620px]">Создание уникального украшения — это весьма кропотливый процесс, состоящий из нескольких этапов.</p>

        {/** Step 1 */}
        <Step
          number={"01"}
          title={"Визуализация мечты"}
          imageUrl={"/images/custom/photo_0x01.png"}
          text={"Разработка эскиза и 3D-модели будущего украшения, для точного понимания как оно будет выглядеть в жизни"}
          order={false}
        />
        {/** Step 2 */}
        <Step
          number={"02"}
          title={"Восковая основа"}
          imageUrl={"/images/custom/secondPhase.png"}
          text={"Далее происходит создание восковой модели, которая в последствии станет основой для отливки украшения"}
          order={true}
        />
        {/** Step 3 */}
        <Step
          number={"03"}
          title={"Превращение в металл"}
          imageUrl={"/images/custom/photo_0x03.png"}
          text={"После восковая модель отливается в металле, учитывая ваш выбор материала"}
          order={false}
        />
        {/** Step 4 */}
        <Step
          number={"04"}
          title={"Штрихи совершенства"}
          imageUrl={"/images/custom/photo_0x02.png"}
          text={"Когда ваше будущее украшение отлилось, мы приступаем к самому трудоемкому процессу – обработка. На финальном этапе мастер придает украшению окончательный вид, дополняя его всем необходимы для конечного результата"}
          order={true}
        />
        {/** Popup */}
        <div className={`fixed top-0 right-0 w-screen h-screen flex justify-center items-center ${showPopup ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} backdrop-blur-sm transition-opacity duration-400`} onClick={() => setShowPopup(false)}>
          <div onClick={(e) => e.stopPropagation()} className={`bg-[#D9D9D9] mx-5 rounded-md flex flex-col items-center`}>
            <p className={`text-black text-[12px] sm:text-[20px] w-[80%] text-center my-10`}>Вы можете оформить заказ через нашего менеджера</p>
            <div className={`flex mb-10`}>
              <Link href="https://vk.com/waxiojwlr" target="_blank" rel="noopener noreferrer" className={`bg-[#4B4B4B] rounded-md p-2 mx-3 flex items-center justify-center w-[150px] sm:w-[220px]`}>
                <Vk color="white" className="h-[20px] w-[20px] cursor-pointer mr-2 sm:h-[26px] sm:w-[26px] "/>
                <p className="text-[12px] sm:text-[20px]">ВКOHTAKTE</p>
              </Link>
              <Link href="https://t.me/waaxio" target="_blank" rel="noopener noreferrer" className={`bg-[#4B4B4B] rounded-md p-2 flex justify-center items-center w-[150px] sm:w-[220px] sm:py-3`}>
                <Telegram color="white" className="h-[20px] w-[20px] sm:h-[26px] sm:w-[26px] cursor-pointer mr-3"/>
                <p className="text-[12px] sm:text-[20px]">TELEGRAM</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/** Want to learn more ? */}
      <div className="w-screen flex flex-col items-center text-[black] bg-[white] sm:py-10">
        <div className={`w-[1200px] max-w-full flex flex-col items-center`}>
          <p className={`text-[10px] sm:text-[20px] md:text-[26px] font-[100] pl-5 mt-5 w-full`}>Хотите узнать больше о процессе <br/> создания украшений? - Свяжитесь с нами!</p>
          <p className={`text-[10px] pl-5 mt-5 w-full sm:text-[20px] md:text-[26px]`}>Мы с радостью расскажем вам <br/> обо всех этапах и поможем воплотить <br/> ваши самые смелые идеи в реальность</p>
          <button className={`bg-[black] text-[white] rounded-sm text-[10px] py-1 px-2 sm:py-3 sm:px-14 sm:rounded-md my-5 sm:text-[26px] md:mt-16`}
          style={{transition: ".4s ease"}} onClick={() => setShowPopup(true)}
          >Заказать</button>
        </div>
      </div>

    </main>
  );
}
