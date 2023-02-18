import React, { FC } from 'react';

import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import './App.css';
import { Button, Layout } from 'antd';
import Login from './pages/Login/Login';
const { Header, Content, Footer } = Layout;

import './App.css';
import Register from './pages/Register/Register';

const App: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="layout">
      <div className="App">
        <Header className="app-header" style={{display: 'block'/*location.pathname === "/login" || location.pathname === "/register" ? "none": ""*/}}>
          <Button size='large' onClick={() => navigate(-1)}>Назад</Button>
        </Header>
        <Routes>
          <Route path="*" element={(
            <>
              <p><Link to={"/login"}>Login</Link></p>
              <p><Link to={"/register"}>Register</Link></p>
            </>
          )} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
