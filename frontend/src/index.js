import React from 'react';
import './index.css';
import App from './App';
import {HTML5Backend} from 'react-dnd-html5-backend';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from 'react-dnd';

render(
  <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
