import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {MuiThemeProvider} from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FontIcon from 'material-ui/FontIcon';

injectTapEventPlugin()


class App extends Component {

  constructor(props){
    super(props);
    this.state={open: false};
  }

  handleClose = () =>this.setState({open: false})

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="plz donation"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={() =>
                this.setState({open: !this.state.open})}
            />
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >

              <Link to='/'><MenuItem onTouchTap={this.handleClose}>
                Home
              </MenuItem></Link>

              <Link to='/regist'><MenuItem onTouchTap={this.handleClose}>
                registeration
              </MenuItem></Link>

            </Drawer>

            <Route exact path='/' render={() => <h1>Home View</h1>} />
            <Route
              exact
              path='/regist'
              render={() => <h1>registeration</h1>} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
