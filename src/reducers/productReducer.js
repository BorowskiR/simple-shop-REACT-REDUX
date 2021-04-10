import { ActionTypes } from '../actions/types';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Rafal',
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
