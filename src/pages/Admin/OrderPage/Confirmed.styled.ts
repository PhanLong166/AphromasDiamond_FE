import styled from "styled-components";

export const OrderAdminArea = styled.section`
// body {
//     margin: 0px 0px 0px 0px;
// }

    display: inline-flex;
    background-color: #EEEBE6;
    font-family: "Poppins", sans-serif;
    /* height: 100%; */
    width: 100%;

`;


// /* =============== ORDER ================= */

export const AdminPage = styled.section`
    margin-left: 320px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
`;



// /* -------------------- ORDER CONTENT =============== */

export const OrderContent = styled.section`
    width: 100%;
    background-color: #FFF7E8;
    border-radius: 16px;
    padding-bottom: 30px;
`;

export const OrderContent_Head = styled.section`
    margin: 39px 40px 30px 40px;

    h2 {
        margin: 0px 0px 0px 0px;
        padding: 39px 0px 27px;
        font-size: 24px;
        color: #102C57;
    }
`;

export const OrderContent_HeadBenefit = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: #EADBC8;
    padding: 20px 60px 20px 60px;
    border-radius: 16px;

    button {
        height: 55px;
        width: 139px;
        background-color: #FFF7E8;
        border-radius: 16px;
        border: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 16px;
        color: #102C57;
        font-weight: 600;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    }

    button:hover {
        cursor: pointer;
    }

    button .anticon {
        font-size: 18px;
    }
`;

export const SearchArea = styled.section`
    width: 70%;
    display: inline-flex;
    align-items: center; 

    .searchInput {
        width: 90%;
        font-size: 20px;
        padding-left: 10px;
        background-color: #FFF7E8;
        height: 55px;
        border:none;
        border-radius: 16px 0px 0px 16px;
        padding-right: 20px;
        color:#102C57;
    }
    .anticon {
        font-size: 23px;
        color: #102C57;
        background-color: #FFF7E8;
        height: 55px;
        border: 1px solid #FFF7E8;
        padding: 0px 20px 0px 20px;
        border-radius: 0px 16px 16px 0px;
    }
    .anticon:hover {
        cursor: pointer;
    }
`;

export const Pending_Table = styled.section`
    padding: 0px 50px 0px 50px;

    table {
        border-collapse: collapse;
        width: 100%;
    }
    th,
    td {
        padding: 8px;
        text-align: left;
        /* border-bottom: 1px solid #DDD; */
    }
    th {
        color: #783232;
    }
    .pendStatus {
        background-color: #F9F2B2;
        border-radius: 100px;
        padding: 5px 10px 5px 10px;
        font-size: 12px;
        color: #B7751E;
        border: none;
    }
    .confirmBtn {
        background-color: #B7751E;
        border-radius: 100px;
        /* font-size: 12px; */
        color: #F9F2B2;
        border: none;
        padding: 7px 17px 7px 17px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    }
    .confirmBtn:hover {
        cursor: pointer;
    }
`;

export const OrderContent_Foot = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #EADBC8;
    padding: 12px 60px 12px 60px;
    border-radius: 16px;
    margin: 39px 40px 0px 40px;
`;

export const PageNum = styled.section`
    display: flex;

    p {
        margin: 0px 7px 0px 0px;
        color: #B19F8A;
        font-weight: 500;
    }

    .nowPage {
        color:#102C57;
    }
`;

export const MovePage = styled.section`
    button {
        width:40px;
        height: 40px;
        background-color: #FFF7E8;
        border-radius: 12px;
        border: none;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
        font-size: 20px;
        display: inline;
        align-items: center;
        text-align: center;
        margin-right: 5px;
        font-size: 15px;
    }
    button:hover {
        cursor: pointer;
    }
    .backArrow .anticon {
        color: #92929D;
    }
    .nextArrow .anticon {
        color:#102C57;
    }
`;


export const hehe = styled.section`

`;