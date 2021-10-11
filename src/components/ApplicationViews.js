import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./product/ProductList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { Location } from "./location/Location"
import { EmployeeForm } from './employee/EmployeeForm'


export const ApplicationViews = () => {
    return (
        <> 
          
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/location">
              <Location />
            </Route>
            <Route exact path="/products">
              <ProductList />
            </Route>
            <Route exact path="/employees">
              <EmployeeList />
            </Route>
            <Route path="/employees/create">
              <EmployeeForm />
            </Route>

            {/* <Route exact path="/customers">
              <CustomerList />
            </Route> */}
        </>
    )
}
