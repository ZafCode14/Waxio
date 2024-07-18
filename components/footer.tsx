import Image from "next/image";

function Footer() {
    return (
        <footer className="relative w-full bg-white flex flex-col justify-center items-center text-black border-t border-t-black pt-5">
            <div className="flex flex-col items-center border-t-2 border-black w-[80%] pb-4">
                <p className="text-[50px]">WAXIO</p>
                <p className="text-[20px]">О бренде</p>
            </div>
            <div className="bg-black h-[70px] w-full flex justify-between items-center">
                <p>logo</p>
                <div className="flex">
                    <Image src={"/icons/telegram.svg"} width={"100"} height={"100"} alt="exit" className="h-[40px] w-[40px] m-4 cursor-pointer"/>
                    <Image src={"/icons/vk.svg"} width={"100"} height={"100"} alt="exit" className="h-[40px] w-[40px] m-4 cursor-pointer"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;