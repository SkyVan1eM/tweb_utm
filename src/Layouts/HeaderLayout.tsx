import {Layout, Menu} from "antd";

const { Header } = Layout;
export const HeaderLayout =() =>{
    return(
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Meniu 1</Menu.Item>
                <Menu.Item key="2">Meniu 2</Menu.Item>
                <Menu.Item key="3">Meniu 3</Menu.Item>
            </Menu>
        </Header>
    )
}