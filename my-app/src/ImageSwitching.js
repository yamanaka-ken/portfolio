import React, { useState, useEffect } from 'react';

const ImageSwitching = () => {
  const picsSrc = ["./logo192.png", "./logo512.png"];
  const [num, setNum] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNum(prevNum => (prevNum + 1) % picsSrc.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [picsSrc.length]);

  return (
    <div>
      <img id="mypic" src={picsSrc[num]} alt="slideshow" style={{ width: '500px', height: '500px' }} />
    </div>
  );
};

export default ImageSwitching;
