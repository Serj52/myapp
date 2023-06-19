
import './App.css';
import React from 'react';
import Form from './form';
import weatherworker from './get_weather';
import WeatherOutput from './weatheroutput';

function App() {
  let [sky, setSky] = React.useState('Город не задан')


  const weather = (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    weatherworker(city)
    .then(function(result){
      setSky(sky=result)
    })
  }


  return (
    <div >
        < Form weatherattr = {weather}/>
        <WeatherOutput skyattr= {sky}/>
    </div>

  );
}

export default App;


