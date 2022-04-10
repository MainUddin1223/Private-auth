import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
    const {user}=useFirebase()
    return (
        <div>
            <h1>{user?.displayName}</h1>
            <h4>{user?.email}</h4>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;