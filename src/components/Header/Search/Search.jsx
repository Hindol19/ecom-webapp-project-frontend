import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
    //event.target.value is the value inputed by user in rela time
  };

  let { data } = useFetch(
    "/api/products?populate=*&filters[title][$contains]=" + query
  );

  if (!query.length) {
    data = null;
  }
  console.log(data);

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search For Products"
          value={query}
          onChange={handleChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          {data?.data.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={item?.attributes?.img?.data?.[0]?.attributes?.url}
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
