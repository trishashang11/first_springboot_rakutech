import './Newsletter.scss';
import newsletter from '../../raw-images/newsletter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Newsletter = ({event}) =>{
    const onClick = (e) => {
        e.preventDefault();
        event(true);
    }
    return(
        <section class="newsletter">
        <section class="newsletter__background">
        </section>
        <section class="newsletter__popup">
            <button  onClick={onClick} class="close"> <FontAwesomeIcon icon="times" /></button>
            <section class="newsletter__popup--content">
                <h1>Newsletter</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                </span>
                <form action="">
                    <input type="text" placeholder="Email" name="email" id="email" />
                    <button>Subscribe</button>
                </form>
                <form action="" id='checkbox-form'>
                    <input type="checkbox" name="dontclick" id="dontclick" />
                    <label for="dontclick">Don't show this popup again</label>
                </form>
            </section>
            <section class="newsletter__popup--img">
                <img src={newsletter} alt="gift" />
            </section>
        </section>
    </section>
    )
}
export default Newsletter;
