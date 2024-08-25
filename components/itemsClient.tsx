"use client"; // This directive must be at the top

import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import useWindowWidth from '@/hooks/width';
import Popup from '@/components/popup';
import data from '@/data/items';

interface ItemPageClientProps {
  itemId: number;
}

const ItemPageClient = ({ itemId }: ItemPageClientProps) => {
  const [activePhoto, setActivePhoto] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const width = useWindowWidth();

  const handlePopup = () => {
    setShowPopup((prev) => !prev);
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

  return (
    <main
      className="flex flex-col items-center min-h-screen max-w-screen"
      style={{
        width: width >= 640 ? "calc(100% - 300px)" : "100%",
      }}
    >
      <p className="mt-20 mb-2 self-start text-color-black px-3">
        Украшения &gt; {turnCollectionToName(data[itemId].collection)} &gt;{" "}
        {data[itemId].title}
      </p>
      <div className="max-w-full flex flex-wrap justify-center w-[1200px]">
        <div
          className="px-3 w-[700px]"
          style={{
            maxWidth: width > 1200 ? "60%" : "100%",
          }}
        >
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
          <div className="flex overflow-hidden mt-2">
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
        <div
          className="px-3"
          style={{
            width: width > 1200 ? "40%" : "100%",
          }}
        >
          <h3
            className="mt-4"
            style={{
              fontWeight: "bold",
              fontSize: width > 910 ? "20px" : "16px",
            }}
          >
            {data[itemId].title}
          </h3>
          <p
            className="font-normal"
            style={{
              fontSize: width > 910 ? "18px" : "16px",
            }}
          >
            {formatPrice(data[itemId].price)} руб
          </p>
          <button
            className="border-2 border-black py-3 w-[300px] mt-5 hover:bg-black hover:text-white self-center md:self-start font-bold"
            style={{ transition: ".4s ease" }}
            onClick={handlePopup}
          >
            Заказать
          </button>
          <Popup
            gif={"https://media.tenor.com/HLrXIleGBToAAAAi/transparent-cat.gif"}
            display={showPopup ? "flex" : "none"}
            setShowPopup={setShowPopup}
            className=""
            title="Наша корзина еще в разработке"
            message="Вы можете оформить заказ через нашего менеджера"
          />
          <p
            className="mt-2 pb-0"
            style={{
              fontSize: width > 910 ? "18px" : "16px",
            }}
          >
            Описание
          </p>
          <p
            className="text-color-black text-[14px]"
            dangerouslySetInnerHTML={{
              __html: data[itemId].description.replace(/\n/g, "<br/>"),
            }}
            style={{
              fontSize: width > 910 ? "16px" : "14px",
            }}
          ></p>
        </div>
      </div>
    </main>
  );
};

export default ItemPageClient;