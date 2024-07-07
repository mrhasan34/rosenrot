import React from 'react';
import TextPage from './TextPage';
import movieReviewText from '../texts/moviereview.txt';

const MovieReview = () => {
  return <TextPage textFile={movieReviewText} />;
};

export default MovieReview;
