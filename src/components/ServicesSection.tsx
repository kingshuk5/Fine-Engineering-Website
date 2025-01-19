import * as React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  bgColor: string;
}

const serviceData: ServiceCardProps[] = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e137ffedf5190fa7896ebd33e44a52f2a5e677b38f9b755d0f29a4c240f87eb9?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    title: "Building Works",
    description: "Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus",
    bgColor: "bg-emerald-600"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/409c3054dc4200a4ce764549f0c42817ae82145580bb7d98831c43d7aa2137b2?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    title: "Road Works",
    description: "Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat",
    bgColor: "bg-sky-950"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca84cd6fe599548767dd8cf0096a26f97b43138600c7df4b837d6bdaa27b7938?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    title: "Engineering Solutions &\nConstruction Projects",
    description: "Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus",
    bgColor: "bg-emerald-600"
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, bgColor }) => {
  return (
    <div className="flex flex-col  w-[19%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow p-12 aspect-[0.593] max-md:px-5">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} service illustration`}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative text-4xl font-semibold leading-10 text-white w-[200px]">
          {title}
        </div>
        <div className="relative mt-8 text-lg font-medium leading-7 text-gray-300 max-md:mr-2.5">
          {description}
        </div>
        <div className={`relative self-end px-4 mt-72 text-2xl font-black leading-none text-center text-white whitespace-nowrap ${bgColor} h-[55px] w-[55px] max-md:mt-10`} 
             role="button" 
             tabIndex={0}>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <div className="self-stretch mt-24 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex  max-md:flex-col">
        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76a5ae25cd590386e90c6efdce6cf70c0b19ac02719160ff82e2736ae8ad5467?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
            alt="Services overview"
            className="object-fill grow w-full aspect-[1.42] max-w-[1069px] max-md:max-w-full"
          />
        </div>
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </div>
  );
}