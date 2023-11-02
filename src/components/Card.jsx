import React from 'react';
import Rating from './StarRating';

const ProductCard = ({ image, price, description ,rating,count}) => {
  return (
    <div className=" bg-white shadow-lg rounded-xl  transition-opacity duration-500 ease-in-out hover:opacity-50 hover:shadow-3xl cursor-pointer p-5 text-center  ">
      <img className="w-auto lg:h-56 md:h-48 h-44 xl:h-60 mx-auto" src={image} alt="Product" />
      <div className="px-4 py-2">
       
     <p className="my-2 text-gray-800 font-semibold break-words">{description}</p>
     <Rating rating={rating} count={count}/>

     <h1 className="text-gray-900 font-bold text-2xl my-2">${price}</h1>

        <p className="mt-2 text-gray-600 font-semibold break-words">Free Delivery</p>
      </div>
    </div>
  );
};

export default ProductCard;
