import './App.scss';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home'
import HomeMedium from './Components/Home/HomeMedium';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
   <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/medium' component={HomeMedium} />
        <Route exact path='/login' component={Login} />
      </Switch>
   </>
  );
}

export default App;
