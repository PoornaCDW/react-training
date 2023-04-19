import { getSimilarDestinations, getSpecificData } from '../../services/axiosApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * This is a React component that fetches and displays similar destination cards based on the current
 * city name parameter.
 * @returns The `SimilarCards` component is returning a list of `GetIndividualCards` components, each
 * with a `city` prop that is set to a lowercase string value of a city name from the `SimilarCities`
 * array. The `SimilarCities` array is obtained by calling the `getSimilarDestinations` function with
 * the `cityName` parameter obtained from the `useParams` hook.
 */
const SimilarCards = () => {
    const { cityName } = useParams();
    const [SimilarCities, setSimilarCities] = useState([]);

    const callFetch = async () => {
        setSimilarCities(await getSimilarDestinations(cityName));
    }
    callFetch();

    return (
        SimilarCities.map((city, i) => {
            return (
                <GetIndividualCards city={city.toLowerCase()} key={i} />
            )
        })
    );
}

/**
 * This is a React component that displays individual cards for specific cities with their details and
 * a button to navigate to the city's details page.
 * @param props - props is an object that contains the properties passed down to the component from its
 * parent component. In this case, it is likely that the parent component is passing down a "city"
 * property to the GetIndividualCards component.
 * @returns A functional component named `GetIndividualCards` is being returned. It renders a div
 * containing an image, heading, subheading, paragraph, and a button. The component uses the `useState`
 * hook to set the state of `CityDetails` to an empty array and the `useEffect` hook to fetch specific
 * data based on the `props.city` value and update the state of `CityDetails
 */
const GetIndividualCards = (props) => {
    const navigate = useNavigate();
    const [CityDetails, setCityDetails] = useState([]);

    // useEffect(() => {
        const callFetch = async () => {
            setCityDetails(await getSpecificData(props.city));
        }
        callFetch();
    // }, [props.city]);

    return (
        <div className='places-card'>
            <img src={`../images/${CityDetails.city}.png`} alt={CityDetails.city} />
            <h2>{CityDetails.place}</h2>
            <h3>{CityDetails.city}</h3>
            <p>{CityDetails.shortDescription}</p>
            <button onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/details/${CityDetails.city.toLowerCase()}`);
                }}>READ MORE</button>
        </div>
    );
}

GetIndividualCards.proTypes = {
    city: PropTypes.string
}

export default SimilarCards;