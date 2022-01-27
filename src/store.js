import createSagaMiddleware from '@redux-saga/core';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from  './reducer/index';
const SagaMiddleware=createSagaMiddleware;
const store= createStore(rootReducer,applyMiddleware(SagaMiddleware));

export default store;
