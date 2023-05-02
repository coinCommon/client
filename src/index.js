import React, {createContext} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import AllStore from "./store/AllStore";

export const Context = createContext(null)

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Context.Provider value={{
        allStore: new AllStore(),
    }}>
        <App/>
    </Context.Provider>
);
