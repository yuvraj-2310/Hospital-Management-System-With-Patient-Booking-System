import Hero from "@/components/Hero";
import AboutUs from "@/components/aboutUs";
import Category from "@/components/category";
import Doctorsec from "@/components/doctorsec";
import Footer from "@/components/footer2";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Doctorsec/>
      <AboutUs/>
      <Category/>
      <Footer/>
      
    </main>
  );
}
