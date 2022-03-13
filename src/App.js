import './App.css';
import { BeerList, BeerShow, Bar } from './components/imports';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>What's Your Beer?</h1>
      <Bar/>
      <Switch>
        <Route path="/beers/:id"><BeerShow/></Route>
        <Route path="/beers/"><BeerList/></Route>
      </Switch>
    </>
  );
}

export default App;
