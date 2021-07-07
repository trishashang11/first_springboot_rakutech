import './App.scss';
import './fonts/Fonts.css';
import Login from './components/login/Login';
import Home from './pages/Home';
import Accessories from './pages/Accessories';
import SingleProduct from './pages/SingleProduct';
import Register from './components/register/Register';
import CheckoutOrder from './pages/CheckoutOrder';

import { library} from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash, far } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faSearch, faShoppingBasket, faShoppingCart, faStar, faUser, faShippingFast,
  faDollarSign, faHeadset, faAngleLeft, faAngleRight, faMinus, faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import NoneProtectedRoute from './components/NoneProtectedRoute';
import UserProfile from './components/UserProfile';



library.add(
    fab,
    far,
    faStar,
    faUser,
    faShoppingBasket,
    faSearch,
    faHeart,
    faShoppingCart,
    faShippingFast,
    faDollarSign,
    faHeadset,
    faFacebookF,
    faTwitter,
    faAngleLeft,
    faAngleRight,
    faHeart,
    faMinus,
    faPlus,
    faEye,
    faEyeSlash,
    faTimes


)

function App() {

  return (
    <div className="App">
      <Router>

    
    <Switch>

    <ProtectedRoute exact path='/' component={Home} />
    <Route  path='/product-list'>
      <Accessories />
    </Route>
    <Route  path='/display-product'>
      <SingleProduct/>
    </Route>
    <Route  path='/checkout'>
      <CheckoutOrder/>
    </Route>

    <NoneProtectedRoute exact path='/login' component={Login} />
    <NoneProtectedRoute exact path='/register' component={Register} />

    <ProtectedRoute exact path='/profile' component={UserProfile} />

    </Switch>
    
    

    </Router>

    </div>

  );
}

export default App;
