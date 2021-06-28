import './ProductList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import pl1 from '../../raw-images/mac.png';
import Star from '../star/Star';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {add, setSingleProduct} from '../../features/user/myCartSlice';

import {getById} from '../../fetchApi';

const ProductItemList = (props) =>{
    const dispatch = useDispatch()
    const cartList = useSelector(state => state.myCart.cart);

    const addToCart = (id) =>{
        for(let i = 0; i < cartList.length; i++) {
            if (cartList[i].id === id) {
                alert('already add to cart!')
                return;
            }
        }
        getById(id).then(data=>{
            dispatch(add(data));
        })
    }

    const viewSingleProduct = () =>{
        dispatch(setSingleProduct({
            id: props.id,
            image: props.image,
            title: props.name,
            category: props.category,
            description: props.description,
            price: props.price
        }))
    }
    

    return(

        <div>
            
                    <div className="pd-productlist">

                    <div className="boxes">
                    <figure className="img pd-hot">
                        <div className="img-pd">
                        <img src={props.image} alt="mac" />
                        <div className="img-overlay">
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="shopping-cart" />
                </div>
                        </div>
                    </figure>

                    <div className="pd-content">

                    <Link to="/display-product"  className="click">
                    <h3 onClick={viewSingleProduct} className="content-h3">{props.name}</h3>
                    </Link>

                        <div className="small-details">
                            <div className="pd-star"><Star rate={4} /></div>
                            <span className="reviews">0 reviews</span>
                            <span className="subReviews">Submit a review</span>
                        </div>
                        <p>Category: {props.category}</p>
                        <hr className="pd-hr"/>
                        
                        <div className="price">
                            <p>{`$${props.price}`}</p>
                            <p>$599</p>
                        </div>
                        <p class="content-p">
                            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                            possimus. */}
                            {props.description}
                        </p>
                        <div className="pd-btn">
                    <button  onClick={() => addToCart(props.id)} className="btn"><FontAwesomeIcon icon='shopping-cart' />Add to Cart</button>
                    <button className="btn"><FontAwesomeIcon icon={['far', 'heart']} /></button>
                    </div>
                    </div>
                </div>

                <hr className="pd-hr"/>


            

            </div>

        </div>
    )
}
export default ProductItemList;