import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Help from './components/Help/Help';

const App = () => {
  return (
    <Switch>
      <Layout exact path="/" component={Dashboard}/>
      <Layout path="/about" component={About}/>
      <Layout path="/help" component={Help}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </Switch>
  );
}

export default App;
