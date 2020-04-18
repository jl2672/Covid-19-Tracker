import { AppThunk } from '../store/store';
import {
  CHANGE_COUNTRY,
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  DropdownActionTypes,
} from './types';

export function changeCountries(country: string): DropdownActionTypes {
  return {
    type: CHANGE_COUNTRY,
    country,
  };
}

export function requestCountries(): DropdownActionTypes {
  return {
    type: REQUEST_COUNTRIES,
    isFetching: true,
  };
}

export function receiveCountries(data: string[]): DropdownActionTypes {
  return {
    type: RECEIVE_COUNTRIES,
    isFetching: false,
    countries: data,
    fetched: true,
  };
}

export const fetchCountries = (): AppThunk => async (dispatch): Promise<DropdownActionTypes> => {
  dispatch(requestCountries());
  const response = await fetch('https://covid19.mathdro.id/api/countries');
  const json = await response.json();
  const modifiedJson: string[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await json.countries.forEach((element: any) => {
    modifiedJson.push(element.name);
  });
  return dispatch(receiveCountries(modifiedJson));
};
