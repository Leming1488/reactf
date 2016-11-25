import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);
  console.log(store);

  if (module.hot) {
      module.hot.accept('../reducers', () => {
      store.replaceReducer(nextRootReducer)
      const nextRootReducer = require('../reducers')
    })
  };

  return store;
}
