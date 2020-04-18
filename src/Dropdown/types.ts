export interface DropdownState {
  isFetching: boolean;
  fetched: boolean;
  country: string;
  countries: string[];
}

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
export const CHANGE_COUNTRY = 'CHANGE_COUNTRY';

interface ChangeCountryAction {
  type: typeof CHANGE_COUNTRY;
  country: string;
}

interface RequestCountriesAction {
  type: typeof REQUEST_COUNTRIES;
  isFetching: boolean;
}

interface ReceiveCountriesAction {
  type: typeof RECEIVE_COUNTRIES;
  isFetching: boolean;
  fetched: boolean;
  countries: string[];
}

export type DropdownActionTypes = (ChangeCountryAction |
  RequestCountriesAction |
  ReceiveCountriesAction);
