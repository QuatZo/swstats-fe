import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './exts/theme'
import {
  Home, 
  Contribute,
  Error404,
  Credits,
} from './pages';
import Layout from './exts/Layout';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contribute" component={Contribute} />
            <Route exact path="/credits" component={Credits} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
