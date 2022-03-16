import './App.css';
import { BeerList, BeerShow, Bar, Verify } from './components/imports';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { useEffect } from 'react'
import { autoLogin } from './actions/actionBrewer'

function App({user, autoLogin}) {

  useEffect(() => localStorage.token && [autoLogin])
  return (
    <>
      <h1>What's Your Beer?</h1>
      <Bar/>
      { user.username ?
      <Switch>
        <Route path="/beers/:id"><BeerShow/></Route>
        <Route path="/beers/"><BeerList/></Route>
        <Route path="/"><BeerList/></Route>
      </Switch> :
      <Verify/>
      }
    </>
  );
}

const mapStateToProps = (state) =>  ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
