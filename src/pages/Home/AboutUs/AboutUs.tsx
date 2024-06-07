// About.tsx


import { 
    Body,
    ContainerBanner, 
    LeftSidebar, 
    Main, 
    RightSidebar, 
    Heading, 
    Slogan, 
    Article, 
    FeaturedImage, 
    Paragraph,
    Welcome, 
    Team, 
    TeamImage, 
    TeamImageCo,
    ImageService,
    Service,
    ServiceButton,
    Why,
    Commitment, 
    Customer, 
    HeadingCustomer, 
    CustomersContainer,
     Box, 
     Stars, 
     CustomerImage, 
    //  StarIcon
} from './AboutUs.styled';
import styled from 'styled-components';
import { Row, Col, Typography} from 'antd';
const { Title, Text } = Typography;
import {  Breadcrumb  } from 'antd';
import { LikeOutlined, FieldTimeOutlined, SettingOutlined, ZoomInOutlined, BulbOutlined, HeartOutlined, StarFilled} from '@ant-design/icons';
const CustomBreadcrumb = styled(Breadcrumb)`
margin-left: 175px;
padding-top: 10px;
padding-bottom: 10px;
`;

const About = () => {
    return (
        <Body>
            <div>
      <CustomBreadcrumb
        separator=">"
        items={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'About Us',
          },
          
        ]}
      />
    </div>
            <ContainerBanner>
            <LeftSidebar>
                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Fpicleft.jpg?alt=media&token=f0c4bdf4-f0da-494b-b529-22b71c454c7a" alt="picture of a person" />
            </LeftSidebar>
            <Main>
                <Heading>
                    Aphromas Diamond <Slogan>Slogan</Slogan>
                </Heading>
                <Article>
                    <FeaturedImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Fpicmain.jpg?alt=media&token=ed79c309-f895-4b07-b4c4-398a10cba093" alt="Article's featured image" />
                    <Paragraph>
                        Aphromas Diamond, a premier diamond store, was founded in 1975 in New York City by three visionaries: Richard Morgan, Isabella Rossi, and Ahmed Khan. Richard, a renowned gemologist from London, Isabella, an artistic jewelry designer from Italy, and Ahmed, a strategic businessman from Dubai, combined their expertise to create a brand synonymous with quality and elegance.
                    </Paragraph>
                    <Paragraph>
                        In 1975, the trio launched Aphromas Diamond in New York's Diamond District, naming it after Aphrodite, the Greek goddess of love and beauty. Their mission was to offer unmatched quality and craftsmanship with a personal touch. Their commitment to excellence quickly earned them a reputation for exquisite diamond collections and bespoke jewelry.
                    </Paragraph>
                    <Paragraph>
                        Throughout the 1980s and 1990s, Aphromas Diamond expanded to Los Angeles, Paris, and Dubai. They emphasized ethical sourcing, ensuring all diamonds were conflict-free. Their dedication to quality and innovation solidified their global presence.
                    </Paragraph>
                    <Paragraph>
                        Today, Aphromas Diamond is a globally recognized brand, led by the second generation. They have embraced technology with an e-commerce platform, maintaining the founders' vision of exceptional quality and personalized service. The store offers a diverse range of jewelry, from classic to contemporary designs.
                    </Paragraph>
                    <Paragraph>
                        The founders' passion and commitment to excellence transformed Aphromas Diamond into a global leader. As the company looks to the future, it remains dedicated to innovation and ethical practices, ensuring its legacy of beauty and brilliance continues for generations.
                    </Paragraph>
                </Article>
            </Main>
            <RightSidebar>
                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Fpicright.jpg?alt=media&token=29a26331-6223-49cd-b93b-9f03df599016" alt="tall cover photo" />
            </RightSidebar>
        </ContainerBanner>
        <Welcome>
       
        <div className="container">
            <Row>
                <Col span={24}>
                    <div className="section_title_all">
                    <Title level={3} className="title">
                            WELCOME TO APHROMAS DIAMOND
                        </Title>
                        <Text className="section_subtitle">
                            Where timeless elegance meets exceptional craftsmanship.
                            <br />
                            Discover the brilliance of our exquisite diamond collections and bespoke jewelry designs.
                        </Text>
                    </div>
                </Col>
            </Row>
        </div>
        </Welcome>
        <Team>
            <div className="container">
                
                <div className="section_title_team">
                    <Title level={3} className="title_team">
                            OUR TEAM
                        </Title>
                        <Text className="subtitle_team">
                        Our people are our greatest asset and biggest differentiator. <br/>They also believe in having a lot of fun along the way.
                        </Text>
                    </div>
                
                <Row gutter={[16, 16]}>
                <Col md={8} sm={24}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImageCo>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-1.png?alt=media&token=dfa45487-04c0-490d-9b0c-8dc7f5e6b7c5" className="img-circle img-responsive" />
                            </TeamImageCo>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">David Brown</Title>
                                <div className="team-role">Co-founder</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                        <Col md={8} sm={24}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImageCo>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-10.png?alt=media&token=7c0018d5-1cca-41a5-9b00-ff644956287e" className="img-circle img-responsive" />
                            </TeamImageCo>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">Emily Jones</Title>
                                <div className="team-role">Co-founder</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} sm={24}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImageCo>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-11.png?alt=media&token=76911c67-040f-4b86-b209-55ddce2be455" className="img-circle img-responsive" />
                            </TeamImageCo>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">James Smith</Title>
                                <div className="team-role">Co-founder</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <Row gutter={[16, 16]}>
                    <Col md={4} sm={8} xs={12}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImage>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-2.png?alt=media&token=c7090f2c-4c52-41ad-adcf-489f1c63426e" className="img-circle img-responsive" />
                            </TeamImage>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">Thomas Robinson</Title>
                                <div className="team-role">Chief Executive Officer</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={8} xs={12}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImage>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-5.png?alt=media&token=4376ab51-8618-4f81-ab03-33cb7f2fb615" className="img-circle img-responsive" />
                            </TeamImage>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">Charlotte Evans</Title>
                                <div className="team-role">Chief Operating Officer</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={8} xs={12}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImage>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-4.png?alt=media&token=76e50b22-873c-421d-be84-0cb7b55f82fc" className="img-circle img-responsive" />
                            </TeamImage>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">Emma Johnson</Title>
                                <div className="team-role">Chief Technical Officer</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={8} xs={12}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImage>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-2.png?alt=media&token=c7090f2c-4c52-41ad-adcf-489f1c63426e" className="img-circle img-responsive" />
                            </TeamImage>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">William Davies</Title>
                                <div className="team-role">Chief Marketing Officer</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={8} xs={12}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImage>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-4.png?alt=media&token=76e50b22-873c-421d-be84-0cb7b55f82fc" className="img-circle img-responsive" />
                            </TeamImage>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">Jack Wilson</Title>
                                <div className="team-role">Chief Financial Officer</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={8} xs={12}>
                        <div className="team">
                            <div className="team-image">
                            <TeamImage>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-5.png?alt=media&token=4376ab51-8618-4f81-ab03-33cb7f2fb615" className="img-circle img-responsive" />
                            </TeamImage>
                            </div>
                            <div className="team-content">
                                <Title level={5} className="team-name">Sarah Taylor</Title>
                                <div className="team-role">Chief Sales Officer</div>
                                <div className="team-description"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Team>
        <Service>
            <div  style={{ margin: '0 auto', maxWidth: '1400px' }}>
                <Row gutter={[16, 16]} justify="center" align="middle">
                    <Col lg={12}>
                        <div className="service-content">
                            <h2 className="service-title">OUR SERVICE</h2>
                            <Title className="title-little"level={2}>Exceptional Service at Aphromas Diamond</Title>
                            <p>At Aphromas Diamond, we deliver unparalleled service and personalized attention. Our expert team guides you through every step of your jewelry journey to find the perfect piece that tells your unique story. </p>
                            <br/>
                            <p>From bespoke designs to comprehensive aftercare, we are committed to exceeding your expectations and ensuring an exceptional experience.</p>
                            <br/>
                            <ServiceButton>
                                <a href="/all" className="link-add">LEARN MORE</a>
                            </ServiceButton>
                        </div>
                        
                    </Col>
                    <Col lg={12}>
                        <div>
                            <ImageService>
                                <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2F76cfde31f90376b76a6b9b1797edfe83.jpg?alt=media&token=a71c49ea-5855-4b3f-a5ca-09ddf27b78a2" className="img-circle img-responsive" />
                            </ImageService>
                        </div>
                    </Col>
                </Row>
            </div>
        </Service>
        <Why>
        
            <div className="container">
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <div className="section-head">
                            <Title level={2}>Why Choose Us?</Title>
                            <p>When you choose Aphromas Diamond, you choose elegance, excellence, and a timeless symbol of beauty.</p>
                        </div>
                    </Col>
                   
                    <Col lg={8} sm={12}>
                        <div className="item">
                            <span className="icon feature_box_col_one"><LikeOutlined /></span>
                            <Title level={5}>Unmatched Quality</Title>
                            <p>If our customer has any problem and any query we are always happy to help then.</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className="item">
                            <span className="icon feature_box_col_two"><FieldTimeOutlined /></span>
                            <Title level={5}><h5>Timeless Elegance</h5></Title>
                            <p>If our customer has any problem and any query we are always happy to help then.</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className="item">
                            <span className="icon feature_box_col_three"><SettingOutlined /></span>
                            <Title level={5}>Personalized Service</Title>
                            <p>If our customer has any problem and any query we are always happy to help then.</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className="item">
                            <span className="icon feature_box_col_four"><ZoomInOutlined /></span>
                            <Title level={5}>Ethical Sourcing</Title>
                            <p>If our customer has any problem and any query we are always happy to help then.</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className="item">
                            <span className="icon feature_box_col_five"><BulbOutlined /></span>
                            <Title level={5}>Expertise and Knowledge</Title>
                            <p>If our customer has any problem and any query we are always happy to help then.</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className="item">
                            <span className="icon feature_box_col_six"><HeartOutlined /></span>
                            <Title level={5}>Comprehensive Aftercare</Title>
                            <p>If our customer has any problem and any query we are always happy to help then.</p>
                        </div>
                    </Col>
                </Row>
            </div>
       
        </Why>
        <Commitment>
        <div className="container">
            <Row>
                <Col span={24}>
                    <div className="section_title_all">
                    <Title level={3} className="title">
                    OUR COMMITMENT
                        </Title>
                        <Text className="section_subtitle">
                        Our commitment at Aphromas Diamond extends beyond providing exquisite diamond jewelry; it's a promise to uphold the highest standards of quality, integrity, and customer satisfaction. We are dedicated to exceeding expectations, ensuring ethical practices, and creating lasting relationships with our clients. With every piece we offer and every interaction we have, our commitment remains unwavering, ensuring that your experience with us is nothing short of exceptional.
                        </Text>
                    </div>
                </Col>
            </Row>
        </div>
        </Commitment>
        <Customer>
      <HeadingCustomer>
        <h2>WHAT OUR CUSTOMERS SAY</h2>
      </HeadingCustomer>
      <CustomersContainer>
        <Box>
          <Stars>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          </Stars>
          <p>Aphromas Diamond is my go-to choice when it comes to high-quality diamond jewelry. Every purchase I've made here has exceeded my expectations in terms of craftsmanship and aesthetics. The staff is always very dedicated and professional in their consultations. Highly satisfied!</p>
          <h3>Michael Smith</h3>
          <CustomerImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-11.png?alt=media&token=76911c67-040f-4b86-b209-55ddce2be455" />
        </Box>
        <Box>
          <Stars>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          </Stars>
          <p>I bought a diamond necklace from Aphromas Diamond as an anniversary gift for my wife. She absolutely loves it and keeps saying how exquisite the design is, and how brilliant and luxurious the diamond looks. The product truly lives up to its value, and the service at the store was very professional.</p>
          <h3>Olivia Williams</h3>
          <CustomerImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-10.png?alt=media&token=7c0018d5-1cca-41a5-9b00-ff644956287e" />
        </Box>
        <Box>
          <Stars>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          <StarFilled style={{color: '#D8A25A'}}/>
          </Stars>
          <p>I recently purchased a diamond ring from Aphromas Diamond and couldn't be happier! The quality of the diamond is absolutely stunning, sparkling more than I expected. The customer service was also exceptional and very attentive, making me feel very confident in my purchase.</p>
          <h3>Emily Johnson</h3>
          <CustomerImage src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2Favt-1.png?alt=media&token=dfa45487-04c0-490d-9b0c-8dc7f5e6b7c5" />
        </Box>
      </CustomersContainer>
    </Customer>
        
                        
       
        </Body>
        
    );
}

export default About;
