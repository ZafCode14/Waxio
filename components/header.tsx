"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Header() {
  const p = usePathname();
  const [cartCount, setCartCount] = useState(0);

  // Function to retrieve cart items from localStorage
  const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cartItems.length); // Update the cart count
  };

  // Initial load of cart items
  useEffect(() => {
    getCartItems(); // Retrieve cart count when component mounts

    // Listen to 'storage' event and 'cart-updated' event to detect changes in localStorage
    const handleStorageChange = () => {
      getCartItems(); // Update cart count when storage or cart is updated
    };

    window.addEventListener("cart-updated", handleStorageChange); // Listen to custom event

    return () => {
      window.removeEventListener("cart-updated", handleStorageChange); // Cleanup event listener
    };
  }, []);

  return (
    <header className={`w-full text-black fixed top-0 z-50 ${p === '/' ? "bg-[#8e8e8dc7]" : "bg-[#8e8e8d]"} flex items-center justify-center`}>
      <div className={`w-full flex flex-col items-center justify-center`}>
        {/** Logo for the header mobile view */}
        <div className={`
          flex justify-around items-center 
          h-[50px]
          lg:h-[80px]
          w-[1000px] max-w-full
        `}>
          <Link href={`/jewelry?collection=%2Cskeleton%2Cgeometric%2Cpohui%2Cwaxio-britva%2Cother%2Cfracture&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory`} className={`hidden lg:block ${p.startsWith('/jewelry') && "font-bold"}`}>Украшения</Link>
          <Link href={'/custom'} className={`hidden lg:block ${p.startsWith('/custom') && "font-bold"}`}>На заказ</Link>

          <Link href={'/'}>
            <Image
              src={'/icons/logo.svg'}
              alt="Logo"
              width={50}
              height={50}
              className={`h-full w-[60px] object-contain sm:w-[100px]`}
            />
          </Link>

          <Link href={'/about'} className={`hidden lg:block ${p.startsWith('/about') && "font-bold"}`}>О нас</Link>
          <Link href={'/cart'} className={`hidden lg:flex ${p.startsWith('/cart') && "bg-[#7e7e7e]"} w-[50px] h-[50px] justify-center items-center rounded-full`}>
            <Image
              src={'/icons/cartHeader.svg'}
              alt="Logo"
              width={50}
              height={50}
              className={`h-full w-[24px] object-contain`}
            />
            <div className={`relative`}>
              <div className={`${cartCount < 1 && "hidden"} absolute w-5 h-5 flex justify-center items-center bg-[red] text-white rounded-full bottom-2 left-0 text-[14px]`}>{cartCount}</div>
            </div>
          </Link>
        </div>

        {/** Nav for the mobile view */}
        <div className={`
          ${p === '/' ? "bg-[#e4e4e4cb]" : "bg-[#E4E4E4]"}
          h-[40px]
          flex w-full justify-around items-center 
          text-[12px] sm:text-[16px]
          lg:hidden
        `}>
          <Link href={`/jewelry?collection=%2Cskeleton%2Cgeometric%2Cpohui%2Cwaxio-britva%2Cother%2Cfracture&type=ring%2Cpendant%2Cearring%2Cbracelet%2Caccessory`} className={`${p.startsWith('/jewelry') && "font-bold"}`}>Украшения</Link>
          <Link href={'/custom'} className={`${p.startsWith('/custom') && "font-bold"}`}>На заказ</Link>
          <Link href={'/about'} className={`${p.startsWith('/about') && "font-bold"}`}>О нас</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;