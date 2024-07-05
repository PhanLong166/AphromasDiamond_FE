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
  categories: string;
  designer?: string;
  //ring thì có designer và firm 
  //các jewelry khác chỉ có firm
  firm: string;
  gift: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    shape: "princess",
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
    categories: "princess-ring",
    designer: "The Gallery Collection",
    firm: "Cartier",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "2",
    shape: "marquise",
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
       
      ],
      rose: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fa_4.webp?alt=media&token=80c7f023-dee5-4922-9149-f8f9ed1ed192",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fa_3.webp?alt=media&token=2eb2dfb7-d401-4e47-8de4-6cdd23ad5e89",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fa_2.webp?alt=media&token=61ac9d99-cca9-429d-b06a-4c5876ba564b",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fa_1.webp?alt=media&token=48edeff4-acbd-410f-8d43-c309f546e550",
      ],
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
    categories: "marquise-ring",
    designer: "Blue Nile Studio",
    firm: "Tiffany & Co",
    gift: true,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "3",
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
    categories: "necklace",
    quantity: 16,
    color: "I",
    type: "Necklace",
    firm: "Bvlgari",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "4",
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
        
      ],
      rose: [],
      platinum: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_1.webp?alt=media&token=cce91673-64f8-4b0c-9138-d66abbce0541",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_4.webp?alt=media&token=a1e4025d-697d-497b-ac64-061aa3dac503",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_3.webp?alt=media&token=578e6c39-ffdb-4046-baf1-1d7c7dd13394",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fj_2.webp?alt=media&token=3cc3afd1-4269-476a-ad25-920e4599c482",
      ],
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
    categories: "earrings",
    firm: "Van Cleef & Arpels",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "5",
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
    type: "Bracelet",
    categories: "bracelet",
    firm: "Harry Winston",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "6",
    shape: "heart",
    metal: "yellow gold",
    name: "BRIGHT HEART SILVER RING",
    star: 4,
    price: 120,
    salePrice: 60,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_1.webp?alt=media&token=c910282c-3053-4d26-9e91-963215878e9e",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fheart-ring_2.webp?alt=media&token=0918eee3-3f8e-4e65-b40f-6f63fa1d4ee3",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_2.webp?alt=media&token=e5a7c595-4898-4881-af00-71e6233b7a1e",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fheart-ring_3.webp?alt=media&token=43d18d25-876d-4965-a6f4-5793672b78da",
      ],
      white: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fheart-ring_1_2.webp?alt=media&token=97ae5e71-d82e-40b5-8aa3-aa816b0bc911",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fheart-ring-3_2.webp?alt=media&token=5fbc9e34-3b44-4c47-9ab5-d9008f13c373",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fheart-ring-2_2.webp?alt=media&token=c201f602-f07c-4fda-bdb2-0bf890b249e7",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fheart-ring-4_2.webp?alt=media&token=a8d430f6-a0fa-4d05-ae0a-a261b929f44d",
      ],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_1.webp?alt=media&token=c910282c-3053-4d26-9e91-963215878e9e",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_2.webp?alt=media&token=e5a7c595-4898-4881-af00-71e6233b7a1e",
    clarity: "SI1",
    carat: "0.19carat",
    percentSale: "50%",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "heart-ring",
    designer: "Bella Vaughan",
    firm: "Cartier",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },

  {
    id: "7",
    shape: "pear",
    metal: "yellow gold",
    name: "AQUA SOLITARY RING",
    star: 4,
    price: 120,
    salePrice: 60,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fpear-ring-1_1.webp?alt=media&token=dc63abbf-fc77-4dc4-9a29-2ca9276aeb99",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fpear-ring-3_1.webp?alt=media&token=dac72db5-2092-4352-9beb-514e1a3f4535",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fpear-ring-2_1.webp?alt=media&token=0ad59ef2-ae37-4b4d-b314-bf7d8cdfda30",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fpear-ring-4_1.webp?alt=media&token=4c5b825b-ba59-4486-a64e-6787aaa9b123",
      ],
      white: [],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fpear-ring-1_1.webp?alt=media&token=dc63abbf-fc77-4dc4-9a29-2ca9276aeb99",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fpear-ring-2_1.webp?alt=media&token=0ad59ef2-ae37-4b4d-b314-bf7d8cdfda30",
    clarity: "SI1",
    carat: "0.19carat",
    percentSale: "50%",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "pear-ring",
    designer: "Zac Zac Posen",
    firm: "Tiffany & Co",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "8",
    shape: "oval",
    metal: "yellow gold",
    name: "KIM RING",
    star: 5,
    price: 72,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Foval-ring-1_1.webp?alt=media&token=f9e9c285-0393-4903-8592-70124ebff774",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Foval-ring-3_1.webp?alt=media&token=0251110f-9e3b-4132-8308-7c7b040bf6ce",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Foval-ring-2_1.webp?alt=media&token=7f1272ff-c125-4557-abc8-350cf2b40507",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Foval-ring-4_1.webp?alt=media&token=5215b158-560f-4313-a36f-647075747666",
      ],
      white: [],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Foval-ring-1_1.webp?alt=media&token=f9e9c285-0393-4903-8592-70124ebff774",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Foval-ring-2_1.webp?alt=media&token=7f1272ff-c125-4557-abc8-350cf2b40507",
    clarity: "SI1",
    carat: "0.19carat",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "oval-ring",
    designer: "The Gallery Collection",
    firm: "Bvlgari",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "9",
    shape: "asscher",
    metal: "yellow gold",
    name: "DIAMOND AND GOLD SOLITAIRE RING",
    star: 5,
    price: 575,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-1_1.webp?alt=media&token=dc728a82-6dff-4a95-bced-adf127e9fa52",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-2_1.webp?alt=media&token=08a37dc3-7f3f-431b-9b32-221b065f2ea2",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-2_1.webp?alt=media&token=08a37dc3-7f3f-431b-9b32-221b065f2ea2",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-1_1.webp?alt=media&token=dc728a82-6dff-4a95-bced-adf127e9fa52",
      ],
      white: [
       
      ],
      rose: [],
      platinum: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-1_2.webp?alt=media&token=1c99a6fc-55b1-4e1e-adbe-36fe3d9df4bc",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-3_2.webp?alt=media&token=deda6fc7-bd80-44fd-aab5-46d4b5e05458",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-4_2.webp?alt=media&token=1d3ada21-f149-4c35-a6b8-60ece4af5091",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-2_2.webp?alt=media&token=0a546c43-ec27-4b5b-b745-4c2b24590d06",
      ],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-1_1.webp?alt=media&token=dc728a82-6dff-4a95-bced-adf127e9fa52",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fasscher-ring-2_1.webp?alt=media&token=08a37dc3-7f3f-431b-9b32-221b065f2ea2",
    clarity: "SI1",
    carat: "0.19carat",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "asscher-ring",
    designer: "Blue Nile Studio",
    firm: "Van Cleef & Arpels",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "10",
    shape: "emerald",
    metal: "yellow gold",
    name: "OCTAGON SHIMMER STAMP RING",
    star: 5,
    price: 130,
    salePrice: 65,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Femerald-ring-1_1.webp?alt=media&token=96cefb03-3575-4427-9f6d-a97d0c253ffe",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Femerald-ring-3_1.webp?alt=media&token=3592d18c-108d-429f-be33-a6cbadc6a2d3",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Femerald-ring-2_1.webp?alt=media&token=666ea812-197c-4c98-b197-c8b48b386f2b",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Femerald-ring-4_1.webp?alt=media&token=479867a9-b285-4367-a5ba-75b152f5d34d",
      ],
      white: [],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Femerald-ring-1_1.webp?alt=media&token=96cefb03-3575-4427-9f6d-a97d0c253ffe",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Femerald-ring-2_1.webp?alt=media&token=666ea812-197c-4c98-b197-c8b48b386f2b",
    clarity: "SI1",
    carat: "0.19carat",
    percentSale: "50%",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "emerald-ring",
    designer: "Bella Vaughan",
    firm: "Harry Winston",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "11",
    shape: "radiant",
    metal: "yellow gold",
    name: "RADIANT SHIMMER STAMP RING",
    star: 5,
    price: 130,
    salePrice: 65,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_1.webp?alt=media&token=c910282c-3053-4d26-9e91-963215878e9e",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_2.webp?alt=media&token=e5a7c595-4898-4881-af00-71e6233b7a1e",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
      ],
      white: [
      ],
      rose: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fc_4.webp?alt=media&token=02d43579-5372-450e-9c36-d83de9b19240",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fc_2.webp?alt=media&token=0aac23a7-1e17-4c17-8ceb-9a8a798ae56f",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fc_1.webp?alt=media&token=f721e4bc-fa57-4f45-a593-4f440b0fe8c4",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fc_3.webp?alt=media&token=2178c70b-e362-4f9e-b788-0cbe204e324e",
      ],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_1.webp?alt=media&token=c910282c-3053-4d26-9e91-963215878e9e",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdate%2Fp11_2.webp?alt=media&token=e5a7c595-4898-4881-af00-71e6233b7a1e",
    clarity: "SI1",
    carat: "0.19carat",
    percentSale: "50%",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "radiant-ring",
    designer: "Zac Zac Posen",
    firm: "Cartier",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "12",
    shape: "round",
    metal: "yellow gold",
    name: "SOLITAIRE SUPREME RING",
    star: 5,
    price: 850,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-main_1.webp?alt=media&token=625781b2-de92-4997-953e-3eb2a7155f48",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-5_1.webp?alt=media&token=f2f3e407-8277-41a1-a727-af8203b5eaf3",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-3_1.webp?alt=media&token=d5c3b0c7-3f7c-4647-847c-595aabcbc14a",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-2_1.webp?alt=media&token=31e22f3a-430d-4c4d-9841-1cc33e140ab5",
      ],
      white: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-main_2.webp?alt=media&token=dbfdee3b-73a6-4e9b-a725-10b5d15b94ff",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-1_2.webp?alt=media&token=16a5e596-b41e-4936-aca9-d1c9737a3b97",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-4_2.webp?alt=media&token=95fa5d98-bc3e-41c4-83df-04316cdc41dd",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-2_2.webp?alt=media&token=a7314575-661d-4ca0-ba09-0f05293e6388",
      ],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-main_1.webp?alt=media&token=625781b2-de92-4997-953e-3eb2a7155f48",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fround-ring-3_1.webp?alt=media&token=d5c3b0c7-3f7c-4647-847c-595aabcbc14a",
    clarity: "SI1",
    carat: "0.19carat",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "round-ring",
    designer: "The Gallery Collection",
    firm: "Tiffany & Co",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "13",
    shape: "cushion",
    metal: "yellow gold",
    name: "ANNA RING",
    star: 5,
    price: 90,
    salePrice: 45,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fcushion-ring-1_1.webp?alt=media&token=6b7d948e-9733-4d5d-9315-968db2e2eece",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fcushion-ring-2_1.webp?alt=media&token=04c5e498-2f60-4626-9527-918d2e395e71",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fcushion-ring-4_1.webp?alt=media&token=31a7190e-a29f-47e7-8f72-dc251c09ce48",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fcushion-ring-3_1.webp?alt=media&token=af6f8485-2c0a-448f-b892-15bdea430e2d",
      ],
      white: [],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fcushion-ring-1_1.webp?alt=media&token=6b7d948e-9733-4d5d-9315-968db2e2eece",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fcushion-ring-2_1.webp?alt=media&token=04c5e498-2f60-4626-9527-918d2e395e71",
    clarity: "SI1",
    carat: "0.19carat",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    percentSale: "50%",
    type: "Ring",
    categories: "cushion-ring",
    designer: "Blue Nile Studio",
    firm: "Bvlgari",
    gift: false,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "14",
    shape: "marquise",
    metal: "yellow gold",
    name: "AQUA CLIMBING EARRINGS",
    star: 5,
    price: 90,
    salePrice: 45,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FaquaE_1_1.webp?alt=media&token=16ffbadd-e259-4386-8833-59dead3369b8",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FaquaE_1_3.webp?alt=media&token=798c5937-4642-4198-be82-b71a9ecaafe2",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FaquaE_1_2.webp?alt=media&token=9dc40877-28b5-401f-a6f6-73a8a9aa42f3",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FaquaE_1_4.webp?alt=media&token=ab04f113-0157-4eb3-8363-9d817ba47012",
      ],
      white: [],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FaquaE_1_1.webp?alt=media&token=16ffbadd-e259-4386-8833-59dead3369b8",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FaquaE_1_2.webp?alt=media&token=9dc40877-28b5-401f-a6f6-73a8a9aa42f3",
    clarity: "SI1",
    carat: "0.19carat",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    percentSale: "50%",
    type: "Earrings",
    categories: "earrings",
    designer: "Blue Nile Studio",
    firm: "Bvlgari",
    gift: true,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "15",
    shape: "round",
    metal: "yellow gold",
    name: "CLARA RING",
    star: 5,
    price: 640,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FclaraR_1_1.webp?alt=media&token=4885134c-cab8-4dac-9a41-710509aa860e",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FclaraR_1_3.webp?alt=media&token=103405ee-867f-4aca-a0d0-bbd68e1b1396",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FclaraR_1_4.webp?alt=media&token=09b1a0b2-25a3-41af-83f4-d66c19618009",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FclaraR_1_2.webp?alt=media&token=b47ad990-a7d0-42a5-89fa-1594a0be55f0",
      ],
      white: [
      ],
      rose: [
      ],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FclaraR_1_1.webp?alt=media&token=4885134c-cab8-4dac-9a41-710509aa860e",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FclaraR_1_2.webp?alt=media&token=b47ad990-a7d0-42a5-89fa-1594a0be55f0",
    clarity: "SI1",
    carat: "0.19carat",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "round-ring",
    designer: "Zac Zac Posen",
    firm: "Cartier",
    gift: true,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "16",
    shape: "round",
    metal: "yellow gold",
    name: "DUO NECKLACE",
    star: 5,
    price: 520,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FdouN_1_1.webp?alt=media&token=6861d55b-73d9-4020-8a68-8198af5c4ebe",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FdouN_1_3.webp?alt=media&token=bc772c9c-d9c9-4259-91e8-156beedf12e4",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FdouN_1_4.webp?alt=media&token=c1e37bc2-cadd-4056-9316-9bec29de6ec3",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FdouN_1_2.webp?alt=media&token=594db5c3-1c48-44f6-922c-03c6d7e95312",
      ],
      white: [],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FdouN_1_1.webp?alt=media&token=6861d55b-73d9-4020-8a68-8198af5c4ebe",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FdouN_1_2.webp?alt=media&token=594db5c3-1c48-44f6-922c-03c6d7e95312",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",
    categories: "necklace",
    quantity: 16,
    color: "I",
    type: "Necklace",
    firm: "Bvlgari",
    gift: true,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "17",
    shape: "round",
    metal: "yellow gold",
    name: "LOOP RING",
    star: 5,
    price: 585,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FloopR_1_1.webp?alt=media&token=ec39699d-0615-4360-b7e7-bbade8e233b1",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FloopR_1_3.webp?alt=media&token=fa7bfeb8-9217-454c-b272-d5478ca8f5a5",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FloopR_1_2.webp?alt=media&token=0bf6c3a5-7aab-46d1-9a49-f1e61bfc3ce3",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FloopR_1_4.webp?alt=media&token=49df851f-d152-4f3a-8eb8-060298f9adf7",
      ],
      white: [],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FloopR_1_1.webp?alt=media&token=ec39699d-0615-4360-b7e7-bbade8e233b1",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FloopR_1_2.webp?alt=media&token=0bf6c3a5-7aab-46d1-9a49-f1e61bfc3ce3",
    clarity: "SI1",
    carat: "0.19carat",
    width: "2.0mm",
    quantity: 16,
    color: "F",
    type: "Ring",
    categories: "round-ring",
    designer: "Bella Vaughan",
    firm: "Harry Winston",
    gift: true,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },

  {
    id: "18",
    shape: "round",
    metal: "yellow gold",
    name: "SIENA BANGLE",
    star: 4,
    price: 105,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FsienaB_1_1.webp?alt=media&token=61554d10-c98e-4199-901c-6473cad50fa1",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FsienaB_1_3.webp?alt=media&token=bd120a02-eaff-4fab-8384-b046fb4cb5db",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FsienaB_1_4.webp?alt=media&token=f31ff3f7-a043-4ed9-ac96-c20122c56751",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FsienaB_1_2.webp?alt=media&token=cd744ace-3776-48c3-b00e-05e651806509",
      ],
      white: [
      ],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FsienaB_1_1.webp?alt=media&token=61554d10-c98e-4199-901c-6473cad50fa1",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FsienaB_1_2.webp?alt=media&token=cd744ace-3776-48c3-b00e-05e651806509",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",
    quantity: 16,
    color: "I",
    type: "Bracelet",
    categories: "bracelet",
    firm: "Van Cleef & Arpels",
    gift: true,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "19",
    shape: "oval",
    metal: "yellow gold",
    name: "STARE EARRINGS",
    star: 4,
    price: 77,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FstareE_1_1.webp?alt=media&token=276647be-5d62-414f-84fb-b52383782df9",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fstare_1_3.webp?alt=media&token=4c698e39-1eb3-4be5-85ab-42839d8b2716",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2Fstare_1_4.webp?alt=media&token=ed93d517-3c03-40a7-933d-963c14974a57",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FstareE_1_2.webp?alt=media&token=15fa1c50-9585-4343-bb49-fdf43270c96e",
      ],
      white: [
        
      ],
      rose: [],
      platinum: [
      ],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FstareE_1_1.webp?alt=media&token=276647be-5d62-414f-84fb-b52383782df9",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FstareE_1_2.webp?alt=media&token=15fa1c50-9585-4343-bb49-fdf43270c96e",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",
    quantity: 16,
    color: "I",
    type: "Earrings",
    categories: "earrings",
    firm: "Harry Winston",
    gift: true,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
  {
    id: "20",
    shape: "princess",
    metal: "yellow gold",
    name: "WATER BRACELET",
    star: 4,
    price: 72,
    images: {
      yellow: [
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FwaterB_1_1.webp?alt=media&token=a8c6f893-8e06-496e-a614-0350eca9da45",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FwaterB_1_3.webp?alt=media&token=d50ad189-ac78-483b-8dba-c60d0e926ff0",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FwaterB_1_4.webp?alt=media&token=2547742c-8faf-4f9f-87b4-f6989441787d",
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FwaterB_1_2.webp?alt=media&token=b8576b7c-1ebd-41fc-918c-98cbb211b7ac",
      ],
      white: [
      ],
      rose: [],
      platinum: [],
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FwaterB_1_1.webp?alt=media&token=a8c6f893-8e06-496e-a614-0350eca9da45",
    hoverImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/All%20Jewelry%2FwaterB_1_2.webp?alt=media&token=b8576b7c-1ebd-41fc-918c-98cbb211b7ac",
    clarity: "SI2",
    carat: "0.16carat",
    width: "1.80mm",
    quantity: 16,
    color: "I",
    type: "Bracelet",
    categories: "bracelet",
    firm: "Tiffany & Co",
    gift: true,
    description:
      "Radiating eternal allure and capturing the essence of sophistication, this diamond ring embodies the epitome of luxury and style.",
  },
];
