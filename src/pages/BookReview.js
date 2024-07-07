import React from 'react';
import TextPage from './TextPage';
import bookReviewText from '../texts/bookreview.txt';

const BookReview = () => {
  return <TextPage textFile={bookReviewText} />;
};

export default BookReview;
