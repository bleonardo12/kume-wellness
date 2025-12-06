import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Wellness from "@/components/sections/Wellness";
import Promociones from "@/components/sections/Promociones";
import MamaArmonia from "@/components/sections/MamaArmonia";
import DepilacionLaser from "@/components/sections/DepilacionLaser";
import B2B from "@/components/sections/B2B";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Wellness />
      <Promociones />
      <MamaArmonia />
      <DepilacionLaser />
      <B2B />
    </>
  );
}
