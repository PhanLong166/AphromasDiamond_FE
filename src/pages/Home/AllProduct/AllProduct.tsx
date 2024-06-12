import React, { useState } from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { Menu } from "antd";
import { Dropdown, Select, Slider, Button, InputNumber } from "antd";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";
import {
  Section,
  Container,
  Heading,
  FilterBar,
  List,
} from "./AllProduct.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { theme } from "../../../themes";
const { Title, Text } = Typography;
const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 20px;
`;
const { Option } = Select;
interface Product {
  id: number;
  shape: string;
  metal: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage: string;
}
const products: Product[] = [
  {
    id: 1,
    shape: "round",
    metal: "yellow gold",
    name: "SOFIA TWO FINGER RING",
    price: 100,
    salePrice: 98,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_1.webp?alt=media&token=a7ebfeca-9fa1-4250-887f-69a7cdd0e11a",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp1_2.webp?alt=media&token=e043514e-f66c-4397-987e-27a44ea87578",
  },
  {
    id: 2,
    shape: "princess",
    metal: "yellow gold",
    name: "RAIN SOLITARY RING",
    price: 59,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp2_1.webp?alt=media&token=8d8f6760-e2ac-45eb-8c6b-880ff64e95bc",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp2_2.webp?alt=media&token=bc0adf15-7ad9-4507-8d17-e8a27d624417",
  },

  {
    id: 3,
    shape: "cushion",
    metal: "yellow gold",
    name: "GALA STAMP RING",
    price: 100,
    salePrice: 90,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp3_1.webp?alt=media&token=7dd02d2a-24f9-4b31-a809-bccfa25cefde",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp3_2.webp?alt=media&token=330beb5e-ee10-429c-8b8b-1df54073a294",
  },
  {
    id: 4,
    shape: "oval",
    metal: "yellow gold",
    name: "THE ROCKS RING SET",
    price: 185,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp4_1.webp?alt=media&token=bdc15cce-29cd-401c-bf79-105b6bc66592",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp4_2.webp?alt=media&token=90ee67f1-59c9-42b4-b851-ddc2104a96a4",
  },
  {
    id: 5,
    shape: "emerald",
    metal: "yellow gold",
    name: "DIAMONDS AND GOLD BALANCE RING",
    price: 520,
    salePrice: 445,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp5_1.webp?alt=media&token=e29bfcd0-9170-4bd9-ba64-c58326decdaa",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp5_2.webp?alt=media&token=9867ffe1-d125-4ff7-906f-0fc95e993761",
  },
  {
    id: 6,
    shape: "pear",
    metal: "yellow gold",
    name: "DIAMONDS AND GOLD NORA RING",
    price: 585,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp6_1.webp?alt=media&token=1239447c-a395-4239-8bde-1e6f7f7730ed",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp6_2.webp?alt=media&token=775559ab-5d42-4b24-9e0b-d95b173c07c6",
  },

  {
    id: 7,
    shape: "asscher",
    metal: "white gold",
    name: "DIAMONDS ETERNITY MINI RING",
    price: 900,
    salePrice: 845,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp7_1.webp?alt=media&token=146832c4-dd52-4901-aae7-49853ac469eb",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp7_2.webp?alt=media&token=932b6133-fe30-46c5-861a-4efed29340fc",
  },
  {
    id: 8,
    shape: "heart",
    metal: "white gold",
    name: "DIAMONDS AND GOLD LOOP RING",
    price: 585,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp8_1.webp?alt=media&token=0b64e6fb-9eed-4acb-b2b5-1fbaa4434458",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp8_2.webp?alt=media&token=2011db85-85f2-4c8c-a18b-1ebfabe24965",
  },
  {
    id: 9,
    shape: "radiant",
    metal: "white gold",
    name: "BRIGHT HEART RING",
    price: 120,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_1.webp?alt=media&token=c910282c-3053-4d26-9e91-963215878e9e",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_2.webp?alt=media&token=e5a7c595-4898-4881-af00-71e6233b7a1e",
  },

  {
    id: 10,
    shape: "marquise",
    metal: "white gold",
    name: "FIVE RING",
    price: 100.0,
    salePrice: 85.0,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp12_1.webp?alt=media&token=9df847ac-bffc-41f6-b122-c5be30fdba55",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp12_2.webp?alt=media&token=a6665e88-6452-4bf6-9093-239e4a2a4711",
  },
  {
    id: 11,
    shape: "round",
    metal: "white gold",
    name: "DIAMONDS AND GOLD DOU RING",
    price: 640,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp13_1.webp?alt=media&token=1e650bab-f310-4372-be4d-064b3e779e34",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp13_2.webp?alt=media&token=6a460ce6-7a95-4028-8ad7-544e06772ff7",
  },
  {
    id: 12,
    shape: "princess",
    metal: "rose gold",
    name: "STARE EARRINGS",
    price: 77,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp18_1.webp?alt=media&token=049e3f81-efee-484c-940e-9fb3c0a32b3b",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp18_2.webp?alt=media&token=ec9d18b8-61fe-4f46-a958-a5c037c0b7bf",
  },

  {
    id: 13,
    shape: "cushion",
    metal: "rose gold",
    name: "DIAMONDS ETERNITY NECKLACE",
    price: 900,
    salePrice: 845,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp27_1.webp?alt=media&token=e2b5ff28-852c-4d1c-a893-65022ef5e595",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp27_2.webp?alt=media&token=9e615134-6e3b-41a2-b3c5-cee603b5cd6a",
  },
  {
    id: 14,
    shape: "oval",
    metal: "rose gold",
    name: "AQUA CLIMBING EARRINGS",
    price: 115,
    salePrice: 78,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp19_1.webp?alt=media&token=c4e20fbc-c597-4755-9c2d-7f9a92cec97e",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp19_2.webp?alt=media&token=c35ced8c-b56a-4ad5-b6c2-5ad042053b2b",
  },
  {
    id: 15,
    shape: "emerald",
    metal: "rose gold",
    name: "DIAMONDS AND GOLD DUO NECKLACE",
    price: 520,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp26_1.webp?alt=media&token=d7f4bcc7-046a-436f-83e4-b65e132f0475",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp26_2.webp?alt=media&token=43463a10-51ce-4ac3-a87b-a4621409a0ad",
  },

  {
    id: 16,
    shape: "pear",
    metal: "rose gold",
    name: "LILA SINGLE EARRINGS",
    price: 81.0,
    salePrice: 51.0,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp20_1.webp?alt=media&token=86dfa4e5-a2ed-4862-ba96-c747d18f0de2",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp20_2.webp?alt=media&token=bca88ad8-0824-4548-853c-77c53927ff87",
  },
  {
    id: 17,
    shape: "asscher",
    metal: "platinum",
    name: "DIAMONDS AND GOLD NOE SINGLE EARRINGS",
    price: 195,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp21_1.webp?alt=media&token=00013329-c4ef-4f31-8661-28ecf93a0022",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp21_2.webp?alt=media&token=88531754-dc93-4a1a-ba29-fb459ab9367a",
  },

  {
    id: 18,
    shape: "heart",
    metal: "platinum",
    name: "SAND SOLITARY NECKLACE",
    price: 177,
    salePrice: 77,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp25_1.webp?alt=media&token=88604cd0-5592-48c1-bb05-ce0c29d147dc",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp25_2.webp?alt=media&token=12fb89f1-397e-418f-ae89-cb265d938360",
  },
  {
    id: 19,
    shape: "radiant",
    metal: "platinum",
    name: "WATERFALL DROP EARRINGS",
    price: 520,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp22_1.webp?alt=media&token=357c865e-28c0-49d0-be5d-2591d8a7bfb7",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp22_2.webp?alt=media&token=f9196c42-3e36-4e74-b994-2b91ea9ff8fc",
  },
  {
    id: 20,
    shape: "marquise",
    metal: "platinum",
    name: "WATER NECKLACE",
    price: 85,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp24_1.webp?alt=media&token=846df684-7e12-47a2-b1a2-87dfdda8937a",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp24_2.webp?alt=media&token=2ff2f35f-3bc6-45dc-9c13-7f8bf2c5ca56",
  },

  {
    id: 21,
    shape: "round",
    metal: "platinum",
    name: "BLISS NECKLACE",
    price: 120.0,
    salePrice: 77.0,
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp23_1.webp?alt=media&token=99d7c7cb-b910-435d-961d-508dd2c4792d",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp23_2.webp?alt=media&token=1c7137b5-6c57-426a-9dd6-13ae6ef4366d",
  },
];
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

const CategoriesOptions = [
  { value: "ring", label: "Ring" },
  { value: "necklace", label: "Necklace" },
  { value: "earrings", label: "Earrings" },
  { value: "bracelet", label: "Bracelet" },
  { value: "anklet", label: "Anklet" },
  { value: "bangles", label: "Bangles" },
  { value: "choker", label: "Choker" },
  { value: "pendant", label: "Pendant" },
];

const MetalOptions = [
  { value: "white gold", label: "White Gold" },
  { value: "yellow gold", label: "Yellow Gold" },
  { value: "rose gold", label: "Rose Gold" },
  { value: "platinum", label: "Platinum" },
];
const AllProduct: React.FC = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
    window.history.pushState({}, "", `/page-${page}`);
  };

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSelectChange = (value: string) => {
    const newSelectedFilters = [value];
    setSelectedFilters(newSelectedFilters);

    const filtered = products.filter((product) => {
      // setSelectedFilters((prevFilters) => {
      //   if (!prevFilters.includes(value)) {
      //     return [...prevFilters, value];
      //   }
      //   return prevFilters;
      // });
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
        // Lọc dựa trên tên sản phẩm, shape, metal hoặc price
        const matchesName = lowerCaseProductName.includes(lowerCaseFilter);
        const matchesShape = lowerCaseShape === lowerCaseFilter;
        const matchesMetal = lowerCaseMetal === lowerCaseFilter;
        return matchesName || matchesShape || matchesMetal;
      }
    });

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
        } else {
          return lowerCaseProductName.includes(filter.toLowerCase());
        }
      });
    });

    setFilteredProducts(filtered);
  };

  const handleResetFilters = () => {
    setSelectedFilters([]);
    setFilteredProducts(products);
    setPriceRange([0, 200000]);
  };

  const handleMinPriceChange = (value: number | null) => {
    if (value !== null) {
      const newRange: [number, number] = [value, priceRange[1]];
      setPriceRange(newRange);
      updatePriceFilter(newRange);
    }
  };

  const handleMaxPriceChange = (value: number | null) => {
    if (value !== null) {
      const newRange: [number, number] = [priceRange[0], value];
      setPriceRange(newRange);
      updatePriceFilter(newRange);
    }
  };

  const handleSliderChange = (value: [number, number]) => {
    setPriceRange(value);
    updatePriceFilter(value);
  };
  const updatePriceFilter = (range: [number, number]) => {
    const filtered = products.filter((product) => {
      const productPrice =
        product.salePrice !== undefined ? product.salePrice : product.price;
      return productPrice >= range[0] && productPrice <= range[1];
    });

    setFilteredProducts(filtered);

    const formattedRange = `$${range[0]} - $${range[1]}`;
    setSelectedFilters((filters) => {
      const otherFilters = filters.filter((f) => !f.startsWith("$"));
      return [...otherFilters, formattedRange];
    });
  };
  const handleDropdownVisibleChange = (visible: boolean) => {
    setDropdownVisible(visible);
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
                paddingLeft: "8px",
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
              <Slider
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

  const [wishList, setWishList] = useState<number[]>([]);

  const toggleWishList = (productId: number) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
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
              title: "Round Ring",
              href: "/product",
            },
            {
              title: "All Product",
            },
          ]}
        />
      </div>
      <Container className="wide">
        <Heading>
          <h2>ALL PRODUCTS</h2>
        </Heading>
        <FilterBar>
          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <Select
              style={{ width: 120 }}
              onChange={handleSelectChange}
              placeholder="Shape"
            >
              {ShapeOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
            <Select
              style={{ width: 120 }}
              onChange={handleSelectChange}
              placeholder="Categories"
            >
              {CategoriesOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
            <Select
              style={{ width: 120 }}
              onChange={handleSelectChange}
              placeholder="Metal"
            >
              {MetalOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
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
                <Button
                  style={{
                    width: "120px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Price
                  <DownOutlined style={{ marginLeft: "8px" }} />
                </Button>
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
                <Button onClick={handleResetFilters}>Reset Filters</Button>
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
                <Select style={{ width: 120 }} placeholder="Any Date">
                  <Option value="all">All</Option>
                  <Option value="newest">Newest</Option>
                  <Option value="oldest">Oldest</Option>
                </Select>
              </div>
              <div>
                <span style={{ fontSize: "14px", marginRight: "5px" }}>
                  Sort By
                </span>
                <Select style={{ width: 120 }} placeholder="Alphabetical">
                  <Option value="all">All</Option>
                  <Option value="a-z">A-Z</Option>
                  <Option value="z-a">Z-A</Option>
                </Select>
              </div>
            </div>
          </div>
        </FilterBar>
        <hr style={{ maxWidth: "1400px", margin: "32px auto" }} />
        <List>
          <Row gutter={[16, 16]}>
            {filteredProducts.map((product) => (
              <Col key={product.id} span={6}>
                <Card
                  style={{ borderRadius: "0" }}
                  hoverable
                  className="product-card"
                  cover={
                    <>
                      <img
                        style={{ borderRadius: "0" }}
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        onMouseOver={(e) =>
                          (e.currentTarget.src = product.hoverImage)
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.src = product.image)
                        }
                      />
                      {product.salePrice && (
                        <div className="sale-badge">SALE</div>
                      )}
                    </>
                  }
                >
                  <div className="product-info">
                    <Title level={4} className="product-name">
                      {product.name}
                    </Title>
                    <div className="price-container">
                      <Text className="product-price">
                        ${product.salePrice ? product.salePrice : product.price}
                      </Text>
                      {product.salePrice && (
                        <Text delete className="product-sale-price">
                          ${product.price}
                        </Text>
                      )}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </List>
      </Container>
    </Section>
  );
};

export default AllProduct;
