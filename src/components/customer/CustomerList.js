import React, { useState, useEffect } from 'react';
import { Customer } from './Customer';
import { getAllCustomers, getCustomerById } from '../../modules/CustomerManager';

export const CustomerList = () => {

    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {

        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <div className="customer">
            {customers.map(customer =>
                <Customer key={customer.id} customer={customer} />)}
        </div>
    );
};
