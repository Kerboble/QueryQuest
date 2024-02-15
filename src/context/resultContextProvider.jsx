import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('nike');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'Get',
            headers: {
                'X-RapidAPI-Key': 'b8c6d07cb8msh70e72d3c8563bbap1a6d6fjsn6724fe31ba0d',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
              } 
        });

        const data = await response.json();
        console.log(data)

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);
