import { StyledInput } from "./styles/InputContainer.styled"

function InputContainer({location, setLocation, searchLocation}) {

    return (
        <StyledInput>
            <input 
                type="text"
                placeholder="Choose a city..."
                onChange={e => {
                    setLocation(e.target.value)
                } }
                value = {location}
                onKeyPress={searchLocation}
            />

        </StyledInput>
    )
}

export default InputContainer