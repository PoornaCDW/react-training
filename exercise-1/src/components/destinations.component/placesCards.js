import Places from '../../assets/data/places.json';

/**
 * This is a function that returns a list of articles containing information about different places,
 * including an image, name, city, short description, and a button to read more.
 * @returns The `PlacesCards` component is returning an array of `article` elements, each containing an
 * image, title, city, short description, and a button. The data for each `article` element is being
 * mapped from the `Places` array using the `map` method.
 */
const PlacesCards = () => {
    return(
        Places.map((place, i) => {
            return (
                <article className='places-card' key={i}>
                    <img src={`./images/${place.city.toLowerCase()}.png`} alt={place.city} />
                    <h2>{place.place}</h2>
                    <h3>{place.city}</h3>
                    <p>{place.shortDescription}</p>
                    <button>READ MORE</button>
                </article>
            );
        })
    );
}

export default PlacesCards;