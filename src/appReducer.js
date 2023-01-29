import { combineReducers } from "redux";
import {
  reducerdata,
  reducerClients,
  reducerFactures,
} from "./actions/reducer.js";
import { userSigninReducer } from "./actions/userReducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "stock-habitat",
  storage,
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  stock: reducerdata,
  Clients: reducerClients,
  Factures: reducerFactures,
});
/*const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);*/
export default persistReducer(persistConfig, reducer);
