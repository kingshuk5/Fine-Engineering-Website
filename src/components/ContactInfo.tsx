import { ContactInfoProps } from "../types";

export const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  details,
}) => (
  <div className="flex gap-5 items-center px-px mt-40 text-2xl leading-none text-slate-800 max-md:mt-10">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain z-10 shrink-0 self-stretch my-auto aspect-square w-[65px]"
    />
    <div className="flex flex-col self-stretch my-auto">
      <div className="self-start text-sm font-light leading-none uppercase text-zinc-700">
        {title}
      </div>
      {details.map((detail, index) => (
        <div key={index} className="mt-4">
          {detail}
        </div>
      ))}
    </div>
  </div>
);
