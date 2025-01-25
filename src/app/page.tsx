"use client";
import * as React from "react";

import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import CommitmentSection from "@/components/CommitmentSection";
import ServicesSection from "@/components/ServicesSection";
import GalaryGrid from "@/components/Galary";
import Map_1 from "@/components/mapHome";
import TestimonialCarousel from "@/components/TestimonialCard";
import ImageComponent from "@/components/HomeVideo";
import { useEffect, useRef, useState } from "react";

const RevealOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              scrollObserver.unobserve(entry.target);
          }
      });

      if (ref.current) {
          scrollObserver.observe(ref.current);
      }

      return () => {
          if (ref.current) {
              scrollObserver.unobserve(ref.current);
          }
      };
  }, []);

  const classes = `transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-hidden  items-center bg-white">
      {/* Rest of the JSX structure with components */}
      <HeroSection
        title="Welcome to Fine Engineering Works Limited"
        description="Fine Engineering Works Limited is a leading international engineering and construction company with a rich history dating back to 1979. With our headquarters in Nairobi, Kenya, and a branch in Kampala, Uganda, we specialize in providing state-of-the-art engineering services to the industrial sector"
        ctaText="Learn more.."
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/c9f91abed3a6975c8d76f7dadbc2e9d80542bf8d81571bb5a91809208a5e6876?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
      />
      <RevealOnScroll>
        <StatisticsSection/>
      </RevealOnScroll>
      

      <RevealOnScroll>
        <CommitmentSection
          title="Our Commitment"
          subtitle="With our knowledge we guarente success"
          description="We pride ourselves on delivering exceptional quality, efficiency, and customer service. Our team of experts is dedicated to building community value into every project while providing professional expertise and quality construction"
          buttonText="Learn more"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4226f748bcde9652dbf53b8333e2e648bc505fdbddcde26a654a8499ce6a0509?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
        />
      </RevealOnScroll>


      <RevealOnScroll>
        <ServicesSection  />
      </RevealOnScroll>


      <RevealOnScroll>
        <GalaryGrid/>
      </RevealOnScroll>

      <RevealOnScroll>
        <Map_1/>
      </RevealOnScroll>

      <RevealOnScroll>
        <TestimonialCarousel/>
      </RevealOnScroll>
      <RevealOnScroll>
        <ImageComponent src={""} className={""}/>
      </RevealOnScroll>
      {/* Rest of the component implementation following the same pattern */}
    </div>
  );
}
export default HomePage
