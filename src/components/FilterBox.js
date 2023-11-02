import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";

import { FiCreditCard} from "react-icons/fi";
const FilterBox = (props) => {
  const{search,setSearch,fromYear,setFromYear,toYear,setToYear,department,setDepartment,designation,setDesignation}=props;

  // remove flters 
  const removeFilters=()=>{
    setSearch('');
    setDepartment('');
    setFromYear(0);
    setToYear(new Date().getFullYear());
    setDesignation('');
  }
  return (
    <div className='2xl:w-4/5 lg:w-[90%] md:w-[95%] mx-auto px-5 py-2'>
      <div className='flex  justify-between p-2 rounded-md border-2 border-gray-200 my-2 gap-x-2 '>
       

    
    <div className='flex items-center gap-2 px-2 min-w-max'>
      <p>Max Price</p>
      <input type='range' min={100} max={2000} step={100}
       onInput={()=>document.getElementById('rangeOutput').value=document.getElementById('rangeInput').value}
        id='rangeInput' className='cursor-pointer bg-gray-500 accent-gray-600'/>
      <output name='rangeOutput' id='rangeOutput'>100</output>
    </div>

    <div className='px-5 py-1 flex  rounded-md bg-gray-600 w-[70%]'>  
        <FiSearch className='m-auto text-white'/>   
    <input placeholder='Search your wishes' className='w-full px-4 py-1 rounded outline-none bg-inherit text-white' value={search} onChange={(e)=>props.setSearch(e.target.value)}/>
    </div>
  
    <div className='px-4 py-1 rounded-md bg-white flex  gap-x-2'>
      <FiCreditCard className='m-auto'/>
        <select className='bg-white' name="Department" id="Department" placeholder='Department' value={department} onChange={(e)=>props.setDepartment(e.target.value)}>
            <option value="">Category</option>
  <option value="Ethnic">Ethnic</option>
  <option value="Casual">Casual</option>
  <option value="Party wear">Party wear</option>
  <option value="Lofer">Lofer</option>
</select>
</div>

<div className='px-4 py-1   rounded-md bg-white flex gap-x-2'>
  <FiBookOpen className='m-auto'/>
        <select className='bg-white' name="Designation" id="Designation" placeholder='Designation' value={designation} onChange={(e)=>props.setDesignation(e.target.value)}>
            <option value="">Designation</option>
  <option value="Professor">Professor</option>
  <option value="Assistant Professor">Assistant Professor</option>
  <option value="Associate Professor">Associate Professor</option>
</select>
</div>


{/* <div>
  <button className='hover:bg-[#7e22ce] hover:text-white text-black bg-white  px-2 rounded py-1 cursor-pointer '>Remove filter</button>
</div> */}
<div className='flex min-w-max'>
  <button className='bg-gray-600 items-center text-white px-2 rounded py-1 cursor-pointer hover:opacity-50 m-auto' onClick={removeFilters}>Remove filter</button>
</div>
</div>
</div>
  )
}

export default FilterBox