import React from 'react';
import styles from './Search.module.css';

const Search = (query, setQuery, search) => {
  return (
    <div className={styles.container}>
      <input
        type='text'
        className={styles.searchbar}
        placeholder='Search..'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      ></input>
    </div>
  );
};

export default Search;
