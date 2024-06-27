import React, { useState } from "react";
import styled from "styled-components";

const PromoCodeSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <PromoCodeContainer>
      <CollapseButton onClick={toggleCollapse}> Promo Code 
      </CollapseButton>
      {!isCollapsed && (
        <PromoForm>
          <form action="#" data-gtm-form-interact-id="0">
            {/* <StyledLabel>Promo Code</StyledLabel> */}
            <StyledInput type="text" placeholder="Enter promo code" />
            {/* Add additional form elements if needed */}
          </form>
        </PromoForm>
      )}
    </PromoCodeContainer>
  );
};

export default PromoCodeSection;

const PromoCodeContainer = styled.div`
border-top: 1px solid rgba(0, 0, 0, 1);
border-bottom: 1px solid rgba(0, 0, 0, 1);
 
`;

const CollapseButton = styled.div`
  /* display: flex; */
  cursor: pointer;
  align-items: center;
  padding: 18px 0;
  /* padding-top: 18px; */
  
  background-color: #fff;
  width: 100%; 
`;

const PromoForm = styled.div`
 
`;

// const StyledLabel = styled.label`
 
// `;

const StyledInput = styled.input`
    width: 100%;
    color: rgb(21, 21, 66);
    resize: none;
    cursor: text;
    transition: all 0.2s ease-in-out 0s;
    box-sizing: border-box;
    font-weight: 400;
    /* border-radius: 8px; */
    /* background-color: rgb(255, 255, 255); */
    font-size: 14px;
    padding: 0px 16px;
    height: 30px;
    margin-bottom: 1rem;
  
`;
