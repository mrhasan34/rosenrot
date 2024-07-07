import React, { useEffect, useState } from 'react';
import './TextPage.css';

const TextPage = ({ textFile }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(textFile)
      .then(response => response.text())
      .then(text => setContent(text));
  }, [textFile]);

  return (
    <div className="text-page">
      <pre>{content}</pre>
    </div>
  );
};

export default TextPage;
