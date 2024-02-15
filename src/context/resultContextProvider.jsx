import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('nike');

  const getResults = async (media, type) => {
    setIsLoading(true);

    let response;

    try {
      if (media === "images") {
        response = await fetch(`${baseUrl}${type}`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'e91e70175cmsh6902ff3d8e3487ep147cbajsndedf5dd0f008',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
          }
        });
      } else {
        response = await fetch(`${baseUrl}${type}`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'b8c6d07cb8msh70e72d3c8563bbap1a6d6fjsn6724fe31ba0d',
            'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
          }
        });
      }

      const data = await response.json();
      console.log(data);

      setResults(data);
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
