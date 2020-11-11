import { createStore } from "redux"
import rootReducer from "./reducers"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => any
  }
}

const reduxDevTools = (() => {
  if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    return window.__REDUX_DEVTOOLS_EXTENSION__()
  }

  return undefined
})()

const store = createStore(rootReducer, reduxDevTools)

export default store
