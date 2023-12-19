import { useState, useEffect } from "react"

const ShowWeather = ({ weatherData }) => {
  // console.log("weatherData", weatherData)

  const [dynamicBackground, setDynamicBackground] = useState("")

  const city = weatherData.name
  const country = weatherData.sys ? weatherData.sys.country : null
  const temperature = weatherData.main ? weatherData.main.temp : null
  const pressure = weatherData.main ? weatherData.main.pressure : null
  const visibility = weatherData ? weatherData.visibility : null
  const humidity = weatherData.main ? weatherData.main.humidity : null
  const clouds = weatherData.clouds ? weatherData.clouds.all : null

  // Values in standard units

  const pressureInAtm = (pressure / 1000).toFixed(2)
  const tempInCelcius = weatherData.main
    ? (temperature - 273.15).toFixed(2)
    : null
  const visibilityInKM = (visibility / 1000).toFixed(2)

  const returnColor = (temp) => {
    // console.log("temp", temp)
    // console.log("dynamicBackground", dynamicBackground)
    switch (true) {
      case temp < 10:
        return setDynamicBackground(
          "linear-gradient(to right, #003973, #E5E5BE)"
        )
      case temp >= 10 && temp < 30:
        return setDynamicBackground(
          "linear-gradient(to right, #004d00, #66ff66)"
        )
      default:
        return setDynamicBackground("red")
    }
  }

  useEffect(() => {
    returnColor(tempInCelcius)
  }, [tempInCelcius])

  return (
    <>
      <div className='showWeather'>
        <div
          className='weather_main'
          style={{ background: dynamicBackground }}
        >
          <h1 className='weather_heading'>
            {city}, {country}
          </h1>
          <h3 className='temp'>Temperature: {tempInCelcius} C</h3>
          <hr />
          <div className='weatherData'>
            <p>Pressure {pressureInAtm} atm </p>
            <p>Visibility {visibilityInKM} Km</p>
          </div>
          <div className='weatherData'>
            <p>Humidity: {humidity}% </p>
            <p>Clouds: {clouds} % </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ShowWeather
