import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"


export const KandyKorner = () => (
    <>
    <h2>Kandy Korner</h2>
    <small>Promoting obesity since 1903.</small>
    <address>
        <div>Visit Us at the Gulch Location</div>
        <div>500 Candy Cane Lane</div>
    </address>
    </> 
)


/* 
 <>
    <NavBar />
    <ApplicationViews />
    </>
*/