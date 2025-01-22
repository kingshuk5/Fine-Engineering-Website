import * as React from "react";

interface CalloutProps {
  title: string;
  phoneNumber: string;
}

const Callout: React.FC<CalloutProps> = ({ title, phoneNumber }) => (
  <div className="flex flex-col items-start self-end mb-16 px-20 py-14 max-w-full bg-white border-emerald-600 border-t-[7px] shadow-[0px_0px_35px_rgba(0,0,0,0.14)] w-[482px] max-md:px-5">
    <div className="text-sm text-black">{title}</div>
    <div className="text-4xl font-semibold text-sky-950">{phoneNumber}</div>
  </div>
);

interface HeroProps {
  title: string;
  breadcrumb: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, breadcrumb, backgroundImage }) => (
  <div className="flex relative flex-col justify-center items-start px-20 py-40 w-full min-h-[419px] max-md:px-5 max-md:py-24 max-md:max-w-full">
    <img
      loading="lazy"
      src={backgroundImage}
      alt="Portfolio archive background"
      className="object-cover absolute inset-0 size-full"
    />
    <div className="flex relative flex-col mb-0 max-md:mb-2.5 max-md:max-w-full">
      <div className="text-6xl font-semibold leading-none text-white max-md:max-w-full max-md:text-4xl">
        {title}
      </div>
      <div className="self-start mt-5 text-lg font-bold leading-loose text-gray-200">
        {breadcrumb}
      </div>
    </div>
  </div>
);

type RawImgProps = {
  image: string;
  altText: string;
  className?: string;
};

function RawImg({ image, altText, className }: RawImgProps) {
  return <img src={image} alt={altText} className={className} />;
}

function MyComponent() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e49a2f7e93a64faba2db03c58cba3f767697e7815d504db3a0797355182a0f1d?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&", alt: "Construction site with metal framework" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c7c6eba9d686ac135acd3c03cd91f54302c27ae4625ef90aeecf5a0cd418c07?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&", alt: "Construction crane lifting materials" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/23b503f3cfb901a69293a6339e45d5b42b2fce0add9ea09fda55d76a39cb71f2?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&", alt: "Industrial building framework" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/66c26b515fe71205e53522d8446debb3cd1e84ed6af0e5306386a37294a127c4?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&", alt: "Construction cranes at building site" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/36e98b11edfab1380418ac04fdfbfc18068e25333eb4112e3091ff6f7aa570dd?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&", alt: "Warehouse interior construction" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5e884d6caa5593bfb9b76bbaf67a997143329b5384b2f45c7aa109722f486ec?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&", alt: "Industrial construction site" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f22cf2d7674c3fd506a57c5a08b6ad2e16531e369e578e05ed3d105cb4eb389f?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&", alt: "Industrial building exterior" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9881143bd947505253a42546f60fdfe7c5ded5ec0121f0dd78602cfd27035369?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&", alt: "Construction framework" }
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col px-5 py-0 mx-auto my-0 max-w-[1159px] max-sm:px-2.5 max-sm:py-0">
        <div className="w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-5 max-sm:gap-2.5">
            {images.slice(0,3).map((image, idx) => (
              <div key={idx} className={`flex flex-col w-[33%] ${idx !== 0 && 'ml-5'} max-md:w-full`}>
                <RawImg
                  image={image.src}
                  altText={image.alt}
                  className="object-cover grow w-full rounded aspect-[0.77]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-5 max-sm:gap-2.5">
            <div className="flex flex-col w-[33%] max-md:w-full">
              <RawImg
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/66c26b515fe71205e53522d8446debb3cd1e84ed6af0e5306386a37294a127c4?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&"
                altText="Construction cranes at building site"
                className="object-cover grow w-full rounded aspect-[0.77]"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-center px-14 py-40 text-white bg-green-800 rounded aspect-[0.769] max-md:px-5 max-md:py-24 max-sm:px-4 max-sm:py-20">
                <RawImg
                  image="https://cdn.builder.io/api/v1/image/assets/TEMP/520228c70b713040454dec13865efb38c9a0218086d92968cb55f70adbf42ef5?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&"
                  altText="Green overlay background"
                  className="object-cover absolute inset-0 opacity-80 size-full"
                />
                <div className="relative text-xl z-[1] max-sm:text-lg">
                  Commercial
                </div>
                <div className="relative self-stretch mt-2 text-3xl font-medium text-center z-[1] max-sm:text-2xl">
                  Benoit Architecture
                </div>
                <div className="flex relative mt-4 bg-white rounded-full transition-transform cursor-pointer duration-[0.3s] ease-[ease] h-[70px] w-[70px] z-[1] max-sm:h-[60px] max-sm:w-[60px]" role="button" tabIndex={0}>
                  <i className="ti ti-plus w-full text-4xl text-center text-green-800 leading-[70px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:w-full">
              <RawImg
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/36e98b11edfab1380418ac04fdfbfc18068e25333eb4112e3091ff6f7aa570dd?apiKey=d58f0417017c44eeafb1fd1e09f95bcf&"
                altText="Warehouse interior construction"
                className="object-cover grow w-full rounded aspect-[0.77]"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-5 max-sm:gap-2.5">
            {images.slice(5, 8).map((image, idx) => (
              <div key={idx} className={`flex flex-col w-[33%] ${idx !== 0 && 'ml-5'} max-md:w-full`}>
                <RawImg
                  image={image.src}
                  altText={image.alt}
                  className="object-cover grow w-full rounded aspect-[0.77]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


const PortfolioArchive: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white max-md:py-24">
      <Hero
        title="Portfolio Archive"
        breadcrumb="Home / Portfolio Archive"
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/56b9ae02e033a7c6f8862ae31f9553a7820d867d38e78fa3a0d69e2e7dcf5bd5?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
      />
      <div className="flex z-10 flex-col self-center mt-0 ml-3 max-w-full tracking-wider uppercase w-[1159px]">
        <Callout title="Call Us Today" phoneNumber="+254 728 310886"  />
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9879aa40ceb43308bb4692b2d713244920cf0282f821dd39c9461d223b08abae?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          alt="Portfolio showcase"
          className="object-contain mt-16 w-full aspect-[0.78] max-md:mt-10 max-md:max-w-full"
        /> */}
        <MyComponent/>
      </div>
    </div>
  );
};

export default PortfolioArchive;