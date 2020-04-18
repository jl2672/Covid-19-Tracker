import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CountUp from 'react-countup';
import { Card, Grid, Typography } from '@material-ui/core';
import { fetchGlobal, fetchCountry } from './actions';
import { useTypedSelector } from '../store/rootReducer';
import styles from './Cards.module.scss';


const Cards: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const isFetching = useTypedSelector((state) => state.cards.isFetching);
  const country = useTypedSelector((state) => state.dropdown.country);
  const data = useTypedSelector((state) => state.cards.json);
  const date = useTypedSelector((state) => state.cards.json?.lastUpdate || '');

  useEffect(() => {
    if (!isFetching && country === 'global') dispatch(fetchGlobal());
    if (!isFetching && country !== 'global') dispatch(fetchCountry(country));
  }, [country]);

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={3}>
        <Card className={styles.card}>
          <Typography variant="h5">Confirmed Cases:</Typography>
          <Typography variant="h6">
            <CountUp end={data?.confirmed.value || 0} duration={1.5} separator="," />
          </Typography>
          <Typography color="textSecondary">Last updated: {new Date(date).toDateString()}</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card className={styles.card}>
          <Typography variant="h5">Recovered Cases:</Typography>
          <Typography variant="h6">
            <CountUp end={data?.recovered.value || 0} duration={1.5} separator="," />
          </Typography>
          <Typography color="textSecondary">Last updated: {new Date(date).toDateString()}</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card className={styles.card}>
          <Typography variant="h5">Deaths:</Typography>
          <Typography variant="h6">
            <CountUp end={data?.deaths.value || 0} duration={1.5} separator="," />
          </Typography>
          <Typography color="textSecondary">Last updated: {new Date(date).toDateString()}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
