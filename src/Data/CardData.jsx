import { faDna, faHeartPulse,faPills, faThermometer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardData = () => {
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
   
  return cardData
}

export default CardData