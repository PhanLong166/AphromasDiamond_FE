import React, { createContext, useState, useContext } from 'react';
import { products as initialProducts } from '../shared/ListOfProducts'; // Adjust path as needed

interface Product {
    id: string;
    shape: string;
    metal: string;
    name: string;
    price: number;
    salePrice?: number;
    image: string;
    image1?: string;
    image2?: string;
    image3?: string;
    hoverImage: string;
    description: string;
  }

interface ProductContextType {
  products: Product[];
  wishList: string[];
  toggleWishList: (productId: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(initialProducts);
  const [wishList, setWishList] = useState<string[]>([]);

  const toggleWishList = (productId: string) => {
    setWishList(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const contextValue: ProductContextType = {
    products,
    wishList,
    toggleWishList,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
