import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, UserOutlined, ShoppingCartOutlined, ShoppingOutlined, UserAddOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const { SubMenu, Item } = Menu;

const Header = () =>{
    const [state, setState] = useState('home')
    const [current, setCurrent] = useState('')

    const handleClick = (e) =>{
        setCurrent(e.key)
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="d-flex mt0" style={{ height:"5vh"}}>
          <Item key="home" icon={<AppstoreOutlined />} className="d-flex column justify-content-between align-items-center">
            <Link to="/">Home</Link>
          </Item>

          <Item key="shop" icon={<ShoppingOutlined className="" />} className="d-flex column justify-content-between align-items-center">
            <Link to="/shop">Shop</Link>
          </Item>
          <Item key="about" icon={<UserOutlined />} className="d-flex column justify-content-between align-items-center">
              <Link to="/about">About</Link>
          </Item>

          <SubMenu key="CartMenu" icon={<ShoppingCartOutlined />} title="Cart" className="d-flex column justify-content-between align-items-center">
              <Item key="setting:1">Option 1</Item>
              <Item key="setting:2">Option 2</Item>
          </SubMenu>

          <Item key="register" icon={<UserOutlined />} className="d-flex column justify-content-between align-items-center">
            <Link to="/register">Register</Link>
          </Item>

          <SubMenu key="SubMenu" icon={<DashboardOutlined />} title="Username" className="d-flex column justify-content-between align-items-center ms-auto">
              <Item key="login"><Link to="login">Login</Link></Item>
              <Item key="Dashboard">Dashboard</Item>
              <Item key="Dashboard">Profile</Item>
              <Item key="Dashboard">Settings</Item>
          </SubMenu>
        </Menu>
      );
}

export default Header