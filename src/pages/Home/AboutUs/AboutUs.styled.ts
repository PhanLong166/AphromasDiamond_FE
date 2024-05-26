
import styled from 'styled-components';

export const Body = styled.div`
    background-color: #f8f0e5;
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
    background-color: #102c57;
    padding: 60px;
    .title {
        color: #f8f0e5;
    font-family: "Playfair Display";
    font-weight: bolder;
    }
    
    .section_subtitle {
        color: #f8f0e5;
        font-family: "Crimson Text";
        font-size: 18px;
        padding: 10px; 
    }
`;
//TEAM
export const Container = styled.div`
margin: 0 auto;
max-width: 1200px;`;
export const Team = styled.div`
    margin-bottom: 30px;
`;

export const TeamImage = styled.div`
    .img-circle {
        border-radius: 50%;
    }
`;

export const TeamContent = styled.div``;

export const TeamName = styled.div`
    h5 {
        margin-top: 0;
    }
`;

export const TeamRole = styled.div`
    color: #A4A7AA;
`;
export const TeamDescription = styled.div`
    color: #A4A7AA;
`;
