import { Container, Row, Col } from "react-bootstrap";
import PricingCard from "../PricingCard/PricingCard";
import MainTitle from "../MainTitle/MainTitle";

const PricingSection = ({ pricingData }) => {
  return (
    <Container className="my-5">
        <MainTitle title={'Pricing'} par={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
      <Row>
        {pricingData.map((plan) => (
          <Col key={plan.id} xs={12} sm={6} md={3}>
            <PricingCard
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              buttonLabel={plan.buttonLabel}
              featured={plan.featured}
              ribbon={plan.ribbon}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PricingSection;
