import Container from '../container/Container';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import f1 from '../../raw-images/f1.png';
import f2 from '../../raw-images/f2.png';
import f3 from '../../raw-images/f3.png';
import f4 from '../../raw-images/f4.jpg';

function Footer(){
    return(
            <footer>

        <hr className="ft-hr"/>

        <Container>

            <section className="foot-sec1">
                <div className="box1">
                    <h3 className="h3">RAKUTECH</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore et voluptatum natus provident explicabo inventore,
                        incidunt sapiente temporibus eius atque! Corporis excepturi
                        nihil minima mollitia! Eveniet pariatur vitae ipsum earum!</p>
                </div>
                <div className="box2">
                    <h5>Follow Us</h5>
                    <p>Since the 1500s, when an unknown printer took a gallery of type and
                        scrambled.</p>
                    <div className="foot-icons">
                    <FontAwesomeIcon icon={['fab','facebook-f']} />
                    <FontAwesomeIcon icon={['fab','twitter']} />
                    </div>
                </div>
                <div className="box2">
                    <h5>Contact Us</h5>
                    <p>My company, 4578 Marmora Road, Glasgow
                        <span>D04 89GR</span>
                        <span> Call us now: 0123-456-789</span>
                        <span>Email:support@whatever.com</span>
                    </p>
                </div>
            </section>

            </Container>

            <hr className="ft-hr"/>
        
            <Container>

            <section className="foot-sec2">
                <div>
                    <h5>Information</h5>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h5>Services</h5>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h5>Extras</h5>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h5>My Account</h5>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h5>Useful Links</h5>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h5>Our Offers</h5>
                    <p>About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </section>
        
            </Container>

        <hr className="ft-hr"/>
        
        <Container>

            <section className="foot-sec3">
                <span className="copyright">© 2018 Ecommerce theme by www.bisenbaev.com</span>
                <figure className="payment-icon">
                    <img src={f1} alt="img" />
                    <img src={f2} alt="img" />
                    <img src={f3} alt="img" />
                    <img src={f4} alt="img" />
                </figure>
            </section>

            </Container>

    </footer>

       
    );
}
export default Footer;