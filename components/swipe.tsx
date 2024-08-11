"use client"
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
}

const SwipeableGallery: React.FC = () => {
  const images: ImageData[] = [
    { src: '/images/image1.jpg', alt: 'Gallery Image 1' },
    { src: '/images/image2.jpg', alt: 'Gallery Image 2' },
    { src: '/images/image3.jpg', alt: 'Gallery Image 3' },
    // Add more image paths as needed
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true,
  });

  return (
    <div {...handlers} className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full relative h-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 right-0 text-center">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer p-1 mx-1 rounded-full inline-block ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeableGallery;