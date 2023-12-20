import About from "@/Components/About/About";
import Consultaion from "@/Components/Consultation/Consultaion";
import ConsultationMain from "@/Components/ConsultationForm/ConsultationMain";
import Diagram from "@/Components/Diagram/Diagram";
import Extra from "@/Components/Extra/Extra";
import Extra2 from "@/Components/Extra2/Extra2";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import PriceLists from "@/Components/PriceLists/PriceLists";
import Reviews from "@/Components/Reviews/Reviews";
import Services from "@/Components/Services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Consultaion />
      <Reviews />
      <ConsultationMain />
      <Extra />
      <Diagram />
      <Extra2 />
      <PriceLists />
      <Consultaion />
      <Footer />
    </div>
  );
}
