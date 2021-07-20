import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"

import './index.css';
import App from './App';
import store from "./store/index"

// now, with the Provider, our app/all components/child components can access to our store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
