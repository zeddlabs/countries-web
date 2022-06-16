import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountryInfo({ country }) {
  const [borders, setBorders] = useState([]);
  const countriesCode = country.borders
    ? country.borders
        .map((b) => b)
        .join(",")
        .toLowerCase()
    : "";

  const fetchData = async () => {
    return await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${countriesCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBorders(data);
      });
  };

  useEffect(() => {
    if (countriesCode) {
      fetchData();
    }
  }, [country]);

  return (
    <div className="flex gap-8 lg:gap-24 items-center flex-wrap md:flex-nowrap mb-12">
      <div className="shadow-md lg:w-1/2">
        <img src={country.flags.svg} alt="" className="w-full" />
      </div>
      <div>
        <h1 className="font-extrabold text-2xl mb-4">{country.name.common}</h1>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 sm:gap-16 md:gap-4 lg:gap-16 mb-8">
          <ul>
            <li className="flex flex-wrap gap-1">
              <span className="font-semibold">Native Name:</span>{" "}
              {country.name.nativeName
                ? Object.values(country.name.nativeName)
                    .map((n) => n.common)
                    .join(", ")
                : "None"}
            </li>
            <li className="flex flex-wrap gap-1">
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </li>
            <li className="flex flex-wrap gap-1">
              <span className="font-semibold">Region:</span> {country.region}
            </li>
            <li className="flex flex-wrap gap-1">
              <span className="font-semibold">Sub Region:</span>{" "}
              {country.subregion}
            </li>
            <li className="flex flex-wrap gap-1">
              <span className="font-semibold">Capital:</span>{" "}
              {country.capital.map((c) => c).join(", ")}
            </li>
          </ul>
          <ul>
            <li className="flex flex-wrap gap-1">
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {country.tld.map((t) => t).join(", ")}
            </li>
            <li className="flex flex-wrap gap-1">
              <span className="font-semibold">Currencies:</span>{" "}
              {Object.values(country.currencies)
                .map((c) => c.name)
                .join(", ")}
            </li>
            <li className="flex flex-wrap gap-1">
              <span className="font-semibold">Languages:</span>{" "}
              {Object.values(country.languages)
                .map((l) => l)
                .join(", ")}
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <p className="font-semibold">Border Countries: </p>
          {borders ? (
            borders.map((b) => (
              <Link
                to={`/${b.name.common.toLowerCase()}`}
                key={b.name.common}
                className="py-1 px-4 bg-white dark:bg-dark-mode-elements shadow-sm rounded"
              >
                {b.name.common}
              </Link>
            ))
          ) : (
            <p>None</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
