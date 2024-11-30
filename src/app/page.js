
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CourseInfo from "./components/CourseInfo";
import Testimonials from "./components/Testimonials";
import WeProvide from "./components/WeProvide";

export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroSection />
    <CourseInfo />
    <WeProvide />
    <Testimonials />
   </div>
  );
}
