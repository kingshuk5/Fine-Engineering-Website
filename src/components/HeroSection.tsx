import * as React from "react";

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroProps> = ({
  title,
  description,
  ctaText,
  backgroundImage
}) => {
  return (
    <div className="flex relative flex-col justify-center items-center self-stretch px-20 py-60 w-full text-white min-h-[900px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src={backgroundImage}
        alt=""
        className="object-cover absolute animate-fade-up inset-0 size-full"
      />
      <div className="flex relative flex-col mb-0 max-w-full w-[983px] max-md:mb-2.5">
        <h1 className="text-7xl font-semibold  leading-[84px] animate-fade-right max-md:max-w-full max-md:text-4xl max-md:leading-10">
          {title}
        </h1>
        <p className="mt-10 mr-20 text-xl font-bold leading-7 animate-fade-left text-gray-200 max-md:mr-2.5 max-md:max-w-full">
          {description}
        </p>
        <button 
          className="flex gap-1.5 self-start px-12 py-5 mt-16 bg-emerald-600 max-md:px-5 max-md:mt-10"
          tabIndex={0}
          aria-label={ctaText}
        >
          <span className="text-xl leading-tight text-right">{ctaText}</span>
        </button>
      </div>
    </div>
    
  );
};

export default HeroSection;