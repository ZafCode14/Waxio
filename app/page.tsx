import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-3">
      <section className="w-full h-[600px] bg-gray-400 mb-3">
        <div className="flex flex-col justify-end items-center p-3 h-full"
        style={{
          backgroundImage: "url(./images/photo_0x01.png)",
          backgroundSize: "cover"
        }}
        >
          <h1 className="text-[24px] text-center px-3 font-bold">Ваши идеи - наши заботы</h1>
          <button className="border-2 border-black py-3 w-[300px] mt-5"><p className="text-[20px]">Перейти</p></button>
        </div>
      </section>
      <section className="w-full">
        <Link href={"/collection1"} className="h-[220px] w-full flex justify-center items-center mb-3" style={{
          backgroundImage: "url(./images/photo_0x03.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <p className="text-[white] text-[20px]">WAXIO / BRITVA</p>
        </Link>
        <div className="h-[300px] w-full bg-gray-100 flex justify-center items-center">
          <p>Collection 2</p>
        </div>
        <div className="h-[300px] w-full bg-gray-200 flex justify-center items-center">
          <p>Collection 3</p>
        </div>
        <div className="h-[300px] w-full bg-gray-100 flex justify-center items-center">
          <p>Collection 4</p>
        </div>
      </section>
    </main>
  );
}
