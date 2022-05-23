import React, {useState} from "react";
import { MdSearch, MdClose } from "react-icons/md";
import "./SearchBar.css";
import "../../styles/global.css";


const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) =>{
       return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if(searchWord==="")
    {
      setFilteredData([])
    }else{
      setFilteredData(newFilter);
    }
  }
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  }
  return (
    <div className="search">
      <div className="search-inputs">
        <input type="text" placeholder={placeholder} size="40" value={wordEntered} onChange={handleFilter} />

       
        <div className="search-icon">
          {filteredData.length === 0 ?
          <MdSearch size="2em" className="icon" /> : 
          <MdClose size="2em" onClick={clearInput}/>}
        </div>
      </div>
      <div className="smallscreen-input">
      <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
      <div className="smallscreen-icon">

        
      {filteredData.length === 0 ?
          <MdSearch size="2em" className="icon" /> : 
          <MdClose size="2em" onClick={clearInput}/>}
      </div>
      </div>


      {filteredData.length!=0 &&
      <div className="data-result">
        {filteredData.slice(0, 15).map((value, key)=>{
          return(
            <a href="/" className="data-item">
              <p>{value.title}</p>
            </a>
          )
        })}
      </div>
      }
    </div>
  );
};

export default SearchBar;
