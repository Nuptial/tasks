import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import reducer from "./reducers";
import Container from "./containers/Container";
import rootSaga from "./sagas";
import "bootstrap/dist/css/bootstrap.css";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
);
