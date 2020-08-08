import React from 'react';
import { hot } from 'react-hot-loader/root';
import headers from '../css/headers.scss';
import '../css/index.scss';

const App = () => (
  <main>
    <div className={headers.header}>Event Listing</div>
    <div className={headers.filters}>
      <div className={headers.filters_header}>City:</div>
      <select>
        <option>Volvo</option>
        <option>Saab</option>
        <option>Mercedes</option>
        <option>Audi</option>
      </select>
      <div className={headers.filters_header} id={headers.month}>
        Month:
      </div>
      <select>
        <option>Volvo</option>
        <option>Saab</option>
        <option>Mercedes</option>
        <option>Audi</option>
      </select>
    </div>
  </main>
);

export default hot(App);
