import React, { useState } from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";
// import { Menu } from "antd";
// import { theme } from "../../../themes";
import {
  Section,
  Container,
  Wrap,
  Heading,
  FilterBar,
} from "./AllProduct.styled";
const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 20px;
`;

// const SidebarMenu = styled(Menu)`
//   .ant-menu-title-content {
//     color: ${theme.color.primary};
//     font-size: 15px;
//   }
// `;

// const items = [
//   {
//     key: "sub1",
//     label: "Shape",
//     children: [
//       {
//         key: "1",
//         label: "Round",
//       },
//       {
//         key: "2",
//         label: "Princess",
//       },
//       {
//         key: "3",
//         label: "Cushion",
//       },
//       {
//         key: "4",
//         label: "Oval",
//       },
//       {
//         key: "5",
//         label: "Emerald",
//       },
//       {
//         key: "6",
//         label: "Pear",
//       },
//       {
//         key: "7",
//         label: "Asscher",
//       },
//       {
//         key: "8",
//         label: "Heart",
//       },
//       {
//         key: "9",
//         label: "Radiant",
//       },
//       {
//         key: "10",
//         label: "Marquise",
//       },
//     ],
//   },
//   {
//     type: "divider",
//   },

//   {
//     key: "sub2",
//     label: "Jewelry",
//     // icon: <AppstoreOutlined />,
//     children: [
//       {
//         key: "11",
//         label: "Rings",
//       },
//       {
//         key: "12",
//         label: "Necklaces",
//       },
//       {
//         key: "13",
//         label: "Earrings",
//       },
//       {
//         key: "14",
//         label: "Bracelets",
//       },
//       {
//         key: "15",
//         label: "Anklets",
//       },
//       {
//         key: "16",
//         label: "Bangles",
//       },
//       {
//         key: "17",
//         label: "Pendants",
//       },
//     ],
//   },
//   {
//     type: "divider",
//   },
//   {
//     key: "sub4",
//     label: "Metals",
//     // icon: <SettingOutlined />,
//     children: [
//       {
//         key: "18",
//         label: "White Gold",
//       },
//       {
//         key: "19",
//         label: "Yellow Gold",
//       },
//       {
//         key: "20",
//         label: "Rose Gold",
//       },
//       {
//         key: "21",
//         label: "Platinum",
//       },
//     ],
//   },
// ];
// const onClick = (e: any) => {
//   console.log("click ", e);
// };

import { Select, Slider, Button, InputNumber } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

const ShapeOptions = [
  { value: "circle", label: "Circle" },
  { value: "square", label: "Square" },
  { value: "triangle", label: "Triangle" },
];

const CategoriesOptions = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
  { value: "category3", label: "Category 3" },
];

const MetalOptions = [
  { value: "metal1", label: "Metal 1" },
  { value: "metal2", label: "Metal 2" },
  { value: "metal3", label: "Metal 3" },
];
const AllProduct: React.FC = () => {
  // const [current, setCurrent] = useState(1);

  // const onChange = (page: number) => {
  //   console.log(page);
  //   setCurrent(page);
  //   window.history.pushState({}, "", `/page-${page}`);
  // };

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);

  const handleResetFilters = () => {
    setSelectedFilters([]);
    setPriceRange([0, 200000]);
  };

  const handleSelectChange = (value: string) => {
    setSelectedFilters([...selectedFilters, value]);
  };

  const handleRemoveFilter = (value: string) => {
    setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
  };

  // const handleMinPriceChange = (value: string | number | undefined) => {
  //   const minPrice = typeof value === "number" ? value : priceRange[0];
  //   setPriceRange([minPrice, priceRange[1]]);
  // };

  // const handleMaxPriceChange = (value: string | number | undefined) => {
  //   const maxPrice = typeof value === "number" ? value : priceRange[1];
  //   setPriceRange([priceRange[0], maxPrice]);
  // };

  // const handleSliderChange = (value: [number, number]) => {
  //   setPriceRange(value);
  // };
  // const togglePriceDropdown = () => {
  //   setPriceDropdownOpen(!priceDropdownOpen);
  // };
  
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
        <Wrap>
          <Heading>
            <h2>ALL PRODUCTS PAGE</h2>
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
              <span style={{fontSize: "14px"}}>Price</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
                flexGrow: "1",
                width: "500px"
              }}
            >
              
              <InputNumber
                style={{ marginRight: "8px" }}
                min={0}
                max={priceRange[1]}
                value={priceRange[0]}
                // onChange={handleMinPriceChange}
              />
              <Slider
                range
                min={0}
                max={200000}
                step={10}
                value={priceRange}
                // onChange={handleSliderChange}
                style={{ flexGrow: 1 }}
              />
              <InputNumber
                style={{ margin: "0 8px" }}
                min={priceRange[0]}
                max={200000}
                value={priceRange[1]}
                // onChange={handleMaxPriceChange}
              />
            </div>
            </div>
           
            <div style={{  display: "flex", marginBottom: "16px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {selectedFilters.map((filter) => (
                <div
                  key={filter}
                  style={{ display: "flex", alignItems: "center", fontSize:"14px",  }}
                >
                  {filter}
                  <CloseOutlined  style={{ fontSize:"10px"}} onClick={() => handleRemoveFilter(filter)} />
                </div>
              ))}
            </div>
              <Button onClick={handleResetFilters}>Reset Filters</Button>
            </div>
            
            <div style={{ display: "flex", gap: "16px"}}>
              <Select style={{ width: 120 }} placeholder="Sort by">
                <Option value="newest">Newest</Option>
                <Option value="oldest">Oldest</Option>
              </Select>
              <Select style={{ width: 120 }} placeholder="Sort by">
                <Option value="a-z">A-Z</Option>
                <Option value="z-a">Z-A</Option>
              </Select>
            </div>
          </FilterBar>
          {/* <Content>
            
            <SidebarMenu
              onClick={onClick}
              style={{
                width: 256,
              }}
              defaultSelectedKeys={[""]}
              defaultOpenKeys={[""]}
              mode="inline"
              items={items}
            />
            <CategoryContent>
              <Sorter>
                <a href="" className="menu-trigger">
                  <i></i>{" "}
                </a>
                <Left>
                  <span className="grey-color">Showing 9 of 35 results</span>
                </Left>
              </Sorter>
              <ProductSection id="products">
                <ListProduct>
                  {[
                    {
                      href: "/details",
                      name: "Petite Pavé Leaf Halo Diamond Engagement Ring",
                      price: "$13.99",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct6.png?alt=media&token=36f7203c-a296-48b0-8ad2-4bfb3105d102",
                    },
                    {
                      href: "#",
                      name: "Shank Double Pavé Diamond Engagement Ring",
                      price: "$16.99",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct13.png?alt=media&token=f76015c8-b828-438c-b99a-57f0938e3aaf",
                    },
                    {
                      href: "#",
                      name: "Shank Triple Pavé Diamond Engagement Ring",
                      price: "$19.99",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct3.png?alt=media&token=29b58243-7981-4e8d-a6b3-2c964de6ab7d",
                    },
                    {
                      href: "#",
                      name: "Graduated Milgrain Diamond Engagement Ring",
                      price: "$11.00",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct4.png?alt=media&token=ed7b509a-55f7-4b14-a6c6-c46107d25acb",
                    },
                    {
                      href: "#",
                      name: "Six-Prong Hand-Engraved Diamond Engagement Ring",
                      price: "$13.00",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct5.png?alt=media&token=fcedf915-c5f5-4215-9226-7f8088c4102e",
                    },
                    {
                      href: "#",
                      name: "Tapered Baguette Diamond Engagement Ring",
                      price: "$15.00",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct1.png?alt=media&token=8c409126-be7d-4d54-8475-3e3539ad9743",
                    },
                    {
                      href: "#",
                      name: "Shank Double Lave Diamond Engagement Ring",
                      price: "$17.00",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct7.png?alt=media&token=6da53894-3b1f-47f6-8c95-e073e76c0dc7",
                    },
                    {
                      href: "#",
                      name: "Stone Trapezoid Sidestone Diamond Ring",
                      price: "$23.00",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct8.png?alt=media&token=50ddd742-2448-4e09-9294-d27c6d986543",
                    },
                    {
                      href: "#",
                      name: "Six-Prong Hand-Engraved Diamond Engagement Ring",
                      price: "$13.00",
                      imgSrc:
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct9.png?alt=media&token=55c3fb6a-569b-41cf-b994-b6d657424695",
                    },
                  ].map((product) => (
                    <ProductItem key={product.name}>
                      <Link to={product.href}>
                        <ProductImage src={product.imgSrc} alt={product.name} />
                        <ItemName>{product.name}</ItemName>
                        <Price>{product.price}</Price>
                      </Link>
                    </ProductItem>
                  ))}
                </ListProduct>
              </ProductSection>
              <Paging>
                <Pagination
                  current={current}
                  onChange={onChange}
                  total={50}
                  itemRender={(page, type, originalElement) => {
                    if (type === "page") {
                      if (page === 1) {
                        return originalElement;
                      } else {
                        return (
                          <PageLink href={`/page-${page}`}>{page}</PageLink>
                        );
                      }
                    }
                    return originalElement;
                  }}
                />
              </Paging>
            </CategoryContent>
          </Content> */}
        </Wrap>
      </Container>
    </Section>
  );
};

export default AllProduct;
