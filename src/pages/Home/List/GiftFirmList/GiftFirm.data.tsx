import { products } from "../../shared/ListOfProducts";

const excludedCategories = [
    "wedding-ring",
    "engagement-ring",
    "men-engagement-ring",
    "men-wedding-ring",
  ];
  export const jewelryData: Record<string, any> = {
    "top-ten-bvlgari": {
      title: "Top Ten of Bvlgari",
      overlay: "Bvlgari",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Elevate your style with our diamond bracelets, crafted to perfection in yellow gold, white gold, rose gold, or platinum. Each bracelet features meticulously set diamonds that sparkle with every movement, offering a luxurious and timeless accessory for any occasion. Whether worn alone as a statement piece or layered with other jewelry, our bracelets are designed to enhance your beauty and express your individuality with sophistication and grace.",
      products: products.filter(
        (product) => product.firm === "Bvlgari" && product.gift === true && !excludedCategories.includes(product.categories)
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
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fnecklacelist.jpeg?alt=media&token=e518f32c-79ba-4898-9438-4a294882b4e9",
    },

    "top-ten-tiffany&co": {
      title: "Top Ten of Tiffany & Co",
      overlay: "Tiffany & Co",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Adorn yourself with our exquisite diamond necklaces, crafted to capture attention and admiration. Set in yellow gold, white gold, rose gold, or platinum, each necklace showcases the beauty of diamonds in designs that range from classic to contemporary, making them a stunning addition to any jewelry collection. Whether worn as a centerpiece for formal occasions or as an everyday luxury, our necklaces are designed to complement your style and elevate your look with timeless elegance.",
      products: products.filter(
        (product) => product.firm === "Tiffany & Co" && product.gift === true && !excludedCategories.includes(product.categories)
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
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FDesign%20Your%20Own%20Pendant.jpeg?alt=media&token=9e6ba197-39d3-4b7e-84f3-a185792eb4aa",
    },
    "top-ten-harrywinston": {
      title: "Top Ten of Harry Winston",
      overlay: "Harry Winston",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Make a statement with our diamond earrings, designed to enhance your natural beauty and style. Available in yellow gold, white gold, rose gold, or platinum settings, each pair of earrings features sparkling diamonds that add a touch of glamour and sophistication to any ensemble. Whether worn for a special occasion or as an everyday indulgence, our earrings are crafted with precision to reflect your unique personality and enhance your presence with timeless elegance and refinement.",
      products: products.filter(
        (product) => product.firm === "Harry Winston" && product.gift === true && !excludedCategories.includes(product.categories)
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
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20Diamond%20Earring.jpeg?alt=media&token=7fe4d3e5-6894-4b52-90b8-ac1d94b5f588",
    },
    "top-ten-vancleef&arpels": {
      title: "Top Ten of Van Cleef & Arpels",
      overlay: "Diamond Ring",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter(
        (product) =>
          product.firm === "Van Cleef & Arpels" && product.gift === true && !excludedCategories.includes(product.categories)
      ),
      faqs: [
        {
          key: "1",
          label: "What is the average cost of a womens diamond wedding ring?",
          children: (
            <p>
              {" "}
              Our women's diamond rings range from $300 to $400 depending on
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
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
    },
    "top-ten-cartier": {
      title: "Top Ten of Cartier",
      overlay: "Cartier",
      overlayText:
        "Discover the elegance of our top 10 diamond rings at our exclusive jewelry store. Each ring features meticulously selected diamonds set in exquisite designs, perfect for celebrating life's most cherished moments. Elevate your style with the unparalleled brilliance and timeless beauty of our premium diamond collection.",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter(
        (product) => product.firm === "Cartier" && product.gift === true && !excludedCategories.includes(product.categories)
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
              Yes, diamond rings make perfect weddings rings and engagement
              rings.
            </p>
          ),
        },
      ],
      bannerImage:
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FLab%20grown%20diamonds.jpeg?alt=media&token=63d86a3e-c0cb-48ea-a8e7-38e650e17425",
    },
  };