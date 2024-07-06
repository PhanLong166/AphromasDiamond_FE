import { useState } from "react";
import styled from "styled-components";
import { products } from "./../../pages/Home/shared/ListOfProducts";
import { Menu } from "antd";
import { Dropdown, Select, Slider, Button, InputNumber } from "antd";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";
import { Container } from "./FilterSort.styled";

import { theme } from "../../themes";
import { BaseOptionType, DefaultOptionType } from "antd/es/select";

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

const CustomButton = styled(Button)`
  &:hover {
    color: ${theme.color.primary} !important;
    border: 1px solid ${theme.color.primary} !important;
  }

  border: 1px solid rgba(21, 21, 66, 0.3) !important;
  color: ${theme.color.primary} !important;
  border-radius: 4px !important;
`;
const CustomSlider = styled(Slider)`
  .ant-slider-track {
    background-color: ${theme.color.primary} !important;
  }
  .ant-slider-handle::after {
    box-shadow: 0 0 0 2px ${theme.color.primary} !important;
  }
`;

const { Option } = Select;

const ShapeOptions = [
  { value: "round", label: "Round" },
  { value: "princess", label: "Princess" },
  { value: "cushion", label: "Cushion" },
  { value: "oval", label: "Oval" },
  { value: "emerald", label: "Emerald" },
  { value: "pear", label: "Pear" },
  { value: "asscher", label: "Asscher" },
  { value: "heart", label: "Heart" },
  { value: "radiant", label: "Radiant" },
  { value: "marquise", label: "Marquise" },
];

const MetalOptions = [
  { value: "white gold", label: "White Gold" },
  { value: "yellow gold", label: "Yellow Gold" },
  { value: "rose gold", label: "Rose Gold" },
  { value: "platinum", label: "Platinum" },
];

const FilterSort = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSelectChange = (
    input: unknown,
    _:
      | DefaultOptionType
      | BaseOptionType
      | (DefaultOptionType | BaseOptionType)[]
  ) => {
    const value = input as string;

    const filtered = products.filter((product) => {
      setSelectedFilters((prevFilters) => {
        if (!prevFilters.includes(value)) {
          return [...prevFilters, value];
        }
        return prevFilters;
      });
      const lowerCaseFilter = value.toLowerCase();
      const lowerCaseProductName = product.name.toLowerCase();
      const lowerCaseShape = product.shape.toLowerCase();
      const lowerCaseMetal = product.metal.toLowerCase();

      if (lowerCaseFilter === "ring") {
        return (
          lowerCaseProductName.includes("ring") &&
          !lowerCaseProductName.includes("earrings")
        );
      } else if (lowerCaseFilter === "earrings") {
        return lowerCaseProductName.includes("earrings");
      } else {
        const matchesName = lowerCaseProductName.includes(lowerCaseFilter);
        const matchesShape = lowerCaseShape === lowerCaseFilter;
        const matchesMetal = lowerCaseMetal === lowerCaseFilter;
        return matchesName || matchesShape || matchesMetal;
      }
    });

    setFilteredProducts(filtered);
  };

  const handleSliderChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
    setSelectedFilters((prevFilters) => {
      const priceFilter = `$${value[0]} - $${value[1]}`;
      return [...prevFilters.filter(f => !f.startsWith('$')), priceFilter];
    });
  
    const filtered = products.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );
    setFilteredProducts(filtered);
  };

  const handleRemoveFilter = (filterToRemove: string) => {
    const newSelectedFilters = selectedFilters.filter(
      (filter) => filter !== filterToRemove
    );
    setSelectedFilters(newSelectedFilters);

    const filtered = products.filter((product) => {
      return newSelectedFilters.every((filter) => {
        const lowerCaseProductName = product.name.toLowerCase();
        if (filter === "ring") {
          return (
            lowerCaseProductName.includes("ring") &&
            !lowerCaseProductName.includes("earrings")
          );
        } else if (filter === "earrings") {
          return (
            lowerCaseProductName.includes("earrings") &&
            !lowerCaseProductName.includes("ring")
          );
        } else if (filter.startsWith('$')) {
          const priceRange = filter.split(' ')[1].split('-').map(Number);
          return product.price >= priceRange[0] && product.price <= priceRange[1];
        } else {
          return lowerCaseProductName.includes(filter.toLowerCase());
        }
      });
    });

    setFilteredProducts(filtered);
    console.log(filteredProducts);
  };

  const handleResetFilters = () => {
    setSelectedFilters([]);
    setFilteredProducts(products);
    setPriceRange([0, 200000]);
  };

  const handleDropdownVisibleChange = (visible: boolean) => {
    setDropdownVisible(visible);
  };

  const handleMinPriceChange = (value: number | null) => {
    setPriceRange([value || 0, priceRange[1]]);
    handleSliderChange([value || 0, priceRange[1]]);
  };
  
  const handleMaxPriceChange = (value: number | null) => {
    setPriceRange([priceRange[0], value || 200000]);
    handleSliderChange([priceRange[0], value || 200000]);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8px",
            width: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <span style={{ alignSelf: "flex-start" }}>Min Price</span>
              <InputNumber
                style={{ marginRight: "8px" }}
                min={0}
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={handleMinPriceChange}
              />
            </div>
            <div style={{ flexGrow: 2, margin: "0 8px", width: "250px" }}>
              <CustomSlider
                style={{ marginTop: "30px" }}
                range
                min={0}
                max={200000}
                step={10}
                value={priceRange}
                onChange={handleSliderChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "8px",
                flexGrow: 1,
              }}
            >
              <span style={{ alignSelf: "flex-end" }}>Max Price</span>
              <InputNumber
                style={{ alignSelf: "flex-end" }}
                min={priceRange[0]}
                max={200000}
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              bottom: "20px",
              cursor: "pointer",
            }}
          >
            <CloseOutlined onClick={() => setDropdownVisible(false)} />
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Container>
        <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
          <CustomSelect
            style={{ width: 120, height: 40 }}
            onChange={handleSelectChange}
            placeholder="Shape"
          >
            {ShapeOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </CustomSelect>
          <CustomSelect
            style={{ width: 120, height: 40 }}
            onChange={handleSelectChange}
            placeholder="Metal"
          >
            {MetalOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </CustomSelect>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "500px",
            }}
          >
            <Dropdown
              overlay={menu}
              visible={dropdownVisible}
              onVisibleChange={handleDropdownVisibleChange}
              trigger={["click"]}
            >
              <CustomButton
                style={{
                  width: "120px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Price
                <DownOutlined style={{ marginLeft: "8px" }} />
              </CustomButton>
            </Dropdown>
          </div>
        </div>

        <div style={{ display: "flex", marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginRight: selectedFilters.length > 0 ? "8px" : "0",
            }}
          >
            {selectedFilters.map((filter) => (
              <div
                key={filter}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  backgroundColor: "#eee",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                <span style={{ lineHeight: "14px" }}>{filter}</span>
                <CloseOutlined
                  style={{
                    fontSize: "10px",
                    marginLeft: "2px",
                    marginTop: "2px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemoveFilter(filter)}
                />
              </div>
            ))}
          </div>
          {selectedFilters.length > 0 && (
            <div>
              <CustomButton onClick={handleResetFilters}>
                Reset Filters
              </CustomButton>
            </div>
          )}
        </div>

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
      </Container>
    </>
  );
};

export default FilterSort;
