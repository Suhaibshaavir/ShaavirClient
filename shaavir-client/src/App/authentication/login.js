import { useContext } from 'react';
import './login.css'
import NavigationContext from '../contexts/navigationContext';

function Login({ loginClick }) {

    const navigationContextValue = useContext(NavigationContext)

    console.log(navigationContextValue);
    const loginHandler = (a=6) => {
        loginClick(a)
    }

    return (
        <>
            <button onClick={loginHandler}>Login</button>

        </>
    )
}

export default Login