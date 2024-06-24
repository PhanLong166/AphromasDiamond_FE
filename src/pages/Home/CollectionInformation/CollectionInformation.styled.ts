import styled from "styled-components";
import { theme } from "../../../themes";
export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: #ffffff;
    color: ${theme.color.primary};
    border: none;
    border: 1px solid ${theme.color.primary};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Gantari", sans-serif;
    font-weight: 600;
    transition: all 0.45s ease;
    align-self: flex-start;

    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      transition: all 0.45s ease;
    }
  }
`;
export const MainTitle = styled.h2`
  text-align: center;
  font-family: "Great Vibes";
  color: ${theme.color.primary};
  font-size: 70px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const Section = styled.div`
  margin: 50px auto;
  .mainImageSection {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .section3 {
    position: relative;
  }

  .buttonSection3 {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .buttonSection4 {
    position: absolute;
    bottom: 4px;
    left: -140px;
    z-index: 1;
  }

  .section6 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .buttonSection6 {
    width: 100%;
    margin: 3px 0;
  }
`;

export const CenteredContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 10px auto;
`;

export const Title = styled.div`
  text-align: center;
  color: ${theme.color.primary};
  font-size: 32px;
  font-weight: 600;
`;

export const TitleLeft = styled.div`
  color: ${theme.color.primary};
  font-size: 32px;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  text-align: center;
  color: #45413e;
  font-size: 20px;
  font-weight: 300;
  margin: 10px auto;
`;

export const SubtitleLeft = styled.div`
  color: #45413e;
  font-size: 20px;
  font-weight: 300;
  margin: 10px auto;
`;

export const ContentCenter = styled.div`
  color: #45413e;
  font-size: 14px;
  margin: 10px auto;
  max-width: 800px;
  text-align: center;
`;

export const Content = styled.div`
  color: #45413e;
  font-size: 14px;
`;

export const Image = styled.img`
  height: 700px;
  width: 100%;
`;
export const ImageHeading = styled.img`
  height: 225px;
  width: 100%;
  object-fit: cover;
`;

export const ImageSection = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

export const MainImage = styled.img`
  max-width: 100%;
  height: auto;
`;
