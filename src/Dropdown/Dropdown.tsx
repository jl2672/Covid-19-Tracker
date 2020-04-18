/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NativeSelect } from '@material-ui/core';
import { fetchCountries, changeCountries } from './actions';
import { useTypedSelector } from '../store/rootReducer';

import styles from './Dropdown.module.scss';

const Dropdown: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const countries = useTypedSelector((state) => state.dropdown.countries);
  const country = useTypedSelector((state) => state.dropdown.country);
  const fetched = useTypedSelector((state) => state.dropdown.fetched);

  useEffect(() => {
    if (!fetched) dispatch(fetchCountries());
  }, [fetched]);


  return (
    <div className={styles.container}>
      <form>
        <NativeSelect onChange={(e): any => dispatch(changeCountries(e.target.value))} value={country}>
          <option value="global">global</option>
          {countries.map((val) => <option key={uuidv4()} value={val}>{val}</option>)}
        </NativeSelect>
      </form>

    </div>

  );
};

export default Dropdown;
