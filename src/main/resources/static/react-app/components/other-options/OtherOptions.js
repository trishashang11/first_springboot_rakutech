import Container from '../container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OtherOptions.scss';

const OtherOptions = () =>{
    return(

        <Container>

        <div className="freefundsupport">
        <div className="box">
        <FontAwesomeIcon icon="shipping-fast" />
            <h3>FREE SHIPPING</h3>
            <p class="others-category-freefundsupport--box--p">Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
                Non dolore accusamus libero accusantium, totam ipsum, natus quasi aliquid,
                mollitia maiores alias adipisci ipsa aperiam.
            </p>
        </div>
        <div className="box">
        <FontAwesomeIcon icon="dollar-sign" />
            <h3>100% REFUND</h3>
            <p class="others-category-freefundsupport--box--p">Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
                Non dolore accusamus libero accusantium, totam ipsum, natus quasi aliquid,
                mollitia maiores alias adipisci ipsa aperiam.
            </p>
        </div>
        <div className="box">
        <FontAwesomeIcon icon="headset" />
            <h3>SUPPORT 24/7</h3>
            <p class="others-category-freefundsupport--box--p">Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
                Non dolore accusamus libero accusantium, totam ipsum, natus quasi aliquid,
                mollitia maiores alias adipisci ipsa aperiam.
            </p>
        </div>
    </div>

    </Container>
    )
}
export default OtherOptions;