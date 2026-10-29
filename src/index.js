import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SimpleCounter from './simpleCounter/SimpleCounter';
import { BrowserRouter, Routes, Route } from 'react-router';
import DetailedCounter from './detailedCounter/DetailedCounter';
import LayoutWithFooter from './common/LayoutWithFooter';
import ResumeDetail from './detailView/ResumeDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route element ={<LayoutWithFooter/>}>
          <Route path="/" element={<SimpleCounter />} />
          <Route path="/detail" element={<DetailedCounter />} />
          <Route path="/detail/resume" element={<ResumeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
