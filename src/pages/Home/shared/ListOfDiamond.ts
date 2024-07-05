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
  cutter: string;
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
    cutter: "De Beers Group",
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
    cutter: "Arlosa",
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
    cutter: "Arlosa",
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
    cutter: "Rio Tinto Diamonds",
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
    cutter: "Petra Diamonds",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FHeart_4.png?alt=media&token=6aa5ca36-a89a-4477-b9e0-bc3cdf49e7b0",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg1_h_1.jpg?alt=media&token=36a29439-39b8-4bd6-ac6b-c878f1d4bc67",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/DiamondDetail%2Fimg2_2.jpg?alt=media&token=dc2f8f78-3f61-47c1-b2b1-665905e06501",
  },
  {
    id: "6",
    shape: "Princess",
    star: 5,
    percentSale: "2%",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.00 Carat H-VS2 Princess Diamond",
    price: 10,
    salePrice: 7,
    carat: "1.0 ct",
    color: "H Color",
    clarity: "VS2",
    cut: "Good",
    cutter: "Lucara Diamond",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FPrincess_3.png?alt=media&token=66a83812-2c75-454e-a923-cd4e125aaf30",
    width: "6.39mm",
    length: "6.33mm",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fprincess_width.jpg?alt=media&token=ce46796f-7347-4d8f-a47d-432de77ffa0e",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fall.jpg?alt=media&token=7cf3d672-e53a-4837-8996-853f7828e9b7",
  },
  {
    id: "7",
    shape: "Radiant",
    star: 5,
    percentSale: "2%",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.00 Carat H-VS2 Radiant Diamond",
    price: 10,
    salePrice: 7,
    carat: "1.0 ct",
    color: "H Color",
    clarity: "VS2",
    cut: "Good",
    cutter: "De Beers Group",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FRadiant_4.png?alt=media&token=c1ead559-c1a8-43cb-99aa-13c69de1adf2",
    width: "6.39mm",
    length: "6.33mm",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fradiant_width.jpg?alt=media&token=8bafb6ee-7a8c-4343-ab50-448ca5e8358c",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fall.jpg?alt=media&token=7cf3d672-e53a-4837-8996-853f7828e9b7",
  },
  {
    id: "8",
    shape: "Marquise",
    star: 5,
    percentSale: "2%",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.00 Carat H-VS2 Marquise Diamond",
    price: 10,
    salePrice: 7,
    carat: "1.0 ct",
    color: "H Color",
    clarity: "VS2",
    cut: "Good",
    cutter: "Arlosa",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FMarquise_1.png?alt=media&token=a1861949-240f-415b-a948-7f3674050c09",
    width: "6.39mm",
    length: "6.33mm",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fmarquise_width.jpg?alt=media&token=c24a13e1-6d4e-4aed-8983-2d4163d8a335",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fall.jpg?alt=media&token=7cf3d672-e53a-4837-8996-853f7828e9b7",
  },
  {
    id: "9",
    shape: "Emerald",
    star: 5,
    percentSale: "2%",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.00 Carat H-VS2 Emerald Diamond",
    price: 10,
    salePrice: 7,
    carat: "1.0 ct",
    color: "H Color",
    clarity: "VS2",
    cut: "Good",
    cutter: "Rio Tinto Diamonds",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FEmerald_1.png?alt=media&token=329be03e-9251-4797-8fd9-7bd14406979b",
    width: "6.39mm",
    length: "6.33mm",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Femerald_width.jpg?alt=media&token=4e015466-4674-4114-82b1-0fbc5d51ed1a",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fall.jpg?alt=media&token=7cf3d672-e53a-4837-8996-853f7828e9b7",
  },
  {
    id: "10",
    shape: "Cushion",
    star: 5,
    percentSale: "2%",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.00 Carat H-VS2 Cushion Diamond",
    price: 10,
    salePrice: 7,
    carat: "1.0 ct",
    color: "H Color",
    clarity: "VS2",
    cut: "Good",
    cutter: "Petra Diamonds",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FCushion_3.png?alt=media&token=7b889b28-fa20-456a-b9c1-c0e9fbfc4ab2",
    width: "6.39mm",
    length: "6.33mm",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fcushion_width.jpg?alt=media&token=3a68835d-7789-470c-b309-b56aed852413",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fall.jpg?alt=media&token=7cf3d672-e53a-4837-8996-853f7828e9b7",
  },
  {
    id: "11",
    shape: "Asscher",
    star: 5,
    percentSale: "2%",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    name: "1.00 Carat H-VS2 Asscher Diamond",
    price: 10,
    salePrice: 7,
    carat: "1.0 ct",
    color: "H Color",
    clarity: "VS2",
    cut: "Good",
    cutter: "Lucara Diamond",
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FAsscher_2.png?alt=media&token=bbb6047a-bdc6-40ab-877c-9cbeafb44d27",
    width: "6.39mm",
    length: "6.33mm",
    image1: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fasscher_width.jpg?alt=media&token=701bcc34-c5b7-4b64-98b2-bf60c6b2b71b",
    image2: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2Fall.jpg?alt=media&token=7cf3d672-e53a-4837-8996-853f7828e9b7",
  },
];
