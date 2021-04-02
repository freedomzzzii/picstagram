import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import './App.scss';
import 'animate.css';

import constant from './common/constant';
// components
import Navbar from './components/navbar/Navbar';
// pages
import Home from './pages/home/home';
import PostUser from './pages/postUser/postUser';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route sensitive strict exact path={constant.pathHome} component={Home} />
          <Route sensitive strict exact path={constant.pathPostUser} component={PostUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
