import { Card } from "react-bootstrap";
import "./DoctorCard.css";

const DoctorCard = ({ name, specialty, image }) => {
  return (
    <Card className="doctor-card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{specialty}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
