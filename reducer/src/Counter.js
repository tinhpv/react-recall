import { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const CHANGE_VALUE = 'CHANGE_VALUE';
const DECREMENT = 'DECREMENT';
const ADD_VALUE = 'ADD_VALUE';

const reducer = (state, action) => {
  //   if (action.type === INCREMENT) {
  //     return { ...state, count: state.count + 1 };
  //   } else if (action.type === CHANGE_VALUE) {
  //     return { ...state, valueToAdd: action.payload };
  //   }
  //   return state;
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case CHANGE_VALUE:
      return { ...state, valueToAdd: action.payload };
    case ADD_VALUE:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    default:
      return state;
  }
};

const Counter = ({ initialCount }) => {
  //   const [count, setCount] = useState(0);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: '',
  });

  const increment = () => {
    dispatch({
      type: INCREMENT,
    });
    // setCount(count + 1);
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT,
    });
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE,
    });

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <div>
      <h1>Count is {state.count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
        <label style={{ marginRight: '10px' }}>Add a number:</label>
        <input type="number" value={state.valueToAdd} onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Counter;
