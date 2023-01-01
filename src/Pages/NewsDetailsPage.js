import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GetNewsDetails, GetNewsUpdateData } from "../api";
import HeroComponent1 from "../Components/Common/HeroComponent1";
import NoticeLine from "../Components/Common/NoticeLine";
import NewsCategoriesComponent from "../Components/NewsDetailsComponent/NewsCategoriesComponent";
import NewsDetailsInfoComponent from "../Components/NewsDetailsComponent/NewsDetailsInfoComponent";
import NewsGalleryComponent from "../Components/NewsDetailsComponent/NewsGalleryComponent";
import RelatedPostsComponent from "../Components/NewsDetailsComponent/RelatedPostsComponent";

const NewsDetailsPage = () => {
  const [newsLine, setNewsLine] = useState("");
  const [newsDetails, setNewsDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const { newsId } = useParams();

  const getNewsLine = async () => {
    setLoading(true);
    const result = await GetNewsUpdateData();

    setLoading(false);
    if (result?.status === "success") {
      setNewsLine(result?.data?.newsupdate);
    }
  };

  const getNewsDetails = async () => {
    setLoading(true);
    const result = await GetNewsDetails(newsId);
    console.log(
      "🚀 ~ file: NewsDetailsPage.js:31 ~ getNewsDetails ~ result",
      result
    );

    setLoading(false);
    if (result?.status === "success") {
      setNewsDetails(result?.data?.news[0]);
    }
  };
  useEffect(() => {
    getNewsLine();
  }, []);

  useEffect(() => {
    if (newsId) {
      getNewsDetails();
    }
  }, [newsId]);
  return (
    <div>
      <HeroComponent1 title="NEWS DETAILS" />
      <NoticeLine data={newsLine} />
      <Container>
        <Row className="py-10">
          <Col md={8}>
            <NewsDetailsInfoComponent data={newsDetails} />
          </Col>
          <Col md={4}>
            <NewsCategoriesComponent />
            <NewsGalleryComponent data={newsDetails} />
          </Col>
        </Row>
        <RelatedPostsComponent />
      </Container>
    </div>
  );
};

export default NewsDetailsPage;
