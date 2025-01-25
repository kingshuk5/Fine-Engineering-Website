import * as React from "react";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow pb-10 w-full leading-7 text-black bg-white shadow-[0px_0px_25px_rgba(0,0,0,0.14)] max-md:mt-7">
      <div className="shrink-0 h-2 border-8 border-emerald-600 border-solid" />
      <div className="flex flex-col items-start pr-14 pl-6 mt-10 w-full max-md:px-5">
        <div className="text-lg font-light leading-loose">Explore Service</div>
        <div className="mt-4 text-2xl font-bold tracking-widest">{title}</div>
        <div className="flex gap-3 mt-4 text-base font-black tracking-wider whitespace-nowrap">
          <div>Read</div>
          <img
            loading="lazy"
            src={imageUrl}
            alt="Read more icon"
            className="object-contain shrink-0 my-auto w-5 aspect-[2.22]"
          />
        </div>
      </div>
    </div>
  </div>
);

function SingleService() {
  const services = [
    {
      title: "Mechanical \nEngineering",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/220b6a97ce96af3d19dfad75d19eed36a943baca9a329bda8de66e01ad0ca7ee?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
    },
    {
      title: "Mechanical \nEngineering",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/575c4f619a769b63bd5f13359627508c4c9305fa51513dc1b97d6b42b46478d1?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
    },
    {
      title: "Mechanical \nEngineering",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4230ea97be143ce5698726ebe9d6f6ca83a6a5fc59d7ee9fd659231f0ff40eb7?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
    },
    {
      title: "Mechanical \nEngineering",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/51b21dbc8e590209211b53834f4991c213d5ef9f3c338c14153d2a103f66e1b0?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
    }
  ];

  return (
    <div className="flex flex-col bg-white ">
      <div className="flex relative flex-col justify-center items-start px-20 py-40 w-full min-h-[419px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e046fa7edfc93782054817a1f0646040826477dcb1a31aa0a5aa496a7eaa345f?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          alt="Service background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 max-md:mb-2.5">
          <div className="text-6xl font-semibold leading-none text-white max-md:text-4xl">
            Single Service
          </div>
          <div className="self-start mt-5 text-lg font-bold leading-loose text-gray-200">
            Home / Service / Single Service
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-center mt-24 max-w-full w-[1179px] max-md:mt-10">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0811ba5ed96c2cf9316ea853d98815188d147c8ea70b75f8f3b9f166ce8aa67?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                alt="Service image 1"
                className="object-contain grow w-full aspect-[0.61] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a89761c14f69d74f76e2f6996bbd1b210463305baf9ac1b55b70dad49741cc1e?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                alt="Service image 2"
                className="object-contain grow w-full aspect-[0.62] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71031706665efa15fc0672a3f3ea1f7be602e8dc12eedb9b94f0d51124ab2a94?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                alt="Service image 3"
                className="object-contain grow w-full aspect-[0.61] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 text-4xl font-bold tracking-widest leading-none text-black max-md:mt-10 max-md:max-w-full">
          Petrolieum & Gas Refinery
        </div>
        <div className="mt-8 ml-3.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="text-lg font-bold leading-7 text-black max-md:mt-10 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for &apos;lorem
                ipsum&apos; will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                <br />
                <br />
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for &apos;lorem
                ipsum&apos; will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-10 py-20 w-full font-bold text-white bg-emerald-600 max-md:px-5 max-md:mt-10">
                <div className="text-4xl tracking-widest leading-10">
                  Get a appointment
                  <br />
                  with our Expert
                </div>
                <div className="mt-6 mr-7 text-lg leading-7 max-md:mr-2.5">
                  Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
                  rutrum leo consectetur accumsan. Vivamus viverra ante turpis.
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d555239230bb01dd72f5cf01ab767384ea4acca74cd8e3d1e9ad4e74ea19a85?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                  alt="Expert appointment icon"
                  className="object-contain mt-20 ml-3 aspect-square w-[50px] max-md:mt-10 max-md:ml-2.5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-4xl font-bold tracking-widest leading-none text-black max-md:mt-10 max-md:ml-1">
          Other Services
        </div>
        <div className="mt-16 ml-3.5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleService;