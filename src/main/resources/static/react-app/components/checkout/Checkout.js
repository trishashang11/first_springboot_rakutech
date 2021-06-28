import Container from "../container/Container";
import './Checkout.scss';
import CheckoutList from "./CheckOutList";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

const Checkout = () =>{
 
    const cartSub = useSelector((state) => state.myCart.cUnitPrice);

    const [shippingFee, setShippingFee] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() =>{

        if(cartSub>0){
            setShippingFee(20)
            setTotal(shippingFee+cartSub)
            return;
        }
        setShippingFee(0)
        setTotal(0)

    },[cartSub])


    return(
        <Container>
            <div className="ck-title">
                <h3 className="tp">PRODUCT</h3>
                <h3 className="tpr">PRICE</h3>
                <h3 className="tq">QTY</h3>
                <h3 className="tup">UNIT PRICE</h3>
            </div>
            <hr/>

            <CheckoutList/>

            <div className="ck-payment">
            <div className="voucher">
                    <input type="text" name="" placeholder="Voucher Code" className="in-voucher" id="voucher-code" />
                    <button className="btn">Redeem</button>
            </div>
            <div className="ck-form">
            <ul className="ck-dul">
                        <li className="ck-dli"><span>Subtotal</span><span class='sub-total'>{`$${cartSub}`}</span></li>
                        <li className="ck-dli"><span>Shipping fee</span><span>{`$${shippingFee}`}</span></li>
                        <li className="ck-dli"><span>Coupon</span><span>No</span></li>
            <hr/>
            <li className="ck-dli"><h1>Total</h1><h1>{`$${total}`}</h1></li>
            </ul>
            <button class="ck-order">Checkout</button>
            </div>
            </div>

        </Container>
    )
}
export default Checkout;    