import * as React from "react";

interface ConsultationCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  content: string;
  className?: string;
}

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ConsultationCard: React.FC<ConsultationCardProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex grow gap-5 justify-between px-10 py-8 w-full text-right bg-white shadow-[0px_0px_25px_rgba(0,0,0,0.14)] max-md:px-5 max-md:mt-5">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain shrink-0 aspect-[0.97] w-[70px]"
      />
      <div className="flex flex-col my-auto">
        <div className="self-start text-xl font-bold leading-tight text-sky-950 text-opacity-80">
          {title}
        </div>
        <div className="mt-2.5 text-lg leading-none text-black font-[275]">
          {description}
        </div>
      </div>
    </div>
  </div>
);

const InfoSection: React.FC<InfoSectionProps> = ({ title, subtitle, content, className }) => (
  <div className={`flex flex-col w-full text-black ${className}`}>
    {subtitle && (
      <div className="self-start text-sm font-medium leading-none text-emerald-600 uppercase">
        {subtitle}
      </div>
    )}
    <div className="text-6xl font-semibold leading-none max-md:max-w-full max-md:text-4xl">
      {title}
    </div>
    <div className="flex flex-col mt-7 max-w-full text-lg leading-7 w-[653px]">
      <div className="px-12 pt-3.5 pb-2 bg-stone-50 max-md:px-5 max-md:max-w-full">
        {content}
      </div>
    </div>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => (
  <div className="flex gap-6">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="object-contain shrink-0 my-auto aspect-[1.18] w-[86px]"
    />
    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
      <div className="self-start font-bold leading-loose text-right">
        {title}
      </div>
      <div className="leading-7">{description}</div>
    </div>
  </div>
);

const AboutUs: React.FC = () => {
  const consultationCards = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7825a90721742573ae55841ac2279d03e99d048f12cb723f6a0fff329068f2a?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "Kind Consulation",
      description: "Etiam ac leo at quam aliquet"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce024d42153579534f32d250f7c19f700f958447a2890f05132b5305c1ad548e?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "Kind Consulation",
      description: "Etiam ac leo at quam aliquet"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/01f19c80127edcd376d70f1954656fe5053abbdcd7e08c7d5cf6f292de4d5d42?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "Kind Consulation",
      description: "Etiam ac leo at quam aliquet"
    }
  ];

  const featureCards = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4617cfae3573fa5b36e8dfd738aecc3ff7bbb60c256d54df442ab76073cab68b?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "High Quality Build",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4bf9c3a23d8a1e1400c9e3f959b4f566f45380d2493ec4830e59f2e384ef413?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "High Quality Build",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c265e3e5eb7abc7ad68f244b1b08cd730179a4b3c44fe847b86674abfd9fed1?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "High Quality Build",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center bg-white max-md:py-24">
      <div className="flex relative z-10 flex-col self-stretch px-16 pt-96 pb-0 w-full text-6xl font-semibold leading-none text-white min-h-[419px] max-md:px-5 max-md:pt-24 max-md:pb-2.5 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/afc417e5bc1b3a5742868e4805e2ec437d70a62617bfc29c95a0718ee69f80ba?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          alt="About Us background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative z-10 w-screen items-start justify-start text-white">About Us</div>
      </div>
      <div className="flex relative flex-col items-center self-stretch px-20 pb-64 w-full min-h-[773px] max-md:px-5 max-md:pb-24">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e0ec9b4d33888d204ce449b0effe59d8e0ecc245f38c1addfcedd7ff76a435?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative z-10 flex-col mt-0 mb-0 ml-28 max-w-full w-[966px] max-md:mb-2.5">
          <div className="flex flex-col pl-20 max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-col items-start self-end px-20 py-14 max-w-full tracking-wider uppercase bg-white border-emerald-600 border-t-[7px] shadow-[0px_0px_35px_rgba(0,0,0,0.14)] w-[482px] max-md:px-5">
              <div className="text-sm text-black">Call Us Today</div>
              <div className="text-4xl font-semibold text-sky-950">
                +254 728 310886
              </div>
            </div>
            </div>
            </div>
            <div className="flex flex-col z-10 items-center justify-center w-full">
                <div className="self-center mt-28 text-4xl tracking-wider text-white max-md:mt-10">
                Get a Quote
                </div>
                <div className="mt-5 text-6xl font-semibold leading-none text-white max-md:max-w-full max-md:text-4xl">
                Build Your Future Today
                </div>
            
            <div className="mt-5 text-lg leading-7 text-center text-white w-[779px] max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
            </div>
            <button className="flex gap-1.5 self-center px-11 py-4 mt-5 w-60 max-w-full text-white whitespace-nowrap bg-emerald-600 max-md:px-5">
                <span className="grow shrink w-28 text-xl leading-tight text-right">
                Appointment
                </span>
            </button>
            </div>
      </div>
      <div className="z-10 mt-0 max-w-full w-[1179px]">
        <div className="flex gap-5 max-md:flex-col">
          {consultationCards.map((card, index) => (
            <ConsultationCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-start mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[661px] max-md:max-w-full">
          <InfoSection
            subtitle="About US"
            title="Our Story"
            content="Established in August 1979 by the visionary Mr. Ahmed Nurmohamed Elias, Fine Engineering Works Ltd has grown into a respected name in the engineering and construction industry"
            className="mt-32 max-md:mt-10"
          />
          <InfoSection
            title="Mission"
            content="We work in long-term relationships to develop and sustain our client's capital assets by providing specialized engineering products, services and solutions to all sectors including manufacturing, construction and service industries."
            className="mt-32 max-md:mt-10"
          />
          <InfoSection
            title="Vision"
            content="To provide state of art engineering services in the industrial sector"
            className="mt-32 max-md:mt-10"
          />
          <InfoSection
            title="Values"
            content="Our core values drive us to: Improve life Achieve excellence in engineering and construction Operate with the highest standards of integrity Expand access to our products Employ a diverse workforce that values collaboration"
            className="mt-32 min-h-[284px] max-md:mt-10"
          />
          <InfoSection
            title="Our Strength"
            content="Clear corporate structure and planning Competent and qualified regional heads, project managers, and site engineers Efficient back office support staff Constant updates with new technology, materials, and equipment"
            className="mt-32 min-h-[251px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col items-end min-w-[240px] w-[468px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17e08b7d2b65ca2e40e6ac8d57aa7d64533a5c7425053d5b4985bb3131dcd969?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
            alt="Company image 1"
            className="object-contain max-w-full aspect-[0.77] w-[451px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d0017ae3626415898713b81c4e3224767aa3f2340233ba046e20b1275d76478?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
            alt="Company image 2"
            className="object-contain mt-24 max-w-full aspect-[0.77] w-[451px] max-md:mt-10"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cc69a5625194828e9f5d5b20220a2bf84f1ebc820727b513275720f0efb9450?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
            alt="Company image 3"
            className="object-contain self-stretch mt-24 w-full aspect-[0.77] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
      <div className="mt-44 max-w-full w-[1135px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-start ml-2.5 text-right">
                <div className="self-start text-sm font-medium leading-none text-emerald-600 uppercase">
                  Appointment
                </div>
                <div className="mt-1.5 text-6xl font-semibold leading-none text-sky-950 max-md:text-4xl">
                  Request a Quote
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-7 w-full max-md:mr-0.5 max-md:max-w-full">
                <div className="flex flex-auto justify-center items-center">
                  <label className="sr-only" htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="gap-0 self-stretch py-1 pr-24 pl-5 my-auto bg-white border border-solid border-black border-opacity-30 min-w-[240px] w-[285px] max-md:pr-5"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex-auto">
                  <label className="sr-only" htmlFor="email">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full gap-0 self-stretch py-1 pr-24 pl-5 bg-white border border-solid border-black border-opacity-30 max-md:pr-5"
                    placeholder="E-Mail"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-8 w-full max-md:mr-0.5 max-md:max-w-full">
                <div className="flex flex-auto justify-center items-center">
                  <label className="sr-only" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="gap-0 self-stretch py-1 pr-24 pl-5 my-auto bg-white border border-solid border-black border-opacity-30 min-w-[240px] w-[285px] max-md:pr-5"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex-auto">
                  <label className="sr-only" htmlFor="service">Select Service</label>
                  <select
                    id="service"
                    className="w-full gap-0 self-stretch py-1 pr-24 pl-5 bg-white border border-solid border-black border-opacity-30 max-md:pr-5"
                  >
                    <option value="">Select Service</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col pl-2.5 mt-8 w-full whitespace-nowrap max-md:max-w-full">
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="px-5 pt-3.5 pb-20 text-lg leading-loose bg-white border border-solid border-black border-opacity-30 text-black text-opacity-50 max-md:px-5 max-md:pb-28 max-md:max-w-full"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="flex gap-1.5 self-start px-11 py-4 mt-16 text-white bg-emerald-600 max-md:px-5 max-md:mt-10"
                >
                  <span className="text-xl leading-tight text-right basis-auto">
                    Appointment
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full text-lg text-black max-md:mt-10 max-md:max-w-full space-y-16 max-md:space-y-10">
              {featureCards.map((card, index) => (
                <FeatureCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;