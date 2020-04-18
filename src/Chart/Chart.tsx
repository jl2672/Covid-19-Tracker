import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDaily } from './actions';
import { useTypedSelector } from '../store/rootReducer';
import styles from './Chart.module.scss';

const Chart: React.FC = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const dailyData = useTypedSelector((state) => state.chart.data);
  const fetched = useTypedSelector((state) => state.chart.fetched);
  const country = useTypedSelector((state) => state.cards.country);
  const countryData = useTypedSelector((state) => state.cards.json);


  useEffect(() => {
    if (!fetched) dispatch(fetchDaily());
  }, [fetched]);

  const lineChart = (
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Confirmed',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 0, 0, 0)',
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
          ],
        }}
        height={400}
        options={{
          spanGaps: true,
          maintainAspectRatio: false,
        }}
      />
    ) : null
  );

  const barChart = (
    fetched ? (
      <Bar
        data={{
          labels: ['Confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(255, 0, 0, 0.7)'],
              data: [countryData?.confirmed.value, countryData?.recovered.value, countryData?.deaths.value],
            },
          ],
        }}
        height={400}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current data for ${country}` },
          maintainAspectRatio: false,
        }}
      />
    ) : null
  );
  if (country === 'global') {
    return (
      <div className={styles.container}>
        { lineChart }
      </div>
    );
  }
  return (
    <div className={styles.container}>
      { barChart }
    </div>
  );
};

export default Chart;
