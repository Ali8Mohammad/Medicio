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
import AboutUsData from "./Data/AboutUsData";
import AppointmentData from "./Data/AppointmentData";
import DepartmentData from "./Data/DepartmentData";
import DoctorsSection from "./Components/DoctorsSection/DoctorsSection";
import GallerySlider from "./Components/GallerySlider/GallerySlider";
import PricingSection from "./Components/PricingSection/PricingSection";
import pricingData from './Data/PricingData';
import AccordionSection from "./Components/Accordion/Accordion";
import accordionData from "./Data/AccordionData";
import ContactSection from "./Components/Contact/ContactSection";


const App = () => {
  const { logo, items } = NavBarData();
  const carouselData = CarouselData(); 
  const cardData = CardData();
  const featuresData = FeaturesData();
  const servicesData = ServicesData();
  const quotesData = TestimonialsSlider()
  const {aboutData, listData, aboutCard} = AboutUsData()
  const {fields, formData, handleChange , handleSubmit} = AppointmentData()
  const {tabs , content , activeTab, handleTabClick} = DepartmentData()

  return (
    <>
      <NavInfo navInfoData={navInfoData}/>
      <NavBar logo={logo} items={items} btn={'Make an Appointment'}/>
      <Hero carouselData={carouselData} />
      <CardComponent cardData={cardData} />
      <HelpSection helpSectionData={helpSectionData}/>
      <AboutSection aboutData={aboutData} listData={listData} aboutCard={aboutCard}/>
      <FeaturesSection featuresData={featuresData}/>
      <ServicesSection services={servicesData} />
      <AppointmentForm fields={fields} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <DepartmentsSection tabs={tabs} content={content} activeTab={activeTab} handleTabClick={handleTabClick}/>
      <Slider quotes={quotesData} />
      <DoctorsSection />
      <GallerySlider/>
      <PricingSection pricingData={pricingData} />
      <AccordionSection data={accordionData} />
      <ContactSection/>
    </>
  );
};

export default App;
