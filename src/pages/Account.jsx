import React from 'react';
import { UserAuth } from '../auth/AuthContext';

const Account = () => {
    const { user } = UserAuth();

    return (
        <div className='w-[300px] m-auto'>
            <div>
                <p>Welcome, {user?.displayName}</p>
            </div>
        </div>
    );
};

export default Account;