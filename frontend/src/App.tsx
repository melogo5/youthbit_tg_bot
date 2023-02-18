import React, { FC } from 'react';

import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import './App.css';
import { Button, Layout } from 'antd';
import Login from './pages/Login/Login';
const { Header, Content, Footer } = Layout;

import './App.css';
import Register from './pages/Register/Register';
import EventFilters from './pages/EventFilters/EventFilters';
import RoomFilters from './pages/RoomFilters/RoomFilters';
import ScienceFilters from './pages/ScienceFilters/ScienceFilters';
import RoomList from './pages/RoomList/RoomList';

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
              <p><Link to={"/event-filters"}>Events</Link></p>
              <p><Link to={"/rooms-filters"}>Rooms</Link></p>
              <p><Link to={"/science-filters"}>Science</Link></p>
              <p><Link to={"/rooms"}>Rooms</Link></p>
            </>
          )} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event-filters" element={<EventFilters />} />
          <Route path="/rooms-filters" element={<RoomFilters />} />
          <Route path="/science-filters" element={<ScienceFilters />} />
          <Route path="/rooms" element={<RoomList />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
