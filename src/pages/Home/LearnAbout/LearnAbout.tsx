// import React, { useState } from 'react';
import { 
  Container,
  RightSection,
  LeftSection,
  Banner, 
  ImageWrapper, 
  ContentWrapper,
  LearnItem,
  Section
  
} from './LearnAbout.styled';
import { } from '@ant-design/icons';
import styled from 'styled-components';
import {  Breadcrumb  } from 'antd';
const CustomBreadcrumb = styled(Breadcrumb)`
margin-left: 175px;
padding-top: 10px;
padding-bottom: 10px;
`;
import { Row, Col, Card} from 'antd';
const CardWrapper = styled(Card)`
  background-color: #f1f1f1;
`;



const LearnAbout = () => {
  const learnItems = [
    {
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2FdiamondLearn.png?alt=media&token=7ae21688-147e-4b86-9a76-dd49d59e094f",
      name: "Diamond Education",
      subtitle: "Make the right choice by learning how to select your perfect diamond."
    },
    {
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2FmetalLearn.png?alt=media&token=46cd3cb3-7555-4b9a-ae87-0b71f044c66a",
      name: "Metal Education",
      subtitle: "Choose wisely with our guide to platinum, gold, silver, and tungsten jewelry."
    },
    {
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2FsizeLearn.png?alt=media&token=1b5bf8ea-2f64-4287-9f6d-e551878250c9",
      name: "Find Your Ring Size",
      subtitle: "Blue Nile realizes that you may not know the ring size for a given finger, and we want to help."
    },
    {
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2FweddingLearn.png?alt=media&token=da25253c-555b-493a-8160-47c057f1860b",
      name: "Wedding Ring Guide",
      subtitle: "This guide details all you'll need to know about choosing women's and men's wedding rings."
    },
    {
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2FnecklaceLearn.png?alt=media&token=1666e3ca-d330-429b-b088-b7d590086ab5",
      name: "Necklace Guide",
      subtitle: "Learn how to choose necklace jewelry to fit her style."
    },
    {
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2Fengagement.png?alt=media&token=8e533ff3-0a02-4837-8fd2-046fafafe59b",
      name: "Engagement Ring Guide",
      subtitle: "Get expert guidance on finding the perfect engagement ring."
    },
    {
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2FbraceletLearn.png?alt=media&token=bdec910a-7d8a-4ecb-844f-cd757170a8fa",
      name: "Earrings Guide",
      subtitle: "Learn why earrings make the perfect gift."
    },
    {
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2FearringLearn.png?alt=media&token=90190447-7199-4ff5-b67e-3a053b8e9bbe",
      name: "Bracelet Guide",
      subtitle: "Learn all about bracelets."
    },
   
  ];
    return (
        <>
         <Container>
        <div>
      <CustomBreadcrumb
        separator=">"
        items={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Learn About',
          },
          
        ]}
      />
    </div>
    <Banner>
        <LeftSection>
          <h2>Become An Expert.</h2>
          <div className="subheading">
          Embark on a journey of discovery with Learn About, an immersive platform meticulously curated by our diamond store. Unveil the captivating story behind each dazzling gemstone as you explore the rich history, intricate craftsmanship, and enduring allure of diamonds. From the origins of these precious stones to the art of diamond cutting and grading, Learn About offers a comprehensive exploration, inviting enthusiasts to deepen their appreciation and understanding of these timeless treasures.
          </div>
        </LeftSection>
        <RightSection>
          <img src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Learn%2Flearnbanner.png?alt=media&token=e2f8d6f8-8102-494d-9891-98dc2bf449c2" alt="Product Image" />
        </RightSection>
      </Banner>
  <Section>
        <LearnItem>
        <Row gutter={[16, 16]}>
        {learnItems.map((item, index) => (
          <Col span={12} key={index}>
            <LearnItem>
              <CardWrapper>
                <Row>
                  <Col span={10}>
                    <ImageWrapper>
                      <img alt="example" src={item.imageUrl} />
                    </ImageWrapper>
                  </Col>
                  <Col span={12}>
                    <ContentWrapper>
                      <h4>{item.name}</h4>
                      <p>{item.subtitle}</p>
                    </ContentWrapper>
                  </Col>
                </Row>
              </CardWrapper>
            </LearnItem>
          </Col>
        ))}
      </Row>
        </LearnItem>
      
        </Section>
      
</Container>
        </>
    );
}

export default LearnAbout;
