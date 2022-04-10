import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h3>
                {
                    user ? user.displayName : 'helllllllllllllllllloooooooooo'
                }
            </h3>
        </div>
    );
};

export default Products;