import React, { useState, useEffect } from 'react';
import { getJoke } from './GetJoke';

function App() {

  const [joke, setJoke] = useState("")

  useEffect(() => {
    getJoke(setJoke)
  }, []);
  
  function handleSubmit(e) {
    e.preventDefault();
    getJoke(setJoke)
  }

  return (
    <div className="jumbotron jumbotron-fluid" style={{height: "100vh"}}>
      <div className="container">
        <h1 className="display-4">Dad Jokes</h1>
        <hr class="my-4"></hr>
        <p className="lead">{joke}</p>
        <button onClick={handleSubmit} className="btn btn-success">i can haz dad joke</button>
      </div>
    </div>
  );
}

export default App;
