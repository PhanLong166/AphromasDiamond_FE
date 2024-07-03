interface Diamond {
    id: number;
    name: string;
    price: number;
    salePrice?: number;
    shape: string;
    carat: number;
    color: string;
    clarity: string;
    cut: string;
    image: string;
}

export const diamonds: Diamond[] = [
    {
        id: 1,
        name: "1.00 Carat H-VS2 Round Diamond",
        price: 10,
        salePrice: 7,
        shape: "round",
        carat: 1.0,
        color: "H",
        clarity: "VS2",
        cut: "Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FRound_3.png?alt=media&token=0016da8b-994c-47d5-9fe7-f48f77aafa88",
    },
    {
        id: 2,
        name: "1.01 Carat H-VS2 Good Oval Diamond",
        price: 10,
        salePrice: 7,
        shape: "oval",
        carat: 1.0,
        color: "H",
        clarity: "VS2",
        cut: "Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FOval_1.png?alt=media&token=2017cc15-0207-4ca5-93cf-183d2b9c5153",
    },
    {
        id: 3,
        name: "1.01 Carat G-VS2 Very Good Oval Diamond",
        price: 10,
        salePrice: 7,
        shape: "oval",
        carat: 1.0,
        color: "G",
        clarity: "VS2",
        cut: "Very Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FOval_3.png?alt=media&token=62377c86-e3a9-4930-a1a9-08036904932c",
    },
    {
        id: 4,
        name: "1.00 Carat F-SI2 Very Good Pear Diamond",
        price: 12,
        shape: "pear",
        carat: 1.0,
        color: "F",
        clarity: "SI2",
        cut: "Very Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FPear_2.png?alt=media&token=6fb5f288-3ca4-4b16-aa0c-d754923940c3",
    },
    {
        id: 5,
        name: "1.01 Carat J-IF Ideal Heart Diamond",
        price: 10,
        salePrice: 5,
        shape: "heart",
        carat: 1.01,
        color: "J",
        clarity: "IF",
        cut: "Ideal",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FHeart_4.png?alt=media&token=6aa5ca36-a89a-4477-b9e0-bc3cdf49e7b0",
    },
    {
        id: 6,
        name: "2.00 Carat I-VS1 Good Princess Diamond",
        price: 30,
        shape: "princess",
        carat: 2.0,
        color: "I",
        clarity: "VS1",
        cut: "Very Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FPrincess_1.png?alt=media&token=0298c307-525b-418b-9f9e-ba4a2cfb2985",
    },

    {
        id: 7,
        name: "2.02 Carat G-FL Good Asscher Diamond",
        price: 14,
        salePrice: 10,
        shape: "asscher",
        carat: 2.02,
        color: "G",
        clarity: "FL",
        cut: "Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FAsscher_2.png?alt=media&token=bbb6047a-bdc6-40ab-877c-9cbeafb44d27",
    },
    {
        id: 8,
        name: "2.02 Carat K-VVS2 Good Radiant Diamond",
        price: 16,
        shape: "radiant",
        carat: 2.02,
        color: "K",
        clarity: "VVS2",
        cut: "Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FRadiant_1.png?alt=media&token=e91ff909-5384-4e0f-8ee9-f5b4c4a7ce3e",
    },
    {
        id: 9,
        name: "1.01 Carat G-VS2 Ideal Cushion Diamond",
        price: 10,
        shape: "cushion",
        carat: 1.01,
        color: "G",
        clarity: "VS2",
        cut: "Very Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FCushion_1.png?alt=media&token=4335ff8a-e124-489a-9983-9bf768b82114",
    },

    {
        id: 10,
        name: "1.00 Carat J-VVS1 Ideal Emerald Diamond",
        price: 10,
        salePrice: 9,
        shape: "emerald",
        carat: 1.0,
        color: "J",
        clarity: "VVS1",
        cut: "Ideal",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FEmerald_4.png?alt=media&token=d1f80af7-3532-4036-b903-0e4faa8757e5",
    },
    {
        id: 11,
        name: "1.04 Carat I-IF Good Marquise Diamond",
        price: 10,
        shape: "marquise",
        carat: 1.04,
        color: "I",
        clarity: "IF",
        cut: "Good",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FMarquise_1.png?alt=media&token=a1861949-240f-415b-a948-7f3674050c09",
    },
    {
        id: 12,
        name: "1.00 Carat F-FL Astor Ideal Heart Diamond",
        price: 12,
        shape: "heart",
        carat: 1.0,
        color: "F",
        clarity: "FL",
        cut: "Astor Ideal",
        image:
            "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/Diamond%2FHeart_4.png?alt=media&token=6aa5ca36-a89a-4477-b9e0-bc3cdf49e7b0",
    },
];

export const texts = [
    `
     Our women's diamond rings range from $276 to $56,024 depending on several factors, including the type of metal and diamond carat weight.
    `,
    `
      Yes, diamond rings make perfect weddings rings and engagement rings.
    `,
    `
      Women’s diamond wedding rings are available in platinum along with yellow, white and rose gold. 
    `,
    `
     Our women's diamond rings range from $276 to $56,024 depending on several factors, including the type of metal and diamond carat weight.
    `,
    `
      Yes, diamond rings make perfect weddings rings and engagement rings.
    `,
    `
      Women’s diamond wedding rings are available in platinum along with yellow, white and rose gold. 
    `,
];

export const labels = [
    "What is the average cost of a womens diamond wedding ring?",
    "Can weddings rings be diamond rings?",
    "What metals are best for diamond wedding bands?",
    "What is the average cost of a womens diamond wedding ring?",
    "Can weddings rings be diamond rings?",
    "What metals are best for diamond wedding bands?",
];