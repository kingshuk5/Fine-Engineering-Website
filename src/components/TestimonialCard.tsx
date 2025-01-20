'use client';
import * as React from "react";
import { useEffect } from 'react';

interface TestimonialData {
  id: number;
  image: string;
  quote: string;
  name: string;
  position: string;
  companyLogo: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab86efd9e04b63e323271e2b957bfff9ed3b24e2df1883c6e8161dbc352e4bc7?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    quote: "Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique",
    name: "Katy Grey",
    position: "CEO Grey Industries",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/321513cbb0eadceacabcfcbec26741370bb8ef67be926d33e4418f70e4ad7800?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab86efd9e04b63e323271e2b957bfff9ed3b24e2df1883c6e8161dbc352e4bc7?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    quote: "Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique. Suspendisse tortor enim, varius et porttitor sit amet.",
    name: "John Smith",
    position: "CTO Tech Solutions",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/321513cbb0eadceacabcfcbec26741370bb8ef67be926d33e4418f70e4ad7800?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab86efd9e04b63e323271e2b957bfff9ed3b24e2df1883c6e8161dbc352e4bc7?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf",
    quote: "Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique. Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis.",
    name: "Sarah Johnson",
    position: "CFO Global Corp",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/321513cbb0eadceacabcfcbec26741370bb8ef67be926d33e4418f70e4ad7800?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <><div className="flex flex-col items-center justify-center mt-10">
      <p className="text-2xl text-red-500">
        Testmonials
      </p>
      <p className="font-bold text-5xl ">
        Our Clients Say
      </p>
    </div><div className="mt-10 max-w-full w-[1008px] relative">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={testimonials[currentIndex].image}
              alt={`Portrait of ${testimonials[currentIndex].name}`}
              className="object-contain grow w-full aspect-[0.79] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="px-6 py-5 w-20 h-20 text-3xl font-black text-white whitespace-nowrap bg-sky-950 max-md:px-5">
                {currentIndex + 1}.
              </div>
              <div className="self-stretch mt-8 text-lg leading-7 text-zinc-700 max-md:max-w-full">
                {testimonials[currentIndex].quote}
              </div>
              <div className="mt-8 text-2xl font-medium leading-none text-slate-800">
                {testimonials[currentIndex].name}
              </div>
              <div className="mt-1.5 text-sm leading-none text-emerald-600">
                {testimonials[currentIndex].position}
              </div>
              <img
                loading="lazy"
                src={testimonials[currentIndex].companyLogo}
                alt={`${testimonials[currentIndex].position} company logo`}
                className="object-contain mt-10 w-16 aspect-[4.57]" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 text-white bg-sky-950 rounded-full"
            aria-label="Previous testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 text-white bg-sky-950 rounded-full"
            aria-label="Next testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div></>
  );
}