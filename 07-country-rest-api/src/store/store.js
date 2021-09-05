import { applyMiddleware, compose, createStore } from "redux";
import { countryReducer } from "../reducers/countryReducer";
import thunk from 'redux-thunk';

const composeEnchancers = (typeof window !== "undefined" &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    countryReducer,
    composeEnchancers(
        applyMiddleware(thunk)
    )
)



