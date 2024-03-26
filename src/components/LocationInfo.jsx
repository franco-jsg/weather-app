import { StyledLocationInfo } from "./styles/InfoContainer.styled";

function LocationInfo({data}) {

    const myDate = new Date();
    const UTCArg = (myDate.getTimezoneOffset())/60;
    const myDateHour = myDate.getHours();
    const offSetLocation = (data.timezone)/3600;
    const Utc0 = myDateHour + UTCArg;
    const globalHour = Utc0 + offSetLocation


    return(
        <StyledLocationInfo>
            {
                data.main ? (
                    <h2>
                        Time: {globalHour >= 24 ? globalHour - 24 : globalHour}:
                        {
                            myDate.getMinutes()<10 ? '0' + myDate.getMinutes()  : null + myDate.getMinutes()
                        
                        } hs
                        
                    </h2>
 
                ) : (
                    <h2>TIME</h2>
                )

               
            }
            <div>
                {
                    data.sys ? <p>{data.name} - {data.sys.country}</p> : null
                }
            </div>
        </StyledLocationInfo>
    )
}

export default LocationInfo