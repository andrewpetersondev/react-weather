import React, { useState, useEffect } from "react"

import Header from "./components/Header"
import InputCity from "./components/InputCity"
import ShowWeather from "./components/ShowWeather"

function App() {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState({})
  const [error, setError] = useState(false)

  const onInputHandler = (e) => {
    setCity(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setError(false)
    setCity(city)
    // console.log(city)
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    import.meta.env.VITE_APP_WEATHER_API_KEY
  }`

  const fetchData = async (url) => {
    const response = await fetch(url)
    // console.log("response", response)
    const data = await response.json()
    // console.log("data", data)
    if (data.cod === "404") {
      setError(true)
      return
    } else {
      console.log(data)
      setError(false)
      setWeatherData(data)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  return (
    <>
      <Header />
      <InputCity
        city={city}
        onInputHandler={onInputHandler}
        onSubmitHandler={onSubmitHandler}
      />
      {error ? (
        <div className='error'>City not found</div>
      ) : (
        <ShowWeather weatherData={weatherData} />
      )}
    </>
  )
}

export default App
