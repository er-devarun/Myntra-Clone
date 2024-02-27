import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import myntraStore from './store/index.js'
import './index.css';
import Success from './routes/Success.jsx';
const Home = lazy(() => import('./routes/Home.jsx'));
const Bag = lazy(() => import('./routes/Bag.jsx'));

const router = createBrowserRouter([
  {path: "/", 
  element: <App/>, 
  children: [
    {path: "/", element: <Home/>},
    {path: "/bag", element: <Bag/>},
  ]},
  {path: "/success", element: <Success/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
