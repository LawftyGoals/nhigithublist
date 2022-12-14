import React from 'react';
import ReactDOM from 'react-dom/client';
import './cssModules/index.css';
//import Home from './pages/Home';
import App from './pages/App';
//import DetailsPage from "./pages/DetailsPage";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//<DetailsPage user={"https://api.github.com/users/mojombo"} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
