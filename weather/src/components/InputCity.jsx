const InputCity = ({ onSubmitHandler, onInputHandler, city }) => {
  return (
    <>
      <p>Sometimes, you have to click the submit button or press enter</p>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='city'>Input a city </label>
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
