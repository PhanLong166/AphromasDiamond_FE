import { products } from "../../shared/ListOfProducts";

export const menWeddingData: Record<string, any> = {
    "white-gold": {
      title: "Men's White Gold Wedding Bands",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter((product) => product.categories === "men-wedding-ring" && product.metal === "white gold"),
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fbulgari.png?alt=media&token=1897c535-f005-4d37-a106-26bf8426d5ba",
    },
    "yellow-gold": {
        title: "Men's Yellow Gold Wedding Bands",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter((product) => product.categories === "men-wedding-ring" && product.metal === "yellow gold"),
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flearnaboutbanner.jpeg?alt=media&token=e7168cf6-8434-4cad-95e8-dc5fce8d81af",
    },
    "rose-gold": {
        title: "Men's Rose Gold Wedding Bands",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter((product) => product.categories === "men-wedding-ring" && product.metal === "rose gold"),
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2FDesign%20Your%20Own%20Pendant.jpeg?alt=media&token=9e6ba197-39d3-4b7e-84f3-a185792eb4aa",
    },
    "platinum": {
        title: "Men's White Gold Wedding Bands",
      description:
        "Our collection of diamond rings embodies timeless elegance and craftsmanship, each piece meticulously crafted to capture the essence of sophistication and beauty. Whether showcasing the brilliance of round, princess, or cushion-cut diamonds, set in luxurious yellow gold, white gold, rose gold, or platinum settings, each ring tells a story of love and commitment. From classic solitaire designs to intricate halo settings, our rings are designed to celebrate life's most precious moments with enduring style and grace, making them cherished symbols of eternal love and unforgettable milestones.",
      products: products.filter((product) => product.categories === "men-wedding-ring" && product.metal === "platinum"),
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
        "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Flab_diamonds_sale_banner.6a518.jpg?alt=media&token=b7d30ece-f543-4890-b7de-7c37e1286dfb",
    },
  };