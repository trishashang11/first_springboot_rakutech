import CheckoutCard from './CheckoutCard';
import { useSelector} from 'react-redux';

const CheckoutList = () =>{
    const myCart = useSelector((state) => state.myCart.cart);

    return(
        <div>
            {
                myCart.map(product => {
                    return (
                        <CheckoutCard info={product} />
                    )
                })
                
            }  
        </div>
    )
}
export default CheckoutList;