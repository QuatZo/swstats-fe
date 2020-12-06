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
  Upload,
  Runes,
  Monsters,
  Artifacts,
  Siege,
  TowersCalculator,
  Cairos,
  CairosDetail,
  Dimhole,
  DimholeDetail,
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
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/runes" component={Runes} />
            <Route exact path="/monsters" component={Monsters} />
            <Route exact path="/artifacts" component={Artifacts} />
            <Route exact path="/siege" component={Siege} />
            <Route exact path="/cairos" component={Cairos} />
            <Route exact path="/cairos/:cairosId/:stage" component={CairosDetail} />
            <Route exact path="/dimhole" component={Dimhole} />
            <Route exact path="/dimhole/:cairosId/:stage" component={DimholeDetail} />
            <Route exact path="/contribute" component={Contribute} />
            <Route exact path="/credits" component={Credits} />

            <Route exact path="/towers" component={TowersCalculator} />

            <Route component={Error404} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
