import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>Ring size</DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownLink>4</DropdownLink>
        <DropdownLink>4.5</DropdownLink>
        <DropdownLink>5</DropdownLink>
        <DropdownLink>5.5</DropdownLink>
        <DropdownLink>6</DropdownLink>
        <DropdownLink>6.5</DropdownLink>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  /* background-color: #4caf50; */
  color: #000;
  /* padding: 12px; */
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  /* z-index: 1; */
`;

const DropdownLink = styled.a`
  color: black;
  font-size: 15px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: grey;
  }
`;
