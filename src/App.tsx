/* eslint-disable @typescript-eslint/no-explicit-any */
import Weather from './weather';
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [lat, setLat] : any[] = useState([]);
  const [long, setLong] : any[] = useState([]);
  const [data, setData] : any[] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      console.log(lat)
      console.log(long)
       await fetch(`${import.meta.env.VITE_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      }) 
    }
    fetchData()
  }, [lat, long]);


  return (
    <>
      <div className='app'>
        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data} />
        ): (
          <div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
