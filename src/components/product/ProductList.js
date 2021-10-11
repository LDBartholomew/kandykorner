import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import { getAllLocations, getLocationById } from '../../modules/LocationManager';

export const ProductList = () => {
  
  const [products, setProducts] = useState([]);
 
  const getProducts = () => {  
  
    return getProducts().then(ProductsFromAPI => {
    // setProducts(productsFromAPI)
  });
};

  useEffect(() => {
    setProducts();
  }, []);
  
  return (
    <div className="product">
      {products.map(product => 
      <Product key={product.id} product={product}/>)}
    </div>
  );
};    
                                   