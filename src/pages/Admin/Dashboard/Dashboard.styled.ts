import { theme } from "@/themes";
import styled from "styled-components";

export const AdminContainer = styled.section`
    display: inline-flex;
    background-color: #EEEBE6;
    font-family: "Poppins", sans-serif;
    width: 100%;
    margin-top: 0px;
`;



// /* =============== DASHBOARD ================= */

export const AdminPage = styled.div`
    margin: 0px 0px 0px 280px;
    width: 100%;
    height: 100%;
    padding: 0px 60px 40px;
`;

export const TitlePage = styled.div`
    h1 {
        font-weight: 36px;
        color: ${theme.color.primary};
        margin: 47px 0px 0px 0px;
    }

    p {
        color: #B19F8A;
        font-size: 16px;
        margin: 0px 0px 0px 0px;
    }
`;

export const DBContent = styled.div`
    margin-top: 30px;
`;


// /* ------------- DASHBOARD - ROW 1 ----------- */

export const DBContent_1 = styled.div`
    display:flex;
    justify-content: space-between;
`;

export const StatistiBox = styled.div`
    width: 30%;
    height: 183px;
    background-color: ${theme.color.secondary};
    border-radius: 16px;
    text-align: center;
    display: inline;
    align-content: center;

    p{
        margin: 0px 0px 0px 0px;
        font-size: 43px;
        font-weight: 500;
        color:${theme.color.primary};
    }

    .statistics_explain {
        font-size: 16px;
        color:#B19F8A;
    }

`;

// /* ------------- DASHBOARD - ROW 2 ----------- */

export const DBContent_2 = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 40px;
`;

export const ChatGene = styled.div`
    width: 40%;
    height: 298px;
    background-color: ${theme.color.secondary};
    border-radius: 16px;
`;

export const ChatGene_Title = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 15px 25px;
`;

export const MainTitle = styled.div`
    h2 {
        margin: 0px 0px 0px 0px;
        font-size: 24px;
        color:${theme.color.primary};
    }

    p {
        margin: 0px 0px 0px 0px;
        color: #734A00;
        font-size: 14px;
    }
`;

export const ViewAll = styled.div`
    display: flex;
    align-items: center;
    color: #734A00;
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }

    p {
        margin: 0px 10px 0px 0px;
    }
`;

export const ChatGene_Content = styled.div`
    color:${theme.color.primary};

    .cusChat {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        margin: 12px 20px 10px 20px;
        padding: 7px 20px 10px 20px;
    }
    .cusChat:hover {
        border-radius: 16px;
        background-color: ${theme.color.secondary};
        cursor: pointer;
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



export const Revenue = styled.div`
    width: 30%;
    height: 298px;
    background-color: ${theme.color.secondary};
    border-radius: 16px;
`;

export const Revenue_Title = styled.div`
    padding: 20px 20px 15px 25px;

    h2 {
        margin: 0px 0px 0px 0px;
        font-size: 24px;
        color:${theme.color.primary};
    }
`;

export const Revenue_Content = styled.div`
    padding: 0px 20px 15px 25px;

    img {
        height: 222.37px;
    }
`;



export const TopTime = styled.div`
    width: 20%;
    height: 298px;
    display: flex;
    flex-direction: column;

    h2{
        color: ${theme.color.primary};
        margin: 0px 0px 0px 0px;
        font-size: 24px;
    }

    p {
        margin: 0px 0px 0px 0px;
        color: #734A00;
        font-size: 16px;
    }
`;

export const TopMonth = styled.div`
    height: 45%;
    background-color: ${theme.color.secondary};
    border-radius: 16px;
    margin-bottom: 25px;
    padding: 20px 20px 15px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`;

export const TopYear = styled.div`
    height: 45%;
    background-color: ${theme.color.secondary};
    border-radius: 16px;
    padding: 20px 20px 15px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


// /* ------------- DASHBOARD - ROW 3 ----------- */

export const DBContent_3 = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 40px;
`;

export const Shell = styled.div`
    width: 30%;
    height: 298px;
    background-color: ${theme.color.secondary};
    border-radius: 16px;
`;

export const Shell_Title = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 15px 25px;
    h2 {
        color:${theme.color.primary};
        margin: 0px 0px 0px 0px;
        font-size: 24px;
    }
`;

export const Shell_Content = styled.div`
    padding: 10px 20px 0px 25px;

    p{
        margin: 0px 0px 0px 0px;
    }

    .shell_ele {
        display: flex;
        justify-content: space-between;
        margin: 0px 0px 17px 0px;
    }
    .shell_eleName p {
        font-size: 18px;
        font-weight: 600;
        color:${theme.color.primary};
    }
    .shell_eleButton {
        color:${theme.color.primary};
        background-color: ${theme.color.secondary};
        border: 1px solid ${theme.color.primary};
        border-radius: 16px;
        padding: 7px 10px 7px 10px;
    }
    .shell_eleButton:hover {
        cursor: pointer;
        background-color: ${theme.color.primary};
        color:${theme.color.secondary};
    }
`;

export const Shell_TableTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    color: #734A00;
    font-weight: 500;
    font-size: 16px;
`;



    