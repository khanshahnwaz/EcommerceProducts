import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";

import { FiCreditCard } from "react-icons/fi";
import SearchField from "./SearchField";
const FilterBox = (props) => {
  const { category, setCategory, filterByCategory, setSearch, search,fetchData } = props;

  // remove flters
  const removeFilters = () => {
    setSearch("");
    setCategory("");
    fetchData();
  };
  useEffect(() => {
    filterByCategory(category);
  }, [category]);
  return (
    <div className="hidden lg:block 2xl:w-4/5 lg:w-[90%] md:w-[95%] mx-auto px-5 py-2">
      <div className="flex  justify-between p-2 rounded-md border-2 border-gray-200 my-2 gap-x-2 ">
        {/* <div className='flex items-center gap-2 px-2 min-w-max'>
      <p>Max Price</p>
      <input type='range' min={100} max={2000} step={100}
       onInput={()=>document.getElementById('rangeOutput').value=document.getElementById('rangeInput').value}
        id='rangeInput' className='cursor-pointer bg-gray-500 accent-gray-600'/>
      <output name='rangeOutput' className='w-8' id='rangeOutput'>100</output>
    </div> */}

        <div>
          <h1 className="font-bold text-xl w-max px-2 flex items-center">
            Apni Dukaan
          </h1>
        </div>
        <div className="w-[70%]">
          <SearchField
            filterByCategory={filterByCategory}
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="px-4  cursor-pointer bg-white flex  gap-x-2 border-2 border-gray-600 rounded-lg">
          <FiCreditCard className="m-auto" />
          <select
            className="bg-white "
            name="Department"
            id="Department"
            placeholder="Department"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        {/* <div>
  <button className='hover:bg-[#7e22ce] hover:text-white text-black bg-white  px-2 rounded py-1 cursor-pointer '>Remove filter</button>
</div> */}
        <div className="flex min-w-max">
          <button
            className="bg-gray-600 items-center text-white px-2 rounded py-1 cursor-pointer hover:opacity-50 m-auto"
            onClick={removeFilters}
          >
            Remove filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
