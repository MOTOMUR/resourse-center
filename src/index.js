import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const muiTheme = getMuiTheme({
  palette: {
    primaryColor: '#21412a',
  },
  appBar: {
    height: 50,
  },
});


ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
