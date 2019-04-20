
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers/rootReducer';
import initialState from './state';

export default function configureStore() {
  console.log("Creating store ... ");
 return createStore(
  app,
   initialState,
   applyMiddleware(thunk)
 );
}