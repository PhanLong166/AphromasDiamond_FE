interface Product {
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
      type: "ring",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
    },
  ];
  