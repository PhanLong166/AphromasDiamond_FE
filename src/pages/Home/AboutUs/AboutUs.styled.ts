

import styled from 'styled-components';
import { theme } from "../../../themes";

export const Body = styled.div`
    background-color: ${theme.color.white};;
`;

export const ContainerBanner = styled.div`
    display: grid;
    grid-gap: 35px;
    grid-template-columns: 1fr 4fr 1fr;
    margin: 0 auto;
    max-width: 1200px;
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
    color: #45413E;
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
            content: '';
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
    line-height: 1.65em;
    font-family: "Crimson Text";
    text-align: center;
    font-size: 19px;

    &:first-of-type {
        margin-top: 0;

        &::first-letter {
            float: left;
            font-size: 3.35em;
            margin: 0.25em 0.15em 0 0;
        }
    }
`;

export const RightSidebar = styled.aside`
    img {
        min-height: 570px;
    }

    @media screen and (max-width: 720px) {
        img {
            max-height: 250px;
        }
    }
`;
//WELCOME
export const Welcome = styled.div`

    background-color: ${theme.color.primary};
    padding: 60px;
    text-align: center;
    .title {
    color: ${theme.color.white};
    font-family: "Playfair Display";
    font-weight: 600;
    }
    
    .section_subtitle {
        color: ${theme.color.white};
        font-family: "Crimson Text";
        font-size: 16px;
        padding: 10px; 
    }
`;
//TEAM
export const Container = styled.div`
margin: 0 auto;
max-width: 1200px;`;


export const Team = styled.div`
max-width: 1200px;
margin: 0 auto;
margin-top: 50px;
padding-bottom: 50px;
.team-role{
    color: #45413E;
}
.team-name{
    color: ${theme.color.primary};
}
.section_title_team{
    text-align: center;
    margin-bottom: 20px;
}
.title_team {
    color: ${theme.color.primary};
    font-family: "Playfair Display";
    font-weight: bolder;
}
.subtitle_team {
    font-family: "Crimson Text";
    font-size: 19px;
    color: #45413E;
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
    max-height: 300px;
}
`;
export const TeamImage = styled.div`
    .img-circle {
        border-radius: 50%;
        width: 100%; 
        max-width: 200px; 
        max-height: 200px; 
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
background-color: ${theme.color.secondary};
padding: 50px;
.service-title {
    margin-bottom: 40px;
    color: ${theme.color.primary};
    font-family: "Playfair Display";
    font-weight: bolder;
}

.title-little {
    margin-bottom: 40px;
    color: $#45413E;
    font-family: "Playfair Display";
    font-weight: bolder;
}

p{
    font-size: 16px;
    font-family: "Crimson Text";
    color: #45413E;
}

`;

export const ServiceButton= styled.button`
  text-decoration: none;
  padding: 10px 30px;
  color: ${theme.color.white};;
  background-color: ${theme.color.primary};;
  border-radius: 10px;
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  border-color: transparent;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }

  &:hover {
    background-color: #d8a25a;
    transition: all 0.45s ease;
  }
`;

//WHY
export const Why= styled.div`

.container {
    max-width: 1000px;
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
    font-family: "Playfair Display";
}

.section-head p{
    font-family: "Crimson Text";
    font-size: 18px;
    color: #45413E;
    text-align: center;
}


.item {
    background: ${theme.color.secondary};
    text-align: center;
    padding: 50px 35px;
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
    border: 5px solid rgba(0, 0, 0, 0.02);
    transition: all 0.5s ease 0s;
}

.item:hover {
    background: ${theme.color.primary};
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.2);
    transition: all .5s ease 0;
    transition: all 0.5s ease 0s;
}

.item:hover .item,
.item:hover span.icon {
    background:  ${theme.color.secondary};
    color: ${theme.color.primary};
    border-radius: 10px;
    transition: all .5s ease 0;
    transition: all 0.5s ease 0s;
}

.item:hover h5,
.item:hover p {
    color: #fff;
    transition: all .5s ease 0;
    transition: all 0.5s ease 0s;
}

.item .icon {
    font-size: 40px;
    margin-bottom: 25px;
    color: ${theme.color.primary};
    width: 100px;
    height: 100px;
    line-height: 130px;
    border-radius: 50%;
}



.item .feature_box_col_six, .item .feature_box_col_five, .item .feature_box_col_four, .item .feature_box_col_two, .item .feature_box_col_one, .item .feature_box_col_three {
    background: ${theme.color.primary};
    color: ${theme.color.secondary};
    padding: 20px;
}

.item p {
    font-size: 16px;
    line-height: 26px;
    font-family: "Crimson Text";
    color: ${theme.color.primary};
}

.item h5{
    font-family: "Crimson Text";
    color: ${theme.color.primary};
    font-size: 17px;
}




`;

export const Commitment = styled.div`

    background-color: ${theme.color.primary};
    padding: 70px;
    text-align: center;
    .title {
    color: ${theme.color.white};
    font-family: "Playfair Display";
    font-weight: 600;
    }
    
    .section_subtitle {
        color: ${theme.color.white};
        font-family: "Crimson Text";
        font-size: 16px;
        margin: 0 300px;
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
    font-family: "Playfair Display";
  }
`;

export const CustomersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  gap: 1.5rem;
  margin-top: 2rem;
  color: #45413E;
`;

export const Box = styled.div`
  padding: 20px;

  border-radius: 32px;
  text-align: center;
  line-height: 25px;
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${theme.color.secondary};
    transition: 0.2s all linear;
  }

  p {
    font-size: 15px;
    font-family: "Crimson Text";
    color: ${theme.color.primary}
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: ${theme.color.primary}
  }
`;

export const Stars = styled.div`
  margin-bottom: 1rem;
`;

export const StarIcon = styled.i`
  color: #D8A25A;
`;

export const CustomerImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
`;
