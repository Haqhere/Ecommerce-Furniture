
import React, { useContext, useState } from 'react';
import './Search.css';
import Frnitems from '../../Components/FITEM/Frnitems';
import { StoreContext } from '../../Components/Context/StoreContext';

const Search = () => {
  const { Fitems } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredItems = Fitems.filter(item =>
    item.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <div className="relative">
        <input
          placeholder="Search..."
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
          name="search"
          type="search"
          onChange={handleSearchChange}
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>

      <div className='f-brows' id='f-brows'>
        <h2>Best quality furniture</h2>
        <div className="brows-list">
          {filteredItems.map((item, index) => (
            <Frnitems
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
