import './App.css';
import { BeerList, BeerShow, Bar, Verify } from './components/imports';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { useEffect } from 'react'
import { autoLogin } from './actions/actionBrewer'

function App({user, autoLogin}) {
  // console.log(localStorage.token)

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  return (
    <>
      <h1>Welcome!</h1>
      <h2>Let the Spirits that calms you be known!</h2>
      <Bar/>
      { user.username ?
      <Switch>
        <Route path="/beers/:id"><BeerShow/></Route>
        <Route path="/beers/"><BeerList/></Route>
        <Route exact path="/"><BeerList/></Route>
      </Switch> :
      <Verify/>
      }
    </>
  );
}

const mapStateToProps = (state) =>  ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
