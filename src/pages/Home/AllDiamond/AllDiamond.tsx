// import React, { useEffect, useState } from "react";
// import { Section, Heading, List, FAQs, LeftFAQ, CustomBreadcrumb, StyledCollapse, StyledPagination } from "./AllDiamond.styled";
// import { Card, Col, Row, Typography } from "antd";
// import { HeartOutlined, HeartFilled } from "@ant-design/icons";
// import { showAllDiamond } from "@/services/diamondAPI";
// import FilterSortDiamond from "@/components/FilterSortDiamond/FilterSortDiamond";

// import { diamonds } from "../shared/ListOfDiamond";

// import { labels, texts } from "./AllDiamond.props";
// import { useDocumentTitle } from "@/hooks";
// import Link from '@/components/Link';

// const { Title, Text } = Typography;

// const items = texts.map((text, index) => ({
//   key: (index + 1).toString(),
//   label: labels[index],
//   children: <p>{text}</p>,
// }));
// const onChange = (key: any) => {
//   console.log(key);
// };

// const AllDiamond: React.FC = () => {
//   useDocumentTitle('Diamond | Aphromas Diamond')

//   const [filteredDiamonds, setFilteredDiamonds] = useState(diamonds);
//   console.log(setFilteredDiamonds);
//   const [wishList, setWishList] = useState<string[]>([]);

//   const toggleWishList = (productId: string) => {
//     setWishList((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 8;

//   const handleChangePage = (page: any) => {
//     setCurrentPage(page);
//   };

//   const [diamond, setDiamond] = useState();
//   useEffect(() => {
//     async () => {
//       const { data } = await showAllDiamond();
//       setDiamond(data.data);
//       console.log(diamond);
//     };
//   }, []);

//   return (
//     <Section>
//       <div>
//         <CustomBreadcrumb
//           separator=">"
//           items={[
//             {
//               title: "Home",
//               href: "/",
//             },
//             {
//               title: "All Diamond",
//             },
//           ]}
//         />
//       </div>
//       <Heading>
//         <h2>ALL DIAMONDS</h2>
//       </Heading>
//       <FilterSortDiamond />
//       <hr
//         style={{
//           maxWidth: "1400px",
//           margin: "20px auto",
//           border: "1px solid rgba(21, 21, 66, 0.3)",
//         }}
//       />
//       <List>
//         <Row gutter={[16, 16]}>
//           {filteredDiamonds.map((diamond) => (
//             <Col key={diamond.id} span={6}>
//               <Link to={`/diamond/${diamond.id}`} underline zoom scroll>
//               <Card
//                 style={{ borderRadius: "0" }}
//                 hoverable
//                 className="product-card"
//                 cover={
//                   <>
//                     <img
//                       style={{ borderRadius: "0" }}
//                       src={diamond.images[0]}
//                       alt={diamond.name}
//                       className="product-image"
//                       onMouseOut={(e) => (e.currentTarget.src = diamond.images[0])}
//                     />
//                     {diamond.salePrice && (
//                       <div className="sale-badge">SALE</div>
//                     )}
//                   </>
//                 }
//               >
//                 <div className="product-info">
//                   <Title level={4} className="product-name">
//                     {diamond.name}
//                     {wishList.includes(diamond.id) ? (
//                       <HeartFilled
//                         className="wishlist-icon"
//                         onClick={() => toggleWishList(diamond.id)}
//                       />
//                     ) : (
//                       <HeartOutlined
//                         className="wishlist-icon"
//                         onClick={() => toggleWishList(diamond.id)}
//                       />
//                     )}
//                   </Title>
//                   <div className="price-container">
//                     <Text className="product-price">
//                       ${diamond.salePrice ? diamond.salePrice : diamond.price}
//                     </Text>
//                     {diamond.salePrice && (
//                       <Text delete className="product-sale-price">
//                         ${diamond.price}
//                       </Text>
//                     )}
//                   </div>
//                 </div>
//               </Card>
//               </Link>
//             </Col>
//           ))}
//         </Row>
//       </List>
//       <StyledPagination
//         current={currentPage}
//         pageSize={pageSize}
//         total={filteredDiamonds.length}
//         onChange={handleChangePage}
//       />
//       <FAQs>
//         <LeftFAQ>
//           <h2>FAQs ABOUT PRODUCT</h2>
//         </LeftFAQ>
//         <StyledCollapse
//           items={items}
//           defaultActiveKey={["1"]}
//           onChange={onChange}
//         />
//       </FAQs>
//     </Section>
//   );
// };

// export default AllDiamond;
import React, { useEffect, useState } from "react";
import {
  Section,
  Heading,
  List,
  FAQs,
  LeftFAQ,
  CustomBreadcrumb,
  StyledCollapse,
  // StyledPagination,
} from "./AllDiamond.styled";
import { Card, Col, Row, Typography } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import FilterSortDiamond from "@/components/FilterSortDiamond/FilterSortDiamond";
import { labels, texts } from "./AllDiamond.props";
import { useDocumentTitle } from "@/hooks";
import { showAllDiamond } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const { Title, Text } = Typography;

const items = texts.map((text, index) => ({
  key: (index + 1).toString(),
  label: labels[index],
  children: <p>{text}</p>,
}));

const onChange = (key: any) => {
  console.log(key);
};

const AllDiamond: React.FC = () => {
  useDocumentTitle("Diamond | Aphromas Diamond");

  const [diamonds, setDiamonds] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [wishList, setWishList] = useState<string[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageSize] = useState(12); // Set your desired page size
  const location = useLocation();
  // const navigate = useNavigate();

  console.log(location);

  // const [diamondData, setDiamondData] = useState([]);

  const toggleWishList = (productId: string) => {
    setWishList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // const handleChangePage = (page: any) => {
  //   setCurrentPage(page);
  // };

  // const handleChangePage = (page: number) => {
  //   setCurrentPage(page);
  //   navigate(`?page=${page}`);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await showAllDiamond();
        console.log("API response:", response.data.data);

        if (response && response.data && Array.isArray(response.data.data)) {
          const fetchedDiamonds = response.data.data
            .filter((item: any) => item.IsActive === true)
            .map((item: any) => ({
              id: item.DiamondID,
              name: item.Name,
              cut: item.Cut,
              price: item.Price,
              color: item.Color,
              description: item.Description,
              isActive: item.IsActive,
              clarity: item.Clarity,
              cutter: item.Cutter,
              discountPrice: item.DiscountPrice,
              images: item.usingImage.map((image: any) => ({
                id: image.UsingImageID,
                name: image.Name,
                url: getImage(image.UsingImageID),
              })),
            }));

          console.log(fetchedDiamonds);

          setDiamonds(fetchedDiamonds);
          setLoading(false);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching diamonds:", error);
      }
    };
    console.log(loading);

    fetchData();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await showAllDiamond(); // Call the function to get the promise
  //       console.log("API response:", response.data.data);

  //       if (response && response.data && Array.isArray(response.data.data)) {
  //         const fetchedDiamonds = response.data.data.map((item: any) => ({
  //           id: item.DiamondID,
  //           name: item.Name,
  //           cut: item.Cut,
  //           price: item.Price,
  //           color: item.Color,
  //           description: item.Description,
  //           isActive: item.IsActive,
  //           clarity: item.Clarity,
  //           images: item.usingImage.map((image: any) => ({
  //             id: image.UsingImageID,
  //             name: image.Name,
  //             url: getImage(image.UsingImageID),
  //           })),
  //         }));

  //         console.log(fetchedDiamonds);

  //         setDiamonds(fetchedDiamonds);
  //         setLoading(false);
  //       } else {
  //         console.error("Unexpected API response format:", response.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching diamonds:", error);
  //     }
  //   };

  //   const queryParams = new URLSearchParams(location.search);
  //   const page = queryParams.get("page");
  //   if (page) {
  //     setCurrentPage(Number(page));
  //   }

  //   fetchData();
  // }, [currentPage, location.search]);

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
      <FilterSortDiamond />
      <hr
        style={{
          maxWidth: "1400px",
          margin: "20px auto",
          border: "1px solid rgba(21, 21, 66, 0.3)",
        }}
      />
      <List>
        <Row gutter={[16, 16]}>
          {diamonds.map((diamond) => (
            <Col key={diamond.id} span={6}>
              <Card
                style={{ borderRadius: "0" }}
                hoverable
                className="product-card"
                cover={
                  <>
                    <Link to={`/diamond/${diamond.id}`}>
                      <img
                        style={{ borderRadius: "0" }}
                        src={
                          diamond.images && diamond.images.length > 0
                            ? diamond.images[0].url
                            : "/default-image.jpg"
                        }
                        alt={diamond.name}
                        className="product-image"
                        onMouseOut={(e) =>
                          (e.currentTarget.src =
                            diamond.images && diamond.images.length > 0
                              ? diamond.images[0].url
                              : "/default-image.jpg")
                        }
                      />
                    </Link>
                    {diamond.discountPrice && (
                      <div className="sale-badge">SALE</div>
                    )}
                  </>
                }
              >
                <div className="product-info">
                  <Title level={4} className="product-name">
                    <Link to={`/diamond/${diamond.id}`}>{diamond.name}</Link>
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
                      $
                      {diamond.discountPrice &&
                      diamond.discountPrice !== diamond.price
                        ? diamond.discountPrice
                        : diamond.price}
                    </Text>
                    {diamond.discountPrice &&
                      diamond.discountPrice !== diamond.price && (
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
      {/* <StyledPagination
        current={currentPage}
        pageSize={pageSize}
        total={diamonds.length}
        onChange={handleChangePage}
      /> */}
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
