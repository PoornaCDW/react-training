import explorerImage from '../../assets/images/explorer.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './explorer.styles.css';

/**
 * The Explorer function is a React component that displays a selection menu and button for exploring
 * different travel destinations, and navigates to a details page based on the selected option.
 * @returns The Explorer component is being returned, which is a section containing two articles. The
 * first article contains a heading, a subheading, a select dropdown menu, and a button. The second
 * article contains an image.
 */
const Explorer = () => {
    const [exploreOption, setExploreOption] = useState("");
    const navigate = useNavigate();

    return (
        <section className='explorer'>
            <article className='explore'>
                <h3>WELCOME TO EXPLORER</h3>
                <h1>Your Adventure Travel Expert in the <span>SOUTH</span></h1>
                <select onChange={(value) => setExploreOption(value.target.value)} className='explorer-options'>
                    <option hidden>Choose</option>
                    <option value='pollachi'>Pollachi</option>
                    <option value='thanjavur'>Thanjavur</option>
                    <option value='chidambaram'>Chidambaram</option>
                    <option value='masinagudi'>Masinagudi</option>
                    <option value='kumbakonam'>Kumbakkonam</option>
                    <option value='tirunelveli'>Tirunalveli</option>
                </select>
                <button type='button' onClick={() => {navigate(`/details/${exploreOption.toLowerCase()}`)}} className='explore-button'>EXPLORE</button>
            </article>
            <article className='explorer-image'>
                <img src={explorerImage} alt='cover'/>
            </article>
        </section>
    );
}

export default Explorer;