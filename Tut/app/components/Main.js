import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import * as reducers from '../reducers/reducers'
reducers.routing = routerReducer
import App from './App'
import { Provider } from 'react-redux'
import VisibleCards from './VisibleCards'
import NewCardModal from './NewCardModal'
import EditCardModal from './EditCardModal'
import StudyModal from './StudyModal'
import thunkMiddleware from 'redux-thunk'
import {fetchData} from '../actions/actions'

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware))

const history = syncHistoryWithStore(browserHistory, store)

function run() {
  let state = store.getState()


  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='deck/:deckId' component={VisibleCards}>
            <Route path='/deck/:deckId/new' component={NewCardModal}/>
            <Route path='/deck/:deckId/edit/:cardId' component={EditCardModal}/>
            <Route path='/deck/:deckId/study' component={StudyModal}/>


          </Route>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app'))
}

function save() {
  var state = store.getState()
  fetch('api/data', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      decks: state.decks,
      cards: state.cards
    })
  })
}

function init() {

  run()

  store.subscribe(run)
  store.subscribe(save)
  store.dispatch(fetchData())
}