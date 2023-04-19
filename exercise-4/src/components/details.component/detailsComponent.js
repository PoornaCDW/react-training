import './details.styles.css';
import { useParams } from 'react-router-dom';
import { getSpecificData, weatherResponse } from '../../services/axiosApi';
import { useState, useEffect } from 'react';

/**
 * This is a React functional component that displays details and weather data for a specific city
 * based on the city name passed as a parameter.
 * @returns The component `Details` is being returned.
 */
const Details = () => {
    const { cityName } = useParams();
    const [PlaceData, setPlaceData] = useState([]);
    const [WeatherData, setWeatherData] = useState("24°C");

    useEffect(() => {
        const callFetch = async () => {
            setPlaceData(await getSpecificData(cityName));
            setWeatherData(await weatherResponse(cityName));
        }
        callFetch();
    }, [cityName, WeatherData]);

    if(PlaceData.city !== undefined) {
        return (
            <>
                <section className='details-container'>
                    <article className='details'>
                        <h1>{PlaceData.city}</h1>
                        <div className='data-bar'>
                            <h2>{PlaceData.place}</h2>
                        </div>
                        <h3>{WeatherData}</h3>
                    </article>
                    <article className='image-container'>
                        <img src={`../images/${PlaceData.city.toLowerCase()}.png`} alt={PlaceData.city} />
                    </article>
                </section>
                <section className='description-container'>
                    <p>{PlaceData.fullDescription}</p>
                </section>
            </>
        );
    }
}

export default Details;