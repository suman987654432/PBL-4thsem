import React from 'react';
import { check_icon } from '../../assets';

const Checkout = ({ title, price, discountedPrice, features, onClick }) => {

    return (
        <div className="bg-n-10/30 w-80 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <div>
                <div className='flex gap-5'>
                    {discountedPrice && <h1 className="h1 md:h3 font-bold mb-6 text-3xl">₹ {discountedPrice} <span className="body-2">/months</span></h1>}
                <h1 className={`h1 md:h3 font-bold mb-6 text-3xl ${discountedPrice ? 'line-through text-gray-500' : ''}`}>₹ {price} {!discountedPrice && <span className="body-2 ml-1">/months</span>}</h1>
                </div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-4 body-2">For most businesses that want to optimize web queries</p>
                <ul className="list-none body-2 mb-5">
                    {features.map((feature, featureIndex) => (
                        <li key={featureIndex} className='flex items-center'><img src={check_icon} alt="check" className="mr-2 bg-green-700 rounded-full p-[2px] w-5" /> {feature} </li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-center items-center mt-8">
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={onClick} >Order Now</button>
            </div>
        </div>
    );
};

export default Checkout;