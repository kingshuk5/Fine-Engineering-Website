import * as React from "react";

interface ImageComponentProps {
  src: string;
  className: string;
}

const ImageComponent: React.FC<ImageComponentProps> = () => {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec941a0fb810a83640200e3ed00c6bacf6e5e111259f67c1bb00f1714124bb65?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
      alt=""
      className="object-contain self-stretch mt-24 w-full aspect-[3.5] max-md:mt-10 max-md:max-w-full"
    />
  );
}

export default ImageComponent;