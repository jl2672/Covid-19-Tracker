import {
  REQUEST_DAILY,
  RECEIVE_DAILY,
  ChartState,
  ChartActionTypes,
} from './types';

const initialState: ChartState = {
  isFetching: false,
  fetched: false,
  data: [],
};

export default function ChartReducer(state = initialState, action: ChartActionTypes): ChartState {
  switch (action.type) {
    case REQUEST_DAILY:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DAILY:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        fetched: action.fetched,
      };
    default: return state;
  }
}
