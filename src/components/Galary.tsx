import * as React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

interface OverlayCardProps {
  category: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain grow w-full ${className}`}
  />
);

const OverlayCard: React.FC<OverlayCardProps> = ({ category, title, imageSrc, imageAlt }) => (
  <div className="flex relative flex-col grow text-center aspect-[1.188] max-md:mt-5">
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="object-cover absolute inset-0 size-full"
    />
    <div className="flex relative flex-col justify-center items-center px-20 py-24 bg-blue-700 bg-opacity-80 max-md:px-5">
      <div className="flex flex-col items-center max-w-full w-[158px]">
        <div className="text-sm font-light leading-none text-gray-300 uppercase">
          {category}
        </div>
        <div className="self-stretch mt-2.5 text-lg leading-none text-white">
          {title}
        </div>
        <button 
          className="px-4 mt-8 w-10 h-10 text-2xl leading-none text-blue-700 whitespace-nowrap bg-white"
          aria-label={`View more details about ${title}`}
          tabIndex={0}
        >
          +
        </button>
      </div>
    </div>
  </div>
);

const GalleryGrid: React.FC = () => {
  const galleryData = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/288dc2a2264c327f0d0b8f3dadbf7775407bcd09da34d80aa95f59f603cb4c39?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Gallery image 1", aspectClass: "aspect-[0.58]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5287f48f14002bc3b634463e103571987b3aef586f7d420da10eee34ea0cda40?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Gallery image 2", aspectClass: "aspect-[1.19]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ab7f118d98adb14ebe6b14abd96d85ed2b882a05dfbdf05071c11520b53db21?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Gallery image 3", aspectClass: "aspect-[1.19]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f41d24c27b0a09371127fd3beb54982218d9a7967e0ad65d31960974bd358bd?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Gallery image 5", aspectClass: "aspect-[1.19]" }
  ];

  return (
    <><div className="flex flex-col items-center justify-center mt-10">
      <p className="text-2xl text-green-500">
        Our Works
      </p>
      <p className="font-bold text-6xl ">
        Our Special Projects
      </p>
    </div>
    <div className="mt-10 max-w-full w-[1180px]">
        <div className="flex  max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <ImageCard
              src={galleryData[0].src}
              alt={galleryData[0].alt}
              className={`${galleryData[0].aspectClass} max-md:mt-5`} />
          </div>
          <div className="flex flex-col  w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <ImageCard
                      src={galleryData[1].src}
                      alt={galleryData[1].alt}
                      className={`${galleryData[1].aspectClass} max-md:mt-5`} />
                  </div>
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <ImageCard
                      src={galleryData[2].src}
                      alt={galleryData[2].alt}
                      className={`${galleryData[2].aspectClass} max-md:mt-5`} />
                  </div>
                </div>
              </div>
              <div className=" mt-2 max-md:max-w-full">
                <div className="flex  max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <OverlayCard
                      category="Commercial"
                      title="Benoit Architecture"
                      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2521c4baead13e40e2df3da9f526fb62b3a1d8a096fb3ed2a29bab8a5f366c4e?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                      imageAlt="Benoit Architecture commercial project" />
                  </div>
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <ImageCard
                      src={galleryData[3].src}
                      alt={galleryData[3].alt}
                      className={`${galleryData[3].aspectClass} max-md:mt-5`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default GalleryGrid;