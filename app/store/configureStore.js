import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
    	applyMiddleware(
	      thunkMiddleware
	    )
    )
  )
}

