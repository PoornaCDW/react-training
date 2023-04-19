import './similardestinations.styles.css';
import SimilarCards from './similarCards';
import { useParams } from 'react-router-dom';

/**
 * This is a React component that renders a section with a heading and a container of similar
 * destination cards based on the city name passed as a parameter.
 * @returns A React functional component called `SimilarDestinations` is being returned. It renders a
 * section with class name `similar-destinations` that contains an article with class name
 * `similar-container-heading` and another article with class name `similar-cards-container`. The
 * `similar-container-heading` article contains two headings, one with the text "Similar Destinations"
 * and another with the text "Because you liked
 */
const SimilarDestinations = () => {
    const { cityName } = useParams();

    return (
        <section className='similar-destinations'>
            <article className='similar-container-heading'>
                <h1>Similar Destinations</h1>
                <h2>Because you liked {capitalizeFirstLetter(cityName)}</h2>
            </article>
            <article className='similar-cards-container'>
                <SimilarCards />
            </article>
        </section>
    );
}

/**
 * The function capitalizes the first letter of a given string.
 * @param str - str is a parameter of the function `capitalizeFirstLetter`. It represents the string
 * that you want to capitalize the first letter of.
 * @returns The function `capitalizeFirstLetter` returns a string with the first letter capitalized. It
 * takes a string as an argument, and returns the same string with the first letter capitalized.
 */
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default SimilarDestinations;