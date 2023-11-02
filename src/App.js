import "./App.css";
import { useEffect, useState } from "react";
import FilterBox from "./components/FilterBox";
import HomeScreenLoader from "./components/ScreenLoader";
import ProductsContainer from "./components/ProductsContainer";
import { MdOutlineMenu } from "react-icons/md";
import MobileViews from "./components/MobileHeader";
function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  // pagination
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(
    products.length < 12 && products.length > 0 ? products.length : 12
  );

  // state to manage responsive header
  const [controlSideBar, setControlSideBar] = useState("-left-[200%]");

  // flag to show loader while images are loading
  const [showLoader, setShowLoader] = useState(true);
  // state to manage text in search field
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const data = await response.json();
    setShowLoader(false);
    console.log(data);
    setProducts(data);
  };

  // function to sort the results based on price
  const sortData = async (sort) => {
    const compare = (first, second) => {
      // console.log(first ," and ",second)
      if (sort) {
        // prince in increasing order
        if (first.price <= second.price) return -1;
        if (first.price > second.price) return 1;
        return 0;
      } else {
        if (first.price < second.price) return 1;
        if (first.price >= second.price) return -1;
        return 0;
      }
    };
    // sort variable to check the flow of sorting, low to high or high to low
    console.log("sorting the data", products);
    // setProducts(products.sort(compare));
    const oldProducts = [...products];
    oldProducts.sort(compare);
    console.log("oldProducs", oldProducts);

    setProducts(oldProducts);
    // console.log("updated products ",products)
  };

  // filter products by category
  const filterByCategory = async (category) => {
    console.log("categories ", category);
    setShowLoader(true);
    if (category) {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setShowLoader(false);
      console.log(data);
      setProducts(data);
      // if(products.length<12)setLastIndex(products.length)
    } else fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="lg:hidden flex justify-between md:space-x-7 w-full py-3 px-2 ">
        <MdOutlineMenu
          onClick={() => setControlSideBar("left-0")}
          className="cursor-pointer hover:opacity-70 my-auto text-3xl"
        />
        <h1 className=" text-2xl font-bold font-serif">Apni Dukaan</h1>
      </div>
      <MobileViews
        controlSideBar={controlSideBar}
        setControlSideBar={setControlSideBar}
        category={category}
        setCategory={setCategory}
        filterByCategory={filterByCategory}
        search={search}
        setSearch={setSearch}
        fetchData={fetchData}

      />
      <FilterBox
        category={category}
        setCategory={setCategory}
        filterByCategory={filterByCategory}
        search={search}
        setSearch={setSearch}
        fetchData={fetchData}
      />
      <div className="flex  justify-between mx-4 text-sm">
        <div>
          {startIndex + 1} to{" "}
          {products.length > 12 ? lastIndex : products.length} results, out of{" "}
          {products.length}
        </div>
        <div className="w-max h-max hover-opacity-50 ">
          <select className="text-white cursor-pointer  bg-gray-600 px-2 rounded-md py-1">
            <optgroup className="cursor-pointer opacity-50 w-max px-2">
              <option onClick={() => fetchData()}>Sort products</option>
              <option onClick={() => sortData(true)}>Price low to high</option>
              <option onClick={() => sortData(false)}>Price high to low</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 m-10 ">
        {showLoader ? (
          <HomeScreenLoader />
        ) : (
          <ProductsContainer
            products={products}
            startIndex={startIndex}
            lastIndex={lastIndex}
          />
        )}
      </div>
      <div className="mx-10 max-w-screen">
        <div className="text-center w-full">
          {startIndex > 0 ? (
            <button
              className="border-2 bg-gray-300 px-4 py-1 rounded-md m-2 hover:opacity-60 "
              onClick={() => [
                setLastIndex(startIndex),
                setStartIndex(startIndex - 12),
              ]}
            >
              Prev
            </button>
          ) : null}

          {lastIndex < products.length ? (
            <button
              className=" border-2 bg-gray-300 px-4 py-1 rounded-md m-2 hover:opacity-60 "
              onClick={() => [
                setStartIndex(lastIndex),
                setLastIndex(lastIndex + 12),
              ]}
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
