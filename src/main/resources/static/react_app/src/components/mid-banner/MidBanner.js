import Container from '../container/Container';
import './MidBanner.scss';
import mimg from '../../raw-images/mn1.png';

const MidBanner = () =>{
    return(
        <div className="mid-banner">
            <Container>
                <div className="md-banner">
                <div className="md-text">
                <h1>iPhone 6 Plus</h1>
                <p className="md-p">Performance and design. Taken right to the edge.</p>
                <p className="md-shop">SHOP NOW</p>
                </div>
                <div className="mid-image">
                <img src={mimg} alt="iphone6"/>
                </div>
                </div>
            </Container>
        </div>
    )
}
export default MidBanner;