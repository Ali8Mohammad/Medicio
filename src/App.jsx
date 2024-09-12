import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import NavInfo from "./Components/NavInfo/NavInfo";
import CardComponent from "./Components/CardComponent/CardComponent";
import HelpSection from "./Components/HelpSection/HelpSection";
import AboutSection from "./Components/AboutSection/AboutSection";
// NavData
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
// NavData
// Navbar
import logoImg from './assets/img/logo.png'
// Navbar
// hero
import firstSlide from "./assets/img/hero-carousel/hero-carousel-1.jpg";
import secondSlide from "./assets/img/hero-carousel/hero-carousel-2.jpg";
import thirdSlide from "./assets/img/hero-carousel/hero-carousel-3.jpg";
// hero
// CardData
import { faDna, faHeartPulse, faPills, faThermometer } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CardData
const App = () => {
  const logo = {img : logoImg, text: 'Medicio'}
  const items = [
    {
      id: 'Home',
      name: 'Home',
    },
    {
      id: 'About',
      name: 'About',
    },
    {
      id: 'Services',
      name: 'Services',
    },
    {
      id: 'Departments',
      name: 'Departments',
    },
    {
      id: 'Doctors',
      name: 'Doctors',
    },
    {
      id: 'Contact',
      name: 'Contact',
    },
  ] 
  const navInfoData = [
    {
    icon: <FontAwesomeIcon icon={faClock} />,
    text: 'Monday - Saturday, 8AM to 10PM'
    },
    {
    icon: <FontAwesomeIcon icon={faMobileScreenButton} />,
    text: 'Call us now +1 5589 55488 55'
    }
]
const carouselData = [
  {
    img: firstSlide,
    heroCaption: 'Welcome to Medicio',
    heropar:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima tenetur doloribus aspernatur incidunt nihil, praesentium ipsam at quis voluptatem numquam.',
  },
  {
    img: secondSlide,
    heroCaption: 'At vero eos et accusamus',
    heropar:'tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.',
  },
  {
    img: thirdSlide,
    heroCaption: 'Temporibus autem quibusdam',
    heropar:'Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }
];

const iconClass = 'iconCard fs-1 mt-4 mb-3';
const cardData = [
  {
    icon: <FontAwesomeIcon className={iconClass} icon={faHeartPulse} />,
    cardtitle: 'Lorem ipsum',
    cardpar: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
  },
  {
    icon: <FontAwesomeIcon className={iconClass} icon={faPills} />,
    cardtitle: 'Sed ut perspici',
    cardpar: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore kjdyga',
  },
  {
    icon: <FontAwesomeIcon className={iconClass} icon={faThermometer} />,
    cardtitle: 'Magni Dolores',
    cardpar: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    icon: <FontAwesomeIcon className={iconClass} icon={faDna} />,
    cardtitle: 'Nemo Enim',
    cardpar: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
  },
];
const helpSectionData = {
  title: 'In an emergency? Need help now?',
  par: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  btn: 'Make an Appointment'
}
  return (
    <>
      <NavInfo navInfoData={navInfoData}/>
      <NavBar logo={logo} items={items} btn={'Make an Appointment'}/>
      <Hero carouselData={carouselData}/>
      <CardComponent cardData={cardData} />
      <HelpSection helpSectionData={helpSectionData}/>
      <AboutSection/>
    </>
  );
};

export default App;
