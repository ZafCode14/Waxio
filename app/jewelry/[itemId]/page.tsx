import { notFound } from 'next/navigation';
import data from '@/data/items';
import ItemPageClient from '@/components/itemsClient';

// Generate static params for the dynamic route
export async function generateStaticParams() {
  const params = Object.keys(data).map((key) => {
    return { itemId: key };
  });

  return params;
}

const ItemPage = ({ params }: { params: { itemId: string } }) => {
  const itemId = parseInt(params.itemId, 10);

  if (!data[itemId]) {
    notFound();
  }

  // Render the client component
  return <ItemPageClient itemId={itemId} />;
};

export default ItemPage;