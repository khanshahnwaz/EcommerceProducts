import React from "react";

import { RxDoubleArrowLeft } from "react-icons/rx";
import { TbBrandWindows } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import SearchField from "./SearchField";
import { FiCreditCard } from "react-icons/fi";
const MobileViews = (props) => {
  const removeFilters=()=>{
    props.setSearch('');
    props.setCategory('');
    props.fetchData();
    
  }
  return (
    <div
      className={` lg:hidden w-full sm:w-max    h-full 
         bg-gray-400
       text-left py-10 px-10  absolute top-0 ${
        props.controlSideBar
      }  z-50 transition-all ease-in-out duration-1000 `}
    >
      <div className="w-4/5 mx-auto sm:mx-0 lg:mx-auto text-left grid gap-y-5 ">
        <div className="flex lg:gap-x-4 lg:justify-start justify-between">
          <h1 className="text-white font-semibold text-left ">Apni Dukaan</h1>
          <RxDoubleArrowLeft
            onClick={() => props.setControlSideBar("-left-[200%]")}
            className="cursor-pointer lg:hidden my-auto text-3xl font-bold text-white"
          />
        </div>
        <SearchField
          filterByCategory={props.filterByCategory}
        />

        <div className="w-full flex  p-2 rounded-md justify-between text-gray-500 bg-gray-600">
        <div className='p-3  cursor-pointer e flex  gap-x-2 border-2 border-gray-600 rounded-lg w-full'>
      <FiCreditCard className='my-auto'/>
        <select className='bg-inherit text-gray-400 w-full' name="Department" id="Department" placeholder='Department' value={props.category} onChange={(e)=>props.setCategory(e.target.value)}>
            <option value="">Category</option>
  <option value="electronics">Electronics</option>
  <option value="jewelery">Jewelery</option>
  <option value="men's clothing">Men's clothing</option>
  <option value="women's clothing">Women's clothing</option>
</select>
</div>
        </div>
        <div className='flex w-full rounded-md'>
  <button className='bg-gray-200 items-center  p-3 rounded  cursor-pointer hover:opacity-50 w-full' onClick={removeFilters}>Remove filter</button>
</div>
        
   
        
      </div>
    </div>
  );
};

export default MobileViews;
