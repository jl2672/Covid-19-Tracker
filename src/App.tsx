import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import Dropdown from './Dropdown/Dropdown';
import styles from './App.module.scss';

const App: React.FC = (): JSX.Element => (
  <Provider store={store}>
    <div className={styles.container}>
      <h1>Covid-19 Tracker</h1>
      <Cards />
      <Dropdown />
      <Chart />
    </div>
  </Provider>

);

export default App;
