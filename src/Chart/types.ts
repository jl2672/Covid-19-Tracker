export interface ChartState {
  fetched: boolean;
  isFetching: boolean;
  data: DailyData[];
}

export const REQUEST_DAILY = 'REQUEST_DAILY';
export const RECEIVE_DAILY = 'RECEIVE_DAILY';

export interface DailyData {
  confirmed: number;
  deaths: number;
  date: string;
}


interface RequestDailyAction {
  type: typeof REQUEST_DAILY;
  isFetching: boolean;
  country: string;
}

interface ReceiveDailyAction {
  type: typeof RECEIVE_DAILY;
  isFetching: boolean;
  fetched: boolean;
  data: DailyData[];
}

export type ChartActionTypes = RequestDailyAction | ReceiveDailyAction;
