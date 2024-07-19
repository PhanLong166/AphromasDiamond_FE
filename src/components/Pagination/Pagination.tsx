import React from "react";
import { Pagination } from "antd";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  total: number;
  handleChangePage: (page: number) => void;
}

const StyledPagination: React.FC<PaginationProps> = ({
  currentPage,
  pageSize,
  total,
  handleChangePage,
}) => (
  <Pagination
    current={currentPage}
    pageSize={pageSize}
    total={total}
    onChange={handleChangePage}
  />
);

export default StyledPagination;
