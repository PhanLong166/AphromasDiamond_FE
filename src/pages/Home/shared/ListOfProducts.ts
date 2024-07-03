export interface Product {
  id: string;
  shape: string;
  metal: string;
  star: number;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage: string;
  images: {
    yellow: string[];
    white: string[];
    rose: string[];
    platinum: string[];
  };
  clarity: string;
  carat: string;
  width: string;
  percentSale?: string;
  description: string;
  quantity: number;
  color: string;
  type: string;

}

export const products: Product[] = [
  {
    id: "50141014",
    shape: "round",
    metal: "yellow gold",
    name: "SOFIA TWO FINGER RING",
    star: 5,
    price: 100,
    salePrice: 75,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
      ],
      white: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fc_4.webp?alt=media&token=02d43579-5372-450e-9c36-d83de9b19240",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fc_2.webp?alt=media&token=0aac23a7-1e17-4c17-8ceb-9a8a798ae56f",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fc_1.webp?alt=media&token=f721e4bc-fa57-4f45-a593-4f440b0fe8c4",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fc_3.webp?alt=media&token=2178c70b-e362-4f9e-b788-0cbe204e324e",
      ],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",
    percentSale: "25%",
    quantity: 16,
    color: "I",
    type: "Ring",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    id: "50141015",
    shape: "round",
    metal: "yellow gold",
    name: "RAIN SOLITARY RING",
    star: 4,
    price: 120,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fb_4.webp?alt=media&token=e2908fed-0fcb-46c8-ba39-1b23f31ac45d",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fb_2.webp?alt=media&token=b61a0359-381b-4711-99dc-5b516638943a",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fb_3.webp?alt=media&token=1d43ef8b-a919-4b1d-8884-a468613810fa",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fb_1.webp?alt=media&token=5713d35a-c3bb-4697-a4fd-3b1e8822107d",
      ],
      white: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fa_4.webp?alt=media&token=80c7f023-dee5-4922-9149-f8f9ed1ed192",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fa_3.webp?alt=media&token=2eb2dfb7-d401-4e47-8de4-6cdd23ad5e89",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fa_2.webp?alt=media&token=61ac9d99-cca9-429d-b06a-4c5876ba564b",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fa_1.webp?alt=media&token=48edeff4-acbd-410f-8d43-c309f546e550",
      ],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fb_4.webp?alt=media&token=e2908fed-0fcb-46c8-ba39-1b23f31ac45d",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fb_1.webp?alt=media&token=5713d35a-c3bb-4697-a4fd-3b1e8822107d",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",
    quantity: 16,
    color: "I",
    type: "Ring",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    id: "50141016",
    shape: "round",
    metal: "yellow gold",
    name: "DIAMONDS ETERNITY NECKLACE",
    star: 5,
    price: 100,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fg_1.webp?alt=media&token=ed961433-875b-4b2e-b5c9-8254123c5fd7",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fg_2.webp?alt=media&token=abe807ba-be81-42cb-9693-5b6473c795f0",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fg_3.webp?alt=media&token=f1b798ac-3516-494d-9a18-137eff95185c",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fg_4.webp?alt=media&token=ff8791d0-4e49-4a4c-b43f-6b884aa97a9a",
      ],
      white: [],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fg_1.webp?alt=media&token=ed961433-875b-4b2e-b5c9-8254123c5fd7",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fg_3.webp?alt=media&token=f1b798ac-3516-494d-9a18-137eff95185c",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",

    quantity: 16,
    color: "I",
    type: "Necklace",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    id: "50141017",
    shape: "round",
    metal: "yellow gold",
    name: "WATERFALL DROP EARRINGS",
    star: 4,
    price: 700,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_1.webp?alt=media&token=c2329ad1-3a56-4354-990c-101ce1881701",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_2.webp?alt=media&token=393f48a3-69cc-455a-a941-f134ac06a648",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_4.webp?alt=media&token=5d23391c-47a5-499d-9795-7c6fce736147",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_3.webp?alt=media&token=745d4a65-28e7-4746-a694-9166cf6edcb1",
      ],
      white: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_1.webp?alt=media&token=cce91673-64f8-4b0c-9138-d66abbce0541",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_4.webp?alt=media&token=a1e4025d-697d-497b-ac64-061aa3dac503",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_3.webp?alt=media&token=578e6c39-ffdb-4046-baf1-1d7c7dd13394",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_2.webp?alt=media&token=3cc3afd1-4269-476a-ad25-920e4599c482",
      ],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_1.webp?alt=media&token=c2329ad1-3a56-4354-990c-101ce1881701",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_3.webp?alt=media&token=745d4a65-28e7-4746-a694-9166cf6edcb1",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",
    quantity: 16,
    color: "I",
    type: "Earrings",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    id: "50141020",
    shape: "round",
    metal: "yellow gold",
    name: "WATERFALL DROP EARRINGS",
    star: 4,
    price: 700,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_1.webp?alt=media&token=c2329ad1-3a56-4354-990c-101ce1881701",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_2.webp?alt=media&token=393f48a3-69cc-455a-a941-f134ac06a648",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_4.webp?alt=media&token=5d23391c-47a5-499d-9795-7c6fce736147",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_3.webp?alt=media&token=745d4a65-28e7-4746-a694-9166cf6edcb1",
      ],
      white: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_1.webp?alt=media&token=cce91673-64f8-4b0c-9138-d66abbce0541",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_4.webp?alt=media&token=a1e4025d-697d-497b-ac64-061aa3dac503",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_3.webp?alt=media&token=578e6c39-ffdb-4046-baf1-1d7c7dd13394",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_2.webp?alt=media&token=3cc3afd1-4269-476a-ad25-920e4599c482",
      ],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_1.webp?alt=media&token=c2329ad1-3a56-4354-990c-101ce1881701",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fe_3.webp?alt=media&token=745d4a65-28e7-4746-a694-9166cf6edcb1",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",
    quantity: 16,
    color: "I",
    type: "Earrings",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },

];
