import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import { getAllProducts, getProductById } from '../../modules/ProductManager';

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const getProducts = () => {    
    return getAllProducts().then(productsFromAPI => {
    setProducts(productsFromAPI)
  });
};
  useEffect(() => {
    getProducts();
  }, []);  
  return (
    <div className="product">
      {products.map(product => 
      <Product key={product.id} product={product}/>)}
    </div>
  );
};    
                                   