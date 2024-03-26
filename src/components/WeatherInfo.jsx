import { StyledWeatherInfo } from "./styles/InfoContainer.styled";

function WeatherInfo({data}) {
    return(
        <StyledWeatherInfo>

            {

            data.main ? <h2>Temp: {data.main.temp.toFixed()} °C </h2> : <h2>TEMPERATURE</h2>

            }   

            {
              data.weather ? <p> {data.weather[0].description} </p> : null

            }

        </StyledWeatherInfo>
    )
}

export default WeatherInfo