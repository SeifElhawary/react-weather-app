import './weather.css';
import Cloud from '../assets/cloud.png';
import Clear from '../assets/clear.png';
import Rain from '../assets/rain.png';
import Snow from '../assets/snow.png';
import Search from './Search';
import UseFetch from '../../Custom Hook/UseFetch';
import { useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';

function Weather() {
  const { inputValue } = useContext(LoadingContext);
  const data = useFetch(inputValue?.trim());

  let temp = Cloud;

  if (data && data.main) {
    const maxTemp = Math.floor(data.main.temp_max);

    if (maxTemp > 25) {
      temp = Clear;
    } else if (maxTemp >= 10 && maxTemp <= 25) {
      temp = Cloud;
    } else if (maxTemp >= 5 && maxTemp < 10) {
      temp = Rain;
    } else if (maxTemp < 5) {
      temp = Snow;
    }
  }

  return (
    <div className="weather">
      <Search />
      
      {!data || !data.name ? (
        <div className="empty-state">
          <p>Please enter a city name to show weather info...</p>
        </div>
      ) : (
        <>
          <div className="location-date">
            <h1>{data.name}</h1>
            <p>{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
          </div>

          <div className="temp">
            <div className="info">
              <div className="cc">
                <h2>{Math.round(data.main.temp)}°C</h2>
              </div>
              <p>{data.weather[0].description}</p>
              <h3>Max | {Math.round(data.main.temp_max)}°C</h3>
              <h3>Min | {Math.round(data.main.temp_min)}°C</h3>
            </div>
            
            <img src={temp} alt="Weather Status" />
          </div>
        </>
      )}

    </div>
  );
}

export default Weather;
