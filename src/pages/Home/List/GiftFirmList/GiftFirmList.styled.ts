import styled from "styled-components";
import { theme } from "../../../../themes";
import { Collapse } from "antd";
import { Breadcrumb } from "antd";
const GlobalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inika:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body {
    font-family: 'Great Vibes', cursive;
    background-color: ${theme.color.white};
  }
`;
export const CustomBreadcrumb = styled(Breadcrumb)`
padding-top: 10px;
padding-bottom: 10px;
max-width: 1400px;
margin: 0 auto;
`;

export const StyledCollapse = styled(Collapse)`
.ant-collapse-item {
  background-color: #ffffff;
}
.ant-collapse-header-text {
  color: ${theme.color.primary};
}
.ant-collapse-content {
  background-color: #f5f2ed;
  color: #45413e;
}
.ant-collapse-expand-icon {
  color: ${theme.color.primary};
}
.ant-collapse-header {
  border-radius: 8px;
}
`;

export default GlobalStyle;

export const Container = styled.div`
  background-color: ${theme.color.white};
`;

export const Banner = styled.section`
  no-repeat center center;
  background-size: cover;
  display: flex;
`;

export const LeftSection = styled.div`
  width: 50%;
  max-width: 1600px;
  margin: 130px 160px;

  h2 {
    font-size: 50px;
    margin-bottom: 10px;
    text-align: left;
    font-family: "Great Vibes";
    font-weight: 500;
    color: ${theme.color.primary};
  }

  .subheading {
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 1.5;
    text-align: left;
    font-family: "Gantari", sans-serif;
    color: #45413e;
  }
`;

export const InfoSection = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Gift%2Flab_diamonds_sale_banner.6a518.jpg?alt=media&token=36d7c2cb-6117-4c20-a755-8cb3aabae7bd");
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
    font-family: "Great Vibes";
    margin: 0 0 10px;
    font-size: 32px;
    color: ${theme.color.primary};
  }
  p {
    margin: 0;
    font-size: 15px;
    font-family: "Gantari", sans-serif;
    color: #45413e;
  }
`;
export const GiftSection = styled.div`
  .gift-item1 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    max-width: 1200px;
    margin: 30px auto;
  }
  .gift-img1 {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;

    img {
      width: 600px;
      height: 350px;
      object-fit: cover;
    }
  }

  .gift-text1 {
    padding: 45px;
    background: #fff;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: start;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    h2 {
      font-family: "Great Vibes";
      font-size: 2.5rem;
      margin-top: 20px;
      color: ${theme.color.primary};
    }
    p {
      font-size: 16px;
      font-family: "Gantari", sans-serif;
      color: #45413e;
      line-height: 1.5;
      margin-bottom: 10px;
      width: 95%;
      text-align: left;
    }
  }

  .gift-button1 {
    text-decoration: none;
    padding: 15px 30px;
    color: ${theme.color.primary};
    background-color: ${theme.color.white};
    font-size: 10px;
    font-family: "Poppins", sans-serif;
    border: 1px solid;
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
      text-align: center;
    }

    &:hover {
      transition: all 0.45s ease;
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    }
  }

  .gift-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    max-width: 1200px;
    margin: 30px auto;
  }
  .gift-img {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    img {
      width: 600px;
      height: 350px;
      object-fit: cover;
    }
  }

  .gift-text {
    padding: 45px;
    background: #fff;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: end;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    h2 {
      font-family: "Great Vibes";
      font-size: 2.5rem;
      margin-top: 20px;
      color: ${theme.color.primary};
    }
    p {
      font-size: 16px;
      font-family: "Gantari", sans-serif;
      color: #45413e;
      line-height: 1.5;
      margin-bottom: 10px;
      width: 95%;
      text-align: right;
    }
  }

  .title {
    text-transform: lowercase;
    font-weight: 500;
  }

  .title:first-letter {
    text-transform: uppercase;
  }

  .gift-button {
    text-decoration: none;
    padding: 15px 30px;
    color: ${theme.color.primary};
    background-color: ${theme.color.white};
    font-size: 10px;
    font-family: "Poppins", sans-serif;
    border: 1px solid;
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
    }

    &:hover {
      transition: all 0.45s ease;
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    }
  }
`;
export const FAQs = styled.section`
  display: flex;
  margin: 50px auto;
  max-width: 1200px;
  justify-content: space-between;
`;

export const LeftFAQ = styled.div`
  width: 50%;
  padding-right: 20px;

  h2 {
    font-size: 27px;
    font-weightL 600;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }
  .ant-collapse {
  border-radius: 5px; 
}

.ant-collapse-item {
  background-color: #f4f2ee;
}

.ant-collapse-header {
  border-radius: 5px; 
}
`;
