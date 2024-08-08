"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import data from "@/data/items";
import { useEffect, useState, useRef } from "react";
import { Suspense } from "react";

function Jewelryyy() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState<string[]>(searchParams.get('collection')?.split(',') || [])
  const [selectedType, setSelectedType] = useState<string[]>(searchParams.get('type')?.split(",") || [])
  const [showFilter, setShowFilter] = useState(false);
  const [width, setWidth] = useState(0);

  const collections = ["skeleton", "geometric", "waxio-britva", "pohui", "fracture", "other"];
  const types = ["ring", "pendant", "bracelet", "earring", "accessory"];

  const filterRef = useRef<HTMLDivElement>(null); // Reference to the filter div
  const filterBtn = useRef<HTMLDivElement>(null); // Reference to the filter div

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

  // remove filter if clicked outside the div
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterBtn.current?.contains(event.target as Node) && !filterRef.current.contains(event.target as Node)) {
        setShowFilter(false); // Hide filter if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleFilter = () => {
    setShowFilter(!showFilter);
  }

  console.log(selectedCollection);

  return (
    <main className="flex min-h-screen flex-col px-3 items-center" style={{
      width: width >= 1024 ? "calc(100% - 300px)" : "100%"
    }}>
      <p className="mt-20 self-start">Украшения &gt; {
        selectedCollection.length > 1 ? `${selectedCollection.length === 6 ? "Все Коллекции" : `${turnCollectionToName(selectedCollection[0])}, ...`}` : turnCollectionToName(selectedCollection[0])
      } &gt; {
        selectedType.length > 1 ? `${selectedType.length === 5 ? "Все Украшения" : `${turnTypeToname(selectedType[0])}, ...`}` : turnTypeToname(selectedType[0])
      }</p>
      <div className="flex w-full justify-end items-start mb-4">
        <div className="flex flex-col">
          <div ref={filterBtn} className="flex items-center justify-end relative cursor-pointer" onClick={handleFilter}>
            <p>Фильтр</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-2" style={{
              transform: showFilter ? "rotate(180deg)" : "rotate(0)"
            }}/>
          </div>
          <div ref={filterRef} className={`flex flex-col overflow-hidden absolute lg:right-[300px] right-0 mt-10 mr-3 px-3 bg-color-white`} style={{
            transition: ".4s ease",
            height: !showFilter ? "0px" : "310px",
            border: !showFilter ? "none" : "1px solid black"
            }}>
            <div className="mr-6 flex-col">
              <p className="pb-0">Украшения</p>
              {types.map(type => (
                <div key={type} className="flex items-center my-1 cursor-pointer">
                  <input
                    type="checkbox"
                    id={`type-${type}`}
                    checked={selectedType.includes(type)}
                    className="custom-checkbox"
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
              <p className="pb-0">Коллекции</p>
              {collections.map(collection => (
                <div key={collection} className="flex items-center my-1 cursor-pointer">
                  <input
                    type="checkbox"
                    id={`collection-${collection}`}
                    checked={selectedCollection.includes(collection)}
                    className="custom-checkbox"
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
      <div className="flex flex-wrap w-[900px] max-w-[100%] justify-around">
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
              className="w-[250px] max-w-[48%] mx-[1%] mb-5 flex-col items-center text-center">
              <div className="flex flex-col items-center mb-3 cursor-pointer" style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="max-h-[45vw] h-[250px] overflow-hidden flex justify-center items-center mb-2">
                  <Image src={`/images/items/${key}/photo1.png`} width={"800"} height={"100"} alt={`photo${key}`} priority/>
                </div>
                <p className="p-0 font-normal text-[12px]">{item.title}</p>
                <p className="p-0 font-normal text-[14px] text-color-balck">{formatPrice(item.price)} руб</p>
              </div>
            </Link>
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