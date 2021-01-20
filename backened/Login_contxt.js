import React, { createContext } from 'react';

export const loginContext = createContext({
    isLoggedIn: false,
    userId: null,
    login: () => {},
    logout: () => {}
});