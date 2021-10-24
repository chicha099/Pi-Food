import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing';
import Home from './components/Home';
import Create from './components/Create';
import Details from './components/Details';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />
          <Route path='/create' component={Create} />
          <Route path='/recipe/:id' component={Details} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
