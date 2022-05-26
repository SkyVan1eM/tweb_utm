import React, {useEffect} from 'react';
import './App.css';
import {useLoginStore} from ".";
import 'antd/dist/antd.css'
import {HeaderLayout} from "./Layouts/HeaderLayout";
import {Mycontent} from "./Layouts/Mycontent";
import {Footer} from "antd/es/layout/layout";
import {Layout} from "antd";
import {FormLayout} from "./Layouts/FormLayout";
import {FormLogin} from "./Layouts/FormLogin";
import {useRootStore} from "./index";

function App() {
    const loginS = useLoginStore();

    useEffect(() => {
        loginS.setInitialStorageContents()
    }, [])
  return (
      <Layout>
          <HeaderLayout/>
          <div style={{ padding: '100px 50px 50px 50px'
          }}>
              <FormLogin/>
              <Mycontent />
          </div>
          <Footer style={{ textAlign: 'left' }}>Paduraru Vadim CR-192</Footer>
      </Layout>
  );
}

export default App;