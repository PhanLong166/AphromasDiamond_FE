import { useState, useEffect } from "react";
import { showAllDiamond } from "@/services/diamondAPI";
import { getImage } from "@/services/imageAPI";

const [diamonds, setDiamonds] = useState<any[]>([]);
const [loading, setLoading] = useState<boolean>(true);
console.log(loading);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await showAllDiamond(); // Call the function to get the promise
      console.log("API response:", response.data.data);

      if (response && response.data && Array.isArray(response.data.data)) {
        const fetchedDiamonds = response.data.data.map((item: any) => ({
          id: item.DiamondID,
          name: item.Name,
          cut: item.Cut,
          price: item.Price,
          color: item.Color,
          description: item.Description,
          isActive: item.IsActive,
          clarity: item.Clarity,
          shape: item.Shape,
          discountPrice: item.DiscountPrice,
          images: item.usingImage.map((image: any) => ({
            id: image.UsingImageID,
            name: image.Name,
            url: getImage(image.UsingImageID),
          })),
        }));

        console.log(fetchedDiamonds);

        setDiamonds(fetchedDiamonds);
        setLoading(false);
      } else {
        console.error("Unexpected API response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching diamonds:", error);
    }
  };
  fetchData();
}, []);

export const diamondData: Record<string, any> = {
  "round-shape": {
    title: "Round Diamonds",
    description:
      "Our exquisite round diamond rings are crafted to perfection, showcasing the brilliance of diamonds set in yellow gold, white gold, rose gold, or platinum. Each piece radiates timeless elegance and sophistication, making it a cherished symbol of enduring love and commitment. Whether for a proposal or a milestone anniversary, these rings are designed to captivate hearts and inspire lasting memories.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Round"),
    faqs: [
      {
        key: "1",
        label:
          "Round Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "princess-shape": {
    title: "Princess Diamonds",
    description:
      " Discover the allure of our princess-cut diamond rings, characterized by their clean lines and modern elegance. Available in yellow gold, white gold, rose gold, or platinum settings, these rings are meticulously crafted to capture the essence of grace and luxury, making them ideal for celebrating milestones and special moments. Each ring reflects precision craftsmanship and a contemporary aesthetic, perfect for those who appreciate refined beauty with a touch of glamour.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Princess"),
    faqs: [
      {
        key: "1",
        label:
          "Princess Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "heart-shape": {
    title: "Heart Diamonds",
    description:
      "Symbolizing romance and devotion, our heart-shaped diamond rings are a testament to everlasting love. Expertly set in yellow gold, white gold, rose gold, or platinum, each ring is a blend of artistry and emotion, making it a perfect expression of love and affection. With their timeless design and exquisite detailing, these rings are cherished heirlooms that symbolize the deep bond between two individuals.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Heart"),
    faqs: [
      {
        key: "1",
        label:
          "Heart Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "oval-shape": {
    title: "Oval Diamonds",
    description:
      "Embrace the distinctive beauty of our oval-shaped diamond rings, known for their timeless appeal and unique charm. Available in yellow gold, white gold, rose gold, or platinum settings, these rings exude sophistication and allure, making them a captivating choice for those who appreciate classic elegance with a modern twist. Each ring is meticulously crafted to enhance the diamond's natural brilliance and fire, creating a piece that stands out with understated elegance and grace.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Oval"),
    faqs: [
      {
        key: "1",
        label:
          "Oval Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "cushion-shape": {
    title: "Cushion Diamonds",
    description:
      "Our cushion-cut diamond rings combine classic charm with contemporary flair. Featuring square-shaped diamonds set in yellow gold, white gold, rose gold, or platinum, these rings are crafted to highlight the diamond's brilliance and fire, making them a stunning choice for those who desire a blend of tradition and luxury. Each ring is designed with meticulous attention to detail, ensuring a piece that is both timeless and distinctive, perfect for making a statement of enduring elegance.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Cushion"),
    faqs: [
      {
        key: "1",
        label:
          "Cushion Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "emerald-shape": {
    title: "Emerald Diamonds",
    description:
      "Make a statement with our emerald-cut diamond rings, renowned for their striking beauty and bold presence. Set in yellow gold, white gold, rose gold, or platinum, these rings showcase the diamond's clarity and geometric elegance, offering a timeless and sophisticated look for any occasion. Each ring is crafted with precision to enhance the diamond's natural allure, making it a symbol of luxury and refinement that will be cherished for generations.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Emerald"),
    faqs: [
      {
        key: "1",
        label:
          "Emerald Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "asscher-shape": {
    title: "Asscher Diamonds",
    description:
      "Experience luxury with our asscher-cut diamond rings, distinguished by their octagonal shape and Art Deco-inspired design. Crafted in yellow gold, white gold, rose gold, or platinum, these rings exude vintage charm and modern sophistication, making them a captivating choice for those who appreciate classic elegance with a touch of glamour. Each ring is a testament to superior craftsmanship and timeless design, ideal for marking life's most special moments with style and grace.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Asscher"),
    faqs: [
      {
        key: "1",
        label:
          "Asscher Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "marquise-shape": {
    title: "Marquise Diamonds",
    description:
      "Celebrate elegance with our marquise-cut diamond rings, distinguished by their elongated shape and graceful curves. Available in yellow gold, white gold, rose gold, or platinum settings, these rings offer a unique blend of vintage charm and contemporary allure, making them an exquisite choice for those who seek timeless beauty and refined craftsmanship. Each ring is crafted with precision to accentuate the diamond's brilliance, creating a piece that embodies sophistication and grace.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Marquise"),
    faqs: [
      {
        key: "1",
        label:
          "Marquise Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "radiant-shape": {
    title: "Radiant Diamonds",
    description:
      "Our radiant-cut diamond rings are designed to dazzle and delight. Featuring a rectangular shape that maximizes brilliance, these rings are set in yellow gold, white gold, rose gold, or platinum, capturing the essence of sophistication and luxury with every facet. Each ring is meticulously crafted to reflect the diamond's radiance and fire, creating a piece that stands out as a symbol of elegance and refinement, perfect for celebrating love and achievement.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Radiant"),
    faqs: [
      {
        key: "1",
        label:
          "Radiant Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
  "pear-shape": {
    title: "Pear Diamonds",
    description:
      "Embrace elegance with our pear-shaped diamond rings, admired for their graceful silhouette and feminine allure. Set in yellow gold, white gold, rose gold, or platinum, these rings are designed to reflect the diamond's natural brilliance and sophistication, making them a perfect symbol of everlasting love and refinement. Each ring is a testament to exceptional craftsmanship and timeless design, ideal for marking life's most cherished moments with elegance and style.",
    diamonds: diamonds.filter((diamond) => diamond.shape === "Pear"),
    faqs: [
      {
        key: "1",
        label:
          "Pear Diamond What is the average cost of a womens diamond wedding ring?",
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
      "https://firebasestorage.googleapis.com/v0/b/testsaveimage-abb59.appspot.com/o/BannerProductList%2Fsnapedit_1719690260501.jpg?alt=media&token=a445aaed-698e-4696-a34a-39e978168f89",
  },
};