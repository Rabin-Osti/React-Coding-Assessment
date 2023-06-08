import React,{useState,useEffect} from "react";

function Slider({ slides }) {
  const [slide, setSlide] = useState(0);
  const [slideNo, setSlideNo] = useState(0);


    useEffect(() => {
    setSlide(slides[slideNo]);
    }, [slideNo])
    
  const handleReset = () => {
    setSlideNo(0);
  };
  const handlePrev = () => {
    setSlideNo((prev) => prev - 1);
  };
  const handleNext = () => {
    setSlideNo((prev) => prev + 1);
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={slideNo === 0}
          onClick={handleReset}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={slideNo === 0}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={slideNo === slides.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <h1 data-testid="title">{slide.title}</h1>
      <p data-testid="text">{slide.text}</p>
    </div>
  );
}

export default Slider;
