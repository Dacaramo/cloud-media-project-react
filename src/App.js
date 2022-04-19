import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Cloud Media Project";
  }, []);

  return (
    <h1>Hello Cloud Media Project</h1>
  );
}

export default App;
