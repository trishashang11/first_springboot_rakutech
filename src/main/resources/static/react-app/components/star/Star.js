import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Star.scss';

const Star = (props) => {
    const arr = new Array(5);
    arr.fill(0);
    const createStar = (index) => {
        if(index < props.rate) {
        return <FontAwesomeIcon icon="star" className="star"/>
        }
        return <FontAwesomeIcon icon="star" className="gray"/>
    }

    return (
        <div className="star">
                    {
                        arr.map((elem, index) => createStar(index))
                    }
                </div>
    )
}

export default Star;