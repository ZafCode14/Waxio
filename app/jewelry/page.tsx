"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import data from "@/data/items";
import { useEffect, useState } from "react";

export default function Jewelry() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState(searchParams.get('collection') || 'all')
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'all')
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState(false);

  const collections = ["skeleton", "geometric", "waxio-britva", "pohui", "fracture", "other", "all"];
  const types = ["ring", "pendant", "bracelet", "earring", "accessory", "all"];

  let collectionName;
  let typeName;

  if (selectedCollection === "skeleton") {
    collectionName = "SKELETON";
  } else if (selectedCollection === "geometric") {
    collectionName = "GEOMETRIC";
  } else if (selectedCollection === "waxio-britva") {
    collectionName = "WAXIO / BRITVA";
  } else if (selectedCollection === "pohui") {
    collectionName = "POHUI";
  } else if (selectedCollection === "fracture") {
    collectionName = "FRACTURE";
  } else if (selectedCollection === "other") {
    collectionName = "Другое"
  } else if (selectedCollection === "all") {
    collectionName = "Все Коллекции"
  }

  if (selectedType === "ring") {
    typeName = "Кольца";
  } else if (selectedType === "pendant") {
    typeName = "Подвески";
  } else if (selectedType === "bracelet") {
    typeName = "Браслеты";
  } else if (selectedType === "earring") {
    typeName = "Серьги";
  } else if (selectedType === "accessory") {
    typeName = "Аксессуары"
  } else if (selectedType === "all") {
    typeName = "Все Аксессуары"
  }

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
    <main className="flex min-h-screen flex-col px-3">
      <p className="mt-20">Украшения &gt; {collectionName} &gt; {typeName}</p>
      <div className="flex w-full justify-between items-start mb-10">
        <div className="flex-col">
          <div className="flex items-center" onClick={handleSort}>
            <p>Сортировать</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-2"/>
          </div>
          <div className={`overflow-hidden`} style={{
            height: !showSort ? "0px" : "70px",
            transition: ".4s ease"
          }}>
            <div className="flex mt-2">
              <input
                id="sort-asc"
                type="checkbox"
                checked={sort === true}
                onChange={() => setSort(true)}
              />
              <label htmlFor="sort-asc" className="ml-1">Дороже</label>
            </div>
            <div className="flex">
              <input
                id="sort-desc"
                type="checkbox"
                checked={sort === false}
                onChange={() => setSort(false)}
              />
              <label htmlFor="sort-desc" className="ml-1">Дешевле</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center" onClick={handleFilter}>
            <p>Фильтр</p>
            <Image src={"/icons/more.svg"} width={"100"} height={"100"} alt="more" className="h-[14px] w-[14px] ml-2"/>
          </div>
          <div className={`flex overflow-hidden`} style={{
            transition: ".4s ease",
            height: !showFilter ? "0px" : "230px"
            }}>
            <div className="mr-6 flex-col">
              <p>Украшения</p>
              {types.map(type => (
                <div key={type}>
                  <input
                    type="checkbox"
                    id={`type-${type}`}
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                  />
                  <label htmlFor={`type-${type}`} className="ml-1">{type}</label>
                </div>
              ))}
            </div>
            <div>
              <p>Коллекции</p>
              {collections.map(collection => (
                <div key={collection}>
                  <input
                    type="checkbox"
                    id={`collection-${collection}`}
                    checked={selectedCollection === collection}
                    onChange={() => setSelectedCollection(collection)}
                  />
                  <label htmlFor={`collection-${collection}`} className="ml-1">{collection}</label>
                </div>
              ))}
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {sortedData.map(([key, item]) => {
          // Check if type or collection is 'all' or matches the item
          const isTypeMatch = selectedType === 'all' || item.type === selectedType;
          const isCollectionMatch = selectedCollection === 'all' || item.collection === selectedCollection;

          const formatPrice = (price: number) => {
            return new Intl.NumberFormat('ru-RU').format(price);
          };

          // Render item if it matches the type and collection conditions
          return isTypeMatch && isCollectionMatch ? (
            <div key={key} className="w-[48%] mb-10 flex-col items-center text-center">
              <Link
                href={`/jewelry/${key}`}  // Using the key to dynamically create the URL
                className="bg-gray-300 h-[200px] flex justify-center items-center mb-3"
                style={{
                  backgroundColor: "gray",  // Example: use the first photo URL for background
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
              </Link>
              <p className="p-0">{item.title}</p>
              <p className="p-0">{formatPrice(item.price)} руб</p>
            </div>
          ) : null;
        })}
      </div>
    </main>
  );
}