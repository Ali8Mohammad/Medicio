import { faHandHoldingMedical, faLungs, faStaffSnake, faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import featuresImage from './../assets/img/features.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturesData = () => {
    const iconClassName = 'cardIcon'
    const featuresData = {
        title: "Enim quis est voluptatibus aliquid consequatur fugiat",
        description: "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi.",
        imageUrl: featuresImage,
        features: [
            {
                icon: <FontAwesomeIcon className={iconClassName} icon={faHandHoldingMedical} />,
                title: "Lorem Ipsum",
                description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
            },
            {
                icon: <FontAwesomeIcon className={iconClassName} icon={faSuitcaseMedical} />,
                title: "Nemo Enim",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
            },
            {
            icon: <FontAwesomeIcon className={iconClassName} icon={faStaffSnake} />,
            title: "Dine Pad",
            description: "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt aut fugit illum omnis"
        },
        {
                icon: <FontAwesomeIcon className={iconClassName} icon={faLungs} />,
                title: "Tride clov",
                description: "Eos voluptatum labore aliquid quis a delectus et. Saepe dolorem libero sit non aspernatur aut amet. Et eligendi"
            }
        ]
    };
    
  return featuresData
}

export default FeaturesData