import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./product/ProductList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeForm } from './employee/EmployeeForm'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kandy_customer") !== null)

const setAuthUser = (user) => {
	sessionStorage.setItem("kandy_customer", JSON.stringify(user))
	setIsAuthenticated(sessionStorage.getItem("kandy_customer") !== null)
}

    return (
        <>           
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
	            <Login setAuthUser={setAuthUser}/>
            </Route>
            <Route path="/register">
              <Register setAuthUser={setAuthUser}/>
            </Route>
            <Route exact path="/locations">
              <LocationList />
            </Route>
            <Route exact path="/products">
              <ProductList />
            </Route>
            <Route exact path="/customers">
              <CustomerList />
            </Route>
            <Route exact path="/employees">
              <EmployeeList />
            </Route>
            <Route path="/employees/create">
              <EmployeeForm />
            </Route>            
        </>
    )
}
