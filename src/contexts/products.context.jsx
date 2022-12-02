import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

// this section is later changed to 'categories.context.jsx'

// Refresh page once to run this function and load the document
// then comment out the 'addCollectionAndDocuments' useEffect
// check console.log to see 'done'
// check firebse to see info loaded

// comment out line 5

// then uncomment out the 'getCategoriesMap' useEffect



export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocuments('collections', SHOP_DATA);
  // }, []);

  // useEffect(()=>{
  //   const getCategoriesMap = async () => {
  //      const categoryMap = await getCategoriesAndDocuments();
  //      console.log(categoryMap);
  //   }
  //   getCategoriesMap();
  //}, []);



  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};