import './footer.styles.css';

/**
 * The above function returns a footer section with a contact form for users to submit their interest.
 * @returns A functional component named `Footer` is being returned. It contains a `footer` element
 * with a `section` element inside it. The `section` element has a `form` with several input fields and
 * a `button` element. The form is used to collect user information for contacting the sales team.
 */
const Footer = () => {
    return (
        <footer>
            <section className="contact-us">
                <div className='heading'>
                    <h1>Contact Us</h1>
                    <h2>Our Sales Team will reach out to you ASAP</h2>
                </div>
                <form id='contactForm'>
                    <div className='form-data'>
                        <label for='name'>Name</label>
                        <input type='text' id='name'/>
                    </div>
                    <div className='form-data'>
                        <label for='from'>Your Home Town</label>
                        <select className='form-options' name='from'>
                            <option value=''>Choose</option>
                            <option value='pollachi'>Pollachi</option>
                            <option value='thanjavur'>Thanjavur</option>
                            <option value='chidambaram'>Chidambaram</option>
                            <option value='masinagudi'>Masinagudi</option>
                            <option value='kumbakkonam'>Kumbakkonam</option>
                            <option value='tirunalveli'>Tirunalveli</option>
                        </select>
                    </div>
                    <div className='form-data'>
                        <label for='to'>Where would you like to go?</label>
                        <select className='form-options' name='to'>
                            <option value=''>Choose</option>
                            <option value='pollachi'>Pollachi</option>
                            <option value='thanjavur'>Thanjavur</option>
                            <option value='chidambaram'>Chidambaram</option>
                            <option value='masinagudi'>Masinagudi</option>
                            <option value='kumbakkonam'>Kumbakkonam</option>
                            <option value='tirunalveli'>Tirunalveli</option>
                        </select>
                    </div>
                    <div className='form-data'>
                        <label for='contact'>Contact Number</label>
                        <input type='number' id='cantact'/>
                    </div>
                </form>
                <button>SUBMIT INTEREST</button>
            </section>
        </footer>
    );
}

export default Footer;