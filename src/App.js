import { Fragment } from "react";
import { useState} from "react"

import Header from "./components/Header";
import InputContainer from "./components/InputContainer";
import WeatherInfo from "./components/WeatherInfo";
import LocationInfo from "./components/LocationInfo";

import { GlobalStyles } from "./components/styles/Global";
import { StyledContainer } from "./components/styles/Container.styled";
import { StyledInfoContainer } from "./components/styles/InfoContainer.styled";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  
  
  const searchLocation = async(e) => {

      if( e.key === 'Enter') {

          try {
              if(!location.trim()) {
                  console.log('This field is empty...')
                  return
              }
  
              const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d3c6959206fc09a95fb50bcda9f0bd24&units=metric`)
              const city = await info.json()

              setData(city)
              setLocation('')

              console.log(city.name)

          } catch(err) {

              console.log(err)

          }
  
      }
  }

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <StyledContainer >
        <InputContainer 
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
        />
        <StyledInfoContainer>
          <WeatherInfo 
            data={data}
          />
          <LocationInfo
            data={data} 
            location={location}
          />
        </StyledInfoContainer>
      </StyledContainer>

    </Fragment>
  );
}

export default App;
