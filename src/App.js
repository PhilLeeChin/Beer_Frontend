import './App.css';
import { BeerList, BeerShow } from './components';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>What's Your Beer?</h1>
      <Switch>
        <Route path="/beers/:id"><BeerShow/></Route>
        <Route path="/beers/"><BeerList/></Route>
      </Switch>
    </>
  );
}

export default App;
