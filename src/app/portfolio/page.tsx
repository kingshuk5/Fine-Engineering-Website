import * as React from "react";

interface CalloutProps {
  title: string;
  phoneNumber: string;
}

const Callout: React.FC<CalloutProps> = ({ title, phoneNumber }) => (
  <div className="flex flex-col items-start self-end px-20 py-14 max-w-full bg-white border-emerald-600 border-t-[7px] shadow-[0px_0px_35px_rgba(0,0,0,0.14)] w-[482px] max-md:px-5">
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

const PortfolioArchive: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white max-md:py-24">
      <Hero
        title="Portfolio Archive"
        breadcrumb="Home / Portfolio Archive"
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/56b9ae02e033a7c6f8862ae31f9553a7820d867d38e78fa3a0d69e2e7dcf5bd5?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
      />
      <div className="flex z-10 flex-col self-center mt-0 ml-3 max-w-full tracking-wider uppercase w-[1159px]">
        <Callout title="Call Us Today" phoneNumber="+254 728 310886" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9879aa40ceb43308bb4692b2d713244920cf0282f821dd39c9461d223b08abae?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          alt="Portfolio showcase"
          className="object-contain mt-16 w-full aspect-[0.78] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default PortfolioArchive;