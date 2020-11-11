import { Reducer, RefObject } from "react"

export interface NavRefState {
  thumb?: RefObject<HTMLElement>
  index?: RefObject<HTMLElement>
  middle?: RefObject<HTMLElement>
  ring?: RefObject<HTMLElement>
  pinkie?: RefObject<HTMLElement>
  palm?: RefObject<HTMLElement>
}

export const UPDATE_NAV_REF = "UPDATE_NAV_REF"

export interface UpdateNavRefAction extends NavRefState {
  type: typeof UPDATE_NAV_REF
}

// Placeholder for union action
export type NavRefAction = UpdateNavRefAction

const navRefReducer: Reducer<NavRefState, NavRefAction> = (
  state = {},
  action
): NavRefState => {
  switch (action.type) {
    case UPDATE_NAV_REF:
      return { ...state, ...action }
    default:
      return state
  }
}

export default navRefReducer
