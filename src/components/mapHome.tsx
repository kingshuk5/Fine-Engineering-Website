import * as React from "react";

interface InfoBlockProps {
  className?: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ className = "", title, description, imgSrc, imgAlt }) => {
  return (
    <div className={`flex gap-5 items-start md:px-px md:mt-40 text-2xl leading-none text-slate-800 md:w-full ${className}`}>
      <img loading="lazy" src={imgSrc} alt={imgAlt} className="object-contain z-10 shrink-0 my-auto aspect-square w-[65px]" />
      <div className="flex flex-col items-start self-start">
        <div className="text-sm font-light leading-none uppercase text-zinc-700">
          {title}
        </div>
        <div className="mt-4">{description}</div>
        {title === "Dustro Emails" && (
          <div className="self-stretch mt-1.5">
            dustro.info@gmail.com
          </div>
        )}
        {title === "Company Phones" && (
          <div className="self-stretch mt-1.5">
            + 1 634 7638 654
          </div>
        )}
      </div>
    </div>
  );
};

function Map_1() {
  return (
    <div className="flex overflow-hidden flex-col mt-32 mb-16">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba766acc3af623224ee66e0f18659d534484e49077fa972034b58d36627c1892?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
        alt="Main header image"
        className="object-contain w-full aspect-[3.28]  max-md:max-w-full"
      />
      <div className="z-10 self-center mt-0 max-w-full w-[1158px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[47%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col  bg-white shadow-[0px_2px_25px_rgba(0,33,91,0.2)] max-md:max-w-full">
                <div className="flex shrink-0 bg-emerald-600 h-[7px] max-md:max-w-full" />
                <div className="flex flex-col self-center p-10  max-w-full w-[329px] max-md:mt-10">
                  <div className="self-start text-sm font-light leading-none uppercase text-zinc-700">
                    Company Address
                  </div>
                  <div className="mt-2.5 text-4xl font-medium leading-10 text-sky-950">
                    Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InfoBlock
            className="ml-5 w-[24%] max-md:ml-0 max-md:w-full"
            title="Company Phones"
            description="+ 1 234 5678 098"
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f508a071fb66a83e2b66620579487336983ad4b075623dfca9d27b2e4686efd9?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
            imgAlt="Phone icon"
          />
          <InfoBlock
            className="ml-5 w-[30%] max-md:ml-0 max-md:w-full"
            title="Dustro Emails"
            description="dustro@gmail.com"
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/90775d01961761fcbd4724fb8ca1f21d4e99faf9a7314f66b584012c3fa2ff4b?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
            imgAlt="Email icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Map_1;