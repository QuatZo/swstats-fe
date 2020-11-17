import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './exts/theme'
import {
  Home, 
  Contribute
} from './pages';
import Layout from './exts/Layout';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/contribute" component={Contribute} />
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
