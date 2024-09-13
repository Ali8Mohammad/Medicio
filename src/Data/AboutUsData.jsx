import React from 'react'
import videoFrame from "./../assets/img/about.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faFlask, faHospital, faPlay, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
const AboutUsData = () => {
    const iconClassName = 'cardIcon'
    const aboutData = {
        img: videoFrame,
        caption:
          "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
        par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        par2: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        icon: <FontAwesomeIcon className="fs-2 text-light PlayIcon" icon={faPlay} />
      };
      const listData = [
        {
          text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          text: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        },
        {
          text: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ];
      const aboutCard = [
        {
          icon: <FontAwesomeIcon className={iconClassName} icon={faUserDoctor} />,
          number: '24',
          category: 'Doctors'
        },
        {
          icon: <FontAwesomeIcon className={iconClassName} icon={faHospital} />,
          number: '15',
          category: 'Depatments'
        },
        {
          icon: <FontAwesomeIcon className={iconClassName} icon={faFlask} />,
          number: '8',
          category: 'Research Labs'
        },
        {
          icon: <FontAwesomeIcon className={iconClassName} icon={faAward} />,
          number: '150',
          category: 'Awards'
        }
      ]
  return {aboutData, listData, aboutCard}
}

export default AboutUsData