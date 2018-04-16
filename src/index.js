import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloReact from './HelloReact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<HelloReact text={"Hello React "} />, document.getElementById('react'));

// setInterval(render, 1000); // want to refresh helloReact every second
// https://stackoverflow.com/questions/36299174/setinterval-in-a-react-app?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

registerServiceWorker();
