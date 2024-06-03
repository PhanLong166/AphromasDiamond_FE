import styled from 'styled-components';
import { theme } from "../../../themes";


export const Body = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: ${theme.color.white};;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

export const ProductDotGrid = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const OuterThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ThumbnailImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.selected {
    background-color: ${theme.color.secondary};
    border-radius: 8px;
    border: solid 2px ${theme.color.secondary};;
  }
`;

export const OuterMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 480px;
  overflow: hidden;
  background-color: ${theme.color.secondary};
  border-radius: 8px;
  img {
    width: 465px;
    height: 480px;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 20px;
  border-radius: 8px;
  padding-top:0;
`;

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Heading = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${theme.color.primary};;
  font-size: 24px;
  font-family: "Playfair Display", serif;
  padding-bottom: 8px;
`;

export const ProductRating = styled.span`
  color: #D8A25A;
  font-size: 20px;
`;

export const ProductMetal = styled.div`

.wrap {
  display: flex;
  gap: 10px; /* Khoảng cách giữa các nút */
}

  span {
    color: ${theme.color.primary};;
    font-family: "Crimson Text", serif;
    font-weight: 600;
    font-size: 14px;
   
  }

  .metal-button {
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px; 
    border: none;
    cursor: pointer; 
}

button.white {
  background-color: #d9d9d9;
}

button.yellow {
  background-color: #D8A25A;
}

button.rose {
  background-color: #F4CFC6;
}

button.platinum {
  background-color: #696969;
}

button.selected,
button:hover:not(.selected) {
    box-shadow: inset 0 0 0 4px #fff;
}

`;

export const ProductInfo = styled.div`
span {
  color: ${theme.color.primary};;
  font-family: "Crimson Text", serif;
  font-weight: 600;
  font-size: 14px;
 
}

.wrap {
  display: flex;
  gap: 10px; /* Khoảng cách giữa các hộp */
}

.info-box {
  width: 60px;  
  height: 35px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px; 
  border: 1px solid #d9d9d9;
  border-radius: 10px; 
  background-color: #d9d9d9; 
  color: ${theme.color.primary};; 
  opacity: .8;
}


`;

export const RingSizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RingSizeSelect = styled.select`
  padding: 8px 20px 8px 5px;
  font-size: 12px;
  color: ${theme.color.primary};;
  opacity: .7;
  border-radius: 10px;
`;

export const RingSizeHelp = styled.a`
  text-decoration: none;
  color: ${theme.color.primary};;
  font-size: 12px;
  font-weight: bold;
`;

export const SelectButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
border: 1px solid #ccc;
border-radius: 5px;
margin-bottom: 5px;
cursor: pointer;
width: 520px;
background-color: ${theme.color.secondary};;
border-radius: 8px;
`;

export const SelectionTitle = styled.h5`
  margin: 0;
  font-size: 14px;
  text-align: left;
  font-family: "Playfair Display", sans-serif;
  color: ${theme.color.primary};;
`;

export const SelectName = styled.p`
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: #45413E;
  font-family: "Poppins", sans-serif;
  padding-left: 12px;
`;

export const ArrowIcon = styled.span`
  margin-left: 10px;
  color:  ${theme.color.primary};
  i {
    font-size: 25px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 94%;
  gap: 10px;
  margin-left: 0;
  margin-top: 10px;
`;

export const Button = styled.button`
flex-grow: 1;
padding: 20px;
text-align: center;
background-color: ${theme.color.primary};;
color: ${theme.color.white};;
border: none;
cursor: pointer;
border-radius: 8px;
font-family: "Poppins" sans-serif;
font-weight: bold;
`;

export const Shipping = styled.div`
margin-top: 10px;

  ul {
    padding-left: 0;
  }
`;

export const ShippingList = styled.ul`
  list-style: none;
`;

export const ShippingItem = styled.li`
  display: flex;
  align-items: center;
  span {
    color: ${theme.color.primary};;
    font-family: "Crimson Text", sans-serif;
    font-size: 14px;
    font-weight: bold;
    padding-left: 8px;
  }
  .delivery {
    font-weight: 500;
  }
`;

export const ProductPrice = styled.span`

margin-bottom: 15px;
.product-group {
  display: flex;
  justify-content: space-between;
}

.product-price {
  display: flex;
  align-items: center;
}

.product-price .wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
}

.wrap::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12px;
    height: 100%;
    width: 1.5px;
    background-color: #696969;
    transform: skewX(-25deg);
}
`;

export const CurrentPrice = styled.span`
  font-size: 25px;
  font-family: "Inika", serif;
  font-weight: bold;
  color: ${theme.color.primary};;
`;

export const BeforePrice = styled.span`
  color: #d9d9d9;
  text-decoration: line-through;
  font-family: "Inika", serif;
`;

export const Discount = styled.span`
  display: inline-block;
  width: 50px;
  font-size: 18px;
  padding: 8px;
  background-color: ${theme.color.primary};;
  color: ${theme.color.white};
  margin-left: -10px;
  text-align: center;
  border-radius: 5px;
  line-height: 1;
  font-family: "Inika", serif;
`;


// Riview + Description

export const Contain = styled.div`
margin: 0 auto;
max-width: 1200px;`;

export const Tabbed = styled.div`
    padding-top: 30px;
    nav {
        position: relative;
    }
    
    nav:before {
        content: "";
        position: absolute;
        left: 0;
        top: 40px;
        height: 1px;
        width: 100%;
        background-color: ${theme.color.primary};;
        opacity: .4;
    }
    
    nav ul {
        justify-content: center;
        display: flex;
    }
    
    nav li {
        list-style: none;
        color: #45413E;
    }
    
    nav li a {
        position: relative;
        font-size: 18px;
        padding: 20px 0;
        margin-right: 30px;
        white-space: nowrap;
        color: ${theme.color.primary};;
        text-decoration: none;
        font-family: "Playfair Display", sans-serif;
    }
    
    nav ul :is(li.active a,
      li a:hover) {
          color: ${theme.color.primary};;
          font-weight: bold;
      }

      span {
        font-size: 17px;
      }
`;

export const ProductAbout = styled.div`
    padding: 10px 0;
    max-width: 980px;
    margin: 0 auto;

    h3 {
      font-size: 18px;
      font-family: "Playfair Display", sans-serif;
      color: ${theme.color.primary};;
  }

  h4 {
    font-weight: 700;
    font-family: "Crimson Text", sans-serif;
    color: ${theme.color.primary};;
    font-size: 16px;
}
    
    &.hide {
        display: none;
    }
    
    &.active {
        display: block;
    }

  //   &.active-tab a span {
  //     font-weight: bold;
  // }

    // &:where(h3,
    //   h4) {
    //       margin-bottom: 15px;
    //   }
`;

export const TextBlock = styled.div`
    padding-bottom: 30px;
    margin-top: 25px;
    p {
        color: #45413E;
        font-family: "Crimson Text", sans-serif;
        font-size: 15px;
        line-height: 1.4;
        padding-left: 3px;
    }
`;

export const DotGrid = styled.div`
.wrapper2 {
  display: flex;
  gap: 60px;
  margin: 0 auto;
}
`;

export const ListBlock = styled.div`
        li {
            color: #45413E;
            font-family: "Crimson Text", sans-serif;
            font-size: 15px;
        }
  
`;

export const Review = styled.div`
    max-width: 770px;
    margin: 0 auto;

    .head-review {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      border-bottom: 1px solid ${theme.color.primary};;
      padding-top: 10px;
      padding-bottom: 5px;
      justify-content: space-between;

      .view-all-button {
        background-color: ${theme.color.primary};; 
        color:${theme.color.white};;            
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 14px;
    }
    
    .view-all-button:hover {
        transform: translateY(-3px);
        transition: all .45s ease;
    }

        strong {
            font-size: 40px;
            font-family: "Playfair Display", sans-serif;
            color: ${theme.color.primary};;
        }

        span {
            position: relative;
            padding-left: 20px;
            color: ${theme.color.primary};;
            font-family: "Playfair Display", sans-serif;
            font-size: 14px;

            &::before {
                height: 50px;
                top: -30px;
                content: '';
                position: absolute;
                top: 0;
                left: 12px;
                height: 100%;
                width: 1.5px;
                background-color: #696969;
                transform: skewX(-25deg);
              
            }
        }
    }

    .body-review {
        margin: 0 auto;
        max-width: 800px;

        .profile {
            margin-top: 30px;

            .thumb-name {
                display: flex;
                align-items: center;
                margin-bottom: 5px;
            }

            .image {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    margin-right: 20px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                .rating {
                  padding-top: 0; 
                }

                .grouping {
                    line-height: initial;
                    margin-bottom: 0;
                }

                    .name,
                    .reply strong {
                        font-weight: bold;
                        color: ${theme.color.primary};;
                        font-family: "Crimson Text", sans-serif;
                        font-size: 15px;
                    }

                   

                    .date {
                        font-size: 10px;
                        margin-top: 5px;
                        font-family: "Inika", sans-serif;
                        color: #45413E;
                    }
                
            

            .comment {
                padding-left: 92px;
                font-family: "Crimson Text", sans-serif;
                color: #45413E;
               

                p {
                    margin-top: 5px;
                    font-size: 15px;
                }

                strong {
                    color: ${theme.color.primary};;
                    font-size: 15px;
                    font-family: "Playfair Display", sans-serif;
                }
            }

            .reply {
                margin-left: 92px;
                background-color: ${theme.color.secondary};;
                width: fit-content;
                padding: 10px;
                border-radius: 10px;
                margin-top: 10px;

                p {
                    margin-top: 5px;
                    font-size: 15px;
                    color: #45413E;
                    font-family: "Crimson Text", sans-serif;
                }

            }
        }
    }
`;

// SAME + RECENTLY
export const ProductSection = styled.section`
  margin: 60px auto;
  max-width: 1200px;
  margin-bottom: 0;
  `
  ;

export const HeadingTitle = styled.h2`
  color: ${theme.color.primary};;
  font-size: 22px;
  font-family: "Playfair Display", sans-serif;
`;
export const ListProduct = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
align-items: center;
text-align: center;
justify-content: center;
padding: 35px;
padding-left: 20px;
margin-left: 63px;
`;

export const ProductItem = styled.div`
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
        transition: all .45s ease;
  }

  img {
    width: 200px;
    height: 200px;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .link-add:hover {
    text-decoration: underline;
  }

  h4 {
    font-weight: 700;
    font-size: 18px;
    margin: 10px;
    font-family: "Crimson Text", serif;
    color: ${theme.color.primary};;
}
`;

export const ProductImage = styled.img`
    width: 80%;
    height: auto;
    filter: drop-shadow(0 10px 15px #0009);
    padding-bottom: 10px;
`;

export const ItemName = styled.p`
  color: ${theme.color.primary};;
  font-size: 17px;
  font-weight: 600;
  font-family: "Crimson Text", serif;
`;

export const Price = styled.p`
    font-size: small;
    font-family: "Inika", serif;
    color: #45413E;
    font-weight: 600;
    font-size: 16px;
`;

export const AddCartButton = styled.button`
    background-color: ${theme.color.primary};;
    color: ${theme.color.white};;
    padding: 12px 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
   
    
    
    &:hover {
        font-size: 14px;
        transition: all .45s ease;
    }   

`;

export const AddLink = styled.a`
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
`;

export const PageLink = styled.a`
 
  
`;