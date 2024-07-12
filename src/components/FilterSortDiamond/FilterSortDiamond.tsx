import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, InputNumber, Slider, Select, Typography, Image } from "antd";
const { Title } = Typography;
import { Col, Row } from "antd";
const { Option } = Select;
import { theme } from "../../themes";
import { showDiamonds } from "@/services/diamondAPI";

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
const FilterSortDiamond = () => {
  const [shapeSelected, setShapeSelected] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [caratRange, setCaratRange] = useState<[number, number]>([0.05, 30.0]);
  const [cutRange, setCutRange] = useState<[number, number]>([0, 3]);
  const [colorValue, setColorRange] = useState<[number, number]>([0, 7]);
  const [clarityValue, setClarityRange] = useState<[number, number]>([0, 7]);

  const formatColorValue = (value?: number): React.ReactNode => {
    const labels = ["D", "E", "F", "G", "H", "I", "J", "K"];
    return value !== undefined ? labels[value] : null;
};

const formatClarityValue = (value?: number): React.ReactNode => {
    const labels = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"];
    return value !== undefined ? labels[value] : null;
};

const formatCutValue = (value?: number): React.ReactNode => {
    const labels = ["Good", "Very Good", "Ideal", "Astor Ideal"];
    return value !== undefined ? labels[value] : null;
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

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        Cut: cutRange.map((val) => formatCutValue(val)),
        Clarity: clarityValue.map((val) => formatClarityValue(val)),
        maxCarat: caratRange[1],
        minCarat: caratRange[0],
        maxPrice: priceRange[1],
        minPrice: priceRange[0],
        Color: colorValue.map((val) => formatColorValue(val)),
        Shape: shapeSelected ? [shapeSelected] : [],
        page: 1,
      };

      try {
        const response = await showDiamonds(params);
        // Xử lý response từ API
        console.log(response);
      } catch (error) {
        console.error("Error fetching diamonds data:", error);
      }
    };

    fetchData();
  }, [shapeSelected, priceRange, caratRange, cutRange, colorValue, clarityValue]);

  const shapeButtons = [
    {
      shape: "Round",
      svg: <Image src='./src/assets/svg/diamondShape/round.svg' preview={false} />
    },
    {
      shape: "Oval",
      svg: <Image src='./src/assets/svg/diamondShape/oval.svg' preview={false} />
    },
    {
      shape: "Princess",
      svg: <Image src='./src/assets/svg/diamondShape/princess.svg' preview={false} />
    },
    {
      shape: "Cushion",
      svg: <Image src='./src/assets/svg/diamondShape/cushion.svg' preview={false} />
    },
    {
      shape: "Emerald",
      svg: <Image src='./src/assets/svg/diamondShape/emerald.svg' preview={false} />,
    },
    {
      shape: "Asscher",
      svg: <Image src='./src/assets/svg/diamondShape/asscher.svg' preview={false} />,
    },
    {
      shape: "Marquise",
      svg: <Image src='./src/assets/svg/diamondShape/marquise.svg' preview={false} />,
    },
    {
      shape: "Radiant",
      svg: <Image src='./src/assets/svg/diamondShape/radient.svg' preview={false} />
    },
    {
      shape: "Heart",
      svg: <Image src='./src/assets/svg/diamondShape/heart.svg' preview={false} />
    },
    {
      shape: "Pear",
      svg: <Image src='./src/assets/svg/diamondShape/pear.svg' preview={false} />,
    },
  ];
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <CustomTitle level={5}>Shape</CustomTitle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {shapeButtons.map(({ shape, svg }) => (
              <CustomButton
                key={shape}
                className={`bn_comp_selectionWrapper_ad0360 ${
                  shapeSelected === shape ? "bn_comp_selected_ad0360" : ""
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
                  onChange={(value) =>
                    setPriceRange([value !== null ? value : 0, priceRange[1]])
                  }
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
                  onChange={(value) =>
                    setPriceRange([priceRange[0], value !== null ? value : 0])
                  }
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
              <div style={{ flexGrow: 1 }}>
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
                  onChange={(value) =>
                    setCaratRange([value !== null ? value : 0, caratRange[1]])
                  }
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
                  onChange={(value) =>
                    setCaratRange([caratRange[0], value !== null ? value : 0])
                  }
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
    </>
  );
};

export default FilterSortDiamond;
