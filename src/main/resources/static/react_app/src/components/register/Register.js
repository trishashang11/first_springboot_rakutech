import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Register.scss';
import { useState } from 'react';
import { addUser, getUser } from '../../fetchApi';
import { useDispatch } from "react-redux";
import { add } from "../../features/user/userSlice";

const Register = () =>{
const dispatch=useDispatch();

const [fullName, setFullName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [togglePass, setTogglePass] = useState(true);
const [ icon, setIcon ] = useState(['far', 'eye-slash']);
const [ validationBg, setValidationBg ] = useState('');

const onChangeFullName = (e) =>{
    e.preventDefault();
    setFullName(e.target.value);
    if (e.target.value.length < 2) {
        setValidationBg('red');
    } else {
        setValidationBg('green');
    }
}

const onChangeEmail = (e) =>{
    e.preventDefault();
    setEmail(e.target.value)
}

const onChangePassword = (e) =>{
    e.preventDefault();
    setPassword(e.target.value)
    console.log(password);
}

const showPassword = () =>{

    setTogglePass(!togglePass)

    if(!togglePass){
        setIcon(['far', 'eye-slash'])
        return;
    }
    if(togglePass){
        setIcon(['far', 'eye'])
        return;
    }
    // console.log('clicked')
}


const onChecked = (e) =>{
    let isChecked = e.target.checked;
    // console.log(isChecked)
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function createUser(obj) {
//     let users = localStorage.getItem('users');
//     if (!users) {
//         users  = [];
//         users.push(obj);
//         localStorage.setItem('users', JSON.stringify(users));
//         return;
//     }
//     console.log(JSON.parse(users));
// }

const onClickRegister = (e) =>{
    e.preventDefault();

    if(!fullName || !email || !password || !validateEmail(email) || password.length < 6) return;
    
    const load = {
        firstName: fullName,
        email,
        password
    }
    addUser(load).then(data => {
        dispatch(add(data));
        setFullName("");
        setEmail("");
        setPassword("");
        window.location.pathname="/login"
    })
}

    return(
        <section className="bg-images">

        <div className="content-container">

            <div className="raku-title">
                <span className="raku-title--rak">RAKU<span className="raku-title--tech">TECH</span></span>
                <hr className="raku-hr"/>
                <p className="raku-description">Browse from over 500 devices in your area.</p>
            </div>

            <div className="logform">

               
                <p className="signupTitle">Sign Up</p>

                <div className="alacc">
                <p>Already have an account? </p>

                <Link to="/login" className="click">
                <p className="login">Log in</p>
                </Link>
                    
                </div>

               
               <form action="#" method="post">
                <label for="" className="email">Full Name</label>
               <input onChange={onChangeFullName} value={fullName} type="text" className={`input-email ${validationBg}`} required/>

                <label for="" className="email">Email</label>
                <input onChange={onChangeEmail} value={email} type="email" className="in-email" />
                
                <div className="conpass">
                <label for="" className="pass">Password</label>
                <input onChange={onChangePassword} value={password} type={togglePass ? "password" : "text"} id="password" className="in-password" placeholder="Must be at least 6 characters"/>
                <FontAwesomeIcon onClick={showPassword} className="pass-svg" icon={icon}/>
                </div>
                
                <div className="ccon">
                <input onChange={onChecked} type="checkbox" name="check" className="check" /><label>Sign up for email updates.</label>
                </div>

                <button onClick={onClickRegister} className="signingup">SIGN UP</button>

                </form>

               
                <p className="agreed">By continuing, you agree to accept our
                    <span className="policy">Privacy Policy & Terms of Service.</span>
                </p>
            </div>
            

        </div>
    </section>
    )
}
export default Register;