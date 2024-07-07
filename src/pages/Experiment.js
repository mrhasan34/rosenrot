import React from 'react';
import TextPage from './TextPage';
import experimentText from '../texts/experiment.txt';

const Experiment = () => {
  return <TextPage textFile={experimentText} />;
};

export default Experiment;
