import { theme } from "@/themes";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
    font-family: 'Poppins', sans-serif;
  }
`;


export const AdminContainer = styled.section`
  display: inline-flex;
  background-color:  #f1f1f1;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100%;
  margin-top: 0px;
`;

export const TopPage = styled.div`
flex-grow: 1; 
`;

// /* =============== DASHBOARD ================= */

export const AdminPage = styled.div`
  margin-left: 270px;
  margin-right: 35px;
  width: 100%;
  height: 100%;
  padding: 0px 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitlePage = styled.div`
  h1 {
    font-size: 25px;
    font-weight: 600;
    color: ${theme.color.primary};
    margin: 30px 0px 0px 0px;
    padding-bottom: 7px;
  }

  p {
    color: #92929d;
    font-size: 13px;
    margin: 0px 0px 0px 0px;
  }
`;

export const DBContent = styled.div`
  margin-top: 30px;
`;

// /* ------------- DASHBOARD - ROW 1 ----------- */

export const DBContent_1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatistiBox = styled.div`
  width: 20.5%;
  height: 150px;
  background-color: ${theme.color.secondary};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

  .circleProgress {
    font-size: 20px;
  }

  :where(.css-dev-only-do-not-override-1r287do).ant-progress .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
    stroke: ${theme.color.primary};
  }
`;

export const StatistiBox_Text = styled.div`
.statistics {
  margin: 0px 0px 0px 0px;
  font-size: 25px;
  font-weight: 600;
  color: ${theme.color.primary};
}

.statistics_explain {
  font-size: 12px;
  color: #92929d;
}
`;

export const TopMonth = styled.div`
  width: 32%;
  height: 150px;
  background-color: ${theme.color.secondary};
  border-radius: 16px;
  padding: 30px 20px 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 23px;
  }

  .topMonth_title, .topMonth-statisti {
    color: #92929d;
    font-size: 14px;
  }
`;


// /* ------------- DASHBOARD - ROW 2 ----------- */

export const DBContent_2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const MainTitle = styled.div`
  h2 {
    margin: 0px 0px 0px 0px;
    font-size: 24px;
    color: ${theme.color.primary};
  }

  p {
    margin: 0px 0px 0px 0px;
    color: #92929d;
    font-size: 14px;
  }
`;

export const ViewAll = styled.div`
  display: flex;
  align-items: center;
  color: #92929d;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    color: ${theme.color.primary};
  }

  p {
    margin: 0px 10px 0px 0px;
  }
`;


export const Revenue = styled.div`
  width: 66%;
  height: 280px;
  background-color: ${theme.color.secondary};
  border-radius: 16px;
`;

export const Revenue_Title = styled.div`
  padding: 25px 20px 0px 25px;
  color: ${theme.color.primary};

  h2 {
    margin: 0px 0px 10px 0px;
    font-size: 18px;
  }
  
  .revenueTotal {
    font-weight: 700;
    margin: 0px;
  }
`;

export const Revenue_Content = styled.div`
  padding: 0px 20px 15px 25px;
  margin: -20px 0 0 0;
  height: 240px;
  color: ${theme.color.primary};
`;

// export const TopTime = styled.div`
//   width: 32%;
//   height: 298px;
//   display: flex;
//   flex-direction: column;

//   h2 {
//     color: ${theme.color.primary};
//     margin: 0px 0px 0px 0px;
//     font-size: 24px;
//   }

//   p {
//     margin: 0px 0px 0px 0px;
//     color: #92929d;
//     font-size: 16px;
//   }
// `;



// export const TopYear = styled.div`
//   height: 45%;
//   background-color: ${theme.color.secondary};
//   border-radius: 16px;
//   padding: 20px 20px 15px 25px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;


export const RecentOrders = styled.div`
  width: 32%;
  height: 280px;
  background-color: ${theme.color.secondary};
  border-radius: 16px;
  padding: 25px 20px 15px 25px;
  overflow: auto;
`;

export const RecentOrders_Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;

  h2 {
    font-size: 18px;
  }
  
`;

export const RecentOrders_List = styled.div`
  .order_ele {
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 20px 0px;
    align-items: center;

    p {
      font-size: 13px;
      // font-weight: 600;
      color: ${theme.color.primary};
    }

    .order_eleCusName {
      color: #92929d;
    }

    .order_eleDate {
      font-size: 13px;
      color: #92929d;
    }
  
    .order_elePrice {
      background-color: ${theme.color.primary};
      color: #FFFFFF;
      padding: 5px 10px;
      font-size: 13px;
      align-content: center;
      margin: 0px;
      border-radius: 5px;
    }
  }

  
`;

// /* ------------- DASHBOARD - ROW 3 ----------- */

export const DBContent_3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const ChatGene = styled.div`
  width: 32%;
  height: 265px;
  background-color: ${theme.color.secondary};
  border-radius: 16px;
`;

export const ChatGene_Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 15px 25px;

  h2 {
    font-size: 18px;
  }

  p{
    font-size: 12px;
  }
`;

export const ChatGene_Content = styled.div`
  color: ${theme.color.primary};

  .cusChat {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin: 5px 20px 5px 20px;
    padding: 10px 20px 10px 20px;

    p {
      margin: 0px;
    }
  }
  .cusChat:hover {
    border-radius: 16px;
    background-color: rgb(221, 226, 232);
    cursor: pointer;
    transition: all 0.4s;
  }
  .cusChat_ava-name {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
  }
  .cusChat_ava-name img {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    margin-right: 10px;
  }
  .cusChat_link {
    text-align: center;
  }
`;

export const Element = styled.div`
  width: 32%;
  height: 265px;
  background-color: ${theme.color.secondary};
  border-radius: 16px;
  padding: 25px 20px 15px 25px;
`;

export const Ele_Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  h2 {
    color: ${theme.color.primary};
    margin: 0px 0px 0px 0px;
    font-size: 18px;
  }
`;

export const Ele_Content = styled.div`
display: flex;
flex-direction: column;
  justify-content: space-around;

  p {
    margin: 0px 0px 0px 0px;
  }

  .shell_ele {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 0px 17px 0px;
  }
  .shell_eleName p {
    font-size: 14px;
    // font-weight: 600;
    color: ${theme.color.primary};
  }
  .shell_eleButton {
    color: ${theme.color.primary};
    background-color: ${theme.color.secondary};
    border: 1px solid ${theme.color.primary};
    border-radius: 5px;
    padding: 5px 15px;
  }
  .shell_eleButton:hover {
    cursor: pointer;
    transition: all 0.4s;
    background-color: ${theme.color.primary};
    color: ${theme.color.secondary};
  }
`;

export const Ele_TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #92929d;
  font-weight: 500;
  font-size: 12px;
`;



export const EndPage = styled.div`
background-color:  #f1f1f1;
flex-shrink: 0;
`;