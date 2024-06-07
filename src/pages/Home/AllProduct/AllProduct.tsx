import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';
import { Pagination } from 'antd';
import styled from 'styled-components';
import {  Breadcrumb  } from 'antd';

import {
  Section,
  Container,
  Wrap,
  Heading,
  Content,
  Sidebar,
  SidebarWrap,
  SidebarContent,
  SidebarTitle,
  Widget,
  Summary,
  Accord,
  Wapper,
  ListItem,
  CategoryContent,
  Sorter,
  Left,
  ProductSection,
  ListProduct,
  ProductItem,
  ProductImage,
  ItemName,
  Price,
  AddCartButton,
  AddLink,
  PageLink,
  Paging

} from './AllProduct.styled';
import { CaretDownOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const CustomBreadcrumb = styled(Breadcrumb)`
margin-left: 175px;
padding-top: 20px;
`;


const AllProduct: React.FC = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
    window.history.pushState({}, '', `/page-${page}`); // Cập nhật URL bằng JavaScript
  };
  return (
    
    <Section>
      <div>
      <CustomBreadcrumb
        separator=">"
        items={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Round Ring',
            href: '/product',
          },
          {
            title: 'All Product',
          },
          
        ]}
      />
    </div>
      <Container className="wide">
        <Wrap>
          <Heading>
            <h2>ALL PRODUCTS PAGE</h2>
          </Heading>
          <Content>
            <Sidebar id="sidebar-filter">
              <SidebarWrap>
                <SidebarContent>
                  <SidebarTitle>Filter</SidebarTitle>
                  <Widget>
                    <Summary>
                      <input type="checkbox" name="cats" id="aaa" defaultChecked />
                      <label htmlFor="aaa">
                        <span>Shapes</span>
                        <CaretDownOutlined/>
                      </label>
                      <Accord className="list-block scrollto">
                        <Wapper className="initial">
                          {['Round', 'Princess', 'Cushion', 'Oval', 'Emerald', 'Pear', 'Asscher', 'Heart', 'Radiant', 'Marquise'].map(shape => (
                            <ListItem key={shape}>
                              <a href="">{shape}</a>
                            </ListItem>
                          ))}
                        </Wapper>
                      </Accord>
                    </Summary>
                  </Widget>
                  <Widget>
                    <Summary>
                      <input type="checkbox" name="cats" id="aac" defaultChecked />
                      <label htmlFor="aac">
                        <span>Classification</span>
                        <CaretDownOutlined/>
                      </label>
                      <Accord className="list-block scrollto">
                        <Wapper className="initial">
                          {['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Anklets', 'Bangles', 'Pendants'].map(classification => (
                            <ListItem key={classification}>
                              <a href="">{classification}</a>
                            </ListItem>
                          ))}
                        </Wapper>
                      </Accord>
                    </Summary>
                  </Widget>
                  <Widget>
                    <Summary>
                      <input type="checkbox" name="cats" id="aad" defaultChecked />
                      <label htmlFor="aad">
                        <span>Metals</span>
                        <CaretDownOutlined/>
                      </label>
                      <Accord className="list-block scrollto">
                        <Wapper className="initial">
                          {['White Gold', 'Yellow Gold', 'Rose Gold', 'Platinum'].map(metal => (
                            <ListItem key={metal}>
                              <a href="">{metal}</a>
                            </ListItem>
                          ))}
                        </Wapper>
                      </Accord>
                    </Summary>
                  </Widget>
                </SidebarContent>
              </SidebarWrap>
            </Sidebar>
            <CategoryContent>
              <Sorter>
                <a href="" className="menu-trigger"><i></i> </a>
                <Left>
                  <span className="grey-color">Showing 9 of 35 results</span>
                </Left>
              </Sorter>
              <ProductSection id="products">
                <ListProduct>
                  {[
                    { href: '/details', name: 'Petite Pavé Leaf Halo Diamond Engagement Ring', price: '$13.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct6.png?alt=media&token=36f7203c-a296-48b0-8ad2-4bfb3105d102' },
                    { href: '#', name: 'Shank Double Pavé Diamond Engagement Ring', price: '$16.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct13.png?alt=media&token=f76015c8-b828-438c-b99a-57f0938e3aaf' },
                    { href: '#', name: 'Shank Triple Pavé Diamond Engagement Ring', price: '$19.99', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct3.png?alt=media&token=29b58243-7981-4e8d-a6b3-2c964de6ab7d' },
                    { href: '#', name: 'Graduated Milgrain Diamond Engagement Ring', price: '$11.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct4.png?alt=media&token=ed7b509a-55f7-4b14-a6c6-c46107d25acb' },
                    { href: '#', name: 'Six-Prong Hand-Engraved Diamond Engagement Ring', price: '$13.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct5.png?alt=media&token=fcedf915-c5f5-4215-9226-7f8088c4102e' },
                    { href: '#', name: 'Tapered Baguette Diamond Engagement Ring', price: '$15.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct1.png?alt=media&token=8c409126-be7d-4d54-8475-3e3539ad9743' },
                    { href: '#', name: 'Shank Double Lave Diamond Engagement Ring', price: '$17.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct7.png?alt=media&token=6da53894-3b1f-47f6-8c95-e073e76c0dc7' },
                    { href: '#', name: 'Stone Trapezoid Sidestone Diamond Ring', price: '$23.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct8.png?alt=media&token=50ddd742-2448-4e09-9294-d27c6d986543' },
                    { href: '#', name: 'Six-Prong Hand-Engraved Diamond Engagement Ring', price: '$13.00', imgSrc: 'https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct9.png?alt=media&token=55c3fb6a-569b-41cf-b994-b6d657424695' }
                  ].map(product => (
                    <ProductItem key={product.name}>
                       <Link to={product.href}>
                        <ProductImage src={product.imgSrc} alt={product.name} />
                        <ItemName>{product.name}</ItemName>
                        <Price>{product.price}</Price>
                        </Link>
                      <AddCartButton>
                      <AddLink href="#">Add To Cart</AddLink>
                      </AddCartButton>
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
                    if (type === 'page') {
                    if (page === 1) {
                       return originalElement;
                    } else {
                        return <PageLink href={`/page-${page}`}>{page}</PageLink>;
                   }
                    }
                  return originalElement;
                   }}
      />
    </Paging>
            </CategoryContent>
          </Content>
        </Wrap>
      </Container>
    </Section>
  );
};

export default AllProduct;
