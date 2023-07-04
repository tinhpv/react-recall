import { useContext } from 'react';
import BookContext from './BookContext';

function App() {
  var value = useContext(BookContext);
  return <div>Context's value: {value}</div>;
}

export default App;
