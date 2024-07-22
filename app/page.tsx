import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-3">
      <section className="w-full h-[600px] bg-color-white mb-3">
        <div className="flex flex-col justify-end items-center p-3 h-full"
        style={{
          backgroundImage: "url(./images/photo_0x01.png)",
          backgroundSize: "cover"
        }}
        >
          <h1 className="text-[22px] text-center px-3 font-bold">Ваши идеи - наши заботы</h1>
          <Link href={'/custom'}>
            <button className="border-2 border-black py-3 w-[300px] mt-5 hover:bg-black hover:text-white"><p className="text-[20px]">Перейти</p></button>
          </Link>
        </div>
      </section>
      <section className="w-full">
        <Link href={"/waxio"} className="h-[220px] w-full flex justify-center items-center mb-3" style={{
          backgroundImage: "url(./images/photo_0x03.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <p className="text-[white] text-[20px]">WAXIO / BRITVA</p>
        </Link>
        <Link href={"/skeleton"} className="h-[220px] w-full flex justify-center items-center mb-3" style={{
          backgroundImage: "url(./images/photo_0x04.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <p className="text-[white] text-[20px]">SKELETON</p>
        </Link>
        <Link href={"/geometric"} className="h-[220px] w-full flex justify-center items-center mb-3" style={{
          backgroundImage: "url(./images/photo_0x05.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <p className="text-[white] text-[20px]">GEOMETRIC</p>
        </Link>
      </section>
    </main>
  );
}
