import Container from '../container/Container';
import './MidNavigation.scss';


const MidNavigation = () =>{
    return(
        <Container>
            <div>
            <h3 className="md-title">BEST SELLER</h3>
        <nav>
            <ul className="md-ul">
                <li className="md-li">All</li>
                <li className="md-li">Mac</li>
                <li className="md-li">iPhone</li>
                <li className="md-li">iPad</li>
                <li className="md-li">iPod</li>
                <li className="md-li">Accessories</li>
            </ul>
        </nav>
            </div>
        
        </Container>
    )
}
export default MidNavigation;
