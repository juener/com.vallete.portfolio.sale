'use client'

import React, { createContext, useEffect, useState } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [total, setTotal] = useState(0.00);

  const addProduct = product => {
    const entryNumber = productsList.length + 1;
    const productWithEntryNumber = { ...product, entryNumber };
    setProductsList([...productsList, productWithEntryNumber]);
  };

  const removeProduct = entryNumber => {
    setProductsList(productsList.filter(product => product.entryNumber !== entryNumber));
  }

  const removeAllProducts = () => {
    setProductsList([]);
  }

  const calcTotal = () => {
    const sum = productsList?.reduce((acc, product) => acc + product.price, 0);
    setTotal(sum);
  };

  useEffect(() => {
    calcTotal();
  });

  return (
    <ProductsContext.Provider value={
      {
        productsList, total,
        addProduct, removeProduct, removeAllProducts
      }
    }>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
