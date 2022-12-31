import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GetNewsUpdateData } from "../../api";
import HeroComponent1 from "../Common/HeroComponent1";
import NoticeLine from "../Common/NoticeLine";
import NewsCategoriesComponent from "../NewsDetailsComponent/NewsCategoriesComponent";
import NewsDetailsInfoComponent from "../NewsDetailsComponent/NewsDetailsInfoComponent";
import NewsGalleryComponent from "../NewsDetailsComponent/NewsGalleryComponent";
import RelatedPostsComponent from "../NewsDetailsComponent/RelatedPostsComponent";

const NewsDetailsPage = () => {
  const [newsLine, setNewsLine] = useState("");
  const [loading, setLoading] = useState(false);

  const getNewsLine = async () => {
    setLoading(true);
    const result = await GetNewsUpdateData();

    setLoading(false);
    if (result?.status === "success") {
      setNewsLine(result?.data?.newsupdate);
    }
  };
  useEffect(() => {
    getNewsLine();
  }, []);
  return (
    <div>
      <HeroComponent1 title="NEWS DETAILS" />
      <NoticeLine data={newsLine} />
      <Container>
        <Row className="py-10">
          <Col md={8}>
            <NewsDetailsInfoComponent />
          </Col>
          <Col md={4}>
            <NewsCategoriesComponent />
            <NewsGalleryComponent />
          </Col>
        </Row>
        <RelatedPostsComponent />
      </Container>
    </div>
  );
};

export default NewsDetailsPage;
