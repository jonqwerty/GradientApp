import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import EditPage from './Edit/EditPage'
import Header from './Header/Header'
import HomePage from './Home/HomePage'
import NewGradientPage from './New/NewGradientPage'



const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact path='/' render={ () => <Redirect to={'/home'} /> }/>
          <Route path='/home' render={ () => <HomePage/> } />
          <Route path='/new' render={ () => <NewGradientPage/> } />
          <Route path='/edit/:gradientId?' render={ () => <EditPage /> } /> 
          <Route path='*' render={ () => <div>404 NOT FOUND</div>} />
        </Switch>
      </div>
    </div>
  )
}

export default App
