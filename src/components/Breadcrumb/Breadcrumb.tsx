import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: { title: string; href?: string }[];
  separator?: string;
}

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({ items, separator }) => (
  <Breadcrumb separator={separator}>
    {items.map((item, index) => (
      <Breadcrumb.Item key={index}>
        {item.href ? <Link to={item.href}>{item.title}</Link> : item.title}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export default CustomBreadcrumb;
