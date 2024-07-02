import styled from "styled-components";
import { theme } from "../../../themes";

export const Container = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  

  .thank-page-success-box {
    position: relative;
    width: 1000px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }

  .thank-page-success-icon {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 60px;
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
  .thank-page-row {
    margin-bottom: 10px;
  }
  .thank-page-success-next-box-item {
    background-color: #f8f8f8;
    padding: 25px 0;
  }
  .item-1 {
    margin-bottom: 10px;
  }
  .item-2 {
    margin-top: 10px;
  }

  h1 {
    margin-top: 50px;
    font-size: 32px;
  }

  .thank-page-success-image {
    width: 400px;
    height: 100%;
    margin: 20px auto;
  }

  .thank-page-success-hr {
    width: 800px;
    margin: 0 auto;
  }

  .thank-page-summary-next-container {
    background-color: ${theme.color.white};
    padding: 20px;
    padding-top: 0;
  }

  .thank-page-summary-next-row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .thank-page-summary-col,
  .thank-page-next-col {
    padding: 0 10px;
  }

  .thank-page-success-summary-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f8f8f8;
    margin: 10px auto;
  }

  .thank-page-success-next-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px auto;
  }

  .thank-page-success-summary-box {
    padding: 25px 0;
  }

  .thank-page-summary-icon-col,
  .thank-page-next-icon-col {
    padding-left: 25px;
    padding-right: 0;
  }

  .thank-page-summary-icon-box,
  .thank-page-next-icon-box {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 8px;
  }

  .thank-page-icon {
    color: ${theme.color.primary};
    font-size: 30px;
  }

  .thank-page-summary-details p,
  .thank-page-next-details p {
    text-align: left;
    margin: 5px 0;
    padding-right: 25px;
  }

  .thank-page-next-box-item {
    flex: 1;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  .thank-page-success-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin-top: -10px;
  }
  button {
    font-size: 12px;
    padding: 10px 20px;
    background-color: ${theme.color.white};
    color: ${theme.color.primary};
    border: none;
    border: 1px solid ${theme.color.primary};
    cursor: pointer;
    transition: background-color 0.3s ease;

    font-weight: 600;
    transition: all 0.45s ease;
    align-self: flex-start;
    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      transition: all 0.45s ease;
    }
  }
  .home {
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    border: 1px solid ${theme.color.primary};
    &:hover {
      background-color: ${theme.color.white};
      color: ${theme.color.primary};
      transition: all 0.45s ease;
    }
  }

  .thank-page-success-buttons Button {
    width: 150px;
  }

  .title {
    font-size: 17px;
    color: #a5a3a2;
    margin-bottom: 20px;
  }
  .content {
    padding: 2px 0;
  }

  .label {
    color: #45413e;
    font-size: 16px;
    font-weight: 500;
  }

  .info {
    color: #45413e;
    font-size: 18px;
    font-weight: 300;
  }

  .main {
    padding-top: 0;
  }

  .info-check {
    color: #45413e;
    font-size: 16px;
    font-weight: 300;
  }

  .label-check {
    color: #45413e;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0;
  }
`;
