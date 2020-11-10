import { combineReducers } from "redux"
import loaderReducer from "./loader.reducer"
import motionReducer from "./motion.reducer"
import navRefReducer from "./navRef.reducer"

export default combineReducers({
  loader: loaderReducer,
  motion: motionReducer,
  navRefs: navRefReducer,
})
