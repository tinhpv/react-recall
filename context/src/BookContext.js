import { createContext, useState } from 'react';

const BookContext = createContext();

const Provider = ({ children }) => {
  const [count, setCount] = useState(0);

  const valueToShare = {
    count,
    incCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
};

export { Provider };
export default BookContext;
