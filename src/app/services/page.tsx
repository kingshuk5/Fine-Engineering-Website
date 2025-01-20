import * as React from "react";

interface ServiceCardProps {
  title: string;
  description: string[];
  imageUrl: string;
  imageAlt: string;
  isReversed?: boolean;
}

interface RawImgProps {
  image: string;
  altText: string;
  className?: string;
}

const RawImg: React.FC<RawImgProps> = ({ image, altText, className }) => (
  <img src={image} alt={altText} className={className} loading="lazy" />
);

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  isReversed = false
}) => {
  const imageElement = (
    <RawImg
      image={imageUrl}
      altText={imageAlt}
      className="object-cover h-[435px] w-[590px] max-md:w-full"
    />
  );

  const contentElement = (
    <div className="px-12 pt-20 text-white bg-emerald-600 w-[590px] max-md:w-full max-sm:px-5 max-sm:py-10">
      <div className="mb-8 text-4xl font-bold tracking-widest leading-tight max-sm:text-3xl">
        {title}
      </div>
      <div className="text-lg leading-7">
        {description.map((item, index) => (
          <React.Fragment key={index}>
            <span>* {item}</span>
            <br />
          </React.Fragment>
        ))}
      </div>
      <button 
        className="inline-flex gap-1.5 items-center px-12 py-6 mt-11 text-xl border-white border-solid transition-all cursor-pointer border-[3px] hover:bg-white hover:text-emerald-600 duration-300 ease-in-out max-sm:px-8 max-sm:py-4 max-sm:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
        aria-label={`Learn more about ${title}`}
      >
        <span>Learn more</span>
        <i className="ti ti-arrow-right" aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <div className="flex mb-0 w-full max-md:flex-col">
      {isReversed ? (
        <>
          {contentElement}
          {imageElement}
        </>
      ) : (
        <>
          {imageElement}
          {contentElement}
        </>
      )}
    </div>
  );
};

const services = [
  {
    title: "Building Works",
    description: [
      "Commercial developments",
      "Residential constructions",
      "Industrial facilities",
      "Renovations and partitioning"
    ],
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e23c3d3260172ca7b8499b33c011aebc69f3579814f61f43c95193a9693618f?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    imageAlt: "Building Works"
  },
  {
    title: "Road Works & Drainage",
    description: [
      "Access road construction",
      "Drainage system installation",
      "Road upgrading and improvement"
    ],
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3ae2d046cb74b0fcd9c44ee5f1de61fefa3d4687b96218bbda79f26d7600f62?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    imageAlt: "Road Works",
    isReversed: true
  },
  {
    title: "Specialized Engineering Solutions",
    description: [
      "Steel AC platform installation",
      "Roofing works",
      "Tank and tower construction"
    ],
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e54975e064eae61aff5692c89cd8e24be2ac7e5d65c21cead29eae94b2aaeb3a?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    imageAlt: "Engineering Solutions"
  },
  {
    title: "Construction Projects",
    description: [
      "Godown construction",
      "Educational facilities",
      "Religious buildings",
      "Security installations"
    ],
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b31bb406493ad27dd4d5545a7b255a68cddf107255ccc83bfe8e1bb152cbadf2?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    imageAlt: "Construction Projects",
    isReversed: true
  }
];

export default function ServicesArchive(): React.JSX.Element {
  return (
    <div className="w-full bg-white">
      <div className="flex relative justify-center items-center h-[420px]">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <RawImg
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/08826dc5e3e1c3e057d574ee3aad84732cdf9ff60eb31f555c84788986aa109a?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          altText="City skyline"
          className="object-cover absolute top-0 left-0 size-full"
        />
        <div className="relative px-20 py-0 text-left z-[1] max-md:px-10 max-md:py-0">
          <h1 className="mb-5 text-6xl font-semibold text-white max-sm:text-4xl">
            Services Archive
          </h1>
          <nav aria-label="breadcrumb">
            <div className="text-lg font-bold text-gray-200">
              Home / Services Archive
            </div>
          </nav>
        </div>
      </div>
      <div className="relative px-20 py-14 mt-0 mr-20 mb-44 ml-auto border-solid border-t-[7px] border-t-emerald-600 max-w-[482px] shadow-[0_0_35px_rgba(0,0,0,0.14)] max-md:p-10 max-md:mt-0 max-md:mr-10 max-md:mb-24 max-md:ml-auto max-sm:p-8 max-sm:mx-5 max-sm:mt-0 max-sm:mb-16">
        <div>
          <div className="mb-2.5 text-sm tracking-wider text-black uppercase">
            CALL US TODAY
          </div>
          <a 
            href="tel:+254728310886" 
            className="text-4xl font-semibold text-sky-950 hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 rounded-sm"
            aria-label="Call us at +254 728 310886"
          >
            +254 728 310886
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-0 mx-auto my-0 max-w-[1180px] max-md:px-5 max-md:py-0">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}