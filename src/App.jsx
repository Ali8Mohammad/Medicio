import NavBar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import NavInfo from "./Components/NavInfo/NavInfo";
import CardComponent from "./Components/CardComponent/CardComponent";
import HelpSection from "./Components/HelpSection/HelpSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import FeaturesSection from "./Components/Features/FeaturesSection";
import navInfoData from './Data/NavInfoData'
import NavBarData from './Data/NavBarData'
import CarouselData from "./Data/CarouselData";
import CardData from './Data/CardData'
import helpSectionData from "./Data/helpSectionData";
import FeaturesData from "./Data/FeaturesData";
import ServicesData from "./Data/ServicesData";
import ServicesSection from "./Components/ServiceSection/ServicesSection";
import AppointmentForm from "./Components/Appointment/AppointmentForm";
import DepartmentsSection from "./Components/DepartmentsSection/DepartmentsSection";
import Slider from "./Components/CardSlider/CardSlider";
import TestimonialsSlider from "./Data/TestimonialsSlider";



const App = () => {
  const { logo, items } = NavBarData();
  const carouselData = CarouselData(); 
  const cardData = CardData();
  const featuresData = FeaturesData();
  const servicesData = ServicesData();
  const quotesData = TestimonialsSlider()


  return (
    <>
    <header className="mb-5">
      <NavInfo navInfoData={navInfoData}/>
      <NavBar logo={logo} items={items} btn={'Make an Appointment'}/>
      <Hero carouselData={carouselData} />
    </header>
      <CardComponent cardData={cardData} />
      <HelpSection helpSectionData={helpSectionData}/>
      <AboutSection/>
      <FeaturesSection featuresData={featuresData}/>
      <ServicesSection services={servicesData} />
      <AppointmentForm/>
      <DepartmentsSection/>
      <Slider quotes={quotesData} />
    </>
  );
};

export default App;
