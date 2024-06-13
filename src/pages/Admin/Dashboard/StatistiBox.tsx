import React from "react";
import * as Styled from "./Dashboard.styled";
import { Progress } from "antd";

const StatistiBox = ({ value, label, total }) => (
  <Styled.StatistiBox>
    <Styled.StatistiBox_Text>
      <p className="statistics">{value}</p>
      <p className="statistics_explain">{label}</p>
    </Styled.StatistiBox_Text>
    <Progress className="circleProgress" strokeLinecap="butt" type="circle" percent={total} size={60}/>
  </Styled.StatistiBox>
);

export default StatistiBox;
