import Link from "next/link";
import Image from "next/image";

export default function Collection() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-[500px] flex justify-center items-center bg-[#D9D9D9]">
        <Image alt="image" src={"/images/image.svg"} height={"100"} width={"100"} className="w-full h-auto"/>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis elementum suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus erat justo, ullamcorper sit amet convallis sit amet, placerat luctus mi.</p>
      <div className="flex flex-wrap">
        <Link href={'collection1/1'} className="w-[50%] bg-gray-300 h-[200px] flex justify-center items-center">
          <p>Item 1</p>
        </Link>
        <div className="w-[50%] bg-gray-200 h-[200px] flex justify-center items-center">
          <p>Item 2</p>
        </div>
        <div className="w-[50%] bg-gray-200 h-[200px] flex justify-center items-center">
          <p>Item 3</p>
        </div>
        <div className="w-[50%] bg-gray-300 h-[200px] flex justify-center items-center">
          <p>Item 4</p>
        </div>
        <div className="w-[50%] bg-gray-300 h-[200px] flex justify-center items-center">
          <p>Item 5</p>
        </div>
        <div className="w-[50%] bg-gray-200 h-[200px] flex justify-center items-center">
          <p>Item 6</p>
        </div>
        <div className="w-[50%] bg-gray-200 h-[200px] flex justify-center items-center">
          <p>Item 7</p>
        </div>
        <div className="w-[50%] bg-gray-300 h-[200px] flex justify-center items-center">
          <p>Item 8</p>
        </div>
      </div>
    </main>
  );
}
