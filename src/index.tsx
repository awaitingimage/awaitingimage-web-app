import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './static/styles/base/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
