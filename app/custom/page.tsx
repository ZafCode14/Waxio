import Image from "next/image";

export default function Custom() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-3 font-bold">
      <p className="mt-20">Помимо украшений нашего бренда, мы также готовы выполнить индивидуальный заказ. Наша команда поможет воплотить вашу идею в реальность, создав украшение, которое в точности отразит ваш стиль и индивидуальность. </p>
      <p>Создание уникального украшения — это весьма кропотливый процесс, состоящий из нескольких этапов. </p>
      <h4 className="mt-5">Визуализация мечты</h4>
      <p>Разработка эскиза и  3D-модели будущего украшения, для точного понимания как оно будет выглядеть в жизни.</p>
      <h4 className="mt-5">Восковая основа</h4>
      <p>Далее происходит создание восковой модели, которая в последствии станет основой для отливки украшения.</p>
      <h4 className="mt-5">Превращение в металл</h4>
      <p>После восковая модель отливается в металле, учитывая ваш выбор материала.</p>
      <h4 className="mt-5">Штрихи совершенства</h4>
      <p>Когда ваше будущее украшение отлилось, мы приступаем к самому трудоемкому процессу – обработка.  На финальном этапе мастер придает украшению окончательный вид, дополняя его всем необходимым для конечного результата.</p>
      <p>Каждый этап – это кропотливая работа нашей команды, вложенная в создание уникального шедевра.</p>
      <p>Хотите узнать больше о процессе создания украшений? </p>
      <p>Свяжитесь с нами! Мы с радостью расскажем вам обо всех этапах и поможем воплотить ваши самые смелые идеи в реальность.</p>
      <button className="border-2 border-black py-3 w-[300px] mt-5 hover:bg-black hover:text-white"
      style={{transition: ".4s ease"}}
      >Заказать</button>
      <div className="flex h-[300px] overflow-x-scroll my-10 custom-scrollbar">
        <Image alt="image" src={"/images/custom/photo_0x01.png"} height={"2000"} width={"2000"} className="w-auto h-full mr-2"/>
        <Image alt="image" src={"/images/custom/photo_0x02.png"} height={"2000"} width={"2000"} className="w-auto h-full mx-2"/>
        <Image alt="image" src={"/images/custom/photo_0x03.png"} height={"2000"} width={"2000"} className="w-auto h-full mx-2"/>
        <Image alt="image" src={"/images/custom/photo_0x04.png"} height={"2000"} width={"2000"} className="w-auto h-full mx-2"/>
        <Image alt="image" src={"/images/custom/photo_0x05.png"} height={"2000"} width={"2000"} className="w-auto h-full mx-2"/>
        <Image alt="image" src={"/images/custom/photo_0x06.png"} height={"2000"} width={"2000"} className="w-auto h-full mx-2"/>
        <Image alt="image" src={"/images/custom/photo_0x07.png"} height={"2000"} width={"2000"} className="w-auto h-full ml-2"/>
      </div>
    </main>
  );
}