import { createStore, applyMiddleware } from 'redux'

import { logger } from 'redux-logger'

import taskReducer from './taskReducer'

//create store 
const store = createStore( taskReducer, applyMiddleware(logger) )

export default store