import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { notes } from './components/reducers/notesReducer';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  notes
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
