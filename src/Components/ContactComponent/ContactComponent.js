import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { PostContactData } from "../../api";
import { EmailIcon, LocationIcon, PhoneIcon } from "../../assets/Icons/Icons";
import ButtonComponent from "../Common/ButtonComponent";
import HeroComponent1 from "../Common/HeroComponent1";
import { toast } from "react-hot-toast";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [massege, setMassege] = useState("");
  const [subject, setSubject] = useState("");

  const contactFormHandler = async (e) => {
    e.preventDefault();
    let data = {
      name,
      phone,
      email,
      massege,
      subject,
    };

    try {
      const result = await PostContactData(data);

      console.log(result?.status);
      if (result?.status === "success") {
        toast.success(result?.massege);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

        <Form onSubmit={contactFormHandler}>
          <Row>
            <Col className="py-2" md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                />
              </Form.Group>
            </Col>
            <Col className="py-2" md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Your Phone"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="py-2" md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Your Email"
                />
              </Form.Group>
            </Col>
            <Col className="py-2" md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Subject"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="py-2">
            <Form.Control
              onChange={(e) => setMassege(e.target.value)}
              as="textarea"
              rows={3}
              required
              placeholder="Your Message"
            />
          </Form.Group>

          <ButtonComponent
            type="submit"
            title="Submit"
            className="bg-main px-4 py-2 text-white"
          ></ButtonComponent>
        </Form>
      </Container>
    </div>
  );
};

export default ContactComponent;
