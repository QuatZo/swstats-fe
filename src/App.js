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
  Monster,
  Artifacts,
  Siege,
  TowersCalculator,
  Cairos,
  CairosDetail,
  Rift,
  RiftDetail,
  Dimhole,
  DimholeDetail,

  Reports,
  ReportsOld,
  ReportsGenerate,

  BotMonsters,
} from './pages';
import Layout from './exts/Layout';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Switch>
            <Route exact path="/bot/monsters/:monsterId" component={BotMonsters}/>
            <Route>
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/upload" component={Upload} />
                  <Route exact path="/runes" component={Runes} />
                  <Route exact path="/monsters" component={Monsters} />
                  <Route exact path="/monster/:monsterId" component={Monster} />
                  <Route exact path="/artifacts" component={Artifacts} />
                  <Route exact path="/siege" component={Siege} />
                  <Route exact path="/cairos" component={Cairos} />
                  <Route exact path="/cairos/:cairosId/:stage" component={CairosDetail} />
                  <Route exact path="/rifts" component={Rift} />
                  <Route exact path="/rifts/:cairosId/:stage" component={RiftDetail} />
                  <Route exact path="/dimhole" component={Dimhole} />
                  <Route exact path="/dimhole/:cairosId/:stage" component={DimholeDetail} />
                  <Route exact path="/reports" component={Reports} />
                  <Route exact path="/reports/old" component={ReportsOld} />
                  <Route exact path="/reports/generate" component={ReportsGenerate} />
                  <Route exact path="/contribute" component={Contribute} />
                  <Route exact path="/credits" component={Credits} />

                  <Route exact path="/towers" component={TowersCalculator} />

                  <Route component={Error404} />
                </Switch>
              </Layout>
              </Route>
          </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
