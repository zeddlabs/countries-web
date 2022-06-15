import { Link } from "react-router-dom";

function Card({ flagUrl, name, population, region, capital }) {
  return (
    <Link to={name.toLowerCase()}>
      <div className="overflow-hidden rounded-lg bg-white w-64 shadow-md cursor-pointer dark:bg-dark-mode-elements">
        <div>
          <img src={flagUrl} alt={name} />
        </div>
        <div className="p-8 font-semibold">
          <h1 className="font-extrabold text-xl mb-4">{name}</h1>
          <ul>
            <li>
              Population:&nbsp;
              <span className="font-light">
                {parseInt(population).toLocaleString("en-US")}
              </span>
            </li>
            <li>
              Region: <span className="font-light">{region}</span>
            </li>
            <li>
              Capital: <span className="font-light">{capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default Card;
