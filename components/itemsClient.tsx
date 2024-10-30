"use client";
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import data from '@/data/items';
import Link from 'next/link';

interface ItemPageClientProps {
  itemId: number;
}

const ItemPageClient = ({ itemId }: ItemPageClientProps) => {
  const [activePhoto, setActivePhoto] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(data[itemId].price);
  const itemsFromCollection = Object.values(data).filter(
    (item) => item.collection === data[itemId].collection && item.key !== data[itemId].key
  );
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Calculate total price for items with the matching key
  const calculateTotalPrice = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems
      .filter((item: any) => item.key === data[itemId].key)
      .reduce((total: number, item: any) => total + itemPrice, 0);
    
    setItemPrice(cartItems);
  };

  // Function to retrieve the count of specific items in cart
  const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const count = cartItems.filter((item: any) => item.key === data[itemId].key).length;
    setCartCount(count); // Update the cart count with the specific item's count
  };

  const turnCollectionToName = (collection: string) => {
    let collectionName;

    if (collection === "skeleton") {
      collectionName = "SKELETON";
    } else if (collection === "geometric") {
      collectionName = "GEOMETRIC";
    } else if (collection === "waxio-britva") {
      collectionName = "WAXIO / BRITVA";
    } else if (collection === "pohui") {
      collectionName = "POHUI";
    } else if (collection === "fracture") {
      collectionName = "FRACTURE";
    } else if (collection === "other") {
      collectionName = "Другое";
    } else if (collection === "all") {
      collectionName = "Все Коллекции";
    }
    return collectionName;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const handleImageClick = (index: number) => {
    setActivePhoto(index + 1);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActivePhoto((prev) => (prev + 1 > data[itemId].photo.length ? 1 : prev + 1));
    } else if (direction === 'right') {
      setActivePhoto((prev) => (prev - 1 < 1 ? data[itemId].photo.length : prev - 1));
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true,
  });

  const AddToCart = (item: any): void => {
    const cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Manually dispatch a custom event to notify other components of cart changes
    window.dispatchEvent(new Event("cart-updated"));
 
  };

  const RemoveFromCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Find the index of the first occurrence of the item with the matching key
    const itemIndex = cart.findIndex((item: any) => item.key === data[itemId].key);

    // Remove only that item if it exists
    if (itemIndex > -1) {
      cart.splice(itemIndex, 1); // Remove one item at the found index
      localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage

      // Update cart count and notify other components
      setCartCount(cart.length);
      window.dispatchEvent(new Event("cart-updated"));
    }
  };

  return (
    <main className="flex flex-col items-center relative text-white">
      {/** The info on top */}
      <p className="mt-[110px] mb-2 px-3 text-[10px] sm:text-[20px] font-[100] w-[1200px] max-w-full sm:mb-10">
        Украшения &gt; {turnCollectionToName(data[itemId].collection)} &gt;{" "}
        {data[itemId].title}
      </p>

      {/** Item Part */}
      <div className="max-w-full flex w-[1200px]">

        {/** Images of the Item */}
        <div className="px-3 w-[50%]">
          <div {...handlers} className="relative overflow-hidden">
            <div
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${(activePhoto - 1) * 100}%)` }}
            >
              {data[itemId].photo.map((photo, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={`/images/items/${itemId}/${photo}.png`}
                    width={1920}
                    height={1080}
                    alt={`photo${itemId}`}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex overflow-x-auto mt-2">
            {data[itemId].photo.map((photo, index) => (
              <Image
                key={photo}
                src={`/images/items/${itemId}/${photo}.png`}
                width={80}
                height={80}
                alt={`photo${itemId}`}
                className="h-[50px] w-[50px] cursor-pointer object-cover mr-2"
                priority
                onClick={() => handleImageClick(index)}
                style={{
                  border: index + 1 === activePhoto ? "2px solid black" : "1px solid gray",
                }}
              />
            ))}
          </div>
        </div>

        {/** Item info */}
        <div className="pr-3 w-[50%] flex flex-col lg:pl-[150px]">
          <h3 className="text-[12px] sm:text-[24px]">{data[itemId].title}</h3>
          <p className="text-[8px] self-end font-[100] sm:text-[20px]">{formatPrice(data[itemId].price)} руб</p>
          <p className="pb-0 text-[9px] sm:text-[20px]">Описание</p>
          <p
            className="text-[10px] font-[100] sm:text-[16px]"
            dangerouslySetInnerHTML={{
              __html: data[itemId].description.replace(/\n/g, "<br/>"),
            }}
          ></p>
          {cartCount > 0 ?
          <div className={`flex justify-between items-center mt-3`}>
            <p className={`bg-[white] rounded-md text-black text-[14px] sm:text-[20px] px-3`}>
              <span onClick={() => RemoveFromCart()}>-</span> <span className={`mx-3 sm:mx-7`}>{cartCount}</span> <span onClick={() => AddToCart(data[itemId])}>+</span>
            </p>
            <p className={`text-[12px] sm:text-[20px]`}>{itemPrice * cartCount} руб</p>
          </div>
          :
          <button
            className={`mt-3 py-1 font-bold text-[10px] sm:text-[20px] sm:mt-5 text-[black] bg-[#D9D9D9]`}
            style={{ transition: ".4s ease" }}
            onClick={() => AddToCart(data[itemId])}
          >Добавить</button>
          }
        </div>
      </div>

      {/** Items from collection */}
      <div className={`max-w-full mt-5 pl-5 sm:mt-10 w-[1200px]`}>
        <p className={`text-[12px] sm:text-[20px] sm:mb-8`}>Вам может понравиться</p>
        <div className={`flex overflow-x-auto w-full`}>
          {
            itemsFromCollection.map((item, index) => {
              return (
                <Link href={`/jewelry/${item.key}`} key={index} className='mr-5 mt-2'>
                  <Image
                    src={`/images/items/${item.key}/photo1.png`}
                    alt='item image'
                    width={500}
                    height={1080}
                    className={`min-w-[100px] rounded-md`}
                  />
                  <p className='text-[8px] lg:text-[12px]'>{item.title}</p>
                  <p className='text-[8px] font-[100] lg:text-[12px]'>{item.price} pyb</p>
                </Link>
              )
            })
          }
        </div>
      </div>

      {/** Get Inspired */}
      <div className={`w-[1200px] max-w-full px-5 my-5`}>
        <p className={`text-[12px] mb-3 sm:text-[20px] sm:my-10`}>Bдохновляйся</p>
        <div className='flex'>
          <Image
            src={`/images/items/13/photo2.png`}
            alt='photo'
            width={2000}
            height={1080}
            className={`w-[60%] object-cover rounded-md mr-5`}
          />
          <div className={`flex flex-col`}>
            <Image
              src={`/images/items/23/photo2.png`}
              alt='photo'
              width={2000}
              height={1080}
              className={`rounded-md mb-5 object-cover`}
            />
            <Image
              src={`/images/items/17/photo2.png`}
              alt='photo'
              width={2000}
              height={1080}
              className={`rounded-md object-cover`}
            />
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default ItemPageClient;