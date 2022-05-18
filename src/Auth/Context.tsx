import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

import { AUTH_URL } from '../constants/URL';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const login = (email, password) => {
        setIsLoading(true);

        axios
            .post(AUTH_URL, {
                email,
                password,
            })
            .then(res => {
                //AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`login error ${e}`);
                setIsLoading(false);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                login,
            }}>
            {children}
        </AuthContext.Provider>
    );

}