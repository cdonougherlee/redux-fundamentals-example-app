import { configureStore, compose } from 'redux'
import rootReducer from './reducer'
import { sayHiOnDispatch } from './exampleAddons/enhancers'
import { print1, print2, print3 } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const store = configureStore(rootReducer, middlewareEnhancer, composedEnhancer)

export default store
