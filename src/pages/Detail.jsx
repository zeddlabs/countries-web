import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CountryInfo from "../components/CountryInfo";

function Detail() {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  const fetchData = async () => {
    return await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry({ ...data[0] }), setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <>
      <Link
        to="/"
        className="bg-white dark:bg-dark-mode-elements shadow-md py-2 text-sm font-semibold flex items-center justify-center gap-2 w-32 mb-8"
      >
        <i className="bx bx-arrow-back text-base"></i>Back
      </Link>

      {isLoading ? <p>Wait...</p> : <CountryInfo country={country} />}
    </>
  );
}

export default Detail;
