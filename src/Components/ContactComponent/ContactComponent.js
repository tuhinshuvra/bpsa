import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { EmailIcon, LocationIcon, PhoneIcon } from "../../assets/Icons/Icons";
import ButtonComponent from "../Common/ButtonComponent";
import HeroComponent1 from "../Common/HeroComponent1";

const ContactComponent = () => {
  return (
    <div>
      <HeroComponent1 title="Contact" />
      <div className="text-center bg-[#F8F8F8] py-5">
        <h2 className="text-center py-3 text-main font-semibold">
          Our Address
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-center ">
            <LocationIcon
              size={24}
              className="text-second ring-1 ring-second rounded-full w-10 h-10 p-2 mr-4"
            />
            <span>
              Room No-606 (5th Floor) Dhaka Metropolitan Police Headquarters{" "}
              <br />
              36 Sohid Captain Monsur Ali Soroni, Dhaka-1000
            </span>
          </div>
          <div className="flex items-center justify-center ">
            <PhoneIcon
              size={24}
              className="text-second ring-1 ring-second rounded-full  w-10 h-10 p-2 mr-1"
            />
            <span className="mr-2 font-semibold">Phone:</span>
            <span>+880248320808</span>
          </div>
          <div className="flex items-center justify-center ">
            <PhoneIcon
              size={24}
              className="text-second ring-1 ring-second rounded-full  w-10 h-10 p-2 mr-1"
            />
            <span className="mr-2 font-semibold">Fax:</span>
            <span>+880248320809</span>
          </div>
          <div className="flex items-center justify-center ">
            <EmailIcon
              size={24}
              className="text-second ring-1 ring-second rounded-full  w-10 h-10 p-2 mr-1"
            />
            <span className="mr-2 font-semibold">Email:</span>
            <span>bpsa2020@gmail.com</span>
          </div>
        </div>
      </div>
      <Container className="py-5">
        <h2 className="text-center py-3 text-main font-semibold">
          Get in Touch
        </h2>

        <Form>
          <Row>
            <Col className="py-2" md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
            </Col>
            <Col className="py-2" md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Phone" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="py-2" md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Email" />
              </Form.Group>
            </Col>
            <Col className="py-2" md={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="py-2">
            <Form.Control as="textarea" rows={3} placeholder="Your Message" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <ButtonComponent
            type="submit"
            title="Accept Terms and Conditions"
            className="bg-main px-4 py-3 text-white"
          ></ButtonComponent>
        </Form>
      </Container>
    </div>
  );
};

export default ContactComponent;
