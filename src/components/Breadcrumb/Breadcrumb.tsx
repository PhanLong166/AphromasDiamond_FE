// components/Breadcrumb.tsx
import React from "react";
import { CustomBreadcrumb } from "./Breadcrumb.styled";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: { title: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <CustomBreadcrumb
    separator=">"
    items={items.map(item => ({
      title: item.href ? <Link to={item.href}>{item.title}</Link> : item.title,
    }))}
  />
);

export default Breadcrumb;
