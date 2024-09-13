import { faDna, faHeartPulse, faHospitalUser, faNotesMedical, faPills, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const ServicesData = () => {
    const iconClass = 'iconCard fs-1 mt-4 mb-3';
    const servicesData = [
        {
          icon: <FontAwesomeIcon className={iconClass} icon={faHeartPulse} />,
          title: "Nesciunt Mete",
          description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
        },
        {
          icon: <FontAwesomeIcon className={iconClass} icon={faPills} />,
          title: "Eosle Commodi",
          description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
        },
        {
          icon: <FontAwesomeIcon className={iconClass} icon={faHospitalUser} />,
          title: "Ledo Markt",
          description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui voluptas adipisci eos earum corrupti."
        },
        {
          icon: <FontAwesomeIcon className={iconClass} icon={faDna} />,
          title: "Asperiores Commodit",
          description: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."
        },
        {
          icon: <FontAwesomeIcon className={iconClass} icon={faWheelchair} />,
          title: "Velit Doloremque",
          description: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsum corporis aut. Sed animi at autem alias eius labore."
        },
        {
          icon: <FontAwesomeIcon className={iconClass} icon={faNotesMedical} />,
          title: "Dolori Architecto",
          description: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim."
        }
      ];
  return servicesData
}

export default ServicesData