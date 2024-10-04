import { useEffect, useState } from "react";
import RatingWidget from "./RatingWidget";
import EmptyData from "./EmptyData";

type PhotoGalleryProps = {
  images: {
    title: string;
    image_url: string;
    rating: number;
    is_featured?: boolean;
  }[];
};

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<
    { title: string; image_url: string; rating: number }[]
  >([]);

  useEffect(() => {
    setLoadedImages(images.slice(0, 12));
    setIsLoading(false);
  }, [images]);

  let scrollTimeout: number;

  const handleScroll = () => {
    if (images.length === loadedImages.length) {
      return;
    }

    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 5 >=
        document.documentElement.offsetHeight
      ) {
        if (!isLoading) {
          setIsLoading(true);

          setTimeout(() => {
            setLoadedImages((prev) => {
              const newImages = images.slice(prev.length, prev.length + 12);
              return [...prev, ...newImages];
            });

            setIsLoading(false);
          }, 1000);
        }
      }
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="grid grid-flow-dense auto-rows-[250px] grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {loadedImages.map((image, index) => (
          <div
            key={index}
            className={`group flex transform flex-col gap-3 bg-white p-2 shadow-lg transition duration-200 ease-in-out hover:origin-top-left hover:rotate-2 ${index % 3 === 1 ? "col-span-2 row-span-1" : "col-span-1 row-span-1"}`}
          >
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={image.image_url}
                alt={image.title}
                className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <div className="absolute left-2 top-2">
                <RatingWidget rating={image.rating} />
              </div>
            </div>
            <div className="text-sm">{image.title}</div>
          </div>
        ))}
      </div>

      {!isLoading && loadedImages.length === 0 && <EmptyData />}

      {isLoading && (
        <div className=" -translate-y-10 flex w-full items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-lg bg-primary pe-3 text-center">
            <span className="p-3 font-medium text-secondary">Loading</span>
            <img src="/src/assets/loading.svg" width={20} height={20} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
