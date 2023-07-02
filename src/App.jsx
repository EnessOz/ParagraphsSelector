import { useState } from "react";
import text from "./data";

const App = () => {
  const [data, setData] = useState(text);
  const [count, setCount] = useState(1);
  const [slicedArray, setSlicedArray] = useState([]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setCount(inputValue);
  };

  const handleGenerate = () => {
    if (count > 9) {
      alert("You can't enter a number bigger than 9!")
    }
    else {
      const newArray = data.slice(0, count);
      setSlicedArray(newArray);
    }
  };

  return (
    <div className="container">
      <h1>TIRED OF BORING LOREM IPSUM</h1>
      <h3>Paragraphs</h3>
      <div>
        <input type="number" min={0} max={9} onChange={handleChange} />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <div className="informations">
        {slicedArray.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
