import React from "react";
import "./Employee.css";

export const Employee = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__address">{employee.address}</div>
        <div className="employee__locationId">{employee.locationId}</div>
        <div className="employee__manager">{employee.manager}</div>
        <div className="employee__fulltime">{employee.fulltime}</div>
        <div className="employee__hourlyrate">{employee.hourlyrate}</div>
    </section>
)