import explorerImage from '../../assets/images/explorer.jpg';
import './explorer.styles.css';

/**
 * The Explorer function returns a section with a form for selecting a travel destination and a button
 * to explore it.
 * @returns The Explorer component is being returned, which contains a section with two articles. The
 * first article has a heading, a subheading, a select dropdown, and a button. The second article has
 * an image.
 */
const Explorer = () => {
    return (
        <section className='explorer'>
            <article className='explore'>
                <h3>WELCOME TO EXPLORER</h3>
                <h1>Your Adventure Travel Expert in the <span>SOUTH</span></h1>
                <select className='explorer-options'>
                    <option value=''>Choose</option>
                    <option value='pollachi'>Pollachi</option>
                    <option value='thanjavur'>Thanjavur</option>
                    <option value='chidambaram'>Chidambaram</option>
                    <option value='masinagudi'>Masinagudi</option>
                    <option value='kumbakkonam'>Kumbakkonam</option>
                    <option value='tirunalveli'>Tirunalveli</option>
                </select>
                <button className='explore-button'>EXPLORE</button>
            </article>
            <article className='explorer-image'>
                <img src={explorerImage} alt='cover'/>
            </article>
        </section>
    );
}

export default Explorer;