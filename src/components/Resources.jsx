import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { books } from '../constants';
import { Link } from 'react-router-dom';

const Resources = () => {
    const [displayedBooks, setDisplayedBooks] = useState(books.slice(0, 3));
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                setDisplayedBooks(books.slice(currentIndex, currentIndex + 1));
            } else if (windowWidth >= 768 && windowWidth < 1024) {
                setDisplayedBooks(books.slice(currentIndex, currentIndex + 2));
            } else {
                setDisplayedBooks(books.slice(currentIndex, currentIndex + 3));
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex]);

    return (
        <section className="container">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-10">
                <div className="w-full md:w-4/5">
                    <h1 className='h2 mb-3'>Learn More About Influencer Marketing Trends and Best Practices</h1>
                    <Link className="text-[#E41F7B] font-bold" to="/resource">View All Resources -&gt;</Link>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                {displayedBooks.map((book, index) => (
                    <BookCard
                        key={index}
                        image={book.image}
                        title={book.title}
                        subtitle={book.subtitle}
                        linkText={book.linkText}
                    />
                ))}
            </div>
        </section>
    );
};

export default Resources;
