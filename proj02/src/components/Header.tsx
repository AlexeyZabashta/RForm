import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import App from '../App';
import './Header.css';
import { FormBlock } from './Form';

export type PropsType = {
  data: string;
};

export const Start = () => {
  return (
    <>
      <div className="header_wrapper">
        <div className="header">
          <Link className="header_item" to="/" id="home" data-testid="home_link">
            Home
          </Link>
          <Link className="header_item" to="form" id="form" data-testid="form_link">
            Form
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<FormBlock data="" />} />
        </Routes>
      </div>
    </>
  );
};
