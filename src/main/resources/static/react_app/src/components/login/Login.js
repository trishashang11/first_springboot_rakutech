// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.scss';
import {Link} from 'react-router-dom';
import {ImAppleinc,ImFacebook2} from 'react-icons/im';
import {checkAcc} from '../../fetchApi'
import { useState } from 'react';


function Login (){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [access, setAccess] = useState('false')
    

    function emailonChange(e){
        setEmail(e.target.value)
    }
    function passwordonChange(e){
        setPassword(e.target.value)
    }

const onClickLogin = () =>{

    if(!email || !password) return;
    const load ={
        email,
        password
    }
    checkAcc(load).then(data=>{
        if(data.jwt) {
            localStorage.setItem('rakuten_jwt', data.jwt);
            window.location.pathname='/'
        }
    })
    setEmail('')
    setPassword('')
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
                <p className="signTitle">Sign In</p>

                <div className="social-buttons">
                    <button className="s-apple"><ImAppleinc/> SIGN IN WITH APPLE</button>
                    <button className="s-fb"><ImFacebook2/> SIGN IN WITH FACEBOOK</button>
                </div>

                <p className="or">OR</p>

                <form action="">
                <label for="" className="email">Email</label>   
                <input onChange={emailonChange} type="text" value={email} className="input-email" />
                <label for="" class="pass">Password</label>
                <input onChange={passwordonChange} type="password" value={password} className="input-password" />
                </form>
                
                <button onClick={onClickLogin} className="signin">SIGN IN</button>

                <p className="agree">By continuing, you agree to accept our
                    <span className="policy">Privacy Policy & Terms of Service.</span>
                </p>
                <div className="dacc">Don't have an account? <Link to ="/register" className="createAcc">Create new account</Link></div>
            </div>

        </div>
    </section>

       
    )

}
export default Login