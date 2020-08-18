import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import './style/main.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Layout from './components/Layout';

// We find our app DOM element as before
const app = document.getElementById('app');

// Finally, we render our top-level component to the actual DOM.
ReactDOM.render(<Layout />, app);