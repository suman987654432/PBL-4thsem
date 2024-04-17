import React, { useState } from 'react';
import { contents } from '../constants';
import { arrow_right, calendar, minus, plus } from '../assets';
import { Link } from 'react-router-dom';

const Support = () => {

    const [visibleCardIndex, setVisibleCardIndex] = useState(0);

    const toggleVisibility = (index) => {
        setVisibleCardIndex(visibleCardIndex === index ? null : index);
    };

    return (
        <section className='container my-16'>
            <div className="text-center">
                <h1 className="h3">All the Data You Need in One Convenient Hub</h1>
                <p className="body-1 max-w-3xl mx-auto mb-10 text-n-2 lg:mb-8">Finally, an influencer marketing platform designed to streamline every step of your influencer marketing campaign.</p>
            </div>

            {/* For mobile */}
            {contents.map((content, index) => (
                <div className="mb-4 lg:hidden" key={index}>
                    <div className="flex justify-between p-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 mb-5 cursor-pointer" onClick={() => toggleVisibility(index)} >
                        <h5 className="flex items-center pointer-events-none">
                            <img src={content.icon} alt={content.id} className={`${content.icon == calendar ? 'w-7' : 'w-8'} mr-3`} />
                            {content.title}
                        </h5>
                        <img src={visibleCardIndex === index ? minus : plus} alt="toggle" width={30} height={30} className="toggle-icon" />

                    </div>

                    {visibleCardIndex === index && (
                        <div id='animation' className="items-center p-8 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 animate-fade-in-left">
                            <h3 className="h5 mb-5">{content.heading}</h3>
                            <p className={`body-2 text-n-3 ${content.body_2 ? '' : 'mb-6'}`}>{content.body}</p>
                            {content.body_2 && <p className="body-2 mb-6 text-n-3">{content.body_2}</p>}
                            <Link className="ml-auto font-code text-xs font-bold text-[#E41F7B] uppercase tracking-wider cursor-pointer hover:underline underline-offset-4" to="#">
                                <div className="flex items-center">
                                    <span>{content.linkText}</span>
                                    <img className='order-1 w-4 ml-2' src={arrow_right} alt="icon" />
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            ))}

            {/* for Desktop */}
            <div className="hidden lg:flex">
                <div className="md:w-1/3">
                    {contents.map((content, index) => (
                        <div key={index} className="flex justify-between p-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 mb-2.5 mr-6 cursor-pointer" onClick={() => toggleVisibility(index)} >
                        <h5 className="flex items-center pointer-events-none">
                            <img src={content.icon} alt={content.id} className={`${content.icon == calendar ? 'w-7' : 'w-8'} mr-3`} />
                            {content.title}
                        </h5>
                        <img src={visibleCardIndex === index ? minus : plus} alt="toggle" width={30} height={30} className="toggle-icon" />
                    </div>
                    ))}
                </div>
                <div className="md:w-2/3">
                    {contents.map((content, index) => (
                        visibleCardIndex === index && (
                            <div className="items-center p-8 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 animate-fade-in-left" key={index}>
                                <h3 className="h5 mb-5">{content.heading}</h3>
                                <p className={`body-2 text-n-3 ${content.body_2 ? '' : 'mb-6'}`}>{content.body}</p>
                                {content.body_2 && <p className="body-2 text-n-3 mt-4 mb-6">{content.body_2}</p>}
                                <Link className="ml-auto font-code text-xs font-bold text-[#E41F7B] uppercase tracking-wider cursor-pointer hover:underline underline-offset-4" to="#">
                                    <div className="flex items-center">
                                        <span>{content.linkText}</span>
                                        <img className='order-1 w-4 ml-2' src={arrow_right} alt="icon" />
                                    </div>
                                </Link>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Support;
