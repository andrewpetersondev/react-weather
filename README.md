# react-weather

educative course

use the [Open Weather API](https://openweathermap.org/api)

## Instructions

### Header Component

The Header component is responsible for displaying the application’s name on the top of the screen. In this task, create a Header component that contains the application’s name and then add that component to the application for loading. Name the application as “Learning at Educative” and add the heading class in it for styling.

```jsx
const Header = () => {
  return (
    <>
      <h1 className='heading'>Learning at Educative</h1>
    </>
  )
}
export default Header
```

### InputCity Component

The InputCity component provides you with a search box where you can write the name of the city for which you want weather information and a search button to initiate an API call. The task is to create an InputCity component that contains the input field and a submit button. It’s a usual HTML element. In this case, it takes two attributes:

- The city: It retains the value of the city name provided by the user.
- The onInputHandler function, which handles the altering of the city name for the onChange attribute.

Add a Submit button to save the record and call the API on the city name at the end of this HTML code.

```jsx
const InputCity = ({ onSubmitHandler, onInputHandler, city }) => {
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='city'>Input a city</label>
        <input
          type='search'
          name='city'
          onChange={onInputHandler}
          value={city}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
export default InputCity
```

App.jsx

```jsx
import InputCity from "./components/InputCity"
;<InputCity
  onSubmitHandler={onSubmitHandler}
  onInputHandler={onInputHandler}
  city={city}
/>
```

### Use InputCity Component

In this task, use the InputCity components in the application. Complete the following steps:

- Add the property using the useState method from React. The code example is as follows:
  - const [inputCity, setInputCity] = useState("Seattle");
- Handle input: Add this property to handle the input field in the application. The inputHandler method will be used to handle the input.
  - onInputHandler={inputHandler}
- Handle submission: Add this property to handle the submission of the city name in the application. The onSubmitHandler method will be used to handle the submission of values.
  - onSubmitHandler={submitHandler}

```jsx

```

### Import and Use Hooks

### Use the API to fetch Data

In this task, use the API that you exported in Task 2. Use the following URL to access the API:

`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={{api_key_weather_app}}`

Follow these steps to use the API to fetch data:

- Assign the API URL to a variable.
- Create a function to fetch data from the URL.
- Pass the data to the component to show data.

App.jsx

```jsx
import ShowWeather from "./components/ShowWeather"

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
      setWeatherData(data)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])


<ShowWeather weatherData={weatherData} />
```

### Show Weather Layout Component

The layout component is used to share a common section between multiple pages. The layout component will include the standard header and footer sections.

In this task, create an HTML layout in the /usercode/application/src/Components/ShowWeather.js file. This layout will use the weather data and display it in the application. For now, you can use dummy data in the application. In the end, add data returned from the API.

```jsx
const ShowWeather = ({ weatherData }) => {
  // console.log("weatherData", weatherData)

  return (
    <>
      <div className='showWeather'>
        <header>{weatherData.name}</header>
        <main>
          {Object.entries(weatherData.main).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))}
        </main>
      </div>
    </>
  )
}
export default ShowWeather
```

### Use the Weather Data

After passing some dummy data in the layout, pass the data from the /usercode/application/src/App.js file, receive it in the /usercode/application/src/Components/ShowWeather.js file, and display those values.

The OpenWeather API returns an object data that contains various properties. You’ll use some properties from the data object and display them in the /usercode/application/src/Components/ShowWeather.js file. To do so, add the following variables in the ShowWeather components:

city: To store the city name.
country: To store the country name.
temperature: To store the temperature in that city.
pressure: To store the wind pressure in that city.
visibility: To store the visibility in that city.
humidity: To store the humidity in that city.
clouds: To store the cloud state in that city.

### Add Dynamic Background

In this task, create the dynamic background on the base of the temperature received by the API.

Let’s create a simple method that returns the color code with the temperature range. You can follow these ranges:

If the temperature is less than 10 degrees Celsius then return a blue color.
If the temperature is between 10 and 30 degrees Celsius then return the green color.
If the temperature is greater than 30 degrees Celsius then return a red color. If you’re unsure how to write a method to return the colors, click the “Show Hint” button.

### Add Error Handler

It’s now time to add error handling to the App.js file. When a user types in an invalid city name, our API returns an error rather than the property. In that case, the error message will be displayed instead of the ShowWeather component.

In this task, handle an error state where the user might enter an invalid city name. You must update a hook to pass the error message to the layout component.

```jsx
{
  error ? (
    <div className='error'>City not found</div>
  ) : (
    <ShowWeather weatherData={weatherData} />
  )
}
```
