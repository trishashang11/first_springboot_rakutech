import Container from '../container/Container';
import './LatestNews.scss';
import ln1 from '../../raw-images/ln1.png';
import ln2 from '../../raw-images/ln2.png';
import ln3 from '../../raw-images/ln3.png';

const LatestNews = () =>{
    return(

        <Container>

        <div className="latestnews">
            
        <h2>LATEST NEWS</h2>

        <div className="latest-container">

            <div className="box">
            <img src={ln1}alt="image" />
                <div className="box-content">
                    <p>01 Jan, 2015</p>
                    <h5>Typesetting Industry</h5>
                    <p>Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className="box">
            <img src={ln2}alt="image" />
                <div className="box-content">
                    <p>01 Jan, 2015</p>
                    <h5>Typesetting Industry</h5>
                    <p>Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className="box">
            <img src={ln3}alt="image" />
                <div className="box-content">
                    <p>01 Jan, 2015</p>
                    <h5>Typesetting Industry</h5>
                    <p>Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit.</p>
                </div>
            </div>
    </div>
    </div>
    
    </Container>
    )
}
export default LatestNews;