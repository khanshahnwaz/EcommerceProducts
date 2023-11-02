import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card'
import FilterBox from './components/FilterBox';
import HomeScreenLoader from './components/ScreenLoader';
import ProductsContainer from './components/ProductsContainer';
function App() {
  const [products,setProducts]=useState([])
  // pagination
  const[startIndex,setStartIndex]=useState(0);
  const[lastIndex,setLastIndex]=useState(12);
  // flag to show loader while images are loading 
  const [showLoader,setShowLoader]=useState(true);
  const fetchData=async ()=>{
   const response=await fetch('https://fakestoreapi.com/products',{
    method:'GET'
   })
   const data=await response.json();
   setShowLoader(false);
   console.log(data);
   setProducts(data)
  }

  // function to sort the results based on price 
  const sortData=async (sort)=>{

    const compare=(first,second)=>{
      // console.log(first ," and ",second)
      if(sort){
        // prince in increasing order
        if(first.price<=second.price)return -1;
        if(first.price>second.price)return 1;
        return 0;
      }else{
        if(first.price<second.price)return 1;
        if(first.price>=second.price)return -1;
        return 0;
      }
    }
    // sort variable to check the flow of sorting, low to high or high to low
    console.log("sorting the data",products)
      // setProducts(products.sort(compare));
      const oldProducts=products;
      await oldProducts.sort(compare)
      console.log("oldProducs",oldProducts)

      setProducts(oldProducts)
      // console.log("updated products ",products)
  }
  useEffect(()=>{
    fetchData()
  },[])
  useEffect(()=>{
    // console.log("data is sorted ",products)
  },[products])
  return (
    <>
    <FilterBox/>
    <div className='flex  justify-between mx-4 text-sm'>
<div>
  {startIndex+1} to {lastIndex} results, out of {products.length}
</div>
<div className='w-max h-max hover-opacity-50 '>
  <select className='text-white cursor-pointer  bg-gray-600 px-2 rounded-md py-1'>
    
    <optgroup className='cursor-pointer opacity-50 w-max px-2'>
      <option>Sort results</option>
      <option onClick={()=>sortData(true)}>Price low to high</option>
      <option onClick={()=>sortData(false)}>Price high to low</option>

    </optgroup>
  </select>
</div>
    </div>
    <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 ">
      
    {
      showLoader?(<HomeScreenLoader/>):<ProductsContainer products={products} startIndex={startIndex} lastIndex={lastIndex}/>
     
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
