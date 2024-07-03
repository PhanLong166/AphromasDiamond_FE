import styled from "styled-components";
import { theme } from "../../../themes";
import { Breadcrumb, Collapse } from "antd";

export const Section = styled.div`
  margin: 0 auto;
  background-color: ${theme.color.white};
  max-width: 1400px;
`;

export const Container = styled.div``;

export const Heading = styled.div`
  h2 {
    font-size: 32px;
    text-align: center;
    margin: 50px auto;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
    font-weight: 700;
  }
`;

export const List = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  .product-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out; /* Thêm hiệu ứng mượt mà */
  }

  .sale-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 500;
    background-color: #ede0b8;
    color: ${theme.color.primary};
    width: auto;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .product-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 13px;
    color: ${theme.color.primary};
  }

  .wishlist-icon {
    margin-left: 8px;
    cursor: pointer;
    font-size: 16px;
    color: #db7f67;
  }

  .price-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .product-price {
    font-size: 14px;
    color: ${theme.color.primary};
  }

  .product-sale-price {
    font-size: 12px;
    color: #888;
    text-decoration: line-through;
  }

  .show-all-card {
    width: 338px;
    height: 518px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #f0f0f0;
    border-radius: 0;
    background-color: #f4f2ee;
  }

  .show-all-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .show-all-text {
    font-size: 16px;
    margin-bottom: 16px;
    color: #45413e;
  }

  .show-all-button {
    background-color: #f4f2ee;
    color: ${theme.color.primary};
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 1px solid;
  }

  .show-all-button:hover {
    background-color: ${theme.color.primary};
    color: #f4f2ee;
  }
`;

export const FAQs = styled.section`
  display: flex;
  margin: 50px auto;
  max-width: 1400px;
  justify-content: space-between;
`;

export const LeftFAQ = styled.div`
  width: 50%;
  padding-right: 20px;

  h2 {
    font-size: 32px;
    font-weightL 600;
    font-family: "Gantari", sans-serif;
    color: ${theme.color.primary};
  }
  .ant-collapse {
  border-radius: 5px; 
}

.ant-collapse-item {
  background-color: #f4f2ee;
}

.ant-collapse-header {
  border-radius: 5px; 
}
`;

export const StyledCollapse = styled(Collapse)`
  .ant-collapse-item {
    background-color: #ffffff;
  }
  .ant-collapse-header-text {
    color: ${theme.color.primary};
  }
  .ant-collapse-content {
    background-color: #f4f2ee;
    color: #45413e;
  }
  .ant-collapse-expand-icon {
    color: ${theme.color.primary};
  }
  .ant-collapse-header {
    border-radius: 8px;
  }
`;

export const CustomBreadcrumb = styled(Breadcrumb)`
max-width: 1400px;
margin: 0 auto;
padding-top: 20px;
`;