import reducers from "./reducers";
import { combineReducers } from "redux";

const rootreducer=combineReducers({
    reducers:reducers
})
export default rootreducer;