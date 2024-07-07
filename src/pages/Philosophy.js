import React from 'react';
import TextPage from './TextPage';
import philosophyText from '../texts/philosophy.txt';

const Philosophy = () => {
  return <TextPage textFile={philosophyText} />;
};

export default Philosophy;
