import styled from 'styled-components';
import { theme } from "../../../themes";

const GlobalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inika:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body {
    font-family: 'Great Vibes', cursive;
    background-color: ${theme.color.forth};
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  background-color: ${theme.color.forth};
`;

export const Banner = styled.section`
  background-color: ${theme.color.third};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div`

  width: 50%;
  padding: 10px;
  align-items: center;
  margin: 50px 150px;

  h2 {
    font-size: 50px;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Great Vibes';
    font-weight: 500;
    color: ${theme.color.primary};;
  }

  .subheading {
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 1.5;
    text-align: center;
    font-family: "Crimson Text", sans-serif;
    color: #45413e;
  }

`;

export const RightSection = styled.div`
  img {
    width: 50%;
    height: auto;
    border-radius: 10px;
    margin-left: 100px;
  }
`;

export const InfoSection = styled.div`
max-width: 1000px;
margin: 50px auto;
background-image: url('https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Finfo.jpg?alt=media&token=0bd5e0f0-db99-4ca2-aa67-697b851e0bc1'); 
background-size: cover;
background-position: center;
position: relative;
padding: 20px;
height: 300px; 
display: flex;
align-items: center;
justify-content: center;
`;
export const Overlay = styled.div`
color: #fff;
padding: 40px;
text-align: left;
h2 {
    font-family: 'Great Vibes';
    margin: 0 0 10px;
    font-size: 2rem;
    color: ${theme.color.primary};;
}
p {
    margin: 0;
    font-size: 17px;
    font-family: "Crimson Text", sans-serif;
    color: #45413e;
}
`;
export const GiftSection = styled.div``;


export const GiftItem = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
align-items: center;
max-width: 1200px;
margin: 0 auto;`;


export const GiftImg = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow:  0px 4px 16px rgba(0, 0, 0, 0.1);
transition: all 0.2s ease;
img {
    width: 600px;
    height: 300px
}
`;


export const GiftText = styled.div`
padding: 50px;
background: #fff;
display: flex;
flex-direction: column;

box-shadow:  0px 4px 16px rgba(0, 0, 0, 0.1);
transition: all 0.2s ease;
h2 {
    font-family: 'Great Vibes';
    font-size: 2.5rem;
    margin-top: 20px;
    color: ${theme.color.primary};;
}
p {
    font-size: 16px;
    font-family: "Crimson Text", sans-serif;
    color: #45413e;
    line-height: 1.5;
    margin-bottom: 10px;
    width: 80%;
    text-align: left;
}
`;

export const GiftButton = styled.button`
text-decoration: none;
padding: 10px 30px;
color: ${theme.color.forth};;
background-color: ${theme.color.primary};;
border-radius: 10px;
font-size: 10px;
font-family: "Poppins", sans-serif;
border-color: transparent;
width: 30%;

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