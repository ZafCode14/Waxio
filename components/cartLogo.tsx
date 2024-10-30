"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CartLogo() {
  const [cartCount, setCartCount] = useState(0);
  const p = usePathname();

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

  if (p.startsWith('/cart')) {
    return null;
  }
  return (
    <Link href={'/cart'} className="fixed z-10 right-8 bottom-16 lg:hidden">
      <Image
        alt="Cart Logo"
        src={'/icons/cartLogo.svg'}
        width={100}
        height={100}
        className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"
      />
      {cartCount > 0 &&
        <p className={`
          text-[#ffffff] bg-[#bb1a1a] 
          absolute bottom-[35px] sm:bottom-[50px] right-0 
          flex justify-center items-center
          rounded-full w-5 h-5 sm:w-8 sm:h-8
          text-[10px]
          sm:text-[20px]
        `}>{cartCount}</p>
      }
    </Link>
  );
}

export default CartLogo;