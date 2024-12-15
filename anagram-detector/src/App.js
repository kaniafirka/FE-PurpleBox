import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [isAnagram, setIsAnagram] = useState(null);

  const checkAnagram = (s1, s2) => {
    // Normalize strings: lowercase and remove spaces
    const normalized1 = s1.toLowerCase().replace(/\s/g, '');
    const normalized2 = s2.toLowerCase().replace(/\s/g, '');

    // Quick length check
    if (normalized1.length !== normalized2.length) return false;

    // Create character frequency maps
    const charMap1 = new Map();
    const charMap2 = new Map();

    // Count character frequencies
    for (let char of normalized1) {
      charMap1.set(char, (charMap1.get(char) || 0) + 1);
    }

    for (let char of normalized2) {
      charMap2.set(char, (charMap2.get(char) || 0) + 1);
    }

    // Compare frequency maps
    for (let [char, count] of charMap1) {
      if (charMap2.get(char) !== count) return false;
    }

    return true;
  };

  const handleCheck = () => {
    setIsAnagram(checkAnagram(string1, string2));
  };

  return (
    <div className="App">
      <h2>Anagram Detector</h2>
      <input 
        placeholder="First string" 
        value={string1}
        onChange={(e) => setString1(e.target.value)}
      />
      <input 
        placeholder="Second string" 
        value={string2}
        onChange={(e) => setString2(e.target.value)}
      />
      <button onClick={handleCheck}>Check Anagram</button>
      {isAnagram !== null && (
        <div>
          {isAnagram 
            ? 'True!' 
            : 'False.'}
        </div>
      )}
    </div>
  );
};

export default App;
