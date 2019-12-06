const { createStore } = require("redux");

const intialStates = {
  count: 0
};

const myReducer = (state = intialStates, action) => {
  switch (action.type) {
    case "INCREMENT":
      state.count += action.incrementvalue;
      break;
    case "DECREMENT":
      state.count -= action.decrementvalue;
      break;
    default:
      state;
  }
  return state;
};

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("State is changed and count value is " + store.getState().count);
});

export default store;
