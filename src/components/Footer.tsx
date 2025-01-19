import * as React from "react";

interface SocialIconProps {
  padding: string;
}

interface QuickLinkProps {
  text: string;
}

interface NewsItemProps {
  title: string;
  date: string;
  author: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ padding }) => (
  <div className={`${padding} w-10 h-10 bg-white rounded-full`}></div>
);

const QuickLink: React.FC<QuickLinkProps> = ({ text }) => (
  <div className="mt-1.5">{text}</div>
);

const Footer: React.FC = () => {
  const socialIcons = [
    { padding: "px-3" },
    { padding: "px-3.5" },
    { padding: "px-3" },
    { padding: "px-2.5" }
  ];

  const quickLinks = [
    "About Company",
    "Our Services",
    "Our Projects",
    "Pricings",
    "Contacts"
  ];

  const clientSupport = [
    "Careers",
    "Our Process",
    "FAQs",
    "Clients Testimonials",
    "Our Blog"
  ];

  const newsItems = [
    {
      title: "Agile Construction Management Building",
      date: "20 Nov 2020",
      author: "by merkulove"
    },
    {
      title: "Top Saas Construction Products Information",
      date: "29 Nov 2020",
      author: "by merkulove"
    }
  ];

  return (
    <div className="self-stretch mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex  max-md:flex-col">
        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-end px-20 py-20 w-full text-gray-200 bg-emerald-600 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-start max-w-full w-[331px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a619405bd781995286f1fca0b1e08894f9b23c3f173f0102100df1eaecb0b317?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                alt=""
                className="object-contain max-w-full aspect-[3.68] w-[103px]"
              />
              <div className="mt-12 text-sm font-light leading-none uppercase max-md:mt-10">
                Call Us Today
              </div>
              <div className="mt-2.5 text-4xl font-semibold leading-none text-white">
                + 1 634 7638 654
              </div>
              <div className="flex gap-5 mt-10 text-lg leading-none text-blue-700 uppercase whitespace-nowrap">
                {socialIcons.map((icon, index) => (
                  <SocialIcon key={index} padding={icon.padding} />
                ))}
              </div>
              <div className="self-stretch mt-16 text-lg leading-7 max-md:mt-10">
                Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula,
                neque a velit
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-[61%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start p-20 mx-auto w-full bg-sky-950 max-md:px-5 max-md:max-w-full">
            <div className="max-w-full w-[643px]">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start text-lg leading-loose text-gray-300 max-md:mt-10">
                    <div className="self-stretch text-2xl leading-none text-white max-md:mr-2.5">
                      Quick Links
                    </div>
                    {quickLinks.map((link, index) => (
                      <QuickLink key={index} text={link} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start text-lg leading-loose text-gray-300 max-md:mt-10">
                    <div className="self-stretch text-2xl leading-none text-white">
                      Clients Support
                    </div>
                    {clientSupport.map((link, index) => (
                      <QuickLink key={index} text={link} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full text-lg leading-7 text-gray-300 max-md:mt-10">
                    <div className="self-start text-2xl leading-none text-white">
                      Our News
                    </div>
                    {newsItems.map((item, index) => (
                      <div key={index}>
                        <div className="mt-5 max-md:mr-1.5">{item.title}</div>
                        <div className="flex gap-5 justify-between mt-1.5 text-sm leading-none text-gray-200 font-[275]">
                          <div>{item.date}</div>
                          <div>{item.author}</div>
                        </div>
                        {index === 1 && (
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10a68430598225ea1b6cd2083b7fb0625187f1fbf1fcba59956af5ed262b5db?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                            alt=""
                            className="object-contain mt-3.5 aspect-[3.4] w-[34px]"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-lg leading-loose text-gray-300 max-md:mt-10 max-md:max-w-full">
              Merkulove © Dustro Template All rights reserved Copyrights 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;