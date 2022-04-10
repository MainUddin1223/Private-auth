import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase()
    return (
        <div>
            <h2>Log in</h2>
            <button onClick={singInWithGoogle}>Google Sign In</button>
            <form action="">
                <input type="email" placeholder="your email" />
                <br />
                <input type="password" placeholder="your password" />
                <br />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;