"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Order from "./order";

function Page() {
  const [items, setItems] = useState<any[]>([]);
  const [order, setOrder] = useState(false);

  // Helper function to save items back to localStorage
  const saveToLocalStorage = (updatedItems: any[]) => {
    const flatItems = updatedItems.flatMap((item) => 
      Array(item.quantity).fill({ key: item.key, title: item.title, price: item.price })
    );
    localStorage.setItem("cart", JSON.stringify(flatItems));
  };

  // Increase quantity
  const increaseQuantity = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
    saveToLocalStorage(updatedItems);
    window.dispatchEvent(new Event("cart-updated"));
  };

  // Decrease quantity
  const decreaseQuantity = (index: number) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
    } else {
      updatedItems.splice(index, 1); // Remove item if quantity is 1
    }
    setItems(updatedItems);
    saveToLocalStorage(updatedItems);
    window.dispatchEvent(new Event("cart-updated"));
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

    // Group items by key and add a `quantity` attribute to each unique item
    const uniqueItems = cartItems.reduce((acc: any[], item: any) => {
      const existingItem = acc.find((i) => i.key === item.key);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    setItems(uniqueItems);
  }, []);

  return (
    <main style={{ minHeight: "calc(100vh - 140px)" }} className={`flex justify-center w-full`}>
      <div className={`h-full flex justify-center items-center mt-[130px] w-[1200px] max-w-full`}>
        {items.length > 0 ? (
          <div className="flex flex-col items-center sm:w-[65%] sm:pr-10">
            {items.map((item, index) => (
              <div key={index} className="w-full pl-5 flex mb-5 items-center">
                <Image
                  alt="image"
                  src={`/images/items/${item.key}/photo1.png`}
                  width={1000}
                  height={1080}
                  className="w-[50%] max-w-[250px] pr-5 rounded-md"
                  priority
                />
                <div className="flex flex-col text-white w-full">
                  <p className="text-[12px] sm:text-[14px]">{item.title}</p>
                  <p className="text-[10px] sm:text-[14px] font-[100] self-end pr-5">{item.price} руб</p>
                  <div className="flex items-center font-[100] text-[12px] sm:text-[14px] mt-10">
                    <div className={`bg-white text-[black] px-3`}>
                      <button onClick={() => decreaseQuantity(index)}>-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(index)}>+</button>
                    </div>
                    <p className="ml-3">{item.price * item.quantity} руб</p>
                  </div>
                </div>
              </div>
            ))}
            <p className={`text-[white] self-end pl-5 text-[12px] sm:text-[18px] font-[100] mb-5 sm:mb-10 pr-5`}><b className="font-bold mr-5">Итого: </b> {items.reduce((total, item) => total + item.price * item.quantity, 0)} руб</p>
            <button onClick={() => setOrder(true)} className={`bg-[white] font-bold px-4 py-2 rounded-md text-center text-[14px] sm:text-[20px] mb-10`}>Сделать заказ</button>
          </div>
        ) : (
          <div className="text-center text-white">
            <p className="mb-5">
              упс! <br /> ваша корзина пуста!
            </p>
            <Link
              href="/"
              className="text-black bg-[#D9D9D9] text-[12px] px-5 py-2 rounded-md font-bold"
            >
              Заказать
            </Link>
          </div>
        )}
      </div>
      <Order
        order={order}
        setOrder={setOrder}
        items={items}
      />
    </main>
  );
}

export default Page;