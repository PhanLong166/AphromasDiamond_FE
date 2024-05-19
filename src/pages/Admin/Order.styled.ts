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

/* =============== SIDEBAR ================= */

.sidebar {
    width: 280px;
    /* height: 100%; */
    background-color: #EADBC8;
    color: #102C57;
    top: 0px;
    left: 0px;
    margin: 0px 0px 0px 0px;
    border-radius: 0px 30px 30px 0px;
    display: fix;
    flex-grow: 1;
    flex-direction: column;
    /* justify-content: space-between; */
    padding: 20px 0 41px;
    margin-right: 50px;
    position: fixed;
}

.sidebar_content {
    display: flex;
    align-items: center;
}

.logo {
    padding: 5px 0px 20px;
    text-align: center;
}

.logo h2 {
    margin: 0px 0px 0px 0px;
}

.menuElement-active p {
    color: #EADBC8;
    text-decoration: none;
    font-size: 16px;
    text-decoration-line: none;
}

.active-line {
    width: 3px;
    height: 32px;
    border-radius: 0px 15px 15px 0px;
    background-color: #102C57;
    left: 0px;
}

.active {
    background-color: #102C57;
    color: #FFF7E8;
    border-radius: 16px;
    margin: 0px 19px 0px 16px;
    width: 100%;
}

.menuElement-active {
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 31px;
    /* margin: 0px 35px 0px 35px; */
}

.menuElement-active ion-icon {
    padding-right: 15px;
}

.menuElement {
    display: flex;
    align-items: center;
    padding: 18px 0px 18px 15px;
    margin: 0px 35px 0px 35px;
}

.menuElement:hover {
    /* background-color: #102C57;
    color: #FFF7E8;
    border-radius: 16px;
    margin: 0px 19px 0px 16px; */
    cursor: pointer;
}

.menuElement ion-icon {
    padding-right: 15px;
}

.menuElement p {
    margin: 0px 0px 0px 0px;
    font-size: 16px;
    color: #102C57;

}

.accOut {
    display: flex;
    /* text-align: end; */
    align-items: center;
    justify-content: space-around;
    padding: 18px 0px 0px 0px;
    white-space: nowrap;
    align-items: flex-end;
    margin-top: 222px;
}

.accInfor {
    display: flex;
    align-items: center;
}

.accOut_accInfor {
    display: inline-block;
    text-align: center;
}

.accInfor_name {
    font-size: 18px;
    font-weight: 500;
    margin: 0px 0px 0px 0px;
}

.accOut_role {
    background-color: #102C57;
    color: #EADBC8;
    border-radius: 16px;
    margin: 0px 0px 0px 0px;
    font-size: 10px;
    width: max-content;
    padding: 2px 4px 2px 4px;
}

.accOut ion-icon {
    font-size: 25px;
    color: red;
}

.accInfor ion-icon {
    font-size: 40px;
    margin-right: 7px;
    color: #102C57;
}

/* =============== ORDER ================= */

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

/* -------------------- ORDER CATALOG =============== */

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