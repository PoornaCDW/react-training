import './destinations.styles.css';
import PlacesCards from './placesCards';

/**
 * The function returns a section with a heading and caption for destinations, along with a container
 * for place cards.
 * @returns The `Destinations` component is returning a section element with two article elements
 * inside it. The first article contains two heading elements, while the second article contains the
 * `PlacesCards` component.
 */
const Destinations = () => {
    return (
        <section className='destinations'>
            <article className='destination-details'>
                <h1 className='destinations-heading'>Destinations</h1>
                <h3 className='destinations-caption'>Just for you. Because you and your bike are special to us!</h3>
            </article>
            <article className="destinations-container">
                <PlacesCards />
            </article>
        </section>
    );
}

export default Destinations;