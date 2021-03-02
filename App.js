import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import PlacesNavigator from './navigation/PlacesNavigator';
import * as firebase from 'firebase';
import 'firebase/storage';
import { firebaseConfig } from './services/firebase';

import placesReducer from './store/places-reducers';
// import { init } from './helpers/db';

// init().then(() => {
//     console.log(
//         'initialized db'
//     )
// }).catch(err => {
//     console.log(err)
// })

const rootReducer = combineReducers({
    places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {

firebase.initializeApp(firebaseConfig)
  return (
      <Provider store={store}>
          <PlacesNavigator/>
      </Provider>
        
  );
}
