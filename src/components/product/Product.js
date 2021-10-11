import React from "react"
import "./Product.css"

export const Product = ({product}) => (
    <section className="product">
        <h2 TESTING />
        <h3 className="product__name">{product.name}</h3>
        <div className="product__productTypes">{product.productType}</div>
        <div className="product__price">${product.price}</div>
    </section>
)
