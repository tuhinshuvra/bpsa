import { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import { activitiesData } from "../../assets/Data/activitiesData";

const ActivitiesComp = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-[#E2E3E7] py-3 my-5 text-white rounded-2xl">
      <Container>
        <HeadingComponent1
          first="Our "
          second="Activities"
          className="text-center pb-8 text-black"
        />
        <Row>
          <Col md={6}>
            {activitiesData &&
              activitiesData.slice(0, 3).map((item, index) => {
                return (
                  <Accordion
                    className="py-2"
                    key={index}
                    activeKey={activeAccordion === index ? "0" : null}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header onClick={() => handleAccordionClick(index)}>
                        {item.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                          className="text-sm"
                        ></div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              })}
          </Col>
          <Col md={6}>
            {activitiesData &&
              activitiesData.slice(3).map((item, index) => {
                return (
                  <Accordion
                    className="py-2"
                    key={index}
                    activeKey={activeAccordion === index + 3 ? "0" : null}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header onClick={() => handleAccordionClick(index + 3)}>
                        {item.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                          className="text-sm"
                        ></div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActivitiesComp;