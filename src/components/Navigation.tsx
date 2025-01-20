import * as React from "react";
import NavLink from "@/components/NavLink";
// import SocialIcons from "./SocialIcons";

interface TopLinkProps {
  text: string;
}

const TopLink: React.FC<TopLinkProps> = ({ text }) => (
  <div className="font-light text-zinc-700">{text}</div>
);

const Navigation: React.FC = () => {
  const topLinks = ["Support","Partners", "Careers"];
  const navigationItems = [
    { text: "Home", hasDropdown: false },
    { text: "Services", hasDropdown: true },
    { text: "Pages", hasDropdown: true },
    { text: "News", hasDropdown: true },
    { text: "Contacts", hasDropdown: false }
  ];

  return (
    <div className="flex flex-col items-center self-stretch px-16 pt-5 w-full bg-white max-md:px-5 max-md:max-w-full mb-10 md:mb-0">
      <div className="flex z-10 -mb-1 max-w-full w-[1189px]">
        <div className="flex flex-col">
          {/* <div className="self-center text-sm font-light leading-none uppercase text-zinc-700">
            Support
          </div> */}
          <div className="flex gap-2.5 items-center p-2.5 mt-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a2f900b9f7d744d4eef1b85ad9116de550cd39cfddcf85f18f7c161f1640fd7?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
              alt=""
              className="object-contain self-stretch my-auto aspect-[0.93] w-[75px]"
            />
          </div>
        </div>
        <div className="flex flex-col grow shrink-0 items-end self-start whitespace-nowrap basis-0 w-fit max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between max-w-full text-sm leading-none uppercase w-[1079px]">
            <div className="flex gap-10">
              {topLinks.map((link, index) => (
                <TopLink key={index} text={link} />
              ))}
            </div>
            {/* <SocialIcons /> */}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8168096e11ae569060f03634a5e3e78fce667615052a4508301e106bd0318fd?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
            alt=""
            className="object-contain self-stretch mt-5 w-full aspect-[1000] max-md:max-w-full"
          />
          <div className="flex flex-wrap gap-10 mt-8 text-sky-950">
            {navigationItems.map((item, index) => (
              <NavLink
                key={index}
                text={item.text}
                hasDropdown={item.hasDropdown}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;