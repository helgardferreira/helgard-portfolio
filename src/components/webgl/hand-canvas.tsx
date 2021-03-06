import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent, Suspense, useEffect, useRef } from "react"
import { Canvas } from "react-three-fiber"
import styled from "styled-components"

import Blob from "./blob"
import HandAnimatedModel from "./hand-animated"
import SceneLoader from "../scene-loader"
import { Provider, ReactReduxContext, useSelector } from "react-redux"
import { useTransform, useViewportScroll } from "framer-motion"
import useWindowSize from "../../lib/hooks/use-window-size"
import { Group, Vector3 } from "three"
import { interpolate } from "@popmotion/popcorn"
import { NavRefState } from "../../state/reducers/navRef.reducer"

// Useful for exploring scene in development mode
// import CameraControls from "./cameraControls"

const SceneLights = () => (
  <group>
    <ambientLight intensity={0.2} color="#fff" />
    <directionalLight intensity={1} position={[0, -20, 10]} color="#f00" />
    <pointLight intensity={0.35} position={[-20, 10, 5]} color="#f0a" />
    <pointLight intensity={0.1} position={[20, 10, 5]} color="#fff" />
  </group>
)

const FingerBlobs: FunctionComponent = () => {
  const navRefs = useSelector<{ navRefs: NavRefState }, NavRefState>(
    state => state.navRefs
  )

  return (
    <group>
      {/* Thumb */}
      <Blob
        isClickable
        wireframe
        segments={20}
        position={[-18, -10, -30]}
        sizeFactor={1}
        navRef={navRefs.thumb}
        navName="ABOUT"
      />
      {/* Index */}
      <Blob
        isClickable
        wireframe
        segments={20}
        position={[-9, -4, -40]}
        sizeFactor={1}
        navRef={navRefs.index}
        navName="FULLTIME"
        navOffset={new Vector3(-1, 0, 0)}
      />
      {/* Middle */}
      <Blob
        isClickable
        wireframe
        segments={20}
        position={[0, -2.5, -36]}
        sizeFactor={1}
        navRef={navRefs.middle}
        navName="FREELANCE"
        navOffset={new Vector3(0, 0.3, 0)}
      />
      {/* Ring */}
      <Blob
        isClickable
        wireframe
        segments={20}
        position={[7, -4, -35]}
        sizeFactor={1}
        navRef={navRefs.ring}
        navName="CONTACT"
        navOffset={new Vector3(2.5, -0.8, 0)}
      />
      {/* Pinkie */}
      <Blob
        isClickable
        wireframe
        segments={20}
        position={[12.5, -7, -33]}
        sizeFactor={1}
        navRef={navRefs.pinkie}
        navOffset={new Vector3(2.25, 0, 0)}
        navName="SOCIALS"
      />
      {/* Palm */}
      <Blob
        isClickable
        wireframe
        segments={40}
        position={[0, -15, -25]}
        sizeFactor={6}
        navRef={navRefs.palm}
      />
    </group>
  )
}

// const CanvasContainer = styled(motion.div)`
const StyledCanvasContainer = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`

const HandCanvas: FunctionComponent = () => {
  // const mouse = useRef({ x: 0, y: 0 })
  const { handAnimated, textureImage } = useStaticQuery(graphql`
    query {
      handAnimated: file(relativePath: { eq: "hand-animated.glb" }) {
        publicURL
      }
      textureImage: file(relativePath: { eq: "slime-marble-texture.jpg" }) {
        publicURL
      }
    }
  `)

  // 1 <-> 1.4693
  const { height, width } = useWindowSize()
  const { scrollY } = useViewportScroll()
  const shrinkSize = useTransform(scrollY, [0, height ? height : 900], [1, 0.3])

  // maybe over-optimization?
  /* const xPos: number = useMemo(() => {
    return interpolate(
      [1.25, 1.4693],
      [0, 10]
    )((width || 1080) / (height || 1920)) as number
  }, [height, width]) */
  const xPos: number = interpolate(
    [1.25, 1.4693],
    [-1, 10]
  )((width || 1080) / (height || 1920)) as number

  console.log((width || 1080) / (height || 1920))

  /* const xPos = useTransform(shrinkSize, [1, 0.1], [0, 4])
  const rotVal = useTransform(xPos, val => val / 10) */
  const yPos = useTransform(shrinkSize, [1, 0.3], [7, 5])
  const rotVal = useTransform(shrinkSize, [1, 0.3], [0, 0.3])

  const sceneGroup = useRef<Group>()

  shrinkSize.onChange(val => {
    sceneGroup.current?.scale.set(val, val, val)
    sceneGroup.current?.position.set(xPos, yPos.get(), 14)
    sceneGroup.current?.rotation.set(0, -1, rotVal.get())
  })

  // Hack for Gatsby static site generator since window is not available at compilation time
  // See: https://www.gatsbyjs.com/docs/debugging-html-builds/
  const pixelRatio = useRef(1)
  useEffect(() => {
    pixelRatio.current = window.devicePixelRatio

    const mapper = interpolate([0, window.innerHeight], [1, 0.3001])

    setTimeout(() => {
      shrinkSize.set(mapper(window.scrollY) as number)
    }, 500)
  }, [])

  return (
    <>
      <SceneLoader />
      <StyledCanvasContainer>
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Canvas
              pixelRatio={pixelRatio.current}
              camera={{ position: [0, 10, 15], rotation: [0, 0, 0] }}
            >
              <Provider store={store}>
                <SceneLights />
                <Suspense fallback={null}>
                  <group
                    ref={sceneGroup}
                    position={[xPos, 7, 14]}
                    rotation={[0, -1, 0]}
                  >
                    <HandAnimatedModel
                      gltfURL={handAnimated.publicURL}
                      textureURL={textureImage.publicURL}
                      position={[0, -80, 0]}
                      rotation={[0, 0, 0]}
                      scale={[40, 40, 40]}
                    />

                    <FingerBlobs />
                  </group>
                </Suspense>
                {/* <CameraControls /> */}
              </Provider>
            </Canvas>
          )}
        </ReactReduxContext.Consumer>
      </StyledCanvasContainer>
    </>
  )
}

export default HandCanvas
