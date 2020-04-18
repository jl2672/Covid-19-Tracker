import {
  REQUEST_GLOBAL,
  RECEIVE_GLOBAL,
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY,
  GlobalJSON,
  CountryJSON,
  CardsActionTypes,
} from './types';
import { AppThunk } from '../store/store';

export function requestGlobalAction(): CardsActionTypes {
  return {
    type: REQUEST_GLOBAL,
    isFetching: true,
    country: 'global',
  };
}

export function receiveGlobalAction(json: GlobalJSON): CardsActionTypes {
  return {
    type: RECEIVE_GLOBAL,
    isFetching: false,
    json,
  };
}

export function requestCountryAction(country: string): CardsActionTypes {
  return {
    type: REQUEST_COUNTRY,
    country,
    isFetching: true,
  };
}

export function receiveCountryAction(json: CountryJSON): CardsActionTypes {
  return {
    type: RECEIVE_COUNTRY,
    isFetching: false,
    json,
  };
}

export const fetchGlobal = (): AppThunk => async (dispatch): Promise<CardsActionTypes> => {
  dispatch(requestGlobalAction());
  const response = await fetch('https://covid19.mathdro.id/api');
  const json = await response.json();
  return dispatch(receiveGlobalAction(json));
};

// eslint-disable-next-line max-len
export const fetchCountry = (country: string): AppThunk => async (dispatch): Promise<CardsActionTypes> => {
  dispatch(requestCountryAction(country));
  const response = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
  const json = await response.json();
  return dispatch(receiveCountryAction(json));
};
