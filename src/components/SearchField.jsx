import React,{useState} from 'react'
import { FiSearch } from 'react-icons/fi';

const SearchField = ({filterByCategory,search,setSearch}) => {
    const suggestions=['jewelery',"men's clothing","women's clothing",'electronics','we do not have all store'];
  const[showSuggesstion,setShowSuggestion]=useState(true)
  return (
    <>
    <div className='px-5 py-1 flex  rounded-md bg-gray-600 w-full relative'>  
    <FiSearch className='m-auto text-white'/>   
<input placeholder='Search your wishes' className='w-full px-4 py-1 rounded outline-none bg-inherit text-white' value={search} onChange={(e)=>[setSearch(e.target.value),setShowSuggestion(true)]}/>
</div>
<div className='relative'>
<ul
    className={`text-left   ${
      search && showSuggesstion ? ["bg-white"] : "hidden"
    } font-semibold absolute left-10 -top-0 p-3 pr-10  z-10 text-gray-500`}
  >
    {suggestions.map((item, i) => {
      if (i <= 5)
        return (
          <li
            onClick={() =>[setSearch(item),filterByCategory(item),setShowSuggestion(false)]}
            className="p-1 hover:underline cursor-pointer hover:font-bold"
            key={i}
          >
            {item}
          </li>
        );
    })}
  </ul>
  
  </div>
  </>
  )
}

export default SearchField