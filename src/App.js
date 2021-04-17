import './App.css';
import React, { useState } from 'react';
import Search from './components/Search/Search.js';
import DateAndTime from './components/DateAndTime/DateAndTime.js';
import sun from './assets/sun.svg';
import rain from './assets/rain.svg';
import clouds from './assets/cloudy.svg';
import snow from './assets/snowflake.svg';

const api = {
  key: '1aeef9314e710b0d8aa7bf74261257ea',
  base: 'https://api.openweathermap.org/data/2.5/',
};
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [date, setDate] = useState({ fullDate: '', time: '' });
  const [background, setBackground] = useState('');

  const convertTime = (localSeconds, timezone) => {
    let sec = localSeconds;
    let calcTimezone = timezone * 1000;
    let minusSweden = localSeconds - 7200;
    let date = new Date(minusSweden * 1000 + calcTimezone);
    let timestr = date.toLocaleTimeString();

    let months = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let fullDate = `${day} ${month}`;
    return { fullDate: fullDate, time: timestr };
  };

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(
        (res) =>
          res.json().then((result) => {
            setWeather(result);
            setQuery('');
            setDate(convertTime(result.dt, result.timezone));
            setBackground(chooseImage(result.weather[0].main));
          })
      );
    }
  };

  const chooseImage = (props) => {
    switch (props) {
      case 'Clear':
        return sun;
        break;
      case 'Rain':
        return rain;
        break;
      case 'Clouds':
        return clouds;
        break;
      case 'Snow':
        return snow;
        break;
      default:
        return sun;
    }
  };

  return (
    <div className='app'>
      <div className='main'>
        <div className='search'>
          <input
            type='text'
            className='searchbar'
            placeholder='Search..'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        <div className='card'>
          <div className='dateAndTime'>
            <div className='time'>{date.time.slice(0, 5)}</div>
            <div className='date'> {date.fullDate} </div>
          </div>
          <img className='weather' src={background}></img>

          {typeof weather.main != 'undefined' ? (
            <div className='api-wrapper'>
              <div className='degrees'>{Math.round(weather.main.temp)}°c</div>
              <div className='description'>{weather.weather[0].main}</div>

              <div className='location'>
                <span className='city'>{weather.name}</span>
                <span className='country'>{weather.sys.country}</span>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
