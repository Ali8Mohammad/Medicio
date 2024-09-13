import { Card, Button } from "react-bootstrap";

const PricingCard = ({ title, price, period, features, buttonLabel, featured, ribbon }) => {
  return (
    <Card className={`text-center ${featured ? "border-primary" : ""}`}>
      {ribbon && <div className="ribbon">{ribbon}</div>}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h2>{price}<small>{period}</small></h2>
        <ul className="list-unstyled">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Button variant={featured ? "primary" : "outline-primary"}>{buttonLabel}</Button>
      </Card.Body>
    </Card>
  );
};

export default PricingCard;
