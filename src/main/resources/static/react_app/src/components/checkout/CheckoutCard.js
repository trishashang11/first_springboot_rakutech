import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Checkout.scss';
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {remove, addUnitPrice, subUnitPrice} from '../../features/user/myCartSlice';

const CheckoutCard = ({info}) =>{
    const dispatch = useDispatch();
    const price = info.price;
    const [uprice, setUprice] = useState(0);

    const [count, setCount] = useState(0);

    const incrementBtn = () =>{
        setCount(count + 1);
        dispatch(addUnitPrice(price))
    }

    const deccrementBtn = () =>{

        if(count>0){
            setCount(count - 1);
        dispatch(subUnitPrice(price))
        }
        return;
    }

    useEffect(() => {
        setUprice(Number(price * count).toFixed(2));
    }, [count])

    const removeOnCart = () =>{
        dispatch(remove(info.id));
    }


    return(
        <div>
                <div className="ck-list">
                <span onClick={removeOnCart} className="del">x</span>
                <img src={info.image} alt=""/>
                <h4 className="ck-h4">{ info.title }</h4>
                <p>{`$${price}`}</p>
                <div className="ctr">
                <button onClick={deccrementBtn} class='sub'><FontAwesomeIcon icon="minus"/></button>
                <input type="text" name="quantity" className="qty"value={count} readOnly/>
                <button onClick={incrementBtn} class='add'><FontAwesomeIcon icon="plus"/></button>
                </div>
                <p className="uprice">{`$${uprice}`}</p>
            </div>
            <hr/>
        </div>
    )
}
export default CheckoutCard;