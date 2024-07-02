import React from "react";
import { Row, Col } from "antd";
import {
  CheckCircleFilled,
  ContainerFilled,
  BellFilled,
  EyeFilled,
} from "@ant-design/icons";
import { Container } from "./ThankPage.styled";
import { Link } from "react-router-dom";
import config from "@/config";
import { orderDetail } from "./orderDetail";

const ThankPageSuccess: React.FC = () => {
  return (
    <Container>
      <div className="thank-page-success-container">
        <div className="thank-page-success-box">
          <CheckCircleFilled className="thank-page-success-icon" />
          <h1>PAYMENT SUCCESS!</h1>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ThankPage%2Fcoworking-lettering-thank-you-with-decorative-elements-text.png?alt=media&token=c0d352fe-d89e-43e0-a7ee-e02306ccf231"
            alt="Success"
            className="thank-page-success-image"
          />
          <hr className="thank-page-success-hr" />
          <div className="thank-page-summary-next-container">
            <Row className="thank-page-summary-next-row">
              <Col span={12} className="thank-page-summary-col">
                <h4 className="title">Your Summary</h4>
                <div className="thank-page-success-summary-box">
                  <Row>
                    <Col span={6} className="thank-page-summary-icon-col">
                      <div className="thank-page-summary-icon-box">
                        <ContainerFilled className="thank-page-icon" />
                      </div>
                    </Col>
                    <Col span={18} className="thank-page-summary-details">
                      <div className="content main">
                        <p className="label">ORDER ID </p>
                        <p className="info">{orderDetail.orderId}</p>
                      </div>

                      <div className="content">
                        <p className="label">DATE</p>
                        <p className="info">{orderDetail.date}</p>
                      </div>

                      <div className="content">
                        <p className="label"> CUSTOMER</p>
                        <p className="info"> {orderDetail.customer}</p>
                      </div>

                      <div className="content">
                        <p className="label">TOTAL ITEMS</p>
                        <p className="info">{orderDetail.totalItems}</p>
                      </div>

                      <div className="content">
                        <p className="label">AMOUNT</p>
                        <p className="info">{orderDetail.amount}</p>
                      </div>

                      <div className="content end">
                        <p className="label">PAYMENT METHOD</p>
                        <p className="info">{orderDetail.paymentMethod}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col span={12} className="thank-page-next-col">
                <h4 className="title">What’s Next</h4>
                <div className="thank-page-success-next-box">
                  <div className="thank-page-success-next-box-item item-1">
                    <Row className="thank-page-row">
                      <Col span={6} className="thank-page-next-icon-col">
                        <div className="thank-page-next-icon-box">
                          <BellFilled className="thank-page-icon" />
                        </div>
                      </Col>
                      <Col span={18} className="thank-page-next-details">
                        <p className="label-check">CHECK NOTIFICATIONS</p>
                        <p className="info-check">
                          We will update you on the status of your products and
                          orders through the Notifications section on our
                          website, so please stay tuned!
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className="thank-page-success-next-box-item item-2">
                    <Row className="thank-page-row">
                      <Col span={6} className="thank-page-next-icon-col">
                        <div className="thank-page-next-icon-box">
                          <EyeFilled className="thank-page-icon" />
                        </div>
                      </Col>
                      <Col span={18} className="thank-page-next-details">
                        <p className="label-check">TRACK YOUR ORDER</p>
                        <p className="info-check">
                          You can track your orders in the My Orders section of
                          your Account! If you have any questions about your
                          orders, please contact us! It is our pleasure to
                          assist you.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="thank-page-success-buttons">
            <Link to={config.routes.public.home}>
              <button className="home">HOME</button>
            </Link>
            <button className="track">TRACK ORDER</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ThankPageSuccess;
