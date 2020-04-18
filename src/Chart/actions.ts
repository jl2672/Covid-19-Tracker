import { AppThunk } from '../store/store';
import {
  REQUEST_DAILY,
  RECEIVE_DAILY,
  DailyData,
  ChartActionTypes,
} from './types';

export function requestDailyAction(): ChartActionTypes {
  return {
    type: REQUEST_DAILY,
    isFetching: true,
    country: 'global',
  };
}

export function receiveDailyAction(data: DailyData[]): ChartActionTypes {
  return {
    type: RECEIVE_DAILY,
    isFetching: false,
    data,
    fetched: true,
  };
}

export const fetchDaily = (): AppThunk => async (dispatch): Promise<ChartActionTypes> => {
  dispatch(requestDailyAction());
  const response = await fetch('https://covid19.mathdro.id/api/daily');
  const json = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modifiedJson = await json.map((dailyData: any) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));
  return dispatch(receiveDailyAction(modifiedJson));
};
