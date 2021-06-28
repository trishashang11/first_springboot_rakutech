import './Card.scss';
import Star from '../star/Star';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {

return (

        <div className={`card ${props.hasFirstHot ? 'hot' : ''}`}>
                <div className="card-image">
                <img src={props.img} alt="Macbook" />
                <div className="card-overlay">
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="shopping-cart" />
                </div>
                </div>
                <p className="card-name">{ props.name }</p>
                <Star rate={props.rate} />
                <div className="price">
                <p>${ props.price }</p>
                <p>${ props.mprice }</p>
                </div>
        </div>
)
}

export default Card;