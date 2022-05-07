import React, {useState, useContext} from 'react';

import { AuthContext  } from '../../contexts/auth';
import '../LoginPage/styles.css'
const LoginPage = () => {
    const { authenticated, logar} = useContext(AuthContext);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log("submit", {login, password});
        logar(login, password);
    };

    return (
        <div className="container">
            <div className="formlogin">
                <p>{String(authenticated)}</p>
                <form  onSubmit={handleSubmit}>
                    <div className='logo'>
                    <img  src="https://images2.imgbox.com/a8/2a/rtGdJNRo_o.png" alt="Clinica" width="150" height="150"></img>
                    </div><br></br>
              <div className='field'>
                <input type="login" className='login' id='login' placeholder="Login" value={login}
                onChange={(e) => setLogin(e.target.value)}/><br></br><br></br>
    
                <div className='field'>
                <input type="password" className='password' id='password' placeholder="Senha" value={password}
                onChange={(e) => setPassword(e.target.value)}/> 
                </div>
                </div><br></br>
                <div className='actions'>
                <button type="submit">Entrar</button>
                </div>
              </form>
            </div>
       </div>
    );
};
export default LoginPage;