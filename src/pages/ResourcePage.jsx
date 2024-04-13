import React from 'react'
import HighlightContainer from '../components/HighlightContainer'
import BookCard from '../components/BookCard';
import { books } from '../constants';

const ResourcePage = () => {

  return (
    <div className="container my-36">
      <HighlightContainer
        heading="Resources to Help You Drive More Value from Your Influencer Marketing Efforts"
        paragraph="Explore eBooks, guides, and more content to help you make the most of your campaigns and maximize the return on your investment with influencer marketing."
      />

      <h1 className="h3 text-center mb-10">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <BookCard
            key={index}
            image={book.image}
            title={book.title}
            subtitle={book.subtitle}
            linkText={book.linkText}
          />
        ))}
      </div>
    </div>
  )
}

export default ResourcePage