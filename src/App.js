// src/App.js
import React from 'react';
import SimpleExercises from './SimpleExercises'; // Import the SimpleExercises component
import './App.css'; // Import global CSS styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Stress Relief Exercises</h1>
      </header>
      <main>
        <SimpleExercises />
      </main>
    </div>
  );
}

export default App;
