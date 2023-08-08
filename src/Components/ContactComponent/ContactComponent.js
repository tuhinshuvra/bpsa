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

    // console.log("Contact Data: ", data);

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
      <div className="bg-bgColor py-3">
        <Container>
          {" "}
          <Row>
            <Col md={6}>
              {" "}
              <div className="text-center  py-5">
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
                      Room No-606 (5th Floor) Dhaka Metropolitan
                      Police Headquarters <br />
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
            </Col>
            <Col md={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1054102633475!2d90.40220997425853!3d23.743620189038687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88db8f6cf1b%3A0xae201f6bc4740f03!2sDhaka%20Metropolitan%20Police%20Headquarters!5e0!3m2!1sen!2sbd!4v1672578274865!5m2!1sen!2sbd"
                className="w-full"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="gMap"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <h2 className="text-center py-3 text-main font-semibold">
          We Value Your Feedback
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
          <div className="text-center">
            <ButtonComponent
              type="submit"
              title="Submit"
              className="bg-main px-4 py-2 text-white"
            ></ButtonComponent>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactComponent;
