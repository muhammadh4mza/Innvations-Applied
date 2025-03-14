"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Features2 from "@/components/sections/features/Features2";
import Pricing from "@/components/sections/pricing/Pricing";
import Projects2 from "@/components/sections/projects/Projects2";
import Skills from "@/components/sections/skills/Skills";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import React from "react";
import Video from "@/components/sections/videos/Video";
import Hero3 from "@/components/sections/hero-banners/Hero3";
import About5 from "@/components/sections/about/About5";
import Services3 from "@/components/sections/services/Services3";
import Offer2 from "@/components/sections/offers/Offer2";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Team from "@/components/sections/team/Team";
import Blogs from "@/components/sections/blogs/Blogs";
import Brands from "@/components/sections/brands/Brands";
import Hero3Slide from "@/components/shared/hero-banner/Hero3Slide";
import Hero12 from "@/components/sections/hero-banners/Hero12";
const Home7Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero12 />
      <Features2 />
      <About5 />
      <Services3
        title={"WE OFFER CONSULTANCY SERVICES."}
        service={2}
        desc={
          " Sagittis purus sit amet volutpat consequat mauris nunc congue and tortor dignissim"
        }
      />
      <Video video={2} />
      <CounterUp />
      <Offer2 />
      <Skills title="Human Resource solutions." type={2} />
      <PinkColor />
      <Projects2 project={2} />
      <div className="border__line"></div>
      <Team />
      <Testimonials />
      <Pricing title="WE OFFER CONSULTANCY SERVICES." plan={2} />
      <Brands />
      {isOnepage ? <Contact1 pt={true} /> : ""}
      <Blogs />
    </main>
  );
};
export default Home7Main;
