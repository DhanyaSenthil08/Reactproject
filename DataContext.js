// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a Context
export const DataContext = createContext();

// Create a Provider component
export const DataProvider = ({ children }) => {
  const [pharmacistsData, setPharmacistsData] = useState([]);
  const [medicinesData, setMedicinesData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoints
        const pharmacistsResponse = await axios.get('/api/pharmacists'); // API for pharmacists
        const medicinesResponse = await axios.get('/api/medicines'); // API for medicines

        setPharmacistsData(pharmacistsResponse.data);
        setMedicinesData(medicinesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ pharmacistsData, medicinesData }}>
      {children}
    </DataContext.Provider>
  );
};
