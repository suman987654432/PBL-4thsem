import React from 'react';
import { check_icon } from '../../assets';
import { plans } from '../../constants';
import { Link } from 'react-router-dom';

const PriceCard = () => {
    return (
        <div className="my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {plans.map((plan, index) => (
                    <div key={index} className={`shadow-lg rounded-lg p-6 hover:md:mt-[-20px] hover:md:mb-[20px] flex flex-col justify-between ${plan.name === 'Pro' ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:md:mt-[-20px] hover:md:mb-[20px] shadow_special' : 'bg-n-10/30 md:mt-[10px]'} z-2`} style={{ transition: 'margin-top 0.3s, margin-bottom 0.3s' }} >
                        <div>
                            <h1 className={`h1 md:h2 font-bold mb-6 ${plan.name === 'Pro' ? 'text-3xl' : 'text-3xl'}`}>₹ {plan.price}<span className="body-2 ml-3">/months</span></h1>
                            <h2 className={`text-2xl font-bold mb-4 ${plan.name === 'Pro' ? 'text-4xl' : 'text-2xl'}`}>{plan.name}</h2>
                            <p className="mb-4 body-2">For most businesses that want to optimize web queries</p>
                            <ul className="list-none body-2 mb-5">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className='flex items-center'><img src={check_icon} alt="check" className="mr-2 bg-n-7/50 rounded-full p-[2px] w-5" /> {feature} </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex justify-center items-center mt-6">
                            <Link to={`/payment/${index}`}>
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Choose Plan Now</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceCard;