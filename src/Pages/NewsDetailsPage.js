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
import useTitle from "../hooks/useTitle";

const NewsDetailsPage = () => {
  useTitle("NewsDetails")
  const [newsLine, setNewsLine] = useState("");
  const [newsDetails, setNewsDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [relatedNews, setRelatedNews] = useState([]);
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
      setNewsDetails(result?.data?.news);
      setRelatedNews(result?.data?.sameNews);
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
      <div className=' col-md-10 mx-auto'>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container pt-3 pb-5 ">
            <nav aria-label="" className="bg-light rounded-3 p-2 mb-4">
              <h2 className='fw-bold text-center text-success'>NEWS DETAILS</h2>
            </nav>

            <div>
              <NoticeLine data={newsLine} />
              <Container>
                <Row className="py-10">
                  <Col md={8}>
                    <NewsDetailsInfoComponent data={newsDetails} />
                  </Col>
                  <Col md={4}>
                    {/* <NewsCategoriesComponent /> */}
                    <NewsGalleryComponent data={newsDetails} />
                  </Col>
                </Row>
                <RelatedPostsComponent data={relatedNews} />
              </Container>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
