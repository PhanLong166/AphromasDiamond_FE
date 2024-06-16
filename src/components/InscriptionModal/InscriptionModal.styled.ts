import styled from "styled-components";
import { theme } from "../../themes";

export const Main = styled.div`
  .inscription-modal .ant-modal-content {
    padding: 20px;
  }

  .tooltip-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
  }

  .main-title {
    font-size: 17px;
    margin-bottom: 10px;
    color: ${theme.color.primary};
  }

  .input-text {
    width: 100%;
    margin-bottom: 10px;
  }

  .input-text:hover {
    border: 1px solid ${theme.color.primary} !important;
  }

  .char-count {
    font-size: 14px;
    margin-bottom: 10px;
    color: #888;
  }

  .font-selection-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .font-selection-title {
    display: block;
    margin-bottom: 5px;
    color: ${theme.color.primary};
    font-size: 14px;
  }

  .font-select {
    width: 100%;
  }

//   .font-select:hover {
//     border-radius: 8px;
//     border: 1px solid ${theme.color.primary} !important;
//   }
//   .font-select:active {
//     border-radius: 8px;
//     border: 1px solid ${theme.color.primary} !important;
//   }
  .preview-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .preview-title {
    display: block;
    margin-bottom: 5px;
    color: ${theme.color.primary};
    font-size: 14px;
  }

  .inscription-preview {
    margin-bottom: 5px;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Finscription.png?alt=media&token=b4a6c966-a168-4294-b3ef-af6b3469a910");
    background-position: 50%;
    background-repeat: no-repeat;
    border: 1px solid;
    height: 112px;
    margin: 0;
    padding: 0;
    width: 248px;
  }

  .preview-explanation {
    font-size: 12px;
    color: #888;
    text-align: center;
  }

  .save-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .save-button {
    width: 100%;
    border-radius: 0;
    background-color: ${theme.color.white};
    color: ${theme.color.primary};
    border: transparent;
    border: 1px solid;
    font-size: 12px;
  }
  .save-button:hover {
    background-color: ${theme.color.primary} !important;
    color: ${theme.color.white} !important;
    border: 1px solid ${theme.color.primary} !important;
  }
`;
