import React from 'react';
import TextPage from './TextPage';
import artText from '../texts/art.txt';

const Art = () => {
  return <TextPage textFile={artText} />;
};

export default Art;
