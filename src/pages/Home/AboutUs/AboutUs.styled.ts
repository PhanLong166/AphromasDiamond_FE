import styled from "styled-components";
import { theme } from "../../../themes";

export const Body = styled.div`
  background-color: #ffffff;
`;

export const ContainerBanner = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: 1fr 4fr 1fr;
  margin: 0 auto;
  max-width: 1320px;
  padding: 30px;

  & img {
    object-fit: cover;
    width: 100%;
  }
`;

export const LeftSidebar = styled.aside`
  img {
    height: 400px;
  }
`;

export const Main = styled.main`
  color: #45413e;
  font-family: "Montserrat", sans-serif;
`;

export const Heading = styled.h1`
  color: #102c57;
  font-family: "Great Vibes";
  font-size: 100px;
  margin: 0 0 20px;
  text-align: center;

  span {
    align-items: center;
    color: #102c57;
    display: flex;
    font-family: "Great Vibes";
    font-size: 0.21em;
    font-weight: 300;
    justify-content: center;

    &::before,
    &::after {
      background-color: #102c57;
      content: "";
      display: block;
      flex: 1;
      height: 1px;
    }

    &::before {
      margin-right: 15px;
    }

    &::after {
      margin-left: 15px;
    }
  }
`;

export const Slogan = styled.span``;

export const Article = styled.article`
  font-size: 1.15em;
`;

export const FeaturedImage = styled.img`
  margin-bottom: 30px;
  max-height: 400px;
  width: 100%;
  object-fit: cover;
`;

export const Paragraph = styled.p`
  line-height: 1.8em;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-size: 16px;

  &:first-of-type {
    margin-top: 0;

    &::first-letter {
      float: left;
      font-size: 3.35em;
      margin: 0.1em 0;
    }
  }
`;

export const RightSidebar = styled.aside`
  img {
    min-height: 540px;
  }

  @media screen and (max-width: 720px) {
    img {
      max-height: 250px;
    }
  }
`;
//WELCOME
export const Welcome = styled.div`
  margin-top: 30px;
  background-color: ${theme.color.primary};
  padding: 60px;
  text-align: center;
  .title {
    color: ${theme.color.white};
    font-family: "Gantari", sans-serif;
    font-weight: 600;
  }

  .section_subtitle {
    color: ${theme.color.white};
    font-family: "Gantari", sans-serif;
    font-size: 16px;
    padding: 10px;
  }
`;
//TEAM
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1320px;
`;

export const Team = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 60px;
  padding-bottom: 50px;
  .team-role {
    color: #45413e;
  }
  .team-name {
    color: ${theme.color.primary};
  }
  .section_title_team {
    text-align: center;
    margin-bottom: 20px;
  }
  .title_team {
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    font-size: 32px;
  }
  .subtitle_team {
    font-family: "Gantari", sans-serif;
    font-size: 16px;
    color: #45413e;
  }
  .team-content {
    text-align: center;
  }
`;
export const TeamImageCo = styled.div`
  text-align: center;

  .img-circle {
    border-radius: 50%;
    width: 100%;
    max-width: 300px;
    max-height: 400px;
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.1);
  }
`;
export const TeamImage = styled.div`
  .img-circle {
    border-radius: 50%;
    width: 100%;
    max-width: 200px;
    max-height: 200px;
    box-shadow: 0 0px 25px rgba(158, 158, 158, 0.1);
    margin-top: 20px;
  }
`;
export const ImageService = styled.div`
  img {
    height: 350px;
    width: 680px;
  }
`;

//SERVICE
export const Service = styled.div`
  padding: 50px;
  margin-top: 10px;
  background-color: #f4f2ee;
  .serviceSession {
    max-width: 1320px;
    margin: 0 auto;
  }
  .service-title {
    margin-bottom: 40px;
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-weight: bolder;
  }

  .title-little {
    margin-bottom: 40px;
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-weight: bolder;
    font-size: 32px;
  }

  p {
    font-size: 16px;
    font-family: "Gantari", sans-serif;
    color: #45413e;
  }
`;

export const ServiceButton = styled.div`
  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #f4f2ee;
    color: ${theme.color.primary};
    border: none;
    border: 1px solid ${theme.color.primary};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Poppins", serif;
    font-weight: 600;
    transition: all 0.45s ease;
    align-self: flex-end;
    margin-top: 20px;
    &:hover {
      background-color: ${theme.color.white};
      color: ${theme.color.primary};
      transition: all 0.45s ease;
    }
  }
`;

//WHY
export const Why = styled.div`
  .container {
    max-width: 1320px;
    margin: 0 auto;
    padding-bottom: 60px;
  }
  .section-head {
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 30px;
  }

  .section-head h2 {
    position: relative;
    text-align: center;
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-size: 32px;
  }

  .section-head p {
    font-family: "Gantari", sans-serif;
    font-size: 16px;
    color: #45413e;
    text-align: center;
  }

  .item {
    background: #fff;
    text-align: center;
    padding: 50px 35px;
    box-shadow: 0 0px 8px rgba(158, 158, 0, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(21, 21, 66, 0.2);
    transition: all 0.5s ease 0s;
  }

  .item:hover {
    border: none;
    box-shadow: 0 8px 20px 0px rgba(158, 158, 158, 0.1);
    transition: all 0.5s ease 0;
  }

  .item:hover .item,
  .item:hover span.icon {
    background: #f8f5ee;
    border-radius: 4px;
    transition: all 0.5s ease 0;
  }

  .item .icon {
    font-size: 40px;
    margin-bottom: 20px;
    color: ${theme.color.primary};
    width: 100px;
    height: 100px;
    line-height: 130px;
    border-radius: 50%;
  }

  .item .feature_box_col_six,
  .item .feature_box_col_five,
  .item .feature_box_col_four,
  .item .feature_box_col_two,
  .item .feature_box_col_one,
  .item .feature_box_col_three {
    color: ${theme.color.primary};
    padding: 10px 20px 20px;
  }

  .item p {
    font-size: 16px;
    line-height: 26px;
    font-family: "Gantari", sans-serif;
    color: #45413e;
  }

  .item h5 {
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    font-size: 17px;
  }
`;
//Design
export const Design = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-bottom: 50px;
  h2 {
    font-family: "Gantari", sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: ${theme.color.primary};
  }
  strong {
    color: ${theme.color.primary};
  }

  p {
    color: #45413e;
  }
`;

//Commitment
export const Commitment = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/About%2FScreenshot%202024-06-08%20213103.png?alt=media&token=6bf1b094-1a28-458a-86f4-d325ead6a6e3");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 380px;
  text-align: center;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Đảm bảo container có chiều cao bằng với phần tử cha */
  }

  .section_title_all {
    text-align: center; /* Canh giữa nội dung */
    max-width: 800px; /* Điều chỉnh chiều rộng tối đa của nội dung */
    padding: 0 20px; /* Thêm padding để giữ nội dung không quá rộng */
  }

  .title {
    color: ${theme.color.white};
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    font-size: 32px;
  }

  .section_subtitle {
    color: ${theme.color.white};
    font-family: "Gantari", sans-serif;
    font-size: 16px;
    margin-top: 20px; /* Tăng khoảng cách giữa title và text */
  }
`;
//mission
export const Mission = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-bottom: 50px;
  .app-container {
    text-align: center;
    padding: 20px;
  }

  .title-container {
    margin-bottom: 20px;
  }

  .title {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }

  .subtitle {
    text-align: center;
    color: ${theme.color.primary};
  }

  .carousel img {
    width: 1000px;
    height: 1200px;
    object-fit: cover;
    margin: 0 auto;
  }

  .description-container {
    margin-top: 20px;
  }

  .description {
    font-size: 16px;
    text-align: center;
    display: block;
    color: #45413e;
  }
`;

//CMT
export const Customer = styled.section`
  padding: 70px;
`;

export const HeadingCustomer = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    color: ${theme.color.primary};
    font-family: "Gantari", sans-serif;
    font-size: 32px;
  }
`;

export const CustomersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  gap: 1.5rem;
  margin-top: 2rem;
  color: #45413e;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Box = styled.div`
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  line-height: 25px;
  box-shadow: 0 0px 25px rgba(158, 158, 158, 0.1);

  &:hover {
    background: ${theme.color.secondary};
    transition: 0.2s all linear;
  }

  p {
    font-size: 15px;
    font-family: "Gantari", sans-serif;
    color: #45413e;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: ${theme.color.primary};
  }
`;

export const Stars = styled.div`
  margin-bottom: 1rem;
`;

export const StarIcon = styled.i`
  color: #d8a25a;
`;

export const CustomerImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
`;

export const FullImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Section = styled.div`
margin-bottom: 50px;
`;
