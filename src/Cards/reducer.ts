import {
  REQUEST_GLOBAL,
  RECEIVE_GLOBAL,
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY,
  CardsState,
  CardsActionTypes,
} from './types';

const initialState: CardsState = {
  isFetching: false,
  country: 'global',
};

export default function CardsReducer(state = initialState, action: CardsActionTypes): CardsState {
  switch (action.type) {
    case REQUEST_GLOBAL:
      return {
        ...state,
        isFetching: action.isFetching,
        country: action.country,
      };
    case RECEIVE_GLOBAL:
      return {
        ...state,
        isFetching: action.isFetching,
        json: action.json,
      };
    case REQUEST_COUNTRY:
      return {
        ...state,
        isFetching: action.isFetching,
        country: action.country,
      };
    case RECEIVE_COUNTRY:
      return {
        ...state,
        isFetching: action.isFetching,
        json: action.json,
      };
    default: return state;
  }
}
