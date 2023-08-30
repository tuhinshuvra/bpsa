import { Col, Container, Row } from "react-bootstrap";
import { GetNewsData } from "../../api";
import HeadingComponent1 from "../Common/HeadingComponent1";
import NewsCard2 from "./NewsCard2";

const NewComp = ({ data }) => {
  const showData = data.slice(0, 5);

  return (
    <div className=" bg-slate-400 rounded-2xl my-5 py-5">
      <Container className="">
        <HeadingComponent1
          first="Association"
          second=" News"
          className="text-white mb-4 text-center"
        />
        <Row className="space-y-5 md:space-y-0">
          <Col md={6}>
            <NewsCard2
              item={showData[0]}
              imgHeight="md:h-[400px] h-[200px]"
              heading="text-[16px] md:text-xl"
            />
          </Col>
          <Col md={6}>
            <Row className="space-y-5 md:space-y-0">
              {showData &&
                showData.slice(1)?.map((item, index) => {
                  return (
                    <Col key={index} md={6}>
                      <NewsCard2
                        item={item}
                        imgHeight="h-[200px] md:h-[150px]"
                        heading="text-[14px]"
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewComp;
