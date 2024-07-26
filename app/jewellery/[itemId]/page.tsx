import Image from 'next/image';
import { notFound } from 'next/navigation';
import data from '@/data/items';

interface Props {
  params: {
    itemId: number;
  };
}

const ItemPage = ({ params }: Props) => {
  const { itemId } = params;

  if (itemId > 8 || isNaN(itemId)) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-[500px] flex justify-center items-center bg-[#D9D9D9]">
        <Image alt="image" src="/images/image.svg" height={100} width={100} className="w-full h-auto"/>
      </div>
      <div>
        <p>{data[itemId].title}</p>
      </div>
    </main>
  );
};

export default ItemPage;