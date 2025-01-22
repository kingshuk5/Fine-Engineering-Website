import * as React from "react";

interface StatisticCardProps {
  value: string;
  label: string;
  bgColor: string;
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ value, label, bgColor }) => (
  <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
    <div className={`flex flex-col px-14 py-16 mt-56 w-full ${bgColor} max-md:px-5 max-md:mt-10`}>
      <div className="self-start text-6xl font-semibold leading-none text-white max-md:text-4xl">
        {value}
      </div>
      <div className="mt-2.5 text-2xl leading-none text-gray-200">
        {label}
      </div>
    </div>
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="flex  items-start pr-6 pb-2.5 max-w-full w-[389px] max-md:pr-5">
    <img
      loading="lazy"
      src={icon}
      alt={`${title} service icon`}
      className="object-contain z-10 shrink-0 mt-2.5 aspect-[0.95] w-[61px]"
    />
    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
      <div className="self-start text-lg font-medium text-sky-950">
        {title}
      </div>
      <div className="mt-1.5 text-lg leading-7 text-zinc-700">
        {description}
      </div>
    </div>
  </div>
);

const StatisticsSection: React.FC = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b007d2c2b7df18707416a2c5e7a147880a328fcbde341d9cf22b224ac4a14067?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "General Contract",
      description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb43add2fa770b48a3652d57e713b1e4530ce910821da9b2c848dd9ed33de50e?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "Project Planning",
      description: "Nullam commodo tincidunt nisl, nec vehicula dui interdum nec"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d374dd0ed5e128b6600e909dda9ae25404a39ad759deb718bac9ab8b05d6fe4a?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
      title: "Refurbishment",
      description: "Sed vitae aliquet ipsum, ut ornare lectus. Proin sed sem risus. Sed nunc"
    }
  ];

  return (
    <div className="z-10 mt-0 ml-12 max-w-full w-[1080px] max-md:mt-0">
      <div className="flex  max-md:flex-col">
        <StatisticCard
          value="5000"
          label="Completed Projects"
          bgColor="bg-sky-950"
        />
        <StatisticCard
          value="45+"
          label="Years of Expirience"
          bgColor="bg-emerald-600"
        />
        <div className="flex flex-col  w-[46%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pb-20 w-full bg-white shadow-[0px_2px_25px_rgba(0,33,91,0.2)] max-md:max-w-full">
            <div className="flex shrink-0 bg-blue-700 h-[7px] max-md:max-w-full" />
            <div className="flex flex-col px-16 mt-6 max-md:px-5 max-md:max-w-full">
              <div className="self-start text-4xl font-medium leading-10 text-sky-950">
                We Construct and Manage Places and Infrastructures
              </div>
              <div className="flex flex-wrap items-end mt-12 w-screen md:w-full  md:h-[299px] max-md:mt-10">
                {services.map((service, index) => (
                  <div key={index} className={index > 0 ? "mt-6" : ""}>
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;