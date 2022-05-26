import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IRootStore} from "./interface/Interfaces";
import storeProvider from "./Mst/Stores/StoreProvider";
const StoreContext = React.createContext<IRootStore | any>(null)
export const useRootStore =()=>React.useContext(StoreContext)
const StoreProvider =({children }:{children:ReactElement})=>{
    return(
        <StoreContext.Provider value={storeProvider}>
            {children}
        </StoreContext.Provider>
    )
}
ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();