import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card'
import FilterBox from './components/FilterBox';
function App() {
  const [products,setProducts]=useState([])
  // pagination
  const[startIndex,setStartIndex]=useState(0);
  const[lastIndex,setLastIndex]=useState(12);
  const fetchData=async ()=>{
   const response=await fetch('https://fakestoreapi.com/products?limit=50',{
    method:'GET'
    
   })
   const data=await response.json();
   console.log(data);
   setProducts(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    <FilterBox/>
    <div className='flex  justify-between mx-4 text-sm'>
<div>
  {startIndex+1} to {lastIndex} results, out of {products.length}
</div>
<div className='w-max h-max hover-opacity-50 '>
  <select className='text-gray-300 cursor-pointer  bg-gray-600 px-2 rounded-md py-1'>
    
    <optgroup className='cursor-pointer opacity-50 w-max px-2'>
      <option>Sort results</option>
      <option>Price low to high</option>
      <option>Price high to low</option>

    </optgroup>
  </select>
</div>
    </div>
    <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 ">
      
    {
      products.map((item,i)=>{
        if(i>=startIndex && i<lastIndex){
        return <Card image={item.image} price={item.price} description={item.title} rating={item.rating.rate} count={item.rating.count} key={i}/>
        }
      })
    }
    
  </div>
  <div className='mx-10 max-w-screen'>
    <div className='text-center w-full'>
        {startIndex>0?<button className='border-2 bg-gray-300 px-4 py-1 rounded-md m-2 hover:opacity-60 ' onClick={()=>[setLastIndex(startIndex),setStartIndex(startIndex-12)]}>Prev</button>:null}
        
        {lastIndex<products.length?<button className=' border-2 bg-gray-300 px-4 py-1 rounded-md m-2 hover:opacity-60 ' onClick={()=>[setStartIndex(lastIndex),setLastIndex(lastIndex+12)]}>Next</button>:null}
        
      </div>
    </div>
  </>
  );
}

export default App;
