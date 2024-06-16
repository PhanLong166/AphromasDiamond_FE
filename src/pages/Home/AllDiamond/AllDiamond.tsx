import React, { useState } from "react";
import styled from "styled-components";
import { Button, InputNumber, Slider, Select } from "antd";
import { Breadcrumb } from "antd";
const { Option } = Select;
import { Section, Heading, List, FAQs, LeftFAQ } from "./AllDiamond.styled";
import { Card, Col, Row, Typography, Pagination } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Collapse } from "antd";
import { theme } from "../../../themes";
const { Title, Text } = Typography;
const CustomBreadcrumb = styled(Breadcrumb)`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 20px;
`;
const CustomTitle = styled(Title)`
  color: ${theme.color.primary} !important;
`;

const CustomSelect = styled(Select)`
  .ant-select-selector {
    color: ${theme.color.primary} !important;
    border: 1px solid rgba(21, 21, 66, 0.3) !important;
    border-radius: 4px !important;
  }
  .ant-select-selector:hover {
    border: 1px solid ${theme.color.primary} !important;
  }
  .ant-select-selection-placeholder,
  .ant-select-arrow {
    color: ${theme.color.primary} !important;
  }
`;

const CustomSlider = styled(Slider)`
  .ant-slider-track {
    background-color: ${theme.color.primary} !important;
  }
  .ant-slider-handle::after {
    box-shadow: 0 0 0 2px ${theme.color.primary} !important;
  }
  .ant-slider-dot {
    border-color: white !important;
    width: 2px;
    height: 2px;
    margin-top: 1px;
  }

  .ant-slider-dot-active {
    border-color: white;
  }
  .ant-slider-mark {
    top: 21px;
  }
  .ant-slider-dot:hover {
    border-color: white;
  }

  &.cut-slider {
    .ant-slider-mark-text {
      transform: translateX(-50%);
    }

    .ant-slider-mark-text:nth-child(1) {
      left: 3% !important;
    }

    .ant-slider-mark-text:nth-child(4) {
      left: 94% !important;
      width: 100px;
    }
  }
`;

const CustomButton = styled(Button)`
  &:hover {
    color: ${theme.color.primary} !important;
    border: 1px solid ${theme.color.primary} !important;
  }
`;

const ResetButton = styled(Button)`
  &:hover {
    color: ${theme.color.primary} !important;
    border: 1px solid ${theme.color.primary} !important;
  }

  border: 1px solid rgba(21, 21, 66, 0.3) !important;
  color: ${theme.color.primary} !important;
  border-radius: 4px !important;
`;

const texts = [
  `
   Our women's diamond rings range from $276 to $56,024 depending on several factors, including the type of metal and diamond carat weight.
  `,
  `
    Yes, diamond rings make perfect weddings rings and engagement rings.
  `,
  `
    Women’s diamond wedding rings are available in platinum along with yellow, white and rose gold. 
  `,
  `
   Our women's diamond rings range from $276 to $56,024 depending on several factors, including the type of metal and diamond carat weight.
  `,
  `
    Yes, diamond rings make perfect weddings rings and engagement rings.
  `,
  `
    Women’s diamond wedding rings are available in platinum along with yellow, white and rose gold. 
  `,
];

const labels = [
  "What is the average cost of a womens diamond wedding ring?",
  "Can weddings rings be diamond rings?",
  "What metals are best for diamond wedding bands?",
  "What is the average cost of a womens diamond wedding ring?",
  "Can weddings rings be diamond rings?",
  "What metals are best for diamond wedding bands?",
];

const items = texts.map((text, index) => ({
  key: (index + 1).toString(),
  label: labels[index],
  children: <p>{text}</p>,
}));
const onChange = (key: any) => {
  console.log(key);
};
const StyledCollapse = styled(Collapse)`
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

const AllDiamond: React.FC = () => {
  const [shapeSelected, setShapeSelected] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [caratRange, setCaratRange] = useState<[number, number]>([0.05, 30.0]);
  const [cutRange, setCutRange] = useState<[number, number]>([0, 3]);
  const [colorValue, setColorRange] = useState<[number, number]>([0, 7]);
  const [clarityValue, setClarityRange] = useState<[number, number]>([0, 7]);

  const formatColorValue = (value?: number): React.ReactNode => {
    const labels = ["D", "E", "F", "G", "H", "I", "J", "K"];
    return value ? labels[value] : null;
  };

  const formatClarityValue = (value?: number): React.ReactNode => {
    const labels = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"];
    return value ? labels[value] : null;
  };

  const formatCutValue = (value?: number): React.ReactNode => {
    const labels = ["Good", "Very Good", "Ideal", "Astor Ideal"];
    return value ? labels[value] : null;
  };

  const handleShapeSelect = (shape: string) => {
    if (shape === shapeSelected) {
      setShapeSelected(null);
    } else {
      setShapeSelected(shape);
    }
  };

  const handleReset = () => {
    setShapeSelected(null);
    setPriceRange([0, 200000]);
    setCaratRange([0.05, 30.0]);
    setColorRange([0, 7]);
    setClarityRange([0, 7]);
    setCutRange([0, 3]);
  };

  const shapeButtons = [
    {
      shape: "Round",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#Round_svg__a)">
            <path
              d="m10.563 5.825 3.363-4.72 3.418 4.683m-6.781.037L4.83 4.924l.957 5.722m4.775-4.821L9.439 9.429l-1.896 4.645-1.718 3.354m4.738-11.603 3.353 1.719 4.655 1.904 3.595 1.115M10.563 5.825 9.01 2.137m8.333 3.65 5.723-.956-.901 5.732m-4.822-4.775L14.01 7.544l-4.635 1.95-3.586 1.152m11.556-4.858 1.162 3.595 1.941 4.626 1.756 3.335M17.344 5.788l1.524-3.726m3.298 8.5 4.728 3.373-4.691 3.41m-.037-6.782-1.719 3.353-1.895 4.655-1.115 3.604m4.766-4.83.966 5.722-5.732-.892m4.766-4.83-3.586 1.16-4.626 1.942-3.335 1.756m6.781-.028-3.372 4.72-3.41-4.692m6.782-.028-3.354-1.728-4.654-1.895-3.604-1.124m11.612 4.747 1.552 3.697m-8.333-3.669-5.723.966.892-5.741m4.83 4.775-1.16-3.586-1.952-4.636-1.755-3.335m4.868 11.557-1.533 3.744m-3.298-8.519-4.72-3.363 4.683-3.419m.037 6.782-3.688 1.56m3.65-8.342L2.09 9.141m23.782-.13-3.697 1.552m3.762 8.305-3.734-1.514m-3.632 1.17 1.857-4.561-1.904-4.534-4.561-1.867-4.534 1.905-1.867 4.56 1.914 4.544 4.561 1.858 4.534-1.905Zm.337-16.558c6.647 2.71 9.837 10.296 7.126 16.942-2.711 6.647-10.296 9.837-16.943 7.126-6.646-2.71-9.836-10.296-7.125-16.943 2.71-6.646 10.296-9.836 16.942-7.125Z"
              stroke="#151542"
              stroke-width="0.5"
            ></path>
          </g>
          <defs>
            <clipPath id="Round_svg__a">
              <path fill="#fff" d="M0 0h28v28H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      shape: "Oval",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21.643 18.365-1.972-1.756m-3.04 6.38.714-3.584 2.327-2.795m-3.042 6.379-2.602-1.15 3.318-2.433.805-5.367 1.52 2.57m-3.04 6.38 1.373 2.526M16.63 22.99 14.028 27m2.602-4.011 3.73-.52-.688-5.86m0 0 2.32-2.359v-.138l-2.32-2.723.991-4.864L16.63 5.02m0 0L14.028 1m2.602 4.02.247 4.16 2.795 2.211-1.52 2.72-1.274-4.931-2.85-2.348L16.63 5.02Zm0 0 1.723-2.107m3.372 7.586-2.052.891M6.284 17.938l2.09-1.328m0 0 2.501 2.73m-2.501-2.73 1.52-2.572.981 5.302m-2.501-2.73-.807 5.655 3.85.724m-3.043-6.38-2.32-2.358v-.138l2.32-2.723-.989-4.984 4.028-1.385L14.018 1m-2.602 21.989-.54-3.649m.54 3.649 2.602-1.152-3.143-2.497m.541 3.649-1.548 2.423m1.548-2.423L14.018 27M6.311 10.229l2.062 1.162m0 0 2.795-2.211M8.373 11.39l1.521 2.72 1.274-4.931m.248-4.16-.248 4.16m.248-4.16 2.602 1.812-2.85 2.348m.248-4.16L9.683 2.876M6 14.185C6 6.051 9.583 1 14 1c4.416 0 8 5.042 8 13.176C22 22.31 18.416 27 14 27c-4.417 0-8-4.643-8-12.815Z"
            stroke="#151542"
            stroke-width="0.5"
          ></path>
        </svg>
      ),
    },
    {
      shape: "Princess",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#Princess_svg__a)">
            <path
              d="M4.101 7.537v-.25h-.25v.25h.25Zm3.472 0v.25h.25v-.25h-.25Zm0-3.556v-.25h-.25v.25h.25Zm12.74 0h.25v-.25h-.25v.25Zm0 3.715h-.25v.25h.25v-.25Zm3.706 0h.25v-.25h-.25v.25Zm0 12.646v.25h.25v-.25h-.25ZM.999 1V.75H.75V1H1Zm26 0h.25V.75H27V1Zm0 26v.25h.25V27H27ZM1 27H.75v.25H1V27ZM20.24 3.943l.068.241a.249.249 0 0 0 .032-.011l-.1-.23ZM7.612 7.5l-.067-.24a.25.25 0 0 0-.174.174l.241.066ZM1.213 27l-.229-.1a.25.25 0 0 0 .344.322L1.213 27ZM23.824 7.806l-.227-.105a.256.256 0 0 0-.014.039l.241.066ZM1.102 1.221l.096-.23a.25.25 0 0 0-.322.338l.226-.108Zm6.399 2.675-.097.23a.25.25 0 0 0 .026.01l.07-.24Zm12.813 3.79.24-.068a.25.25 0 0 0-.17-.171l-.07.24Zm3.594 12.694-.24.068a.244.244 0 0 0 .014.038l.226-.106ZM4.101 7.5l.242-.064a.25.25 0 0 0-.016-.044L4.1 7.5Zm.25 12.842V7.537h-.5v12.805h.5Zm-.25-12.555h3.472v-.5H4.1v.5Zm3.722-.25V3.98h-.5v3.556h.5Zm-.25-3.306h12.74v-.5H7.574v.5Zm12.49-.25v3.715h.5V3.98h-.5Zm.25 3.965h3.706v-.5h-3.705v.5Zm3.456-.25v12.646h.5V7.696h-.5Zm.25 12.396h-3.667v.5h3.667v-.5Zm-3.917.25v3.409h.5v-3.409h-.5Zm.25 3.159H7.5v.5h12.852v-.5Zm-12.602.25v-3.409h-.5v3.409h.5Zm-.25-3.659H4.1v.5H7.5v-.5ZM1 1.25h26v-.5H1v.5ZM26.75 1v26h.5V1h-.5ZM27 26.75H1v.5h26v-.5ZM1.25 27V1h-.5v26h.5ZM26.9.77l-6.76 2.944.2.459 6.76-2.944-.2-.458Zm-6.728 2.933L7.545 7.259l.135.482 12.628-3.557-.136-.481Zm-12.8 3.731L3.86 20.276l.482.132L7.854 7.566l-.483-.132Zm-3.5 12.809L.984 26.9l.459.198 2.887-6.657-.458-.2Zm-2.544 6.98 6.287-3.25-.23-.445-6.286 3.25.23.444Zm6.236-3.23 12.852-3.41-.129-.482-12.851 3.408.128.483Zm13.028-3.584 3.473-12.536-.482-.133-3.472 12.535.481.134Zm3.459-12.497 3.175-6.806-.453-.212-3.175 6.807.453.211ZM1.006 1.452l6.398 2.675.193-.462L1.198.991l-.192.46ZM7.43 4.136l12.813 3.79.142-.48-12.813-3.79-.142.48Zm12.643 3.618 3.595 12.694.48-.136-3.594-12.694-.48.136Zm3.609 12.732 3.091 6.62.453-.212-3.091-6.62-.453.212Zm3.428 6.29-6.649-3.25-.22.45 6.65 3.249.219-.45Zm-6.694-3.267L7.564 20.1l-.128.484 12.851 3.408.129-.483Zm-12.674-3.23-3.4-12.843-.483.128 3.4 12.842.483-.128ZM4.327 7.391l-3-6.279-.45.216 2.998 6.279.452-.216Z"
              fill="#151542"
            ></path>
          </g>
          <defs>
            <clipPath id="Princess_svg__a">
              <path fill="#fff" d="M0 0h28v28H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      shape: "Cushion",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#Cushion_svg__a)">
            <path
              d="m7.917 4.92.056 4.431m-.056-4.43 6.231 2.855M7.918 4.92l6.128-3.875 6.528 4.431M7.917 4.921l-.99-2.753m.99 2.753-4.13-.612.973 4.236m3.213.806L6.74 13.764m1.232-4.412 6.175-1.576M7.973 9.35 4.76 8.546m1.981 5.219 1.13 4.718m-1.13-4.718L4.76 8.545m1.981 5.219-2.444 4.903m3.574-.185-3.574.185m3.574-.185-.565 3.995m.565-3.995 5.916 1.742m-9.49-1.557-2.26 1.223m2.26-1.223-3.24-4.903L4.76 8.545m-.463 10.122-.51 5.042 3.519-1.232m13.018.49 1.139 2.772m-1.139-2.771L13.944 27l-6.638-4.523m13.018.49-6.537-2.743m6.537 2.744-.407-4.421m.407 4.42 3.981.742M7.306 22.477l6.481-2.253m-6.481 2.253-1.148 3.086m7.63-5.339 6.129-1.677m4.509 5.005-1.148-4.208m0 0-3.361-.797m3.36.797 2.649 1.473m-2.648-1.473 3.703-5.58-3.342-4.542m-.361 10.122-2.14-5.58m2.5-4.542-2.5 4.542m2.5-4.542-3.573.306m3.574-.306.555-5.043-3.62 1.298m3.065 3.745 2.481-1.26m-4.981 5.802-1.222 4.783m1.222-4.783-1.074-4.236m0 0 .51-4.051m-.51 4.05-5.917-1.751m6.426-2.299-6.426 2.299m6.426-2.299 1.287-3.096M4.76 8.545l-2.435-1.28M14.037 1C12.611 1 6.491 1 3.778 4.263c-2.713 3.262-2.777 9.463-2.777 9.463s-.12 6.489 2.777 9.946c2.898 3.458 8.685 3.282 10.167 3.282 1.481 0 7.601 0 10.36-3.29 2.76-3.292 2.695-5.896 2.695-9.9 0-4.005-.176-6.489-2.778-9.585C21.62 1.083 16.342 1 14.037 1Z"
              stroke="#151542"
              stroke-width="0.5"
            ></path>
          </g>
          <defs>
            <clipPath id="Cushion_svg__a">
              <path fill="#fff" d="M0 0h28v28H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      shape: "Emerald",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m24 4.39-3.928 2.767M21.354 1l-2.309 4.884M21.354 1H6.656m14.698 0L24 4.39v19.22L21.354 27M19.045 5.884l1.027 1.272v3.435m-1.027-4.707H8.964m13.727 4.708V5.346l-2.11-2.675H7.428L5.31 5.346v5.246M4.001 4.389l3.936 2.768m0 0 1.027-1.273M7.937 7.157v3.435M6.656 1l2.308 4.884M6.656 1 4 4.39v19.22L6.656 27m0-16.408V6.284l1.59-1.895h11.518l1.59 1.895v15.432l-1.59 1.895H8.245l-1.59-1.895V10.592M24 23.61l-3.927-2.776m0 0-1.027 1.281m1.027-1.281V10.593M21.354 27l-2.309-4.884M21.354 27H6.656m12.39-4.884H8.963m13.727-11.523v12.052l-2.11 2.675H7.428L5.31 22.645V10.593M4.001 23.61l3.936-2.776m0 0 1.027 1.281m-1.027-1.281V10.593M6.656 27l2.308-4.884"
            stroke="#151542"
            stroke-width="0.5"
          ></path>
        </svg>
      ),
    },
    {
      shape: "Asscher",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#Asscher_svg__a)">
            <path
              d="M20.936 9.896 27 6.32M1 21.54l5.99-3.473M1 21.54 6.479 27M1 21.54V6.237m16.937 14.764L21.475 27m0 0 5.47-5.45M21.474 27H6.479M6.19 1.074l3.603 5.971m0 0L7.008 9.849v8.218l2.943 2.934h8.051l2.934-2.934M9.794 7.045h8.292l2.85 2.841v8.181M9.933 21.001 6.479 27M21.633 1l-3.566 6.036M21.633 1l5.311 5.302V21.55M21.633 1H6.19L1 6.237m19.936 11.83 6.008 3.482M1 6.237l6.082 3.668M19.21 5.123l3.64 3.621v10.428l-3.742 3.733H8.847l-3.752-3.733V8.698l3.556-3.575H19.21Zm1.161-1.95 4.438 4.43v12.73l-4.568 4.56H7.714l-4.578-4.57V7.538l4.336-4.364H20.37Z"
              stroke="#151542"
              stroke-width="0.5"
            ></path>
          </g>
          <defs>
            <clipPath id="Asscher_svg__a">
              <path fill="#fff" d="M0 0h28v28H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      shape: "Marquise",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m17.462 3.554-1.49 1.115m0 0 .245 3.482 3.18 2.488-1.525 3.213 1.407 3.426M15.972 4.67 14 5.523m1.973-.854-1.898-3.483h-.149L12.03 4.668 8.245 6.693l.357 3.947m7.37-5.971 3.782 2.024-.356 3.946 2.393 3.213-2.512 3.426m-3.352 5.98.41-3.761m-.41 3.761-1.928-.732m1.928.732 1.636 1.115m-1.225-4.877 2.94-2.218m-2.94 2.219 1.535-5.645L16.22 8.15l-2.22-2.627m2.339 13.974-2.339 3.029m5.28-5.248.548 3.984-3.9 1.996-1.852 3.557h-.149l-1.854-3.557M14 5.523l-1.973-.852-.246 3.482-3.179 2.486M14 5.524 11.78 8.15l-1.645 5.702 1.527 5.645m2.337 3.029-2.338-3.03M14 22.527l-1.927.732M8.602 10.64 6.21 13.852l2.52 3.425-.556 3.984 3.9 1.996M8.602 10.64l1.533 3.214-1.408 3.426 2.934 2.216m.41 3.762-.41-3.761m.41 3.761-1.636 1.115m.11-20.82 1.48 1.116M14.075 27a14.59 14.59 0 0 0 5.79-5.435A14.921 14.921 0 0 0 22 13.853C22 4.955 14.074 1 14.074 1h-.149S6 4.955 6 13.852a14.92 14.92 0 0 0 2.137 7.712 14.59 14.59 0 0 0 5.79 5.435l.147.001Z"
            stroke="#151542"
            stroke-width="0.5"
          ></path>
        </svg>
      ),
    },
    {
      shape: "Radiant",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#Radiant_svg__a)">
            <path
              d="m24.196 21.354-4.188-1.364 1.346 4.206m2.842-2.843V6.657m0 14.698-2.842 2.842m0 0L22.868 27m-1.514-2.804L14 20.963l-7.344 3.233m14.698 0H6.656M27 22.868l-2.804-1.513L21.039 14l3.157-7.344M27 22.868V5.14m0 17.727L22.868 27m1.328-20.344L27 5.141m-2.804 1.515-2.843-2.845H6.656m17.54 2.845L20.008 8.02l1.346-4.206M27 5.14 22.868 1m0 26H5.14m1.515-2.804L5.14 27m1.515-2.804L3.81 21.353V6.657l2.845-2.845M5.14 27 1 22.868M6.656 3.81 14 7.045l7.355-3.232L22.868 1M6.656 3.811 5.14 1M3.813 21.354 8 19.99l-1.345 4.206M1 22.868l2.813-1.513L6.96 14 3.813 6.656M1 22.868V5.14L5.14 1 22.869 1M3.813 6.656 1 5.14m2.813 1.516L8 8.02 6.655 3.814M14 7.11l5.924.985.91 5.905-.91 5.915L14 20.9l-5.924-.985-.9-5.915.9-5.905L14 7.11Z"
              stroke="#151542"
              stroke-width="0.5"
            ></path>
          </g>
          <defs>
            <clipPath id="Radiant_svg__a">
              <path fill="#fff" d="M0 0h28v28H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      shape: "Heart",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.986 5.164v3.563M11.42 20.483l2.492-.547m-2.492.547-5.122.056.363-4.472.204-3.202-2.835-1.93m7.39 9.548-1.877 2.71m4.369-3.257h.148m-.149 0-3.56-2.19-3.253-4.63-1.46-4.185 8.367-2.246-4.806-4.12-3.58 3.675m8.441 13.696 2.492.547m-2.492-.547 3.784-2.116 3.03-4.704 1.46-4.185-8.367-2.246 4.806-4.12 3.588 3.675m-5.81 14.243 4.927.242-.167-4.658-.205-3.202 2.836-1.93m-7.39 9.548 1.598 2.896m3.18-6.811 2.519 1.512m.093-7.145-1.46-2.004-.12-2.69m1.58 4.694 2.695 1.058m-2.695-1.058 1.57 3.944-7.668 3.09-1.441 2.366-2.38 5.104h-.074l-2.38-5.104-1.292-2.737-7.808-2.72 1.561-3.943m19.912 0 2.472-4.148-4.053-.547m0 0 1.292-3.155M22.361 6.24 18.04 7.78l-4.016.975h-.074L9.933 7.78 5.62 6.24m0 0L4.318 3.085M5.62 6.24l-4.062.547 2.472 4.148M5.62 6.24l-.13 2.691-1.46 2.004m0 0-2.695 1.058m5.224 4.426-2.315 1.819m9.742 7.451S27 20.363 27 8.931c0-2.923-2.324-6.681-6.19-6.681-4.909 0-6.824 2.886-6.824 2.886S12.126 2.25 7.191 2.25C3.333 2.25 1 6.008 1 8.931c0 11.432 13.014 16.758 13.014 16.758h-.028Z"
            stroke="#151542"
            stroke-width="0.5"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      shape: "Pear",
      svg: (
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.104 5.02 6.01 4.289l1.145 4.956m3.949-4.223-.536 3.119m.536-3.12 2.84-3.936m-6.79 8.16 2.196 2.943-2.103 2.805m-.092-5.748L4.074 11.78l3.173 3.212m-.092-5.748 3.413-1.104m-3.321 6.852-.414 4.93 4.649 1.272 2.537-1.466-3.423-2.35m-3.35-2.386 3.35 2.386m-3.35-2.386-2.24 1.356m5.59 1.03.886 3.817m-.886-3.817L9.35 12.189l1.218-4.049m0 0 3.377-1.615m-6.79 2.72L4.193 8.04m7.289 13.156-1.486 2.647m1.486-2.647 2.537 5.627m-.074-20.297L11.103 5.02 9.524 2.004m4.421 4.52 3.385 1.617 1.338 3.797m-4.723-5.413 2.85-1.504 1.513-3.036m-1.513 3.036 5.065-.706-1.116 4.93m0 0-2.076 2.694m2.076-2.694 3.026-.853m-5.102 3.546 2.048 3.055m-2.048-3.055-1.152 5.44-1.034 3.817m4.234-6.202.36 5.014-4.594 1.188m4.234-6.202 2.279 1.253m-6.513 4.95-2.537-1.468 3.57-2.35 3.2-2.384 3.165-3.214-3.138-2.536-3.413-1.103-.536-3.12L13.944 1m2.538 20.195 1.227 2.896m-1.227-2.896-2.537 5.627m.036.178S24 21.326 24 10.127C24 1.327 14.627 1 13.98 1 13.337 1 4 1.066 4 10.127 3.96 21.334 13.98 27 13.98 27Z"
            stroke="#151542"
            stroke-width="0.5"
          ></path>
        </svg>
      ),
    },
  ];
  interface Diamond {
    id: number;
    name: string;
    price: number;
    salePrice?: number;
    shape: string;
    carat: number;
    color: string;
    clarity: string;
    cut: string;
    image: string;
  }
  const diamonds: Diamond[] = [
    {
      id: 1,
      name: "1.00 Carat H-VS2 Round Diamond",
      price: 10,
      salePrice: 7,
      shape: "round",
      carat: 1.0,
      color: "H",
      clarity: "VS2",
      cut: "Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FRound_3.png?alt=media&token=0016da8b-994c-47d5-9fe7-f48f77aafa88",
    },
    {
      id: 2,
      name: "1.01 Carat H-VS2 Good Oval Diamond",
      price: 10,
      salePrice: 7,
      shape: "oval",
      carat: 1.0,
      color: "H",
      clarity: "VS2",
      cut: "Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FOval_1.png?alt=media&token=2017cc15-0207-4ca5-93cf-183d2b9c5153",
    },
    {
      id: 3,
      name: "1.01 Carat G-VS2 Very Good Oval Diamond",
      price: 10,
      salePrice: 7,
      shape: "oval",
      carat: 1.0,
      color: "G",
      clarity: "VS2",
      cut: "Very Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FOval_3.png?alt=media&token=62377c86-e3a9-4930-a1a9-08036904932c",
    },
    {
      id: 4,
      name: "1.00 Carat F-SI2 Very Good Pear Diamond",
      price: 12,
      shape: "pear",
      carat: 1.0,
      color: "F",
      clarity: "SI2",
      cut: "Very Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FPear_2.png?alt=media&token=6fb5f288-3ca4-4b16-aa0c-d754923940c3",
    },
    {
      id: 5,
      name: "1.01 Carat J-IF Ideal Heart Diamond",
      price: 10,
      salePrice: 5,
      shape: "heart",
      carat: 1.01,
      color: "J",
      clarity: "IF",
      cut: "Ideal",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FHeart_4.png?alt=media&token=6aa5ca36-a89a-4477-b9e0-bc3cdf49e7b0",
    },
    {
      id: 6,
      name: "2.00 Carat I-VS1 Good Princess Diamond",
      price: 30,
      shape: "princess",
      carat: 2.0,
      color: "I",
      clarity: "VS1",
      cut: "Very Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FPrincess_1.png?alt=media&token=0298c307-525b-418b-9f9e-ba4a2cfb2985",
    },

    {
      id: 7,
      name: "2.02 Carat G-FL Good Asscher Diamond",
      price: 14,
      salePrice: 10,
      shape: "asscher",
      carat: 2.02,
      color: "G",
      clarity: "FL",
      cut: "Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FAsscher_2.png?alt=media&token=bbb6047a-bdc6-40ab-877c-9cbeafb44d27",
    },
    {
      id: 8,
      name: "2.02 Carat K-VVS2 Good Radiant Diamond",
      price: 16,
      shape: "radiant",
      carat: 2.02,
      color: "K",
      clarity: "VVS2",
      cut: "Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FRadiant_1.png?alt=media&token=e91ff909-5384-4e0f-8ee9-f5b4c4a7ce3e",
    },
    {
      id: 9,
      name: "1.01 Carat G-VS2 Ideal Cushion Diamond",
      price: 10,
      shape: "cushion",
      carat: 1.01,
      color: "G",
      clarity: "VS2",
      cut: "Very Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FCushion_1.png?alt=media&token=4335ff8a-e124-489a-9983-9bf768b82114",
    },

    {
      id: 10,
      name: "1.00 Carat J-VVS1 Ideal Emerald Diamond",
      price: 10,
      salePrice: 9,
      shape: "emerald",
      carat: 1.0,
      color: "J",
      clarity: "VVS1",
      cut: "Ideal",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FEmerald_4.png?alt=media&token=d1f80af7-3532-4036-b903-0e4faa8757e5",
    },
    {
      id: 11,
      name: "1.04 Carat I-IF Good Marquise Diamond",
      price: 10,
      shape: "marquise",
      carat: 1.04,
      color: "I",
      clarity: "IF",
      cut: "Good",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FMarquise_1.png?alt=media&token=a1861949-240f-415b-a948-7f3674050c09",
    },
    {
      id: 12,
      name: "1.00 Carat F-FL Astor Ideal Heart Diamond",
      price: 12,
      shape: "heart",
      carat: 1.0,
      color: "F",
      clarity: "FL",
      cut: "Astor Ideal",
      image:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FHeart_4.png?alt=media&token=6aa5ca36-a89a-4477-b9e0-bc3cdf49e7b0",
    },
  ];
  const [filteredDiamonds, setFilteredDiamonds] = useState(diamonds);
  console.log(setFilteredDiamonds);
  const [wishList, setWishList] = useState<number[]>([]);

  const toggleWishList = (productId: number) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const handleChangePage = (page: any) => {
    setCurrentPage(page);
  };

  // const paginatedDiamonds = filteredDiamonds.slice(
  //   (currentPage - 1) * pageSize,
  //   currentPage * pageSize
  // );

  return (
    <Section>
      <div>
        <CustomBreadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "All Diamond",
            },
          ]}
        />
      </div>
      <Heading>
        <h2>ALL DIAMONDS</h2>
      </Heading>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <CustomTitle level={5}>Shape</CustomTitle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {shapeButtons.map(({ shape, svg }) => (
              <CustomButton
                key={shape}
                className={`bn_comp_selectionWrapper_ad0360 ${shapeSelected === shape ? "bn_comp_selected_ad0360" : ""
                  }`}
                style={{
                  height: "80px",
                  width: "79px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border:
                    shapeSelected === shape
                      ? "2px solid rgb(21, 21, 66)"
                      : " 1px solid rgba(21, 21, 66, 0.3)",
                }}
                title={shape}
                onClick={() => handleShapeSelect(shape)}
              >
                <div className="bn_comp_iconWrapper_ad0360">{svg}</div>
                <div className="bn_comp_btnText_ad0360">{shape}</div>
              </CustomButton>
            ))}
          </div>
        </Col>
        <Col span={8}>
          <CustomTitle level={5}>Price</CustomTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "column",


              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",

                width: "100%",
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <div
                  style={{
                    alignSelf: "flex-start",
                    fontSize: "12px",
                    color: "#949494",
                  }}
                >
                  Min Price
                </div>
                <InputNumber
                  min={0}
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(value) => setPriceRange([value !== null ? value : 0, priceRange[1]])}
                  style={{ marginTop: "5px" }}
                />
              </div>
              <div style={{ flexGrow: 2, width: "100%" }}></div>
              <div style={{ flexGrow: 1 }}>
                <div
                  style={{
                    textAlign: "right",
                    fontSize: "12px",
                    color: "#949494",
                  }}
                >
                  Max Price
                </div>
                <InputNumber
                  style={{ marginTop: "5px" }}
                  min={priceRange[0]}
                  max={200000}
                  value={priceRange[1]}
                  onChange={(value) => setPriceRange([priceRange[0], value !== null ? value : 0])}
                />
              </div>
            </div>
            <CustomSlider
              range
              min={0}
              max={200000}
              step={10}
              value={priceRange}
              onChange={(value) => setPriceRange(value as [number, number])}
            />
          </div>
        </Col>
        <Col span={8}>
          <CustomTitle level={5}>Carat</CustomTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <div>
                <div>
                  <div
                    style={{
                      alignSelf: "flex-start",
                      fontSize: "12px",
                      color: "#949494",
                    }}
                  >
                    Min Carat
                  </div>
                  <InputNumber
                    style={{ marginTop: "5px" }}
                    min={0}
                    max={caratRange[1]}
                    value={caratRange[0]}
                    onChange={(value) => setCaratRange([value !== null ? value : 0, caratRange[1]])}
                  />
                </div>
                <div style={{ flexGrow: 2, width: "100%" }}></div>
                <div style={{ flexGrow: 1 }}>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "12px",
                      color: "#949494",
                    }}
                  >
                    Max Carat
                  </div>
                  <InputNumber
                    style={{ marginTop: "5px" }}
                    min={caratRange[0]}
                    max={30.0}
                    value={caratRange[1]}
                    onChange={(value) => setCaratRange([caratRange[0], value !== null ? value : 0])}
                  />
                </div>
              </div>
              <CustomSlider
                range
                min={0.05}
                max={30.0}
                step={0.01}
                value={caratRange}
                onChange={(value) => setCaratRange(value as [number, number])}
              />
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: "20px" }}></div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <CustomTitle level={5}>Color</CustomTitle>
          <CustomSlider
            range
            min={0}
            max={7}
            value={colorValue}
            onChange={(value) => setColorRange(value as [number, number])}
            tipFormatter={formatColorValue}
            marks={{
              0: "D",
              1: "E",
              2: "F",
              3: "G",
              4: "H",
              5: "I",
              6: "J",
              7: "K",
            }}
            step={null}
          />
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        {["D", "E", "F", "G", "H", "I", "J", "K"].map((color, index) => (
          <span key={color}>{color}</span>
        ))}
      </div> */}
        </Col>
        <Col span={8}>
          <CustomTitle level={5}>Clarity</CustomTitle>
          <CustomSlider
            range
            min={0}
            max={7}
            value={clarityValue}
            onChange={(value) => setClarityRange(value as [number, number])}
            tipFormatter={formatClarityValue}
            marks={{
              0: "FL",
              1: "IF",
              2: "VVS1",
              3: "VVS2",
              4: "VS1",
              5: "VS2",
              6: "SI1",
              7: "SI2",
            }}
            step={null}
          />
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            {["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"].map(
              (clarity, index) => (
                <span key={index}>{clarity}</span>
              )
            )}
          </div> */}
        </Col>
        <Col span={8}>
          <CustomTitle level={5}>Cut</CustomTitle>
          <CustomSlider
            className="cut-slider"
            range
            min={0}
            max={3}
            value={cutRange}
            onChange={(value) => setCutRange(value as [number, number])}
            tipFormatter={formatCutValue}
            marks={{
              0: "Good",
              1: "Very Good",
              2: "Ideal",
              3: "Astor Ideal",
            }}
            step={null}
          />
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            {["Good", "Very Good", "Ideal", "Astor Ideal"].map((cut, index) => (
              <span key={index}>{cut}</span>
            ))}
          </div> */}
        </Col>
      </Row>
      <ResetButton onClick={handleReset} style={{ margin: "20px 0" }}>
        Reset Filter
      </ResetButton>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "16px" }}>
          <div>
            <span style={{ fontSize: "14px", marginRight: "5px" }}>
              Sort By
            </span>
            <CustomSelect
              style={{ width: 120, height: 40 }}
              placeholder="Any Date"
            >
              <Option value="all">All</Option>
              <Option value="newest">Newest</Option>
              <Option value="oldest">Oldest</Option>
            </CustomSelect>
          </div>
          <div>
            <span style={{ fontSize: "14px", marginRight: "5px" }}>
              Sort By
            </span>
            <CustomSelect
              style={{ width: 120, height: 40 }}
              placeholder="Alphabetical"
            >
              <Option value="all">All</Option>
              <Option value="a-z">A-Z</Option>
              <Option value="z-a">Z-A</Option>
            </CustomSelect>
          </div>
        </div>
      </div>
      <hr
        style={{
          maxWidth: "1400px",
          margin: "20px auto",
          border: "1px solid rgba(21, 21, 66, 0.3)",
        }}
      />
      <List>
        <Row gutter={[16, 16]}>
          {filteredDiamonds.map((diamond) => (
            <Col key={diamond.id} span={6}>
              <Card
                style={{ borderRadius: "0" }}
                hoverable
                className="product-card"
                cover={
                  <>
                    <img
                      style={{ borderRadius: "0" }}
                      src={diamond.image}
                      alt={diamond.name}
                      className="product-image"
                      onMouseOut={(e) => (e.currentTarget.src = diamond.image)}
                    />
                    {diamond.salePrice && (
                      <div className="sale-badge">SALE</div>
                    )}
                  </>
                }
              >
                <div className="product-info">
                  <Title level={4} className="product-name">
                    {diamond.name}
                    {wishList.includes(diamond.id) ? (
                      <HeartFilled
                        className="wishlist-icon"
                        onClick={() => toggleWishList(diamond.id)}
                      />
                    ) : (
                      <HeartOutlined
                        className="wishlist-icon"
                        onClick={() => toggleWishList(diamond.id)}
                      />
                    )}
                  </Title>
                  <div className="price-container">
                    <Text className="product-price">
                      ${diamond.salePrice ? diamond.salePrice : diamond.price}
                    </Text>
                    {diamond.salePrice && (
                      <Text delete className="product-sale-price">
                        ${diamond.price}
                      </Text>
                    )}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </List>
      <div style={{ textAlign: "center", margin: "20px auto" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredDiamonds.length}
          onChange={handleChangePage}
        />
      </div>
      <FAQs>
        <LeftFAQ>
          <h2>FAQs ABOUT PRODUCT</h2>
        </LeftFAQ>
        <StyledCollapse
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
      </FAQs>
    </Section>
  );
};

export default AllDiamond;
