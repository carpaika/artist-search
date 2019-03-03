export const INCREMENT = 'COUNT_ADD';
export const incrementCount = count => ({
  type: INCREMENT,
  payload: count
});

export const DECREMENT = 'COUNT_ADD';
export const decrementCount = count => ({
  type: DECREMENT,
  payload: count
});

