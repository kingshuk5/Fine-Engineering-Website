import * as React from "react";

interface CommitmentSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

const CommitmentSection: React.FC<CommitmentSectionProps> = () => {
  const sectionData = {
    title: "Our Commitment",
    subtitle: "With our knowledge\nwe guarente success",
    description: "We pride ourselves on delivering exceptional quality, efficiency, and customer service. Our team of experts is dedicated to building community value into every project while providing professional expertise and quality construction",
    buttonText: "Learn more",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4226f748bcde9652dbf53b8333e2e648bc505fdbddcde26a654a8499ce6a0509?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
  };

  return (
    <div className="mt-40 max-w-full w-[1180px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-sm font-medium leading-none text-emerald-600 uppercase max-md:max-w-full">
              {sectionData.title}
            </div>
            <div className="mt-4 text-6xl font-semibold leading-[64px] text-slate-800 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              {sectionData.subtitle.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < sectionData.subtitle.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-4 text-lg leading-7 text-zinc-700 max-md:max-w-full">
              {sectionData.description}
            </div>
            <div className="flex flex-col mt-4 w-full text-white max-md:max-w-full">
              <a href="/aboutus">
                <button 
                  className="flex flex-col justify-center items-end px-16 py-5 w-full bg-emerald-600 max-md:px-5 max-md:max-w-full"
                  tabIndex={0}
                  aria-label={sectionData.buttonText}
                >
                  <div className="flex gap-5">
                    <div className="text-xl leading-tight text-right">
                      {sectionData.buttonText}
                    </div>
                    <div className="text-sm font-black leading-none text-center">
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={sectionData.imageSrc}
            alt="Commitment section illustration"
            className="object-contain grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;