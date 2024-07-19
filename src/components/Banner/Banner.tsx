import React from "react";
import { LeftSection, Banner as StyledBanner } from "./Banner.styled";

interface BannerProps {
  title: string;
  description: string;
  bannerImage: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, bannerImage }) => (
  <StyledBanner style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="bannerContent">
      <LeftSection>
        <h2>{title}</h2>
        <div className="subheading">{description}</div>
        <button className="consult-button button_slide slide_right">
          <span>CONTACT US FOR CONSULTATION</span>
        </button>
      </LeftSection>
    </div>
  </StyledBanner>
);

export default Banner;
