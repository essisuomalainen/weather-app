import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        type='text'
        className={styles.searchbar}
        placeholder='Search..'
      ></input>
    </div>
  );
};

export default Search;
