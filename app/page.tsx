import NewsPage from "@/components/home/news/page";
import ExperienceSection from "@/components/home/sections/experience-section";
import { HeroSection } from "@/components/home/sections/hero-section";
import { MembersRegister } from "@/components/home/sections/members-register";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <ExperienceSection />
      <MembersRegister />
      <NewsPage />
    </div>
  );
}
