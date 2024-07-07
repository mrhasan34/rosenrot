import React from 'react';
import TextPage from './TextPage';
import storyText from '../texts/story.txt';

const Story = () => {
  return <TextPage textFile={storyText} />;
};

export default Story;
