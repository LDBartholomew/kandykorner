import React, { useState, useEffect } from 'react';
import { Location } from './Location';
import { getAllLocations, getLocationById } from '../../modules/LocationManager';
//import "./Location.css";

export const LocationList = () => {
  const [locations, setLocations] = useState([]);
 
  const getLocations = () => {  
  return getAllLocations().then(locationsFromAPI => {
    setLocations(locationsFromAPI)
  });
};

  useEffect(() => {
    setLocations();
  }, []);
  
  return (
    <div className="location">
      {locations.map(location => 
      <Location key={location.id} location={location}/>)}
    </div>
  );
};    
                                   