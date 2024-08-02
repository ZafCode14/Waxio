"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import data from "@/data/items";
import { useEffect, useState } from "react";
import { Suspense } from "react";

function Jewelryyy() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState(searchParams.get('collection') || 'all')
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'all')
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [width, setWidth] = useState(0);

  const collections = ["skeleton", "geometric", "waxio-britva", "pohui", "fracture", "other", "all"];
  const types = ["ring", "pendant", "bracelet", "earring", "accessory", "all"];

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

  useEffect(() => {
    const params = new URLSearchParams();
    params.set('collection', selectedCollection);
    params.set('type', selectedType);
    router.replace(`/jewelry?${params.toString()}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCollection, selectedType, router])

  // New effect to update state when URL params change
  useEffect(() => {
    const collection = searchParams.get('collection') || 'all';
    const type = searchParams.get('type') || 'all';
    setSelectedCollection(collection);
    setSelectedType(type);
  }, [searchParams]);

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

  const sortedDataDesc = Object.entries(data)
  .filter(([key, item]) => {
    // Check if type or collection is 'all' or matches the item
    const isTypeMatch = selectedType === 'all' || item.type === selectedType;
    const isCollectionMatch = selectedCollection === 'all' || item.collection === selectedCollection;
    return isTypeMatch && isCollectionMatch;
  })
  .sort((a, b) => a[1].price - b[1].price);  // Sort by price

  const sortedDataAsc = Object.entries(data)
  .filter(([key, item]) => {
    // Check if type or collection is 'all' or matches the item
    const isTypeMatch = selectedType === 'all' || item.type === selectedType;
    const isCollectionMatch = selectedCollection === 'all' || item.collection === selectedCollection;
    return isTypeMatch && isCollectionMatch;
  })
  .sort((a, b) => b[1].price - a[1].price);  // Sort by price

  const sortedData = !sort ? sortedDataDesc : sortedDataAsc;

  const handleSort = () => {
    setShowSort(!showSort);
  }

  const handleFilter = () => {
    setShowFilter(!showFilter);
  }

  return (
    <main className="flex min-h-screen flex-col px-3 items-center" style={{
      width: width >= 1024 ? "calc(100% - 300px)" : "100%"
    }}>
      <p className="mt-20 self-start">Украшения &gt; {turnCollectionToName(selectedCollection)} &gt; {turnTypeToname(selectedType)}</p>
      <div className="flex w-full justify-end items-start mb-10">
        <div className="flex flex-col">
          <div className="flex items-center justify-end relative cursor-pointer" onClick={handleFilter}>
            <p>Фильтр</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-2" style={{
              transform: showFilter ? "rotate(180deg)" : "rotate(0)"
            }}/>
          </div>
          <div className={`flex overflow-hidden absolute lg:right-[300px] right-0 mt-10 mr-3 bg-[#d6d6d6] px-3 rounded-md`} style={{
            transition: ".4s ease",
            height: !showFilter ? "0px" : "200px"
            }}>
            <div className="mr-6 flex-col">
              <p>Украшения</p>
              {types.map(type => (
                <div key={type} className="flex items-center my-1">
                  <input
                    type="checkbox"
                    id={`type-${type}`}
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                  />
                  <label htmlFor={`type-${type}`} className="ml-1 text-[12px]">{turnTypeToname(type)}</label>
                </div>
              ))}
            </div>
            <div>
              <p>Коллекции</p>
              {collections.map(collection => (
                <div key={collection} className="flex items-center my-1">
                  <input
                    type="checkbox"
                    id={`collection-${collection}`}
                    checked={selectedCollection === collection}
                    onChange={() => setSelectedCollection(collection)}
                  />
                  <label htmlFor={`collection-${collection}`} className="ml-1 text-[12px]">{turnCollectionToName(collection)}</label>
                </div>
              ))}
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-[900px] max-w-[100%] justify-around">
        {sortedData.map(([key, item]) => {
          // Check if type or collection is 'all' or matches the item
          const isTypeMatch = selectedType === 'all' || item.type === selectedType;
          const isCollectionMatch = selectedCollection === 'all' || item.collection === selectedCollection;

          const formatPrice = (price: number) => {
            return new Intl.NumberFormat('ru-RU').format(price);
          };

          // Render item if it matches the type and collection conditions
          return isTypeMatch && isCollectionMatch ? (
            <div key={key} className="max-w-50%] w-[170px] md:w-[240px] mb-10 flex-col items-center text-center">
              <Link
                href={`/jewelry/${key}`}  // Using the key to dynamically create the URL
                className="bg-gray-300 h-[170px] md:h-[240px] flex justify-center items-center mb-3"
                style={{
                  backgroundColor: "gray",  // Example: use the first photo URL for background
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Image src={`/images/items/${key}/photo1.png`} width={"800"} height={"100"} alt={`photo${key}`} className="h-full w-full cursor-pointer" priority/>
              </Link>
              <p className="p-0 font-normal">{item.title}</p>
              <p className="p-0">{formatPrice(item.price)} руб</p>
            </div>
          ) : null;
        })}
      </div>
    </main>
  );
}

export default function Jewelry() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Jewelryyy />
    </Suspense>
  )
}