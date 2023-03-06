import { createRoot } from 'react-dom/client';
import * as React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import './css/index.css'

//R//eactDOM.render(
  //<React.Fragment>
    //{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    //<CssBaseline />
    //<App />
 // </React.Fragment>,
  //document.getElementById('root')
//)

const rootElement = document.getElementById('root');

createRoot(rootElement).render(<App />);




ReactDOM.createRoot(rootElement).render(<App />);
