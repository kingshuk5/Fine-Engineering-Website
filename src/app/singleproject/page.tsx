import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

interface ProjectInfoItemProps {
  label: string;
  value: string;
}

interface GalleryImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const ProjectInfoItem: React.FC<ProjectInfoItemProps> = ({ label, value }) => (
  <div className="flex gap-7 mt-3.5">
    <div className="text-2xl">
      {label}<span className="font-bold">:</span>
    </div>
    <div className="my-auto text-lg font-light">{value}</div>
  </div>
);

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain grow w-full aspect-[1.16] max-md:mt-2.5"
    />
  </div>
);

const ProjectDetails: React.FC = () => {
  const projectInfo = [
    { label: "Client", value: "John Doe" },
    { label: "Category", value: "Construction Business" },
    { label: "Completed on", value: "20 January 2022" }
  ];

  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/034fbe8bd358346564400d930e6dfd648c11092f366ec245a74ef8ec1463db49?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Social media icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/14fac660607e66009a6fb8c46c1553dc1cef1a368279cd7a22bd7d94fc401985?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Social media icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/56d3321d555ea0efca227cb944f6cb732b86fd235cf0c46244a896186df9b643?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Social media icon 3" }
  ];

  const galleryImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ad10206644b103119c4129d2f82a6bd9a9a9a061244a75bdd77205bb0477717?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Project gallery image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ece38cfa79f3e2eba0de8c69e6422b60e5dbccb500596d441f496d34e7c64905?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Project gallery image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7399761952937dc56bfab90b6b016b7348bb1ae514c41cc7d34c815c0188d05?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Project gallery image 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/feda26831242825f66265d158a060ee92e65163685acf58fe1656b4860fb0e26?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf", alt: "Project gallery image 4" }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white max-md:py-24">
      <div className="flex relative flex-col justify-center items-start px-20 py-40 w-full min-h-[419px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8d1296aaae6ac4b2431c7e25b1fe9a6be81f3a138fbdfcc06db7597a9e454e2?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          alt="Project hero background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 max-md:mb-2.5">
          <div className="text-6xl font-semibold leading-none text-white max-md:text-4xl">
            Single Project
          </div>
          <div className="self-start mt-5 text-lg font-bold leading-loose text-gray-200">
            Home / Projects Archive / Single Project
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-center mt-28 ml-8 max-w-full w-[1245px] max-md:mt-10">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/55115fb8bf10676a9af4b12d0990e0263623060d800db7b838d5783210bf7322?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                alt="London Palace main view"
                className="object-contain grow w-full rounded-xl aspect-[1.15] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-semibold text-black">
                  London Palace
                </div>
                <div className="mt-8 text-lg font-bold leading-7 text-black max-md:max-w-full">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <div className="flex flex-col items-start mt-8 w-72 max-w-full text-black rounded-none">
                  <div className="text-3xl">Project Info</div>
                  {projectInfo.map((item, index) => (
                    <ProjectInfoItem key={index} {...item} />
                  ))}
                </div>
                <div className="flex gap-5 mt-8 max-w-full w-[190px]">
                  {socialIcons.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon.src}
                      alt={icon.alt}
                      className="object-contain shrink-0 aspect-square w-[50px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-xl text-black w-[680px] max-md:mt-10 max-md:max-w-full">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
          from a line in section 1.10.32.
          <br />
          <br />
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
          Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </div>
        <div className="mt-12 max-w-full w-[670px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            {galleryImages.slice(0, 2).map((image, index) => (
              <GalleryImage key={index} {...image} />
            ))}
          </div>
        </div>
        <div className="mt-2.5 max-w-full w-[670px]">
          <div className="flex gap-5 max-md:flex-col">
            {galleryImages.slice(2, 4).map((image, index) => (
              <GalleryImage key={index} {...image} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-16 max-w-full text-xl text-black w-[660px] max-md:mt-10">
          <button className="flex gap-2" tabIndex={0}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/988b4b654b6ffa9ef21e3db17b0a90c902c050fc7b93be1c66711064c1a71c46?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
              alt="Previous project arrow"
              className="object-contain shrink-0 my-auto w-4 rounded-sm aspect-[0.89]"
            />
            <div className="basis-auto">Previous Project</div>
          </button>
          <button className="flex gap-3" tabIndex={0}>
            <div className="grow">Next Project</div>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e97239ef5dcd8e3673d9d95dabd3461bede32805048958c3bd2cd7185f6603e?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
              alt="Next project arrow"
              className="object-contain shrink-0 my-auto rounded-sm aspect-[0.94] w-[17px]"
            />
          </button>
        </div>
        <div className="mt-28 max-w-full w-[1159px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c26b515fe71205e53522d8446debb3cd1e84ed6af0e5306386a37294a127c4?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                alt="Related project 1"
                className="object-contain grow w-full aspect-[0.77] max-md:mt-5"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center px-14 py-40 aspect-[0.769] max-md:px-5 max-md:py-24 max-md:mt-5">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/611dae62fb6bd7842e704c4c7f53e2f510321a9f886eaea342c8d00bc9e84a6c?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                  alt="Related project 2 background"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative text-xl text-white">Commercial</div>
                <div className="relative self-stretch mt-2 text-3xl font-medium text-white">
                  Benoit Architecture
                </div>
                <div className="flex relative flex-col items-center px-3.5 py-7 mt-4 bg-white h-[70px] w-[70px]">
                  <div className="shrink-0 w-1 border-4 border-rose-600 border-solid h-[23px]" />
                  <div className="shrink-0 w-full h-1 border-4 border-rose-600 border-solid" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e235377319eab4968809df05dfe33b9ae98a983139e9ff64ab40445fe5dcdc36?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                alt="Related project 3"
                className="object-contain grow w-full aspect-[0.77] max-md:mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;