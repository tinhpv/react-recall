import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  return <input style={{ border: '1px solid blue' }} />;
};

root.render(<App />);
