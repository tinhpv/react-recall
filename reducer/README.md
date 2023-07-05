# Reducer

https://react.dev/reference/react/useReducer

<img src="https://github.com/tinhpv/react-recall/blob/main/nav-routing-system/IMG_8901.jpg" width='630px' />

- As `useState`, this is used to manager application's state

---

```javascript
const INCREMENT = 'increment';

const reducer = (state, action) => {
  if (action.type == INCREMENT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
};

const [state, dispatch] = useReducer(reducer, { value: 0, time: 0 });

const handleIncrement = () => {
  dispatch({
    type: INCREMENT,
  });
};
```

- `(state, action)`: take in a `state` and an `action` return new state
- whatever to be returned here is new state, return nothing > gonna get `undefined`
- don't change state directly. (can use _ImmerJs_ library to be able to do so)
- No async/await, no request, no promises, no outside variables.

# Community Convention (_Not_ a requirement)

- Action object should be like `{type:payload:}`
- `type` is a `string`, should declared a constant to avoid type.
- passing data to update state through `payload` property.

# Design reducer note

```javascript
// our state
const state = {
    count: 0,
    valueToAdd: 10
}

const reducer = (state, action) => {
    case ADD_VALUE:
        return {
            //...state,
            count: state.count + state.value
            valueToAdd: 0
        }
    ...
    default: return state
};
```

- should always be `...state` when updating state, in case in future, we add new property to the state, it won't be omitted.

---

```javascript
// our state
const state = {
    count: 0,
    valueToAdd: 10
}

const reducer = (state, action) => {
    case INCREMENT:
        return {
            ...state,
            // count: state.count + 1
            count: action.payload
        }
    ...
    default: return state
};

---
// IT'S OK
const handleIncrement = () => {
    dispatch({
        type: 'INCREMENT',
        payload: state.count + 1
    })
}

// BUT..... IF SOMEONE DOES..
const handleIncrement = () => {
    dispatch({
        type: 'INCREMENT',
        payload: state.count + 2
    })
}
```

- Should keep `dispatch` simple. Putting logic in reducer makes more sense!
