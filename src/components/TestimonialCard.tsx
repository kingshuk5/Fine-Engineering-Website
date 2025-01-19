import { TestimonialProps } from "../types";

export const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  image,
}) => (
  <div className="flex gap-5 max-md:flex-col">
    <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={image}
        alt={author}
        className="object-contain grow w-full aspect-[0.79] max-md:mt-10"
      />
    </div>
    <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <div className="px-6 w-20 h-20 text-3xl font-black text-white whitespace-nowrap bg-sky-950 max-md:px-5"></div>
        <div className="self-stretch mt-8 text-lg leading-7 text-zinc-700 max-md:max-w-full">
          {quote}
        </div>
        <div className="mt-8 text-2xl font-medium leading-none text-slate-800">
          {author}
        </div>
        <div className="mt-1.5 text-sm leading-none text-emerald-600">
          {role}
        </div>
      </div>
    </div>
  </div>
);
