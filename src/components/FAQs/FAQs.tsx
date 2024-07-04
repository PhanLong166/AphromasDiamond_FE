import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';
import { theme } from '@/themes';

// Thay đổi StyledCollapse để phù hợp với giao diện hiện tại
const StyledCollapse = styled(Collapse)`
  .ant-collapse-item {
    background-color: #ffffff;
    margin-bottom: 16px; /* Khoảng cách giữa các câu hỏi */
    border-radius: 8px; /* Đường viền cong */
  }
  .ant-collapse-header-text {
    color: ${theme.color.primary};
    font-weight: bold; /* Độ dày chữ */
  }
  .ant-collapse-content {
    background-color: #f4f2ee;
    color: #45413e;
  }
  .ant-collapse-expand-icon {
    color: ${theme.color.primary};
  }
`;

interface FAQProps {
  faqData: any; 
}

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  return (
    <StyledCollapse accordion>
      {Object.keys(faqData).map((category) => (
        <Collapse.Panel header={`FAQs for ${category}`} key={category}>
          {faqData[category].map((item: any) => (
            <Collapse.Panel header={item.label} key={item.key}>
              <p>{item.text}</p>
            </Collapse.Panel>
          ))}
        </Collapse.Panel>
      ))}
    </StyledCollapse>
  );
};

export default FAQ;
