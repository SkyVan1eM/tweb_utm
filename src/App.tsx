import React from 'react';
import './App.css';

import 'antd/dist/antd.css'
import {HeaderLayout} from "./Layouts/HeaderLayout";
import Mycontent from "./Layouts/Mycontent";
import {Footer} from "antd/es/layout/layout";
import {Layout} from "antd";

function App() {
  return (
      <Layout>
        <>
          <HeaderLayout/>
        </>
        <div style={{ padding: '100px 50px 50px 50px'
        }}>
          <Mycontent />
        </div>
        <Footer style={{ textAlign: 'center' }}>Paduraru Vadim</Footer>
      </Layout>
  );
}

export default App;
