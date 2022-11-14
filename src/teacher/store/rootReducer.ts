import { combineReducers } from "redux";
import { errorSlice } from "../../common/store/errorSlice";
import { loadingSlice } from "../../common/store/loadingSlice";

export const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  error: errorSlice.reducer,
});
