import { useState } from "react";
// import { Pagination } from 'antd';
 
import { Breadcrumb } from "antd";
import styled from "styled-components";
import {
  Body,
  Section,
  Container,
  Wrap,
  ProductDotGrid,
  Wrapper,
  ImageContainer,
  OuterThumb,
  ThumbnailImage,
  Item,
  OuterMain,
  MainImage,
  ProductDetail,
  Entry,
  Heading,
  Title,
  ProductRating,
  ProductMetal,
  ProductInfo,
  RingSizeContainer,
  RingSizeSelect,
  RingSizeHelp,
  ProductPrice,
  SelectButton,
  SelectionTitle,
  SelectName,
  ArrowIcon,
  ButtonContainer,
  Button,
  Shipping,
  ShippingList,
  ShippingItem,
  CurrentPrice,
  BeforePrice,
  Discount,
  Contain,
  Tabbed,
  ProductAbout,
  TextBlock,
  DotGrid,
  ListBlock,
  Review,
  ProductSection,
  ListProduct,
  ProductItem,
  ProductImage,
  ItemName,
  Price,
  AddCartButton,
  AddLink,
  HeadingTitle,
} from "./Reply.styled";
import {
  StarFilled,
  RightOutlined,
  GiftFilled,
  HomeFilled,
} from "@ant-design/icons";

const CustomBreadcrumb = styled(Breadcrumb)`
  margin-left: 175px;
  padding-top: 20px;
`;



const Reply = () => {
  const [mainImage, setMainImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Fdetails1.png?alt=media&token=c27d4467-63b4-4eec-9d09-6cb865e6d7d9"
  );
  const [selectedThumb, setSelectedThumb] = useState(0);

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setSelectedThumb(index);
  };

  const [activeTab, setActiveTab] = useState("product-description");

  const showTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  //Reply
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [savedReply, setSavedReply] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleReply = () => {
    setShowReply(true);
    setIsEditing(false);
    setReplyText(""); // Đặt lại nội dung textarea khi bấm "Reply"
  };

  const handleSend = () => {
    if (replyText.trim()) {
      setSavedReply(replyText);
      setShowReply(false);
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setShowReply(true);
    setIsEditing(true);
    setReplyText(savedReply || "");
  };

  const handleRemove = () => {
    setSavedReply(null);
    setReplyText(""); // Đặt lại nội dung textarea khi bấm "Remove"
  };

  const [showReply1, setShowReply1] = useState(false);
  const [replyText1, setReplyText1] = useState("");
  const [savedReply1, setSavedReply1] = useState<string | null>(null);
  const [isEditing1, setIsEditing1] = useState(false);

  const handleReply1 = () => {
    setShowReply1(true);
    setIsEditing1(false);
    setReplyText1(""); // Đặt lại nội dung textarea khi bấm "Reply"
  };

  const handleSend1 = () => {
    if (replyText1.trim()) {
      setSavedReply1(replyText1);
      setShowReply1(false);
      setIsEditing1(false);
    }
  };

  const handleEdit1 = () => {
    setShowReply1(true);
    setIsEditing1(true);
    setReplyText1(savedReply1 || "");
  };

  const handleRemove1 = () => {
    setSavedReply1(null);
    setReplyText1(""); // Đặt lại nội dung textarea khi bấm "Remove"
  };

  const [showReply2, setShowReply2] = useState(false);
  const [replyText2, setReplyText2] = useState("");
  const [savedReply2, setSavedReply2] = useState<string | null>(null);
  const [isEditing2, setIsEditing2] = useState(false);

  const handleReply2 = () => {
    setShowReply2(true);
    setIsEditing2(false);
    setReplyText2(""); // Đặt lại nội dung textarea khi bấm "Reply"
  };

  const handleSend2 = () => {
    if (replyText2.trim()) {
      setSavedReply2(replyText2);
      setShowReply2(false);
      setIsEditing2(false);
    }
  };

  const handleEdit2 = () => {
    setShowReply2(true);
    setIsEditing2(true);
    setReplyText2(savedReply2 || "");
  };

  const handleRemove2 = () => {
    setSavedReply2(null);
    setReplyText2(""); // Đặt lại nội dung textarea khi bấm "Remove"
  };

  
  return (
    <Body>
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
              href: "/all",
            },
            {
              title: "Ring - #012345",
            },
          ]}
        />
      </div>
      <Section>
        <Container>
          <Wrap>
            <ProductDotGrid>
              <Wrapper>
                <ImageContainer>
                  <OuterThumb>
                    <ThumbnailImage>
                      {[
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Fdetails1.png?alt=media&token=c27d4467-63b4-4eec-9d09-6cb865e6d7d9",
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Fdetails2.png?alt=media&token=b8c3861d-0fa9-45b5-8c8c-9ceeaaa88b23",
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Fdetails3.png?alt=media&token=e11a918d-ff23-4bc3-9516-055451a556af",
                        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Fdetails4.png?alt=media&token=6f35fa24-ea42-4fba-9840-8e693322788c",
                      ].map((src, index) => (
                        <Item
                          key={index}
                          className={selectedThumb === index ? "selected" : ""}
                          onClick={() => changeImage(src, index)}
                        >
                          <img src={src} alt={`Thumb ${index + 1}`} />
                        </Item>
                      ))}
                    </ThumbnailImage>
                  </OuterThumb>
                  <OuterMain>
                    <MainImage>
                      <img id="mainImage" src={mainImage} alt="Main" />
                    </MainImage>
                  </OuterMain>
                </ImageContainer>
              </Wrapper>
            </ProductDotGrid>
            <ProductDetail>
              <Entry>
                <Heading>
                  <Title>Three-Stone Trapezoid Sidestone Diamond Ring</Title>
                  <ProductRating>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </ProductRating>
                </Heading>
                <ProductMetal>
                  <span className="fill">Metal Type:</span>
                  <div className="wrap">
                    <button className="metal-button white selected">
                      <span>14k</span>
                    </button>
                    <button className="metal-button yellow">
                      <span>14k</span>
                    </button>
                    <button className="metal-button rose">
                      <span>14k</span>
                    </button>
                    <button className="metal-button platinum">
                      <span>Pt</span>
                    </button>
                  </div>
                </ProductMetal>
                <ProductInfo>
                  <div className="wrap">
                    <div className="info-box">SI2</div>
                    <div className="info-box">0.16carat</div>
                    <div className="info-box">1.80mm</div>
                  </div>
                </ProductInfo>
                <RingSizeContainer>
                  <RingSizeSelect name="ring-size" id="ring-size">
                    <option value="" disabled selected>
                      Ring Size
                    </option>
                    {[...Array(13).keys()].map((_, i) => (
                      <option key={i + 8} value={i + 8}>
                        {i + 8}
                      </option>
                    ))}
                  </RingSizeSelect>
                  <RingSizeHelp href="#">Ring size help</RingSizeHelp>
                </RingSizeContainer>
                <ProductPrice>
                  <div className="product-group">
                    <div className="product-price">
                      <CurrentPrice>$37.50</CurrentPrice>
                      <div className="wrap">
                        <BeforePrice>$50.00</BeforePrice>
                        <Discount>-25%</Discount>
                      </div>
                    </div>
                  </div>
                </ProductPrice>
              </Entry>
              <div className="outlet">
                <SelectButton>
                  <div>
                    <SelectionTitle>Select Voucher</SelectionTitle>
                    <SelectName>Anniversary Gifts 30% </SelectName>
                  </div>
                  <ArrowIcon>
                    <RightOutlined />
                  </ArrowIcon>
                </SelectButton>
                <SelectButton>
                  <div>
                    <SelectionTitle>Select Payment Method</SelectionTitle>
                    <SelectName>Payment via MoMo e-wallet</SelectName>
                  </div>
                  <ArrowIcon>
                    <RightOutlined />
                  </ArrowIcon>
                </SelectButton>
                <ButtonContainer>
                  <Button>ADD TO CART</Button>
                  <Button>CHECKOUT</Button>
                </ButtonContainer>
                <Shipping>
                  <ShippingList>
                    <ShippingItem>
                      <GiftFilled />
                      <span>Free shipping & return</span>
                    </ShippingItem>
                    <ShippingItem>
                      <HomeFilled />
                      <span>Estimate delivery:</span>
                      <span className="delivery">01 - 07 Jan, 2024</span>
                    </ShippingItem>
                  </ShippingList>
                </Shipping>
              </div>
            </ProductDetail>
          </Wrap>
        </Container>
      </Section>
      <Contain>
        <div className="tabbed">
          <Tabbed>
            <nav>
              <ul className="wrapper">
                <li
                  id="tab-product-description"
                  className={
                    activeTab === "product-description" ? "active-tab" : ""
                  }
                >
                  <a href="#0" onClick={() => showTab("product-description")}>
                    <span>Product detail</span>
                  </a>
                </li>
                <li
                  id="tab-product-review"
                  className={activeTab === "product-review" ? "" : ""}
                >
                  <a href="#0" onClick={() => showTab("product-review")}>
                    <span>Reviews</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Tabbed>
          <ProductAbout
            id="product-description"
            className={activeTab === "product-description" ? "active" : "hide"}
          >
            {/* Product detail content */}
            <TextBlock>
              <h3>Three-Stone Trapezoid Sidestone Diamond Ring</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt
                accusamus possimus ex voluptas, perferendis reiciendis?
              </p>
              <p>
                Dolor sit amet consectetur adipisicing elit. Esse nobis aperiam
                aliquam alias fuga earum neque iste ipsa nesciunt accusamus
                possimus ex voluptas.
              </p>
            </TextBlock>
            <DotGrid>
              <div className="wrapper2">
                <ListBlock>
                  <h4>What is this?</h4>
                  <ul>
                    <li>ID Number: 501410r14</li>
                    <li>Width: 2.00mm</li>
                    <li>Quantity: 16</li>
                    <li>Shape: Round</li>
                    <li>Total Carat (Average): 0.24</li>
                    <li>Color: I</li>
                    <li>Clarity: SI2</li>
                    <li>Setting Type: Pave </li>
                  </ul>
                </ListBlock>
                <ListBlock>
                  <h4>What makes our product unique?</h4>
                  <ul>
                    <li>New style and pretty design.</li>
                    <li>
                      Our effort to design beautiful jewelry in top quality.
                    </li>
                  </ul>
                </ListBlock>
                <ListBlock>
                  <h4>About?</h4>
                  <ul>
                    <li>Lorem ipsum.</li>
                    <li>Dolor sit amet consectetur adipisicing elit.</li>
                  </ul>
                </ListBlock>
              </div>
            </DotGrid>
          </ProductAbout>
          <ProductAbout
            id="product-review"
            className={activeTab === "product-review" ? "active" : "hide"}
          >
            {/* Review content */}
            <Review>
              <div className="head-review">
                <div className="sum-rating">
                  <strong>5.0</strong>
                  <span>3 reviews</span>
                </div>
                <button className="view-all-button">All</button>
                {/* <Pagination
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
                   }}/> */}
              </div>
              <div className="body-review">
                <div className="profile">
                  <div className="thumb-name">
                    <div className="image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt1.jpg?alt=media&token=fda03330-bebc-42a9-a7aa-568f2f9cdb9f"
                        alt=""
                      />
                    </div>
                    <div className="grouping">
                      <div className="name">Olivia Williams</div>
                      <div className="rating">
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="comment">
                    <strong>Awesome Product</strong>
                    <p className="grey-color">
                      Absolutely love my new diamond ring! It's elegant,
                      timeless, and the perfect addition to my jewelry
                      collection.
                    </p>
                    <div className="date grey-color">
                      On November 10, 2021
                      {!savedReply && !showReply && (
                        <button
                          onClick={handleReply}
                          style={{ marginLeft: "10px" }}
                        >
                          Reply
                        </button>
                      )}
                    </div>
                    {savedReply && !showReply && (
                      <div className="reply">
                        <strong>Seller's Feedback</strong>
                        <p className="grey-color">{savedReply}</p>
                        <div className="date grey-color">
                          On November 10, 2021
                          <button
                            onClick={handleEdit}
                            style={{ marginLeft: "10px" }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={handleRemove}
                            style={{ marginLeft: "10px" }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {(showReply || isEditing) && (
                    <div className="reply">
                      <strong>Seller's Feedback</strong>
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="grey-color"
                      />
                      <div style={{ marginTop: "15px" }}>
                        <button
                          onClick={handleSend}
                          style={{
                            float: "right",
                            marginLeft: "5px",
                            marginTop: "15px",
                          }}
                          className="send"
                        >
                          {isEditing ? "Save" : "Send"}
                        </button>
                        <button
                          onClick={() => {
                            setShowReply(false);
                            setIsEditing(false);
                          }}
                          style={{
                            float: "right",
                            marginLeft: "5px",
                            marginTop: "15px",
                          }}
                          className="cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="profile">
                  <div className="thumb-name">
                    <div className="image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt1.jpg?alt=media&token=fda03330-bebc-42a9-a7aa-568f2f9cdb9f"
                        alt=""
                      />
                    </div>
                    <div className="grouping">
                      <div className="name">Phoenix Knight</div>
                      <div className="rating">
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="comment">
                    <strong>Awesome Product</strong>
                    <p className="grey-color">
                      This diamond ring is truly magnificent and captivating,
                      capturing attention with its radiant brilliance and
                      undeniable allure.
                    </p>
                    <div className="date grey-color">
                      On November 10, 2021
                      {!savedReply1 && !showReply1 && (
                        <button
                          onClick={handleReply1}
                          style={{ marginLeft: "10px" }}
                        >
                          Reply
                        </button>
                      )}
                    </div>
                    {savedReply1 && !showReply1 && (
                      <div className="reply">
                        <strong>Seller's Feedback</strong>
                        <p className="grey-color">{savedReply1}</p>
                        <div className="date grey-color">
                          On November 10, 2021
                          <button
                            onClick={handleEdit1}
                            style={{ marginLeft: "10px" }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={handleRemove1}
                            style={{ marginLeft: "10px" }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {(showReply1 || isEditing1) && (
                    <div className="reply">
                      <strong>Seller's Feedback</strong>
                      <textarea
                        value={replyText1}
                        onChange={(e) => setReplyText1(e.target.value)}
                        className="grey-color"
                      />
                      <div style={{ marginTop: "15px" }}>
                        <button
                          onClick={handleSend1}
                          style={{
                            float: "right",
                            marginLeft: "5px",
                            marginTop: "15px",
                          }}
                          className="send"
                        >
                          {isEditing1 ? "Save" : "Send"}
                        </button>
                        <button
                          onClick={() => {
                            setShowReply1(false);
                            setIsEditing1(false);
                          }}
                          style={{
                            float: "right",
                            marginLeft: "5px",
                            marginTop: "15px",
                          }}
                          className="cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="profile">
                  <div className="thumb-name">
                    <div className="image">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Details%2Favt1.jpg?alt=media&token=fda03330-bebc-42a9-a7aa-568f2f9cdb9f"
                        alt=""
                      />
                    </div>
                    <div className="grouping">
                      <div className="name">Serena Sterling</div>
                      <div className="rating">
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                        <StarFilled
                          style={{ color: "#D8A25A", fontSize: "16px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="comment">
                    <strong>Awesome Product</strong>
                    <p className="grey-color">
                      The diamond on this ring has excellent clarity and
                      radiance, capturing and refracting light in a mesmerizing
                      display of brilliance and fire.
                    </p>
                    <div className="date grey-color">
                      On November 10, 2021
                      {!savedReply2 && !showReply2 && (
                        <button
                          onClick={handleReply2}
                          style={{ marginLeft: "10px" }}
                        >
                          Reply
                        </button>
                      )}
                    </div>
                    {savedReply2 && !showReply2 && (
                      <div className="reply">
                        <strong>Seller's Feedback</strong>
                        <p className="grey-color">{savedReply2}</p>
                        <div className="date grey-color">
                          On November 10, 2021
                          <button
                            onClick={handleEdit2}
                            style={{ marginLeft: "10px" }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={handleRemove2}
                            style={{ marginLeft: "10px" }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {(showReply2 || isEditing2) && (
                    <div className="reply">
                      <strong>Seller's Feedback</strong>
                      <textarea
                        value={replyText2}
                        onChange={(e) => setReplyText2(e.target.value)}
                        className="grey-color"
                      />
                      <div style={{ marginTop: "15px" }}>
                        <button
                          onClick={handleSend2}
                          style={{
                            float: "right",
                            marginLeft: "5px",
                            marginTop: "15px",
                          }}
                          className="send"
                        >
                          {isEditing2 ? "Save" : "Send"}
                        </button>
                        <button
                          onClick={() => {
                            setShowReply2(false);
                            setIsEditing2(false);
                          }}
                          style={{
                            float: "right",
                            marginLeft: "5px",
                            marginTop: "15px",
                          }}
                          className="cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Review>
          </ProductAbout>
        </div>
      </Contain>
      <ProductSection>
        <HeadingTitle>
          <h2>SAME BRAND</h2>
        </HeadingTitle>
        <ListProduct>
          {[
            {
              name: "Petite Pavé Leaf Halo Diamond Engagement Ring",
              price: "$13.99",
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct1.png?alt=media&token=8c409126-be7d-4d54-8475-3e3539ad9743",
            },
            {
              name: "Shank Double Pavé Diamond Engagement Ring",
              price: "$16.99",
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct2.png?alt=media&token=fa0d4535-33eb-4fcc-8a67-5ed310fd3f7f",
            },
            {
              name: "Shank Triple Pavé Diamond Engagement Ring",
              price: "$19.99",
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct3.png?alt=media&token=29b58243-7981-4e8d-a6b3-2c964de6ab7d",
            },
          ].map((product) => (
            <ProductItem key={product.name}>
              <ProductImage src={product.imgSrc} alt={product.name} />
              <ItemName>{product.name}</ItemName>
              <Price>{product.price}</Price>
              <AddCartButton>
                <AddLink href="#">Add To Cart</AddLink>
              </AddCartButton>
            </ProductItem>
          ))}
        </ListProduct>
      </ProductSection>
      <ProductSection>
        <HeadingTitle>
          <h2>RECENTLY VIEWED</h2>
        </HeadingTitle>
        <ListProduct>
          {[
            {
              name: "Shank Double Lave Diamond Engagement Ring",
              price: "$17.00",
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct7.png?alt=media&token=6da53894-3b1f-47f6-8c95-e073e76c0dc7",
            },
            {
              name: "Stone Trapezoid Sidestone Diamond Ring",
              price: "$23.00",
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct8.png?alt=media&token=50ddd742-2448-4e09-9294-d27c6d986543",
            },
            {
              name: "Six-Prong Hand-Engraved Diamond Engagement Ring",
              price: "$13.00",
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Product%2Fproduct9.png?alt=media&token=55c3fb6a-569b-41cf-b994-b6d657424695",
            },
          ].map((product) => (
            <ProductItem key={product.name}>
              <ProductImage src={product.imgSrc} alt={product.name} />
              <ItemName>{product.name}</ItemName>
              <Price>{product.price}</Price>
              <AddCartButton>
                <AddLink href="#">Add To Cart</AddLink>
              </AddCartButton>
            </ProductItem>
          ))}
        </ListProduct>
      </ProductSection>
    </Body>
  );
};


export default Reply;
