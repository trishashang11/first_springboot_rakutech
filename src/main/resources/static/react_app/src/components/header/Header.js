import Container from '../container/Container';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { numberofCarts} from '../../features/user/myCartSlice';


function Header(){
    const dispatch = useDispatch();

    const numberItems = useSelector((state) => state.myCart.cTotalItems);
    const cartItem = useSelector(state => state.myCart.cart);

    useEffect(() => {
        dispatch(numberofCarts(cartItem.length))
    }, [cartItem])



return (
    <div>
        
 <Container>

    <div className="header-top">

    <div className="selection">
        <span>EN <select name="" id="" /></span>
        <span>USD <select name="" id="" /></span>
    </div>

    <div className="account">
            <div>
            <Link to="/profile" className="active">
            <FontAwesomeIcon icon="user" /> My Profile
            </Link>
            </div>
            <Link to="/checkout" className="active">      
<div className="acc-check">
        <FontAwesomeIcon icon="shopping-basket" />
        <p>{numberItems} Items</p>
        <p className="acc-p">$0.00</p>
</div>
</Link>
        
<div>
<Link to="/checkout" className="acc-search">
        <FontAwesomeIcon icon="search" />
        </Link>
</div>
       
    </div>

    </div>

    <h1 className="title">RAKU
    <span className="tech">TECH</span>
    
    </h1>

    <nav className="nav-links">
    {/* <div className="nav-burger">
                    <label id="toggler">
                        <input type="checkbox" />
                        <i class="fas fa-bars"></i>
                    </label>
                </div> */}
        <ul className="navul">
            <Link to="/" className="ul-li home">
                HOME
                <label id="home-toggler" className="home-togler">
                            <input type="checkbox" className="input"/>
                            <i id="arrow" class="fas fa-chevron-down"></i>
                        </label>
                        <div className="dropdown">
                            <ul className="dr-ul">
                                <li className="lititle">Category</li>
                                <li className="dr-li">AirPort & Wireless</li>
                                <li className="dr-li">AppleCare</li>
                                <li className="dr-li">Bags, Shells & Sleeves</li>
                                <li className="dr-li">Business & Security</li>
                                <li className="dr-li">Cables & Docks</li>
                            </ul>
                            <ul className="dr-ul">
                                <li className="dr-li">Camera & Video</li>
                                <li className="dr-li">Car & Travel</li>
                                <li className="dr-li">Cases & Films</li>
                            </ul>
                            <ul className="dr-ul">
                                <li className="lititle">Category</li>
                                <li className="dr-li">Changing Devices</li>
                                <li className="dr-li">Connected Home</li>
                                <li className="dr-li">Device Care</li>
                                <li className="dr-li">Display and Graphic</li>
                                <li className="dr-li">Fitness & Sport</li>
                            </ul>
                            <ul className="dr-ul">
                                <li className="dr-li">Headphones</li>
                                <li className="dr-li">HealthKit</li>
                            </ul>
                            <ul className="dr-ul">
                                <li className="lititle">Category</li>
                                <li className="dr-li">Mice & Keyboards</li>
                                <li className="dr-li">Music Creation</li>
                                <li className="dr-li">Networking & Server</li>
                            </ul>
                        </div>
            </Link>
            
            <li className="ul-li">STORE</li>
            <li className="ul-li">IPHONE</li>
            <li className="ul-li">IPAD</li>
            <li className="ul-li">MACBOOK</li>
            <Link to="/product-list" className="ul-li">
            ACCESORIES
            </Link>
            
           

        </ul>
    </nav>

    </Container>

    </div>


)
}

export default Header;