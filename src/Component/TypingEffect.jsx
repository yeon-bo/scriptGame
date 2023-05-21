import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, typingE, setTypingE }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTypingE(!typingE);
      }
    }, 100); // 한 글자가 나타나는 간격(ms)
    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text]);

  return <span>{typedText}</span>;
};

export default TypingEffect;
