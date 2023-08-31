import { Col, Container, Row } from "react-bootstrap";
import { GetNewsData } from "../../api";
import HeadingComponent1 from "../Common/HeadingComponent1";
import NewsCard2 from "./NewsCard2";

const NewComp = ({ data }) => {
  const showData = data.slice(0, 5);

  return (
    <div className="my-5">
      <HeadingComponent1
        first="Association"
        second=" News"
        className={"text-white bg-main/70 rounded-t-2xl  text-center py-3 mb-0 "}
      />
      <div className="d-lg-flex gap-2 justify-content-between bg-second/50    rounded-b-2xl py-3 ps-3 pe-4">
        <div className="col-lg-6">
          <NewsCard2
            item={showData[0]}
            imgHeight="md:h-[400px] h-[200px]"
            heading="text-[16px] md:text-xl"
          />
        </div>
        <div className=" col-lg-6">
          <Row className="space-y-5 md:space-y-0 ">
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
        </div>
      </div>
    </div>
  );
};

export default NewComp;
