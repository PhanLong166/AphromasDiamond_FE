import { products } from "./../../shared/ListOfProducts";

const excludedCategories = [
  "wedding-ring",
  "engagement-ring",
  "men-engagement-ring",
  "men-wedding-ring",
];

export const designerData: Record<string, any> = {
  vancleefnarpels: {
    title: "Zac Zac Posen",
    description:
      "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
    products: products.filter(
      (product) =>
        product.designer === "Zac Zac Posen" &&
        !excludedCategories.includes(product.categories)
    ),
    faqs: [
      {
        key: "1",
        label: "What is the average cost of a womens diamond wedding ring?",
        children: (
          <p>
            {" "}
            Our women's diamond rings range from $900 to $1000 depending on
            several factors, including the type of metal and diamond carat
            weight.
          </p>
        ),
      },
      {
        key: "2",
        label: "Can weddings rings be diamond rings?",
        children: (
          <p>
            {" "}
            Yes, diamond rings make perfect weddings rings and engagement rings.
          </p>
        ),
      },
    ],
    bannerImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
  },
  harrywinston: {
    title: "Bella Vaughan",
    description:
      "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
    products: products.filter(
      (product) =>
        product.designer === "Bella Vaughan" &&
        !excludedCategories.includes(product.categories)
    ),
    faqs: [
      {
        key: "1",
        label: "What is the average cost of a womens diamond wedding ring?",
        children: (
          <p>
            {" "}
            Our women's diamond rings range from $700 to $800 depending on
            several factors, including the type of metal and diamond carat
            weight.
          </p>
        ),
      },
      {
        key: "2",
        label: "Can weddings rings be diamond rings?",
        children: (
          <p>
            {" "}
            Yes, diamond rings make perfect weddings rings and engagement rings.
          </p>
        ),
      },
    ],
    bannerImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FBrandBvl.jpg?alt=media&token=344f0091-7993-435a-9fc1-e6f689f0e976",
  },
  cartier: {
    title: "Blue Nile Studio",
    description:
      "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
    products: products.filter(
      (product) =>
        product.designer === "Blue Nile Studio" &&
        !excludedCategories.includes(product.categories)
    ),
    faqs: [
      {
        key: "1",
        label: "What is the average cost of a womens diamond wedding ring?",
        children: (
          <p>
            {" "}
            Our women's diamond rings range from $500 to $600 depending on
            several factors, including the type of metal and diamond carat
            weight.
          </p>
        ),
      },
      {
        key: "2",
        label: "Can weddings rings be diamond rings?",
        children: (
          <p>
            {" "}
            Yes, diamond rings make perfect weddings rings and engagement rings.
          </p>
        ),
      },
    ],
    bannerImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FBlue%20Nile%20diamond%20jewelry.jpeg?alt=media&token=79f02baa-b4cf-4368-b838-2c7baa50d305",
  },
  tiffanynco: {
    title: "The Gallery Collection",
    description:
      "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
    products: products.filter(
      (product) =>
        product.designer === "The Gallery Collection" &&
        !excludedCategories.includes(product.categories)
    ),
    faqs: [
      {
        key: "1",
        label: "What is the average cost of a womens diamond wedding ring?",
        children: (
          <p>
            {" "}
            Our women's diamond rings range from $276 to $56,024 depending on
            several factors, including the type of metal and diamond carat
            weight.
          </p>
        ),
      },
      {
        key: "2",
        label: "Can weddings rings be diamond rings?",
        children: (
          <p>
            {" "}
            Yes, diamond rings make perfect weddings rings and engagement rings.
          </p>
        ),
      },
    ],
    bannerImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flab_diamonds_sale_banner.6a518.jpg?alt=media&token=b7d30ece-f543-4890-b7de-7c37e1286dfb",
  },
  bvlgari: {
    title: "The Gallery Collection",
    description:
      "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
    products: products.filter(
      (product) =>
        product.designer === "The Gallery Collection" &&
        !excludedCategories.includes(product.categories)
    ),
    faqs: [
      {
        key: "1",
        label: "What is the average cost of a womens diamond wedding ring?",
        children: (
          <p>
            {" "}
            Our women's diamond rings range from $276 to $56,024 depending on
            several factors, including the type of metal and diamond carat
            weight.
          </p>
        ),
      },
      {
        key: "2",
        label: "Can weddings rings be diamond rings?",
        children: (
          <p>
            {" "}
            Yes, diamond rings make perfect weddings rings and engagement rings.
          </p>
        ),
      },
    ],
    bannerImage:
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flab_diamonds_sale_banner.6a518.jpg?alt=media&token=b7d30ece-f543-4890-b7de-7c37e1286dfb",
  },
};
