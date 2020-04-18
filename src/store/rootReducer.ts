import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import CardsReducer from '../Cards/reducer';
import ChartReducer from '../Chart/reducer';
import DropdownReducer from '../Dropdown/reducer';

export const rootReducer = combineReducers({
  cards: CardsReducer,
  chart: ChartReducer,
  dropdown: DropdownReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
