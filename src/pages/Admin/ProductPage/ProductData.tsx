// ---------------- PRODUCT DATA -------------------

export interface ProductDataType {
  key: React.Key;
  productID: string;
  productImg: string;
  productName: string;
  price: number;
  markupPercentage: number;
  type: string;
  quantity: number;
  exchangeRate: number;
  currencyType: string;
  diamondID: string;
  ringSettingID: string;
}

export const productData: ProductDataType[] = [
  {
    key: "1",
    productID: "12345121",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 5.08,
    markupPercentage: 100,
    type: "Necklace",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0003",
    ringSettingID: "12345122",
  },
  {
    key: "2",
    productID: "12345122",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 5.08,
    markupPercentage: 100,
    type: "Earring",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0007",
    ringSettingID: "12345122",
  },
  {
    key: "3",
    productID: "12345123",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 7.08,
    markupPercentage: 100,
    type: "Necklace",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0005",
    ringSettingID: "12345122",
  },
  {
    key: "4",
    productID: "12345124",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 6.08,
    markupPercentage: 150,
    type: "Bracelet",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0003",
    ringSettingID: "12345122",
  },
  {
    key: "5",
    productID: "12345125",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 3.08,
    markupPercentage: 100,
    type: "Bracelet",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0007",
    ringSettingID: "12345122",
  },
  {
    key: "6",
    productID: "12345126",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 9.08,
    markupPercentage: 150,
    type: "Anklet",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0002",
    ringSettingID: "12345122",
  },
  {
    key: "7",
    productID: "12345127",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 2.04,
    markupPercentage: 100,
    type: "Bangle",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0003",
    ringSettingID: "12345122",
  },
  {
    key: "8",
    productID: "12345128",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 7.03,
    markupPercentage: 100,
    type: "Choker",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0006",
    ringSettingID: "12345122",
  },
  {
    key: "9",
    productID: "12345129",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 5.07,
    type: "Bangle",
    markupPercentage: 100,
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0008",
    ringSettingID: "12345122",
  },
  {
    key: "10",
    productID: "12345130",
    productImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    productName: "Petite Twist Diamond Engagement Ring",
    price: 4.2,
    markupPercentage: 150,
    type: "Choker",
    quantity: 51,
    exchangeRate: 23000,
    currencyType: "USD",
    diamondID: "D0001",
    ringSettingID: "12345122",
  },
];

// ---------------- DIAMOND DATA -------------------

export interface DiamondDataType {
  key: React.Key;
  diamondID: string;
  diamondImg: string;
  diamondName: string;
  price: number;
  markupPercentage: number;
  shape: string;
  color: string;
  polish: string;
  cut: string;
  lwRatio: number;
  clarity: string;
  symmetry: string;
  caratWeight: number;
  tablePercentage: number;
  depthPercentage: number;
  fluorescence: string;
  description: string;
  giaCerti: string;
  exchangeRate: number;
  currencyType: string;
}


export const diamondData: DiamondDataType[] = [
  { key: "1",
  diamondID: "D0001",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Emerald Diamond",
  price: 9455.54,
  markupPercentage: 20,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "2",
  diamondID: "D0002",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Emerald Diamond",
  price: 8270.44,
  markupPercentage: 25,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "3",
  diamondID: "D0003",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Princess Diamond",
  price: 7627.91,
  markupPercentage: 25,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "4",
  diamondID: "D0004",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Princess Diamond",
  price: 5459.23,
  markupPercentage: 30,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "5",
  diamondID: "D0005",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Marquise Diamond",
  price: 9465.42,
  markupPercentage: 20,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "6",
  diamondID: "D0006",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Princess Diamond",
  price: 5230.42,
  markupPercentage: 20,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "7",
  diamondID: "D0007",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Round Diamond",
  price: 5026.7,
  markupPercentage: 20,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "8",
  diamondID: "D0008",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Emerald Diamond",
  price: 8472.97,
  markupPercentage: 25,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "9",
  diamondID: "D0009",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Marquise Diamond",
  price: 8732.8,
  markupPercentage: 30,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
},
{ key: "10",
  diamondID: "D0010",
  diamondImg: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
  diamondName: "1.0 Carat Asscher Diamond",
  price: 3587.14,
  markupPercentage: 25,
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
  giaCerti: "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2F83F468EA-18AC-48EB-8C88-D0FD5ABA0004.jfif?alt=media&token=48ce66e9-d4ce-44bc-9bfb-f7b25fef1a49",
  exchangeRate: 23000,
  currencyType: "USD"
}
];

// ---------------- RING SETTING DATA -------------------

export interface RingDataType {
  key: React.Key;
  ringSettingID: string;
  ringSettingImg: string;
  ringSettingName: string;
  price: number;
  markupPercentage: number;
  type: string;
  width: number;
  material: string;
  exchangeRate: number;
  currencyType: string;
}

export const ringData: RingDataType[] = [
  {
    key: "1",
    ringSettingID: "12345121",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 4.08,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "2",
    ringSettingID: "12345122",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 5.08,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "3",
    ringSettingID: "12345123",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 7.08,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "4",
    ringSettingID: "12345124",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 6.08,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "5",
    ringSettingID: "12345125",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 3.08,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "6",
    ringSettingID: "12345126",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 9.08,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "7",
    ringSettingID: "12345127",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 2.04,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "8",
    ringSettingID: "12345128",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 7.03,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "9",
    ringSettingID: "12345129",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 5.07,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "10",
    ringSettingID: "12345130",
    ringSettingImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    ringSettingName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 4.2,
    markupPercentage: 100,
    type: "Ring",
    width: 2.8,
    material: "14K White Gold",
    exchangeRate: 23000,
    currencyType: "USD",
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
    jewelryTypeID: "12345121",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "2",
    jewelryTypeID: "12345122",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "3",
    jewelryTypeID: "12345123",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "4",
    jewelryTypeID: "12345124",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "5",
    jewelryTypeID: "12345125",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "6",
    jewelryTypeID: "12345126",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "7",
    jewelryTypeID: "12345127",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "8",
    jewelryTypeID: "12345128",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "9",
    jewelryTypeID: "12345129",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
  },
  {
    key: "10",
    jewelryTypeID: "12345130",
    jewelryTypeName: "1.00 Carat H-VS2 Emerald Cut Diamond",
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
    materialID: "12345121",
    materialName: "14K White Gold",
    sellingPrice: 4.08,
  },
  {
    key: "2",
    materialID: "12345122",
    materialName: "14K Yellow Gold",
    sellingPrice: 5.08,
  },
  {
    key: "3",
    materialID: "12345123",
    materialName: "14K Rose Gold",
    sellingPrice: 7.08,
  },
  {
    key: "4",
    materialID: "12345124",
    materialName: "18K White Gold",
    sellingPrice: 6.08,
  },
  {
    key: "5",
    materialID: "12345125",
    materialName: "18K Yellow Gold",
    sellingPrice: 3.08,
  },
  {
    key: "6",
    materialID: "12345126",
    materialName: "18K Rose Gold",
    sellingPrice: 9.08,
  },
  {
    key: "7",
    materialID: "12345127",
    materialName: "Platinum",
    sellingPrice: 2.04,
  },
];
