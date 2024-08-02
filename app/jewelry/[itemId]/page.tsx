"use client";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import data from '@/data/items';

interface Props {
  params: {
    itemId: number;
  };
}

const ItemPage = ({ params }: Props) => {
  const [width, setWidth] = useState(0);
  const { itemId } = params;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();

    window.scrollTo(0, 0);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (itemId > 29 || isNaN(itemId)) {
    notFound();
  }

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
      collectionName = "Другое"
    } else if (collection === "all") {
      collectionName = "Все Коллекции"
    }
    return collectionName;
  }

  const turnTypeToname = (type: string) => {
    let typeName;

    if (type === "ring") {
      typeName = "Кольца";
    } else if (type === "pendant") {
      typeName = "Подвески";
    } else if (type === "bracelet") {
      typeName = "Браслеты";
    } else if (type === "earring") {
      typeName = "Серьги";
    } else if (type === "accessory") {
      typeName = "Аксессуары"
    } else if (type === "all") {
      typeName = "Все"
    }
    return typeName;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <main className="flex flex-col items-center min-h-screen px-3 max-w-screen" style={{
      width: width >= 1024 ? "calc(100% - 300px)" : "100%"
    }}>
      <div className='w-[800px] max-w-full flex flex-col'>
        <p className="mt-20 self-start">Украшения &gt; {turnCollectionToName(data[itemId].collection)} &gt; {data[itemId].title}</p>
        <div className='w-[400px] h-[400px] max-w-full'>
          <Image src={`/images/items/${itemId}/photo1.png`} width={"2000"} height={"2000"} alt={`photo${itemId}`} className="h-full w-full cursor-pointer" priority/>
        </div>
        <p>{data[itemId].title}</p>
        <p>{formatPrice(data[itemId].price)} руб</p>
        <button className="border-2 border-black py-3 w-[300px] mt-5 hover:bg-black hover:text-white self-center md:self-start"
        style={{transition: ".4s ease"}}
        >Заказать</button>
        <p>Описание</p>
        <p className='font-normal' dangerouslySetInnerHTML={{ __html: data[itemId].description.replace(/\n/g, '<br />') }}></p>
        </div>
    </main>
  );
};

export default ItemPage;