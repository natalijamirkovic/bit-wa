import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import posts from "./data/data";

ReactDOM.render(<App data = {posts}/>, document.getElementById('root'));
registerServiceWorker();
