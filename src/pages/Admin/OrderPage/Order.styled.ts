import styled from "styled-components";


export const OrderAdminArea = styled.section`
    display: inline-flex;
    background-color: #F1F1F1;
    font-family: "Poppins", sans-serif;
    /* height: 100%; */
    width: 100%;

`;

export const AdminPage = styled.div`
    margin-left: 320px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 55px;
`;


// /* -------------------- CONTENT =============== */

export const OrderContent = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px;
    margin-top: 28px;
    padding-top: 25px;
    padding-bottom: 30px;
`;

export const OrderContent_Head = styled.div`
    margin: 0px 40px 30px 40px;
`;

export const SearchArea = styled.div`
    width: 30%;
    height: 45px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(203, 210, 220, 0.5);
    border-radius: 16px;
    color: #151542;
    background-color: #F8F9FB;

  .searchInputContainer {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 4px 8px;
    width: calc(100% - 46px); // Adjust width to fit the layout
  }
  .searchIcon {
    margin: 0px 10px 0px 10px;
  }
  .searchInput {
    border: none;
    outline: none;
    flex-grow: 1;
    // font-size: 16px;
    background-color: #F8F9FB;
    padding: 0px;
  }
  .filterIcon {
    font-size: 20px;
    margin-left: 10px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: center;
  }
    

`;

export const Pending_Table = styled.div`
    padding: 0px 50px 0px 50px;
    color: #151542;

    table {
        border-collapse: collapse;
        width: 100%;
    }
    th,
    td {
        padding: 8px;
        text-align: left;
        font-size: 16px;
        color: #151542;
    }
    tr th {
        font-size: 13px;
        color: #92929D !important;
    }
    tr .TextAlign{
        text-align: center;
    }
    td .anticon:hover {
        cursor: pointer;
    }
    .confirmBtn {
        background-color: #CD486B;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
        color: #F8E7EE;
        border: none;
        cursor: pointer;
    }
    .confirmBtn:hover {
        color: #CD486B;
        background-color: #F8E7EE;
    }
`;

// export const OrderContent_Foot = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background-color: #EADBC8;
//     padding: 12px 60px 12px 60px;
//     border-radius: 16px;
//     margin: 39px 40px 0px 40px;
// `;

// export const PageNum = styled.div`
//     display: flex;

//     p {
//         margin: 0px 7px 0px 0px;
//         color: #B19F8A;
//         font-weight: 500;
//     }

//     .nowPage {
//         color:#102C57;
//     }
// `;

// export const MovePage = styled.div`
//     button {
//         width:40px;
//         height: 40px;
//         background-color: ${theme.color.fifth};
//         border-radius: 12px;
//         border: none;
//         box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
//         font-size: 20px;
//         display: inline;
//         align-items: center;
//         text-align: center;
//         margin-right: 5px;
//         font-size: 15px;
//     }
//     button:hover {
//         cursor: pointer;
//     }
//     .backArrow .anticon {
//         color: #92929D;
//     }
//     .nextArrow .anticon {
//         color:#102C57;
//     }
// `;


export const hehe = styled.div`

`;