import styled from "styled-components";

// export const NavbarContainer = styled.nav`
//     ul {
//         list-style-type: none;
//         display: flex;
//         gap: 20px;
//     }
// `;

export const AdminContainer = styled.section`
body {
    margin: 0px 0px 0px 0px;
}

.dashboardArea {
    display: inline-flex;
    background-color: #EEEBE6;
    font-family: "Poppins", sans-serif;
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
.accInfor_name{
    font-size: 18px;
    font-weight: 500;
    margin: 0px 0px 0px 0px;
}
.accOut_role {
    background-color: #102C57;
    color:#EADBC8;
    border-radius: 16px;
    margin: 0px 0px 0px 0px;
    font-size: 10px;
    width: max-content;
    padding: 2px 4px 2px 4px;
}
.accOut ion-icon {
    font-size: 25px;
    color:red;
}
.accInfor ion-icon{
    font-size: 40px;
    margin-right: 7px;
    color:#102C57;
}

/* =============== DASHBOARD ================= */

.dashboard {
    margin-left: 280px;
    width: 100%;
    height: 100%;
    padding: 0px 60px 40px;
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

/* ------------- DASHBOARD - ROW 1 ----------- */
.dashContent_1 {
    display:flex;
    justify-content: space-between;
}
.statistiBox {
    width: 30%;
    height: 183px;
    background-color: #FFF7E8;
    border-radius: 16px;
    text-align: center;
    display: inline;
    align-content: center;
}
.statistiBox p{
    margin: 0px 0px 0px 0px;
}
.statistics {
    font-size: 43px;
    font-weight: 500;
    color:#102C57;
}
.statistics_explain {
    font-size: 16px;
    color:#B19F8A;
}

/* ------------- DASHBOARD - ROW 2 ----------- */

.dashContent_2 {
    display:flex;
    justify-content: space-between;
    margin-top: 40px;
}
.chatNofi {
    width: 40%;
    height: 298px;
    background-color: #FFF7E8;
    border-radius: 16px;
}
.chatNofi_title {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 15px 25px;
}
.mainTitle h2 {
    margin: 0px 0px 0px 0px;
}
.mainTitle p {
    margin: 0px 0px 0px 0px;
    color: #734A00;
}
.viewAll {
    display: flex;
    align-items: center;
    color: #734A00;
}
.viewAll:hover {
    cursor: pointer;
}
.viewAll p {
    margin-right: 10px;
}
.chatNofi_content {
    /* padding-bottom: 45px; */
    color:#102C57;
}
.cusChat {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin: 10px 20px 10px 20px;
    padding: 0px 20px 0px 20px;
}
.cusChat:hover {
    border-radius: 16px;
    background-color: #EADBC8;
    cursor: pointer;
    /* margin: 0px 10px 0px 10px; */
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

.revenue {
    width: 30%;
    height: 298px;
    background-color: #FFF7E8;
    border-radius: 16px;
}
.revenue_title {
    padding: 20px 20px 15px 25px;
}
.revenue_title h2 {
    margin: 0px 0px 0px 0px;
}
.revenue_content {
    padding: 0px 20px 15px 25px;
}
.revenue_content img {
    height: 222.37px;
}

.topTime {
    width: 20%;
    height: 298px;
    display: flex;
flex-direction: column;
}
.topTime h2{
    color: #102C57;
    margin: 0px 0px 0px 0px;
}
.topMonth {
    height: 45%;
    background-color: #FFF7E8;
    border-radius: 16px;
    margin-bottom: 25px;
    padding: 20px 20px 15px 25px;
    align-items: center;
}
.topMonth p {
    margin: 0px 0px 0px 0px;
    color: #734A00;
}

.topYear {
    height: 45%;
    background-color: #FFF7E8;
    border-radius: 16px;
    padding: 20px 20px 15px 25px;
}
.topYear p {
    margin: 0px 0px 0px 0px;
    color: #734A00;
}

/* ------------- DASHBOARD - ROW 3 ----------- */


.dashContent_3 {
    display:flex;
    justify-content: space-between;
    margin-top: 40px;
}

.shell {
    width: 30%;
    height: 298px;
    background-color: #FFF7E8;
    border-radius: 16px;
}
.shell_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 10px 25px;
}
.shell_title h2 {
    color:#102C57;
    margin: 0px 0px 0px 0px;
}
.shell_title .viewAll p{
    margin: 0px 0px 0px 0px;
}
.shell_content {
    padding: 10px 20px 0px 25px;
}
.shell_content p{
    margin: 0px 0px 0px 0px;
}
.shell_titleTable {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    color: #734A00;
    font-weight: 500;
}
.shell_ele {
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 17px 0px;
}
.shell_ele-name p {
    font-size: 18px;
    font-weight: 500;
}
.shell_ele-button {
    color:#102C57;
    background-color: #FFF7E8;
    border: 1px solid #102C57;
    border-radius: 16px;
}
.shell_ele-button:hover {
    cursor: pointer;
    background-color: #102C57;
    color:#FFF7E8;
}
    
`;