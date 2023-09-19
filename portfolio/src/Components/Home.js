import React, { useState, useEffect, useRef } from 'react';
import { Box, Container } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import '../Styles/Home.css'


const Home = () => {

const textsArray = [
    "I love to code as a react developer",
    "I build websites with passion",
    "I loved to work as a front end developer",
    "I love to learn new things with interest",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const displayNextText = async () => {
    const textToDisplay = textsArray[currentTextIndex];
    let currentText = '';

    // Show each letter one by one
    for (let i = 0; i <= textToDisplay.length; i++) {
      currentText = textToDisplay.slice(0, i);
      setDisplayText(currentText);
      await delay(200); // Adjust the delay time as needed (in milliseconds)
    }

    // Clear the text in reverse
    for (let i = textToDisplay.length; i >= 0; i--) {
      currentText = textToDisplay.slice(0, i);
      setDisplayText(currentText);
      await delay(200); // Adjust the delay time as needed (in milliseconds)
    }

    // Move to the next statement in the array
    setCurrentTextIndex(prevIndex => (prevIndex + 1) % textsArray.length);
  };

  useEffect(() => {
    displayNextText();
  }, [currentTextIndex]);

  const getLastWordStyle = (text) => {
    const wordsArray = text.split(' ');
    const lastWord = wordsArray[wordsArray.length - 1];
    return displayText.endsWith(lastWord) ? { color: 'green' } : {};
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" sx={{ bgcolor: '#161515', height: '100vh' }}>
            <div className='homeContainer'>
            <div className="background"></div>
            <div className='descriptionStyle'>
            Hello, I'm <span className='wordStyle'>Mamatha Gundapaneni</span>, working as front-end developer in React.
            Currently living in Georgia.
            </div>
            </div>
           <div style={getLastWordStyle(textsArray[currentTextIndex])} className='textStyle'>{displayText}</div> 
        </Container>
        </React.Fragment>
  );
};

export default Home;