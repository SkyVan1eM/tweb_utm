import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IRootStore} from "./interface/Interfaces";
import storeProvider from "./Mst/Stores/StoreProvider";
import { ILoginStore } from './interface/MeniulInterface';
import { loginStore } from './Mst/Stores/Login.provider';
import { BrowserRouter } from 'react-router-dom';
const StoreContext = React.createContext<IRootStore | any>(null)
export const useRootStore =()=>React.useContext(StoreContext)
const StoreProvider =({children }:{children:ReactElement})=>{
    return(
        <StoreContext.Provider value={storeProvider}>
            {children}
        </StoreContext.Provider>
    )
}
const LoginContext = React.createContext<ILoginStore | any>(null);
export const useLoginStore = () => React.useContext(LoginContext);

const LoginProvider = ({ children }: { children: ReactElement }) => {
    return (
        <LoginContext.Provider value={ loginStore }>
            { children }
        </LoginContext.Provider>
    )
}
ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <LoginProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </LoginProvider>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
