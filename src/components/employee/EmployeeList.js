import React, { useState, useEffect } from 'react';
import { Employee } from './Employee';
import { getAllEmployees, getEmployeeById } from '../../modules/EmployeeManager';
import { useHistory } from "react-router";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();

  const getEmployees = () => {
    return getAllEmployees().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };
  
  useEffect(() => {
    getEmployees();
  }, []);
  
  return (
    <>
<section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {history.push("/employees/create")}}>
      Admit Employee
  </button>
</section>
    <div className="employee">
      {employees.map(employee => 
      <Employee key={employee.id} employee={employee}/>)}
    </div>
    </>
  );
}; 