import styled from "styled-components";
import { theme } from "../../../themes";


export const OrderAdminArea = styled.section`
// body {
//     margin: 0px 0px 0px 0px;
// }

    display: inline-flex;
    background-color: #EEEBE6;
    font-family: "Poppins", sans-serif;
    /* height: 100%; */
    width: 100%;
    padding-bottom: 20px;

`;


// /* =============== ORDER ================= */

export const AdminPage = styled.div`
    margin-left: 320px;
    margin-right: 70px;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
`;



// /* -------------------- ORDER CONTENT =============== */

export const AdPageContent = styled.div`
    width: 100%;
    background-color: ${theme.color.fifth};
    border-radius: 16px;
    padding-bottom: 30px;
    margin-top: 30px;
    height: 670px;
`;


export const hehe = styled.section`

`;

export const MessageContent = styled.div`
  padding: 25px 30px 30px 25px;
  display: flex;
  height: 100%;
`;

export const ChatSidebar = styled.div`
  width: 250px;
//   border-right: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
`;

export const SearchArea = styled.div`
    display: inline-flex;
    align-items: center; 

    .searchInput {
        width: 90%;
        font-size: 20px;
        padding-left: 10px;
        background-color: ${theme.color.primary};
        height: 55px;
        border:none;
        border-radius: 16px 0px 0px 16px;
        padding-right: 20px;
        color:${theme.color.fifth};
    }
    .anticon {
        font-size: 23px;
        color: ${theme.color.fifth};
        background-color: ${theme.color.primary};
        height: 55px;
        border: 1px solid ${theme.color.primary};
        padding: 0px 20px 0px 20px;
        border-radius: 0px 16px 16px 0px;
    }
    .anticon:hover {
        cursor: pointer;
    }
`;

export const ChatList = styled.div`
  list-style: none;
  padding: 30px 0px 0px 0px;
  overflow-y: auto;

  ul{
    list-style: none;
    padding: 0;
  }
`;

// export const ChatList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

export const ChatListItem = styled.li`
    padding: 10px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    color: ${theme.color.primary};
    font-size: 16px;
    font-weight: 600;
    border-radius: 16px;
    width: 100%;
    justify-content: space-between;

    &:hover {
        background-color: #EADBC8;
    }

    img {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        margin-right: 10px;
    }

    p{
    font-size: 13px;
    color: #7D7D7D;
    }
`;

export const ChatListItem_Text = styled.div`
    display: flex;
    align-items: center;


`;

export const ChatContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    //   padding: 10px;
    box-sizing: border-box;
    border: 1px solid #D9D9D9;
    border-radius: 16px;
`;

export const CustomerName = styled.div`
  background-color: #F3EFE6;
  border-radius: 16px 16px 0px 0px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.color.primary};

  img {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    margin-right: 10px;
  }
`;

export const ChatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 0px 10px 10px 10px;
  
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #D9D9D9;
  border-radius: 16px;
  background-color: #F3EFE6;
  color: ${theme.color.primary};
  font-size: 16px;
`;

export const SendButton = styled.button`
  padding: 10px 12px;
  background-color: #D9D9D9;
  color: ${theme.color.primary};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: ${theme.color.primary};
    color: ${theme.color.fifth};
  }
  
`;

export const MessageItem = styled.div<{ isSender: boolean }>`
  display: flex;
  justify-content: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
  padding: 10px;
  margin-bottom: 10px;

  div {
    background-color: ${({ isSender }) => (isSender ? '#E0E0E0' : '#F3EFE6')};
    border-radius: 10px;
    padding: 10px;
    max-width: 60%;
    word-wrap: break-word;
    color: ${theme.color.primary};
  }
`;