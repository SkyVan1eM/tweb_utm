import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'

import {useLoginStore, useRootStore} from ".";
import {HeaderLayout} from "./Layouts/HeaderLayout";
import {Mycontent} from "./Layouts/Mycontent";
import {Footer} from "antd/es/layout/layout";
import {Layout} from "antd";
import {FormLayout} from "./Layouts/FormLayout";

import {FormLogin} from "./Layouts/FormLogin";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./Routes/Routes";
import {Home} from "./Layouts/Home";
function App() {
    const loginS = useLoginStore();

    useEffect(() => {
        loginS.setInitialStorageContents()
    }, [])

    const roottoStore = useRootStore()
    useEffect(() => {
        roottoStore.setInitialStorageValue()
        roottoStore.setDatainLocalStorage()
        roottoStore.getDatafromLocalStorage()
        // roottoStore.removemyLocalStorage()
    }, [])

    return (
        <div className="App">
            <Layout>

                <HeaderLayout/>

                <div className='site-layout-content'>

                    <Routes>
                        <Route path={ ROUTES[0].path } element={ <Home /> } />
                        <Route path={ ROUTES[1].path } element={ <Mycontent/> } />
                        <Route path={ ROUTES[2].path } element={ <FormLogin/> } />
                    </Routes>
                </div>
                <Footer style={{textAlign: 'left'}}>Paduraru Vadim CR-192</Footer>
            </Layout>
        </div>
    );
}


export default App;
