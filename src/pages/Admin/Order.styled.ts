import styled from "styled-components";

export const OrderAdmin = styled.section`
body {
    margin: 0px 0px 0px 0px;
}

.dashboardArea {
    display: inline-flex;
    background-color: #EEEBE6;
    font-family: "Poppins", sans-serif;
    /* height: 100%; */
    width: 100%;
}

// /* =============== ORDER ================= */

.dashboard {
    margin-left: 320px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
}

.titlePage h1 {
    font-weight: 36px;
    color: #102C57;
    margin: 47px 0px 0px 0px;
}

.titlePage p {
    color: #B19F8A;
    font-size: 16px;
    margin: 0px 0px 0px 0px;
}

.dashboardContent {
    margin-top: 30px;
}

// /* -------------------- ORDER CATALOG =============== */

.orderCatalog {
    /* width: 100%; */
    height: 100px;
    background-color: #FFF7E8;
    border-radius: 16px;
    display: flex;
    /* align-items: center; */
    color: #102C57;
    padding-left: 40px;
    margin-top: 21px;
}

.orderCatalog_ele {
    margin-right: 50px;
}
.orderCatalog_ele:hover {
    cursor: pointer;
}

.orderCatalog_ele h3 {
    margin: 27px 0px 0px 0px;
    font-size: 24px;
}

.adMenu_active-line {
    background-color: #102C57;
    border-radius: 0px 0px 16px 16px;
    height: fit-content;
    height: 4px;
}

.adMenu_line {
    background-color: #FFF7E8;
    border-radius: 0px 0px 16px 16px;
    height: fit-content;
    height: 4px;
}

/* -------------------- ORDER CONTENT =============== */

.orderContent {
    /* height: 100%; */
    width: 100%;
    background-color: #FFF7E8;
    border-radius: 16px;
    padding-bottom: 30px;
}

.orderContent_header {
    margin: 39px 40px 30px 40px;
}

.orderContent_header h2 {
    margin: 0px 0px 0px 0px;
    padding: 39px 0px 27px;
    font-size: 24px;
    color: #102C57;
}

.orderContent_header-benefit {
    display: flex;
    justify-content: space-between;
    background-color: #EADBC8;
    padding: 20px 60px 20px 60px;
    border-radius: 16px;
}
.searchArea {
    width: 70%;
    display: inline-flex;
    align-items: center; 
    /* justify-content: center;    */
}
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
.searchArea ion-icon {
    font-size: 23px;
    color: #102C57;
    background-color: #FFF7E8;
    height: 55px;
    border: 1px solid #FFF7E8;
    padding: 0px 20px 0px 20px;
    border-radius: 0px 16px 16px 0px;
}
.searchArea ion-icon:hover {
    cursor: pointer;
}
.orderContent_header-benefit button {
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
.orderContent_header-benefit button:hover {
    cursor: pointer;
}
.orderContent_header-benefit button ion-icon {
    font-size: 25px;
}


.pendConfirm_table {
    padding: 0px 50px 0px 50px;
}

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
    background-color: #F8E7EE;
    border-radius: 100px;
    padding: 5px 7px 5px 7px;
    font-size: 12px;
    color: #CD486B;
    border: none;
}
.confirmBtn {
    background-color: #CD486B;
    border-radius: 100px;
    padding: 5px 7px 5px 7px;
    /* font-size: 12px; */
    color: #F8E7EE;
    border: none;
}
.confirmBtn:hover {
    cursor: pointer;
}

.pendConfirm_table-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #EADBC8;
    padding: 12px 60px 12px 60px;
    border-radius: 16px;
    margin: 39px 40px 0px 40px;
}
.pageNum {
    display: flex;
}
.pageNum p {
    margin: 0px 7px 0px 0px;
    color: #B19F8A;
    font-weight: 500;
}
.pageNum .nowPage {
    color:#102C57;
}
.movePage button {
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
}
.movePage button:hover {
    cursor: pointer;
}
.backArrow ion-icon {
    color: #92929D;
}
.nextArrow ion-icon {
    color:#102C57;
}
`;