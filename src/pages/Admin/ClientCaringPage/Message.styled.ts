import styled from "styled-components";
import { theme } from "../../../themes";

export const ClientCaringAdminArea = styled.section`
  display: inline-flex;
  background-color: #f1f1f1;
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

export const AdPageContent = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 28px;
  padding-top: 25px;
  padding-bottom: 30px;
`;

export const MessageContent = styled.div`
  padding: 0px 30px 30px 25px;
  display: flex;
  height: 430px;
`;

export const ChatSidebar = styled.div`
  width: 250px;
  //   border-right: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const AdPageContent_Head = styled.div`
  // margin: 39px 40px 30px 40px;

  h2 {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 27px;
    font-size: 24px;
    color: #102c57;
  }
`;

export const SearchArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  //
  border-radius: 16px;

  .searchInputContainer {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 4px 8px;
    width: calc(100% - 46px); // Adjust width to fit the layout
  }
  .searchIcon {
    margin: 0px 10px 0px 10px;
    color: #151542;
  }
  .searchInput {
    border: none;
    outline: none;
    flex-grow: 1;
    // font-size: 16px;
    background-color: #f8f9fb;
    padding: 0px;
    border-radius: 10px;
    padding: 4px 8px;
    border: 1px solid rgba(203, 210, 220, 0.5);
    color: #151542;
    background-color: #f8f9fb;
    height: 45px;
  }

  .searchInput:focus {
  }
`;

export const ChatList = styled.div`
  list-style: none;
  padding: 20px 0px 0px 0px;
  overflow-y: auto;

  ul {
    list-style: none;
    padding: 0;
  }
`;

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
    background-color: #eadbc8;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    margin-right: 10px;
  }

  p {
    font-size: 13px;
    color: #7d7d7d;
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
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  margin-left: 10px;
`;

export const CustomerName = styled.div`
  background-color: #f9f8f9;
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
  .anticon {
    font-size: 17px;
    color: #92929d;
    cursor: pointer;
  }
  .anticon:hover {
    color: ${theme.color.primary};
  }
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #e0e5ea;
  border-radius: 16px;
  background-color: #f6f7fa;
  color: ${theme.color.primary};
  font-size: 16px;
`;

export const SendButton = styled.button`
  padding: 10px 12px;
  background-color: #d9d9d9;
  color: ${theme.color.primary};
  border: none;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: ${theme.color.primary};
    color: #ffffff;
  }
`;

export const MessageItem = styled.div<{ isSender: boolean }>`
  display: flex;
  justify-content: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
  padding: 10px;
  margin-bottom: 10px;

  div {
    background-color: ${({ isSender }) => (isSender ? "#DDE2E8" : "#F6F7FA")};
    border-radius: 10px;
    padding: 10px;
    max-width: 60%;
    word-wrap: break-word;
    color: ${theme.color.primary};
  }
`;
