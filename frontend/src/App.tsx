import React, { FC } from 'react';

import { Routes, Route, Link, useNavigate } from "react-router-dom";

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
import RoomPage from './pages/RoomPage/RoomPage';

import {item} from "./pages/RoomList/RoomList";
import RoomBooking from './pages/RoomBooking/RoomBooking';

const App: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="layout">
      <div className="App">
        <Routes>
          <Route path="*" element={(
            <>
              <p><Link to={"/login"}>Login</Link></p>
              <p><Link to={"/register"}>Register</Link></p>
              <p><Link to={"/event-filters"}>Events</Link></p>
              <p><Link to={"/rooms-filters"}>Rooms</Link></p>
              <p><Link to={"/science-filters"}>Science</Link></p>
              <p><Link to={"/rooms"}>Rooms</Link></p>
              <p><Link to={"/roomPage"}>Rooms page</Link></p>
              <p><Link to={"/room-booking"}>Room booking</Link></p>
              <p><Link to={"/all-done"}>DONE</Link></p>
            </>
          )} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event-filters" element={<EventFilters />} />
          <Route path="/rooms-filters" element={<RoomFilters />} />
          <Route path="/science-filters" element={<ScienceFilters />} />
          <Route path="/rooms" element={<RoomList />} />

          <Route path="/roomPage" element={<RoomPage {...item as any} />} />
          <Route path="/room-booking" element={<RoomBooking />} />
          <Route path="/all-done" element={<h1>Заявка создана</h1>} />
        </Routes>

        {/* <div style={{ color: "red", fontSize: "32px" }}>
          прямые УРЛЫ страниц содержат символ решеточки (нужно для HashRouter)
          <br />
          Пример: <b>http://localhost:8080/#/login</b>
        </div> */}
      </div>
    </Layout>
  );
}

export default App;
