import './footer.styles.css';
import { useState } from 'react';

/**
 * The above function returns a footer section with a contact form for users to submit their interest.
 * @returns A functional component named `Footer` is being returned. It contains a `footer` element
 * with a `section` element inside it. The `section` element has a `form` with several input fields and
 * a `button` element. The form is used to collect user information for contacting the sales team.
 */
const Footer = () => {

    const [name, setName] = useState("");
    const [homeTown, setHometown] = useState("");
    const [interestedArea, setInterestedArea] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [isValid,setIsValid] = useState(false);
    const [unchangedName, setUnchangedName] = useState("");

    const regex = {
        name: new RegExp(/^[a-zA-Z]{2,30}$/),
        contact: new RegExp(/^[0-9]\d{9}$/)
    }

    /**
     * The function validates a form by checking if certain fields are not empty and meet certain regex
     * patterns.
     */
    const validateForm = () => {
        if((name !== "" && regex.name.test(name)) && (homeTown !== "") && (interestedArea !== "") && (contactNumber !== "" && regex.contact.test(contactNumber))) {
            if(homeTown !== interestedArea) {
                setIsValid(true);
                setUnchangedName(name);
            }
        }
    }

    return (
        <footer>
            <section className="contact-us">
                <div className='heading'>
                    <h1>Contact Us</h1>
                    <h2>Our Sales Team will reach out to you ASAP!</h2>
                </div>
                <form id='contactForm'>
                    <div className='form-data'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' onChange={(value) => setName(value.target.value)} id='name'/>
                    </div>
                    <div className='form-data'>
                        <label htmlFor='from'>Your Home Town</label>
                        <select className='form-options' onChange={(value) => setHometown(value.target.value)} name='from'>
                            <option hidden>Choose</option>
                            <option value='Pollachi'>Pollachi</option>
                            <option value='Thanjavur'>Thanjavur</option>
                            <option value='Chidambaram'>Chidambaram</option>
                            <option value='Masinagudi'>Masinagudi</option>
                            <option value='Kumbakkonam'>Kumbakkonam</option>
                            <option value='Tirunalveli'>Tirunalveli</option>
                        </select>
                    </div>
                    <div className='form-data'>
                        <label htmlFor='to'>Where would you like to go?</label>
                        <select className='form-options' onChange={(value) => setInterestedArea(value.target.value)} name='to'>
                            <option hidden>Choose</option>
                            <option value='Pollachi'>Pollachi</option>
                            <option value='Thanjavur'>Thanjavur</option>
                            <option value='Chidambaram'>Chidambaram</option>
                            <option value='Masinagudi'>Masinagudi</option>
                            <option value='Kumbakkonam'>Kumbakkonam</option>
                            <option value='Tirunalveli'>Tirunalveli</option>
                        </select>
                    </div>
                    <div className='form-data'>
                        <label htmlFor='contact'>Contact Number</label>
                        <input type='number' onChange={(value) => setContactNumber(value.target.value)} id='cantact'/>
                    </div>
                </form>
                <button type='button' onClick={validateForm}>SUBMIT INTEREST</button>
            </section>
            {isValid ? (<OutputMessage name={unchangedName} source={homeTown} destination={interestedArea} />):<div></div>}
        </footer>
    );
}

/**
 * The function OutputMessage returns a message thanking the user for expressing interest in travelling
 * and informing them that the sales team will provide them with the best packages from the source to
 * the destination.
 * @param props - props is an object that contains the properties passed to the OutputMessage
 * component. In this case, the properties are name, source, and destination. These properties are
 * accessed using destructuring assignment.
 * @returns A React functional component that renders an output message with the name, source, and
 * destination props passed to it. The message thanks the user for expressing interest in travelling
 * and informs them that the sales team will get back to them with the best packages from the source to
 * the destination.
 */
const OutputMessage = (props) => {
    const {name, source, destination} = props;
    
    return (
        <div className='output-message'>
            <h1>Thank You <span>{name}</span> for expressing interest in travelling with us. Our Sales Team will get back with best packages from <span>{source}</span> to <span>{destination}</span>.</h1>
        </div>
    );
}

export default Footer;