import React, { useState } from 'react';
import './App.css';

function App() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [targetSum, setTargetSum] = useState(6);
  const [results, setResults] = useState([]);

  const findPairSums = () => {
    const pairs = [];
    const seen = new Set();

    for (const num of array) {
      const complement = targetSum - num;
      if (seen.has(complement)) {
        pairs.push([complement, num]);
      }
      seen.add(num);
    }

    setResults(pairs);
  };

  return (
    <div className="App">
      <h2>Pair Sum Challenge</h2>
      <input 
        type="text" 
        value={array.join(',')} 
        onChange={(e) => setArray(e.target.value.split(',').map(Number))}
        placeholder="Enter array (comma-separated)"
      />
      <input 
        type="number" 
        value={targetSum} 
        onChange={(e) => setTargetSum(Number(e.target.value))}
        placeholder="Target Sum"
      />
      <button onClick={findPairSums}>Find Pairs</button>
      <div>
        <h3>Results:</h3>
        {results.map((pair, index) => (
          <div key={index}>{`[${pair[0]}, ${pair[1]}]`}</div>
        ))}
      </div>
    </div>
  );
}

export default App;