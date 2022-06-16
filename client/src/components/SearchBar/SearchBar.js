import React, { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import "./SearchBar.css";
import "../../styles/global.css";
import { useNavigate } from "react-router-dom";

const SearchBar = ({
  placeholder,
  data,
  setSelectedMedicine,
  setPrice,
  type,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const navigate = useNavigate();
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="search-inputs">
        <input
          type="text"
          placeholder={placeholder}
          size="40"
          value={wordEntered}
          onChange={handleFilter}
        />

        <div className="search-icon">
          {filteredData.length === 0 ? (
            <MdSearch size="2em" className="icon" />
          ) : (
            <MdClose size="2em" onClick={clearInput} />
          )}
        </div>
      </div>
      <div className="smallscreen-input">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="smallscreen-icon">
          {filteredData.length === 0 ? (
            <MdSearch size="2em" className="icon" />
          ) : (
            <MdClose size="2em" onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div
                className="data-item"
                onClick={() => {
                  if (type === "shop") {
                    setSelectedMedicine(value);
                    setPrice(value.price);
                    clearInput();
                  } else {
                    if (value.diseases) navigate(`/product/${value._id}`);
                    else navigate(`/disease/${value._id}`);
                  }
                }}
              >
                <p>{value.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
