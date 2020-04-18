export interface CardsState {
  isFetching: boolean;
  country: string;
  json?: GlobalJSON | CountryJSON;
}

export const REQUEST_GLOBAL = 'REQUEST_GLOBAL';
export const RECEIVE_GLOBAL = 'RECEIVE_GLOBAL';
export const REQUEST_DAILY = 'REQUEST_DAILY';
export const RECEIVE_DAILY = 'RECEIVE_DAILY';
export const REQUEST_COUNTRY = 'REQUEST_COUNTRY';
export const RECEIVE_COUNTRY = 'RECEIVE_COUNTRY';

export interface GlobalJSON {
  confirmed: Counts;
  recovered: Counts;
  deaths: Counts;
  dailySummary?: string;
  dailyTimeSeries?: Pattern;
  image?: string;
  source?: string;
  countries?: string;
  countryDetail?: Pattern;
  lastUpdate: Date;
}

export interface CountryJSON {
  confirmed: Counts;
  recovered: Counts;
  deaths: Counts;
  lastUpdate: Date;
}

interface Counts {
  value: number;
  detail: string;
}

interface Pattern {
  pattern: string;
  example: string;
}


interface RequestGlobalAction {
  type: typeof REQUEST_GLOBAL;
  isFetching: boolean;
  country: string;
}

interface ReceiveGlobalAction {
  type: typeof RECEIVE_GLOBAL;
  isFetching: boolean;
  json: GlobalJSON;
}

interface RequestCountryAction {
  type: typeof REQUEST_COUNTRY;
  isFetching: boolean;
  country: string;
}

interface ReceiveCountryAction {
  type: typeof RECEIVE_COUNTRY;
  isFetching: boolean;
  json: CountryJSON;
}


export type CardsActionTypes = (RequestGlobalAction |
  ReceiveGlobalAction |
  RequestCountryAction |
  ReceiveCountryAction
);
