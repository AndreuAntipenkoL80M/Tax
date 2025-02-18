import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateReq from './pages/createReq';
import EditReq  from './pages/editReq'
import Layout from './pages/layout';
import ReqList from './pages/ReqList'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ReqList />} />
          <Route path="/createReq" element={<CreateReq />} />
          <Route path="/editReq" element={<EditReq />} />
          <Route path="/editReq/:id" element={<EditReq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
