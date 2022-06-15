import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";

function Home() {
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [defaultCountries, setDefaultCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    return await fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setDefaultCountries(data), setCountries(data), setIsLoading(false);
      });
  };

  const inputOnChange = async (input) => {
    const filteredCountries = defaultCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(input.toLowerCase());
    });

    setInput(input);
    setCountries(filteredCountries);
  };

  const selectOnClick = async (select) => {
    const filteredCountries = defaultCountries.filter((country) => {
      return country.region.toLowerCase().includes(select.toLowerCase());
    });

    setRegion(select);
    setCountries(filteredCountries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 md:flex-row justify-between">
        <SearchBar keyword={input} setKeyword={inputOnChange} />
        <SelectBar setRegion={selectOnClick} />
      </div>
      <div className="flex flex-wrap justify-center lg:justify-between gap-8">
        {isLoading ? <p>Wait...</p> : ""}
        {countries.length > 0 ? (
          countries.map((country) => (
            <Card
              flagUrl={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              key={country.name.common}
            />
          ))
        ) : !isLoading ? (
          <p>No data.</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home;
