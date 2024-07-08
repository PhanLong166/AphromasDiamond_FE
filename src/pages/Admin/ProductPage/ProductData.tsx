// ---------------- PRODUCT DATA -------------------

export interface ProductDataType {
  key: React.Key;
  jewelryID: string;
  jewelryImg: string[];
  jewelryName: string;
  price: number;
  type: string;
  exchangeRate: number;
  currencyType: string;
  diamondID: string;
  jewelrySettingID: string;
  collectionID: string;
  promotionID: string;
}

export const productData: ProductDataType[] = [
  {
    key: "1",
    jewelryID: "P12345121",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 100,
    type: "Necklace",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0003",
    jewelrySettingID: "S12345121",
    collectionID: "C12345121",
    promotionID: "D12345121",
  },
  {
    key: "2",
    jewelryID: "P12345122",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 100,
    type: "Earring",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0007",
    jewelrySettingID: "S12345122",
    collectionID: "C12345122",
    promotionID: "D12345129",
  },
  {
    key: "3",
    jewelryID: "P12345123",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 100,
    type: "Necklace",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0005",
    jewelrySettingID: "S12345123",
    collectionID: "C12345123",
    promotionID: "D12345123",
  },
  {
    key: "4",
    jewelryID: "P12345124",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 150,
    type: "Bracelet",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0003",
    jewelrySettingID: "S12345124",
    collectionID: "C12345124",
    promotionID: "D12345124",
  },
  {
    key: "5",
    jewelryID: "P12345125",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 100,
    type: "Bracelet",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0007",
    jewelrySettingID: "S12345125",
    collectionID: "C12345125",
    promotionID: "D12345125",
  },
  {
    key: "6",
    jewelryID: "P12345126",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 150,
    type: "Anklet",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0002",
    jewelrySettingID: "S12345126",
    collectionID: "C12345126",
    promotionID: "D12345126",
  },
  {
    key: "7",
    jewelryID: "P12345127",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 100,
    type: "Bangle",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0003",
    jewelrySettingID: "S12345127",
    collectionID: "C12345127",
    promotionID: "D12345127",
  },
  {
    key: "8",
    jewelryID: "P12345128",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 100,
    type: "Choker",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0006",
    jewelrySettingID: "S12345128",
    collectionID: "C12345128",
    promotionID: "D12345128",
  },
  {
    key: "9",
    jewelryID: "P12345129",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    type: "Bangle",
    // chargeRate: 100,
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0008",
    jewelrySettingID: "S12345129",
    collectionID: "C12345129",
    promotionID: "D12345129",
  },
  {
    key: "10",
    jewelryID: "P12345130",
    jewelryImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelryName: "Petite Twist Diamond Engagement Ring",
    price: 12350000,
    // chargeRate: 150,
    type: "Choker",
    // quantity: 51,
    exchangeRate: 0.000039,
    currencyType: "VND",
    diamondID: "D0001",
    jewelrySettingID: "S12345121",
    collectionID: "C12345121",
    promotionID: "D12345121",
  },
];

// ---------------- DIAMOND DATA -------------------

export interface DiamondDataType {
  key?: React.Key;
  diamondID: string; //
  diamondImg: string[];
  diamondName: string; //
  price: number; //
  chargeRate: number; //
  shape: string; //
  color: string; //
  polish: string; //
  cut: string; //
  lwRatio: number; //
  clarity: string; //
  symmetry: string; //
  caratWeight: number; //
  tablePercentage: number; //
  depthPercentage: number; //
  fluorescence: string; //
  description: string; //
  giaCerti: string;
  updateTime: string;
  exchangeRate: number;
  currencyType: string;
}

export const diamondData: DiamondDataType[] = [
  {
    key: "1",
    diamondID: "D0001",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Emerald Diamond",
    price: 21500000,
    chargeRate: 20,
    shape: "Asscher",
    color: "F",
    polish: "Excellent",
    cut: "Excellent",
    lwRatio: 1.06,
    clarity: "VVS2",
    symmetry: "Very Good",
    caratWeight: 0.87,
    tablePercentage: 55.59,
    depthPercentage: 61.29,
    fluorescence: "Medium",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "2",
    diamondID: "D0002",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Emerald Diamond",
    price: 21500000,
    chargeRate: 25,
    shape: "Asscher",
    color: "F",
    polish: "Good",
    cut: "Very Good",
    lwRatio: 1.05,
    clarity: "IF",
    symmetry: "Good",
    caratWeight: 0.76,
    tablePercentage: 56.76,
    depthPercentage: 60.9,
    fluorescence: "None",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "3",
    diamondID: "D0003",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Princess Diamond",
    price: 21500000,
    chargeRate: 25,
    shape: "Emerald",
    color: "G",
    polish: "Very Good",
    cut: "Excellent",
    lwRatio: 1.01,
    clarity: "VVS1",
    symmetry: "Good",
    caratWeight: 1.06,
    tablePercentage: 55.78,
    depthPercentage: 60.22,
    fluorescence: "Medium",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "4",
    diamondID: "D0004",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Princess Diamond",
    price: 21500000,
    chargeRate: 30,
    shape: "Emerald",
    color: "F",
    polish: "Excellent",
    cut: "Good",
    lwRatio: 1.05,
    clarity: "VS1",
    symmetry: "Excellent",
    caratWeight: 1.4,
    tablePercentage: 54.85,
    depthPercentage: 60.31,
    fluorescence: "Faint",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "5",
    diamondID: "D0005",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Marquise Diamond",
    price: 21500000,
    chargeRate: 20,
    shape: "Marquise",
    color: "F",
    polish: "Excellent",
    cut: "Good",
    lwRatio: 1.03,
    clarity: "IF",
    symmetry: "Excellent",
    caratWeight: 0.86,
    tablePercentage: 55.53,
    depthPercentage: 61.25,
    fluorescence: "Medium",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "6",
    diamondID: "D0006",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Princess Diamond",
    price: 21500000,
    chargeRate: 20,
    shape: "Round",
    color: "D",
    polish: "Good",
    cut: "Very Good",
    lwRatio: 1.02,
    clarity: "VS1",
    symmetry: "Good",
    caratWeight: 0.85,
    tablePercentage: 55.03,
    depthPercentage: 61.55,
    fluorescence: "None",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "7",
    diamondID: "D0007",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Round Diamond",
    price: 21500000,
    chargeRate: 20,
    shape: "Round",
    color: "H",
    polish: "Very Good",
    cut: "Good",
    lwRatio: 1.06,
    clarity: "IF",
    symmetry: "Excellent",
    caratWeight: 0.52,
    tablePercentage: 54.94,
    depthPercentage: 60.08,
    fluorescence: "Strong",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "8",
    diamondID: "D0008",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Emerald Diamond",
    price: 21500000,
    chargeRate: 25,
    shape: "Marquise",
    color: "F",
    polish: "Good",
    cut: "Good",
    lwRatio: 1.04,
    clarity: "VS1",
    symmetry: "Good",
    caratWeight: 0.98,
    tablePercentage: 55.13,
    depthPercentage: 61.77,
    fluorescence: "Medium",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "9",
    diamondID: "D0009",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Marquise Diamond",
    price: 21500000,
    chargeRate: 30,
    shape: "Emerald",
    color: "E",
    polish: "Excellent",
    cut: "Excellent",
    lwRatio: 1.0,
    clarity: "VVS2",
    symmetry: "Good",
    caratWeight: 0.69,
    tablePercentage: 56.3,
    depthPercentage: 61.57,
    fluorescence: "Medium",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
  {
    key: "10",
    diamondID: "D0010",
    diamondImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ],
    diamondName: "1.0 Carat Asscher Diamond",
    price: 21500000,
    chargeRate: 25,
    shape: "Princess",
    color: "H",
    polish: "Good",
    cut: "Excellent",
    lwRatio: 1.09,
    clarity: "IF",
    symmetry: "Good",
    caratWeight: 1.08,
    tablePercentage: 56.02,
    depthPercentage: 61.63,
    fluorescence: "None",
    description: "A high-quality diamond with excellent features.",
    giaCerti:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
    updateTime: "2023-05-06",
    exchangeRate: 0.000039,
    currencyType: "VND",
  },
];

// ---------------- JEWELRY SETTING DATA -------------------

export interface RingDataType {
  key: React.Key;
  jewelrySettingID: string; //
  jewelrySettingImg: string[];
  jewelrySettingName: string;
  productionCost: number; //
  updateTime: string; //
  diamondShape: string; //
  auxiliaryCost: number;
  chargeRate: number;
  // price: number;
  type: string;
  exchangeRate: number;
  currencyType: string;
  // weight: number; // new attribute
}

export const ringData: RingDataType[] = [
  {
    key: "1",
    jewelrySettingID: "S12345121",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.0 // new attribute
  },
  {
    key: "2",
    jewelrySettingID: "S12345122",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.2 // new attribute
  },
  {
    key: "3",
    jewelrySettingID: "S12345123",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.3 // new attribute
  },
  {
    key: "4",
    jewelrySettingID: "S12345124",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.1 // new attribute
  },
  {
    key: "5",
    jewelrySettingID: "S12345125",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.0 // new attribute
  },
  {
    key: "6",
    jewelrySettingID: "S12345126",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.3 // new attribute
  },
  {
    key: "7",
    jewelrySettingID: "S12345127",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.2 // new attribute
  },
  {
    key: "8",
    jewelrySettingID: "S12345128",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.1 // new attribute
  },
  {
    key: "9",
    jewelrySettingID: "S12345129",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.4 // new attribute
  },
  {
    key: "10",
    jewelrySettingID: "S12345130",
    jewelrySettingImg: [
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_4.webp?alt=media&token=abb92930-d492-4b33-afb1-8c4233050995",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_2.webp?alt=media&token=113e4d7a-da53-4fb2-ae93-9ea1be2cfcff",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_3.webp?alt=media&token=28841189-25f2-490d-970e-08b098b74981",
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/ProductUpdated2%2Fd_1.webp?alt=media&token=d0533cb1-c70c-4478-b5d8-fbaf9889d69a",
    ],
    jewelrySettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    // price: 5350000,
    type: "Ring",
    // width: 2.8,
    updateTime: "2023-05-06",
    diamondShape: "Round",
    // material: "14K White Gold",
    auxiliaryCost: 50,
    productionCost: 10000000,
    chargeRate: 100,
    exchangeRate: 0.000039,
    currencyType: "VND",
    // weight: 5.2 // new attribute
  },
];

// ---------------- JEWELRY TYPE DATA -------------------

export interface JewTypeDataType {
  key: React.Key;
  jewelryTypeID: string;
  jewelryTypeName: string;
}
export const jewTypeData: JewTypeDataType[] = [
  {
    key: "1",
    jewelryTypeID: "T12345121",
    jewelryTypeName: "Diamond Ring",
  },
  {
    key: "2",
    jewelryTypeID: "T12345122",
    jewelryTypeName: "Engagement Ring",
  },
  {
    key: "3",
    jewelryTypeID: "T12345123",
    jewelryTypeName: "Wedding Ring",
  },
  {
    key: "4",
    jewelryTypeID: "T12345124",
    jewelryTypeName: "Necklace",
  },
  {
    key: "5",
    jewelryTypeID: "T12345125",
    jewelryTypeName: "Earring",
  },
  {
    key: "6",
    jewelryTypeID: "T12345126",
    jewelryTypeName: "Bracelet",
  },
];

// ---------------- MATERIAL DATA -------------------

export interface MaterialDataType {
  key: React.Key;
  materialID: string;
  materialName: string;
  sellingPrice: number;
}

export const materialData: MaterialDataType[] = [
  {
    key: "1",
    materialID: "M12345121",
    materialName: "14K White Gold",
    sellingPrice: 4.08,
  },
  {
    key: "2",
    materialID: "M12345122",
    materialName: "14K Yellow Gold",
    sellingPrice: 5.08,
  },
  {
    key: "3",
    materialID: "M12345123",
    materialName: "14K Rose Gold",
    sellingPrice: 7.08,
  },
  {
    key: "4",
    materialID: "M12345124",
    materialName: "18K White Gold",
    sellingPrice: 6.08,
  },
  {
    key: "5",
    materialID: "M12345125",
    materialName: "18K Yellow Gold",
    sellingPrice: 3.08,
  },
  {
    key: "6",
    materialID: "M12345126",
    materialName: "18K Rose Gold",
    sellingPrice: 9.08,
  },
  {
    key: "7",
    materialID: "M12345127",
    materialName: "Platinum",
    sellingPrice: 2.04,
  },
];

// ---------------- RING SIZE DATA -------------------

export interface RingSizeDataType {
  key: React.Key;
  sizeID: string;
  sizeValue: number;
  UnitOfMeasure: string;
}

export const ringSizeData: RingSizeDataType[] = [
  {
    key: "1",
    sizeID: "SZ01",
    sizeValue: 8,
    UnitOfMeasure: "mm",
  },
  {
    key: "2",
    sizeID: "SZ02",
    sizeValue: 10,
    UnitOfMeasure: "mm",
  },
  {
    key: "3",
    sizeID: "SZ03",
    sizeValue: 12,
    UnitOfMeasure: "mm",
  },
  {
    key: "4",
    sizeID: "SZ04",
    sizeValue: 14,
    UnitOfMeasure: "mm",
  },
  {
    key: "5",
    sizeID: "SZ05",
    sizeValue: 16,
    UnitOfMeasure: "mm",
  },
  {
    key: "6",
    sizeID: "SZ06",
    sizeValue: 18,
    UnitOfMeasure: "mm",
  },
];

// ---------------- JEWELRY SETTING MATERIAL DATA -------------------

export interface RingMaterialDataType {
  key: React.Key;
  jewelrySettingVariantID: string;
  sizeID: string;
  jewelrySettingID: string;
  materialID: string;
  weight: number;
  amount: number;
  price: number;
}

export const ringMaterialData: RingMaterialDataType[] = [
  {
    key: "1",
    jewelrySettingVariantID: "V00001",
    sizeID: "SZ02",
    jewelrySettingID: "S12345121",
    materialID: "M12345121",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "2",
    jewelrySettingVariantID: "V00002",
    sizeID: "SZ04",
    jewelrySettingID: "S12345121",
    materialID: "M12345122",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "3",
    jewelrySettingVariantID: "V00003",
    sizeID: "SZ06",
    jewelrySettingID: "S12345122",
    materialID: "M12345123",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "4",
    jewelrySettingVariantID: "V00004",
    sizeID: "SZ01",
    jewelrySettingID: "S12345122",
    materialID: "M12345124",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "5",
    jewelrySettingVariantID: "V00005",
    sizeID: "SZ03",
    jewelrySettingID: "S12345123",
    materialID: "M12345121",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "6",
    jewelrySettingVariantID: "V00006",
    sizeID: "SZ05",
    jewelrySettingID: "S12345123",
    materialID: "M12345125",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "7",
    jewelrySettingVariantID: "V00007",
    sizeID: "SZ02",
    jewelrySettingID: "S12345124",
    materialID: "M12345126",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "8",
    jewelrySettingVariantID: "V00008",
    sizeID: "SZ03",
    jewelrySettingID: "S12345124",
    materialID: "M12345127",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "9",
    jewelrySettingVariantID: "V00009",
    sizeID: "SZ06",
    jewelrySettingID: "S12345125",
    materialID: "M12345122",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "10",
    jewelrySettingVariantID: "V00010",
    sizeID: "SZ05",
    jewelrySettingID: "S12345125",
    materialID: "M12345123",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "11",
    jewelrySettingVariantID: "V00011",
    sizeID: "SZ01",
    jewelrySettingID: "S12345126",
    materialID: "M12345124",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "12",
    jewelrySettingVariantID: "V00012",
    sizeID: "SZ03",
    jewelrySettingID: "S12345126",
    materialID: "M12345125",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "13",
    jewelrySettingVariantID: "V00013",
    sizeID: "SZ05",
    jewelrySettingID: "S12345127",
    materialID: "M12345126",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "14",
    jewelrySettingVariantID: "V00014",
    sizeID: "SZ02",
    jewelrySettingID: "S12345127",
    materialID: "M12345121",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "15",
    jewelrySettingVariantID: "V00015",
    sizeID: "SZ01",
    jewelrySettingID: "S12345128",
    materialID: "M12345122",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "16",
    jewelrySettingVariantID: "V00016",
    sizeID: "SZ01",
    jewelrySettingID: "S12345128",
    materialID: "M12345123",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "17",
    jewelrySettingVariantID: "V00017",
    sizeID: "SZ06",
    jewelrySettingID: "S12345129",
    materialID: "M12345124",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "18",
    jewelrySettingVariantID: "V00018",
    sizeID: "SZ05",
    jewelrySettingID: "S12345129",
    materialID: "M12345125",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "19",
    jewelrySettingVariantID: "V00019",
    sizeID: "SZ04",
    jewelrySettingID: "S12345130",
    materialID: "M12345126",
    weight: 2,
    amount: 11,
    price: 1,
  },
  {
    key: "20",
    jewelrySettingVariantID: "V00020",
    sizeID: "SZ05",
    jewelrySettingID: "S12345130",
    materialID: "M12345127",
    weight: 2,
    amount: 11,
    price: 1,
  },
];
