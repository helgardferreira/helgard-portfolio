import { Reducer, RefObject } from "react"

type Nullable<T> = T | null

export interface NavRefState {
  thumb: Nullable<RefObject<HTMLElement>>
  index: Nullable<RefObject<HTMLElement>>
  middle: Nullable<RefObject<HTMLElement>>
  ring: Nullable<RefObject<HTMLElement>>
  pinkie: Nullable<RefObject<HTMLElement>>
  palm: Nullable<RefObject<HTMLElement>>
}

export const UPDATE_NAV_REF = "UPDATE_NAV_REF"

export interface UpdateNavRefAction extends NavRefState {
  type: typeof UPDATE_NAV_REF
}

// Placeholder for union action
export type NavRefAction = UpdateNavRefAction

const navRefReducer: Reducer<NavRefState, NavRefAction> = (
  state = {
    thumb: null,
    index: null,
    middle: null,
    ring: null,
    pinkie: null,
    palm: null,
  },
  action
): NavRefState => {
  switch (action.type) {
    case UPDATE_NAV_REF:
      return action
    default:
      return state
  }
}

export default navRefReducer
