import { theme } from "../../themes";
import styled from "styled-components";
import {Collapse } from "antd";

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
    font-weight: 600;
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