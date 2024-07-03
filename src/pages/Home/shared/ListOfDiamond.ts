export interface Diamond {
  id: string;
  shape: string;
  star: number;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  image1?: string;
  image2?: string;
  clarity: string;
  carat: string;
  percentSale?: string;
  description: string;
  color: string;
  cut: string;
  width: string;
  length: string;
}

export const diamonds: Diamond[] = [
  {
    id: "1",
    shape: "Round",
    star: 5,
    percentSale: "2%",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.00 Carat H-VS2 Round Diamond",
    price: 10,
    salePrice: 7,
    carat: "1.0 ct",
    color: "H Color",
    clarity: "VS2",
    cut: "Good",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FRound_3.png?alt=media&token=0016da8b-994c-47d5-9fe7-f48f77aafa88",
    width: "6.39mm",
    length: "6.33mm",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg1_r_1.jpg?alt=media&token=a0fd6621-3c3f-4c46-8c9e-142c144cddf6",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg2_2.jpg?alt=media&token=dc2f8f78-3f61-47c1-b2b1-665905e06501",
  },
  {
    id: "2",
    star: 4,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.01 Carat H-VS2 Good Oval Diamond",
    price: 10,
    salePrice: 7,
    percentSale: "2%",
    shape: "Oval",
    carat: "1.0 ct",
    color: "H Color",
    clarity: "VS2",
    cut: "Good",
    width: "5.52mm",
    length: "7.65mm",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FOval_1.png?alt=media&token=2017cc15-0207-4ca5-93cf-183d2b9c5153",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg1_o_1.jpg?alt=media&token=2e394557-e0f1-41f9-9f00-672cedfbf1ac",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg2_1.jpg?alt=media&token=7b4aef38-fd73-48d3-b737-8187697eff78",
  },
  {
    id: "3",
    star: 5,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.01 Carat G-VS2 Very Good Oval Diamond",
    price: 10,
    salePrice: 7,
    percentSale: "2%",
    shape: "Oval",
    carat: "1.0",
    color: "G",
    clarity: "VS2",
    cut: "Very Good",
    width: "5.64mm",
    length: "7.42mm",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FOval_3.png?alt=media&token=62377c86-e3a9-4930-a1a9-08036904932c",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg1_o_2.jpg?alt=media&token=c01f68c6-4d90-4ca4-a708-f67978b7257b",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg2_2.jpg?alt=media&token=dc2f8f78-3f61-47c1-b2b1-665905e06501",
  },
  {
    id: "4",
    star: 4,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.00 Carat F-SI2 Very Good Pear Diamond",
    price: 12,
    shape: "Pear",
    carat: "1.0",
    color: "F",
    clarity: "SI2",
    cut: "Very Good",
    width: "5.48mm",
    length: "8.83mm",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FPear_2.png?alt=media&token=6fb5f288-3ca4-4b16-aa0c-d754923940c3",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg1_p_1.jpg?alt=media&token=b24d6c00-afe0-4b01-b29d-d30fbea10eae",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg2_1.jpg?alt=media&token=7b4aef38-fd73-48d3-b737-8187697eff78",
  },

  {
    id: "5",
    star: 4,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.01 Carat J-IF Ideal Heart Diamond",
    price: 10,
    salePrice: 5,
    percentSale: "2%",
    shape: "Heart",
    carat: "1.01",
    color: "J",
    clarity: "IF",
    cut: "Astor Ideal",
    width: "6.85mm",
    length: "5.79mm",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FHeart_4.png?alt=media&token=6aa5ca36-a89a-4477-b9e0-bc3cdf49e7b0",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg1_h_1.jpg?alt=media&token=36a29439-39b8-4bd6-ac6b-c878f1d4bc67",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg2_2.jpg?alt=media&token=dc2f8f78-3f61-47c1-b2b1-665905e06501",
  },
];
