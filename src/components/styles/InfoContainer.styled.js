import styled from "styled-components";

export const StyledInfoContainer = styled.div `
    width: 100%;
    margin: 50px auto;
    padding: 30px;
    background-color: rgba(255, 255,255,0.1);
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-clip: padding-box;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(45,55,68,0.3);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

`

export const StyledWeatherInfo = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: #f2e8cf;
    padding: 5px 10px;
    border-radius: 5px;

    background-color: rgba(255, 255,255,0.4);
    border: 2px solid transparent;
    background-clip: padding-box;
    box-shadow: 10px 10px rgba(45,55,68,0.1);

    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const StyledLocationInfo = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: #f2e8cf;
    padding: 5px 10px;
    border-radius: 5px;

    background-color: rgba(255, 255,255,0.4);
    border: 2px solid transparent;
    background-clip: padding-box;
    box-shadow: -10px -10px rgba(45,55,68,0.1);

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`