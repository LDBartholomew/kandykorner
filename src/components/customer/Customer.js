import React from "react"
import "./Customer.css"

export const Product = () => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__email">{customer.email}</div>
    </section>
)