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
  color: string;
  shape: string;
  exchangeRate: number;
  currencyType: string;
}

export const diamondData: DiamondDataType[] = [
  {
    key: "1",
    diamondID: "12345121",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 4.08,
    markupPercentage: 100,
    color: "H",
    shape: "Marquise",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "2",
    diamondID: "12345122",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 5.08,
    markupPercentage: 100,
    color: "G",
    shape: "Princess",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "3",
    diamondID: "12345123",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 7.08,
    markupPercentage: 100,
    color: "H",
    shape: "Asscher",

    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "4",
    diamondID: "12345124",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 6.08,
    markupPercentage: 100,
    color: "J",
    shape: "Radiant",

    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "5",
    diamondID: "12345125",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 3.08,
    markupPercentage: 100,
    color: "I",
    shape: "Oval",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "6",
    diamondID: "12345126",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 9.08,
    markupPercentage: 100,
    color: "I",
    shape: "Princess",
    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "7",
    diamondID: "12345127",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 2.04,
    markupPercentage: 100,
    color: "G",
    shape: "Heart",

    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "8",
    diamondID: "12345128",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 7.03,
    markupPercentage: 100,
    color: "K",
    shape: "Emerald",

    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "9",
    diamondID: "12345129",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 5.07,
    markupPercentage: 100,
    color: "J",
    shape: "Cushion",

    exchangeRate: 23000,
    currencyType: "USD",
  },
  {
    key: "10",
    diamondID: "12345130",
    diamondImg:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Admin%2FProduct%2Fshell.png?alt=media&token=5986b57a-3027-4a31-8da7-47ec1b6abf89",
    diamondName: "1.00 Carat H-VS2 Emerald Cut Diamond",
    price: 4.2,
    markupPercentage: 100,
    color: "I",
    shape: "Marquise",
    exchangeRate: 23000,
    currencyType: "USD",
  },
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


