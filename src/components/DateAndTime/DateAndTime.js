import React from 'react';
import styles from './DateAndTime.module.css';

const DateAndTime = () => {
  let today = new Date();

  let time = today.getHours() + ':' + today.getMinutes();

  let date = today.getMonth();
  return (
    <div className={styles.container}>
      <div></div>
      <div>
        <span>{today.time}</span>
      </div>
    </div>
  );
};

export default DateAndTime;
