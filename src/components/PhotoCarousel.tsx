import { useState } from "react";
import Tooltip from "./Tooltip";

type PhotoCarouselProps = {
  images: {
    title: string;
    image_url: string;
    rating: number;
    is_featured?: boolean;
  }[];
};

const PhotoCarousel = ({ images }: PhotoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex max-h-96 min-h-fit w-full items-center justify-center overflow-hidden rounded-lg border-8 border-white md:min-h-96">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <Tooltip
            text={img.title}
            key={index}
            className="h-full w-full flex-shrink-0"
          >
            <img
              className="h-full w-full flex-shrink-0 object-cover"
              src={img.image_url}
              alt=""
            />
          </Tooltip>
        ))}
      </div>

      <div
        className="absolute left-8 rotate-180 cursor-pointer"
        onClick={handlePrev}
      >
        <img width={32} src="/src/assets/arrow.png" alt="" />
      </div>
      <div className="absolute right-8 cursor-pointer" onClick={handleNext}>
        <img width={32} src="/src/assets/arrow.png" alt="" />
      </div>
    </div>
  );
};

export default PhotoCarousel;
