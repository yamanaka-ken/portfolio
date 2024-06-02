import React, { useState, useEffect } from 'react';

const ImageSwitching = () => {
  const picsSrc = ["./圧縮サンプル1.jpeg", "./圧縮サンプル2.JPG", "./圧縮サンプル3.jpg"];
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
