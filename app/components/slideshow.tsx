import  { useState, useEffect } from 'react';

const Slideshow = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  const renderImages = () => {
    const numImages = images.length;
    const renderedImages = [];
    for (let i = 0; i < numImages * 10; i++) {
      renderedImages.push(
        <img
          key={i}
          alt=""
          className={`slide z-40 w-[450px] rounded-md ${i % numImages === currentIndex ? 'active' : ''}`}
          src={images[i % numImages]}

        />
      );
    }
    return renderedImages;
  };

  return (
    <div className="slideshow">
      <div className="slides-container z-40">
        {renderImages()}
      </div>
    </div>
  );
};

export default Slideshow;
