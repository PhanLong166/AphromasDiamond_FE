export interface CollectionDataType {
  key: React.Key;
  collectionID: string;
  collectionName: string;
  debutDate: string;
  description: string;
}

export const collectionData: CollectionDataType[] = [
  {
    key: "1",
    collectionID: "C12345121",
    collectionName: "Valentine",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "2",
    collectionID: "C12345122",
    collectionName: "Eternal Radiance Collection",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "3",
    collectionID: "C12345123",
    collectionName: "Celestial Sparkle Collection",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "4",
    collectionID: "C12345124",
    collectionName: "Timeless Elegance Collection",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "5",
    collectionID: "C12345125",
    collectionName: "Brilliance & Beyond Collection",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "6",
    collectionID: "C12345126",
    collectionName: "Radiant Dreams Collection",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "7",
    collectionID: "C12345127",
    collectionName: "Infinity Shine Collection",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "8",
    collectionID: "C12345128",
    collectionName: "Luminous Luxe Collection",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "9",
    collectionID: "C12345129",
    collectionName: "Majestic Glimmer Collection",
    debutDate: "2 Jan 2023",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
];

// -------------------------- PRODUCT PROMOTION ------------------------------

export interface PromotionDataType {
  key: React.Key;
  promotionID: string;
  promotionName: string;
  discountPercent: number;
  startDate: string;
  endDate: string;
  description: string;
}

export const promotionData: PromotionDataType[] = [
  {
    key: "1",
    promotionID: "D12345121",
    promotionName: "Valentine",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "2",
    promotionID: "D12345122",
    promotionName: "Eternal Radiance Collection",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "3",
    promotionID: "D12345123",
    promotionName: "Celestial Sparkle Collection",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "4",
    promotionID: "D12345124",
    promotionName: "Timeless Elegance Collection",
    discountPercent: 20,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "5",
    promotionID: "D12345125",
    promotionName: "Brilliance & Beyond Collection",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "6",
    promotionID: "D12345126",
    promotionName: "Radiant Dreams Collection",
    discountPercent: 30,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "7",
    promotionID: "D12345127",
    promotionName: "Infinity Shine Collection",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "8",
    promotionID: "D12345128",
    promotionName: "Luminous Luxe Collection",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
  {
    key: "9",
    promotionID: "D12345129",
    promotionName: "Majestic Glimmer Collection",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nobis aperiam aliquam alias fuga earum neque iste ipsa nesciunt accusamus possimus ex voluptas, perferendis reiciendis?",
  },
];

//   ------------------------- VOUCHERS ----------------------------------

export interface VoucherDataType {
  key: React.Key;
  voucherID: string;
  voucherCode: string;
  discountPercent: number;
  startDate: string;
  endDate: string;
}

export const voucherData: VoucherDataType[] = [
  {
    key: "1",
    voucherID: "V12345121",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "2",
    voucherID: "V12345122",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "3",
    voucherID: "V12345123",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "4",
    voucherID: "V12345124",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "5",
    voucherID: "V12345125",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "6",
    voucherID: "V12345126",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "7",
    voucherID: "V12345127",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "8",
    voucherID: "V12345128",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "9",
    voucherID: "V12345129",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
  {
    key: "10",
    voucherID: "V12345130",
    voucherCode: "HAHAHEHE",
    discountPercent: 10,
    startDate: "2 Jan 2023",
    endDate: "2 Jan 2024",
  },
];
