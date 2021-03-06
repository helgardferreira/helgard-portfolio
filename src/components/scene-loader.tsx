import React, { FunctionComponent, useEffect, useRef, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import styled from "styled-components"
import { useStore } from "react-redux"
import {
  LoaderAction,
  LoadErrorState,
  LoadState,
} from "../state/reducers/loader.reducer"
import AnimatedLoadingText from "./animated-loading-text"
import { DefaultLoadingManager } from "three"

const LoadingContainer = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const StyledLoadingScreen = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #141414;
`

const StyledLoadingBar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  /* transform: translate(-200px, -50%); */
  transform: translate(-50%, -50%);

  div {
    height: 10px;
    background: #fff;
  }
`

const SceneLoader: FunctionComponent = () => {
  // Reminder: useSelector automatically subscribes component to store
  const store = useStore<{ loader: LoadState & LoadErrorState }>()

  const percent = useSpring(0)
  const opacity = useSpring(1)
  const width = useTransform(percent, val => val * 4)

  const timerToken = useRef<number>(0)

  const [isVisible, setIsVisible] = useState(true)

  store.subscribe(() => {
    const { active, progress } = store.getState().loader
    percent.set(progress)

    // Timeout delay logic for smoother transition from loading screen
    if (timerToken.current === 0 && !active) {
      timerToken.current = setTimeout(() => {
        percent.set(0)
        opacity.set(0)

        setTimeout(() => {
          setIsVisible(false)
        }, 1000)
      }, 1000)
    }

    if (timerToken.current !== 0 && active) {
      clearTimeout(timerToken.current)
      timerToken.current = 0
    }
  })

  useEffect(() => {
    DefaultLoadingManager.onStart = (item, loaded, total) =>
      store.dispatch<LoaderAction>({
        type: "UPDATE_LOADER",
        active: true,
        item,
        loaded,
        total,
        progress: (loaded / total) * 100,
      })

    DefaultLoadingManager.onLoad = () =>
      store.dispatch<LoaderAction>({ type: "FINISH_LOADER" })

    DefaultLoadingManager.onError = item =>
      store.dispatch<LoaderAction>({
        type: "ERR_LOADER",
        error: item,
      })

    DefaultLoadingManager.onProgress = (item, loaded, total) =>
      store.dispatch<LoaderAction>({
        type: "UPDATE_LOADER",
        active: true,
        item,
        loaded,
        total,
        progress: (loaded / total) * 100,
      })
  }, [])

  return isVisible ? (
    <LoadingContainer>
      <StyledLoadingScreen style={{ opacity }}>
        <StyledLoadingBar>
          <AnimatedLoadingText />
          <motion.div style={{ width }} />
        </StyledLoadingBar>
      </StyledLoadingScreen>
    </LoadingContainer>
  ) : null
}

export default SceneLoader
