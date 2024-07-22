// components/FAQ.tsx
import React from "react";
import { FAQs, LeftFAQ, StyledCollapse } from "./FAQs.styled";

interface FAQProps {
  title: string;
  faqs: { key: string; label: string; children: string }[];
}

const FAQ: React.FC<FAQProps> = ({ title, faqs }) => (
  <FAQs>
    <LeftFAQ>
      <h2>FAQs about {title}</h2>
    </LeftFAQ>
    <StyledCollapse
      items={faqs.map((faq) => ({
        key: faq.key,
        label: faq.label,
        children: <p>{faq.children}</p>,
      }))}
      defaultActiveKey={["1"]}
    />
  </FAQs>
);

export default FAQ;
