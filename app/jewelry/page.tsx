"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import data from "@/data/items";
import { useEffect, useState, useRef } from "react";
import { Suspense } from "react";
import useWindowWidth from "@/hooks/width";

function Jewelryyy() {
  const router = useRouter();
  const width = useWindowWidth();
  const searchParams = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState<string[]>(searchParams.get('collection')?.split(',') || [])
  const [selectedType, setSelectedType] = useState<string[]>(searchParams.get('type')?.split(",") || [])
  const [showFilter, setShowFilter] = useState(false);

  const collections = ["skeleton", "geometric", "waxio-britva", "pohui", "fracture", "other"];
  const types = ["ring", "pendant", "bracelet", "earring", "accessory"];

  useEffect(() => {
    const params = new URLSearchParams();
    params.set('collection', selectedCollection.join(','));
    params.set('type', selectedType.join(','));
    router.replace(`/jewelry?${params.toString()}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCollection, selectedType, router])

  // New effect to update state when URL params change
  useEffect(() => {
    const collection = searchParams
      .get('collection')
      ?.split(',')
      .filter(col => col.trim() !== '') || [];
    
    const type = searchParams
      .get('type')
      ?.split(',')
      .filter(typ => typ.trim() !== '') || [];
    
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
    const isTypeMatch = selectedType.includes(item.type);
    const isCollectionMatch = selectedCollection.includes(item.collection);
    return isTypeMatch && isCollectionMatch;
  })
  .sort((a, b) => a[1].price - b[1].price);  // Sort by price

  const sortedData = sortedDataDesc;

  return (
    <main className="flex min-h-screen flex-col items-center z-0 relative text-white">
      {/** Hero Section */}
      <div className={`h-[300px] sm:h-[500px] overflow-hidden flex items-end`}>
        <h1 className="absolute left-5 top-32 z-0 font-bold lg:hidden">Украшения</h1>
        <Image
          alt="hero image"
          src={'/images/shopHero.png'}
          width={2000}
          height={1080}
        />
      </div>
      <div className="flex flex-col max-w-full px-5 relative lg:py-10">
        {/** Filter Discription */}
        <p className="mt-5 self-start text-[12px] lg:text-[20px] font-bold mb-5">{
          selectedCollection.length > 1 ? `${selectedCollection.length === 6 ? "Все Коллекции" : `${turnCollectionToName(selectedCollection[0])}, ...`}` : turnCollectionToName(selectedCollection[0])
        } &gt; {
          selectedType.length > 1 ? `${selectedType.length === 5 ? "Все Украшения" : `${turnTypeToname(selectedType[0])}, ...`}` : turnTypeToname(selectedType[0])
        }</p>

        {/** Filter */}
        <div className="absolute right-5 top-4 lg:py-10">
          <div className="flex flex-col relative">
            <div className="flex items-center justify-end relative cursor-pointer bg-[#8E8E8D] rounded-md text-[10px] lg:text-[20px] px-2 py-1" onClick={() => setShowFilter(true)}>
              <p className="font-[100]">Фильтр</p>
              <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[10px] w-[10px] ml-2" style={{
                transform: showFilter ? "rotate(180deg)" : "rotate(0)"
              }}/>
            </div>
            {/** Filter Pop-Up Full-Screen */}
            <div onClick={() => setShowFilter(false)} className={`${showFilter ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} flex justify-center items-center fixed right-0 top-0 w-[100vw] h-[100vh] backdrop-blur-sm transition-opacity duration-400`}>
              {/** Filter Pop-Up Center */}
              <div className={`max-w-[90%] w-[350px] h-[500px] bg-[#D9D9D9] mt-[80px] rounded-md py-10 pl-5`} onClick={(e) => e.stopPropagation()}>
                <div className="mr-6 flex-col">
                  <p className="pb-0 text-black font-bold ml-10">Украшения</p>
                  {types.map(type => (
                    <div key={type} className="flex items-center mt-3 cursor-pointer text-[gray]">
                      <input
                        type="checkbox"
                        id={`type-${type}`}
                        checked={selectedType.includes(type)}
                        className="custom-checkbox mr-3"
                        onChange={() => {
                          const isSelected = selectedType.includes(type);
                          const updatedType = isSelected
                            ? selectedType.filter(col => col !== type)
                            : [...selectedType, type];
                          setSelectedType(updatedType);
                        }}
                      />
                      <label htmlFor={`type-${type}`} className="ml-1 text-[12px] cursor-pointer">{turnTypeToname(type)}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="pb-0 text-[black] font-bold ml-10 mt-10">Коллекции</p>
                  {collections.map(collection => (
                    <div key={collection} className="flex items-center mt-3 cursor-pointer text-[gray]">
                      <input
                        type="checkbox"
                        id={`collection-${collection}`}
                        checked={selectedCollection.includes(collection)}
                        className="custom-checkbox mr-3"
                        onChange={() => {
                          const isSelected = selectedCollection.includes(collection);
                          const updatedSelection = isSelected
                            ? selectedCollection.filter(col => col !== collection)
                            : [...selectedCollection, collection];
                          setSelectedCollection(updatedSelection);
                        }}
                      />
                      <label htmlFor={`collection-${collection}`} className="ml-1 text-[12px] cursor-pointer">{turnCollectionToName(collection)}</label>
                    </div>
                  ))}
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** Items */}
        <div className="flex flex-wrap max-w-[100%] justify-around w-[1300px]">
          {sortedData.map(([key, item]) => {
            // Check if type or collection is 'all' or matches the item
            const isTypeMatch = selectedType.includes(item.type);
            const isCollectionMatch = selectedCollection.includes(item.collection);

            const formatPrice = (price: number) => {
              return new Intl.NumberFormat('ru-RU').format(price);
            };

            // Render item if it matches the type and collection conditions
            return isTypeMatch && isCollectionMatch ? (
              <Link key={key} href={`/jewelry/${key}`}  
              // Using the key to dynamically create the URL
                className="w-[280px] max-w-[48%] mb-5 flex-col items-center text-center mt-10">
                <div className="flex flex-col items-center mb-3 cursor-pointer" style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="overflow-hidden flex justify-center items-center mb-1 h-auto">
                    <Image 
                      src={`/images/items/${key}/photo1.png`} 
                      alt={`photo${key}`} 
                      width={"800"} 
                      height={"100"} 
                      priority
                      className={`rounded-md`}
                    />
                  </div>
                  <p className="p-0 font-normal text-[10px] lg:text-[14px]"
                  >{item.title}</p>
                  <p className="p-0 font-normal text-color-balck text-[10px] lg:text-[14px]"
                  >{formatPrice(item.price)} руб</p>
                </div>
              </Link>
            ) : null;
          })}
        </div>
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