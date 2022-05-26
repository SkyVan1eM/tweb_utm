import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IRootStore} from "./interface/Interfaces";
import { ILoginStore } from './interface/MeniulInterface';
import storeProvider from "./Mst/Stores/StoreProvider";
import { loginStore } from './Mst/Stores/Login.provider';


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
    return (<div>
        <LoginContext.Provider value={ loginStore }>
            { children }
        </LoginContext.Provider>
        </div>
    )
}
ReactDOM.render(
    <React.StrictMode>
        <LoginProvider>
            <div>
            <App />
        </div>
        </LoginProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();