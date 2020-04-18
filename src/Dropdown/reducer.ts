import {
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  CHANGE_COUNTRY,
  DropdownState,
  DropdownActionTypes,
} from './types';

const initialState: DropdownState = {
  isFetching: false,
  fetched: false,
  country: 'global',
  countries: [],
};

// eslint-disable-next-line max-len
export default function DropdownReducer(state = initialState, action: DropdownActionTypes): DropdownState {
  switch (action.type) {
    case REQUEST_COUNTRIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_COUNTRIES:
      return {
        ...state,
        isFetching: false,
        countries: action.countries,
        fetched: action.fetched,
      };
    case CHANGE_COUNTRY:
      return {
        ...state,
        country: action.country,
      };
    default: return state;
  }
}
