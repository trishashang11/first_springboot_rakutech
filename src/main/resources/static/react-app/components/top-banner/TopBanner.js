import './TopBanner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../container/Container';
import b from '../../raw-images/b.png';
import mn1 from '../../raw-images/mn1.png';
import mn2 from '../../raw-images/mn2.png';
import mn3 from '../../raw-images/mn3.png';

const TopBanner = () =>{
    return(
        <div className="banner">
            <Container>
                <div className="banner-content">
                <FontAwesomeIcon icon="angle-left" />
                    <div className="text">
                        <h1 className="ban-title">iPhone X</h1>
                        <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy.</p>
                        <p className="tp-more">MORE</p>
                    </div>
                    <img src={b} alt="iphone10"/>
                    <FontAwesomeIcon icon="angle-right" />
                </div>
            </Container>
        <div className="mini-banner">
            <div className="first-mini-banner">
                <div className="first-text">
                <h2>iPhone 6</h2>
                <p className="lorem">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                <p className="price">$399</p>
                </div>
                <img src={mn1} alt="iphone6"  />
            </div>
            <div className="mid-mini-banner">
            <img src={mn2} alt="Occulus"/>
           <div className="mid-text">
               <p>Occulus Rift</p>
               <p>$349</p>
           </div>
            </div>
            <div className="last-mini-banner">
            <div className="last-text">
                <h2>GoPro Hero 6</h2>
                <p className="lorem">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                <p className="price">$299</p>
            </div>
            <img src={mn3} alt="Gopro"/>
            </div>
            
        </div>
    </div>
    )
}
export default TopBanner;