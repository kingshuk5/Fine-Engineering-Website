import { ProjectCardProps } from "../types";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  category,
  title,
  overlay,
}) => (
  <div className="flex relative flex-col text-center">
    <img
      loading="lazy"
      src={image}
      alt={title || ""}
      className="object-cover w-full h-full"
    />
    {overlay && (
      <div className="flex relative flex-col justify-center items-center px-20 py-24 bg-blue-700 bg-opacity-80 max-md:px-5">
        <div className="flex flex-col items-center max-w-full w-[158px]">
          <div className="text-sm font-light leading-none text-gray-300 uppercase">
            {category}
          </div>
          <div className="self-stretch mt-2.5 text-lg leading-none text-white">
            {title}
          </div>
          <div className="px-4 mt-8 w-10 h-10 text-2xl leading-none text-blue-700 whitespace-nowrap bg-white">
            +
          </div>
        </div>
      </div>
    )}
  </div>
);
