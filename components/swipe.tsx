"use client";

import { FC, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

interface SwipeableGalleryProps {
  images: string[];
}

const SwipeableGallery: FC<SwipeableGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (deltaX: number) => {
    if (deltaX > 0) {
      // Swipe to the left (previous image)
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    } else if (deltaX < 0) {
      // Swipe to the right (next image)
      setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    preventScrollOnSwipe: true,
    trackMouse: true, // Allow swipe with mouse as well
  });

  return (
    <div {...swipeHandlers} className="max-h-[45vw] h-[250px] overflow-hidden flex justify-center items-center mb-2">
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="transition-all duration-300 ease-in-out"
        width={"800"}
        height={"100"}
      />
    </div>
  );
};

export default SwipeableGallery;