// import Places from '../../assets/data/places.json';
import getData from '../../services/axiosApi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * This is a function that returns a list of articles containing information about different places,
 * including an image, name, city, short description, and a button to read more.
 * @returns The `PlacesCards` component is returning an array of `article` elements, each containing an
 * image, title, city, short description, and a button. The data for each `article` element is being
 * mapped from the `Places` array using the `map` method.
 */
const PlacesCards = () => {
    const navigate = useNavigate();
    const [Places, setPlaces] = useState([]);

    useEffect(() => {
        const callFetch = async () => {
            setPlaces(await getData());
        }
        callFetch();
    }, []);

    return(
        Places.map((place, i) => {
            return (
                <article className='places-card' key={i}>
                    <img src={`./images/${place.city.toLowerCase()}.png`} alt={place.city} />
                    <h2>{place.place}</h2>
                    <h3>{place.city}</h3>
                    <p>{place.shortDescription}</p>
                    <button onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(`/details/${place.city.toLowerCase()}`);
                        }}>READ MORE</button>
                </article>
            );
        })
    );
}

export default PlacesCards;