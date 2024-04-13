import React, { useEffect, useState } from 'react';
import { testimonials } from '../constants';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="container my-20">
            <div className="text-center">
                <h1 className="h3">Look at What StyleSync Users Are Saying</h1>
                <p className="body-1 max-w-3xl mx-auto mb-10 text-n-2 lg:mb-8">Don’t take our word for it listen to the current buzz around Influencity tools! Our clients are huge fans.</p>
            </div>

            <div className="w-full h-auto bg-n-7/50 rounded-2xl relative md:flex md:p-10 bg-gradient-to-t from-pink-500/30 md:bg-gradient-to-l md:from-pink-500/30">
                <div className="text-start md:w-2/4 content-center p-8">
                    <h5 className="h6">Testimonial</h5>
                    <p className="h5 text-2xl font-light mt-6">
                        <q>
                            {testimonials[currentIndex].quote}
                        </q>
                    </p>
                </div>

                <div className="w-full md:flex flex-col justify-end items-end p-3">
                    <div className="w-full h-72 md:h-96 md:w-3/4 bg-n-6 rounded-2xl overflow-hidden relative md:right-10 pointer-events-none">
                        <div
                            style={{ backgroundImage: `url(${testimonials[currentIndex].imageUrl})` }}
                            className='w-full h-full bg-center bg-cover duration-500' ></div>
                        <div className="absolute bottom-5 left-6 right-6 bg-n-7/50 p-5 px-6 rounded-b-2xl flex flex-col">
                            <h2 className="h5">{testimonials[currentIndex].name}</h2>
                            <h5 className="body-1 uppercase">{testimonials[currentIndex].role}</h5>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-3 md:mt-6 gap-20 cursor-pointer relative md:right-10">
                        <BsChevronCompactLeft onClick={prevSlide} size={40} className="bg-n-7/50 rounded-full p-2" />
                        <BsChevronCompactRight onClick={nextSlide} size={40} className="bg-n-7/50 rounded-full p-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
