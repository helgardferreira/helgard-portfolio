import { graphql, useStaticQuery } from "gatsby"
import React, {
  FunctionComponent,
  RefObject,
  Suspense,
  useEffect,
  useRef,
} from "react"
import { Canvas } from "react-three-fiber"
import styled from "styled-components"

import Blob from "./blob"
import HandAnimatedModel from "./handAnimated"
import SceneLoader from "../sceneLoader"
import { Provider, ReactReduxContext } from "react-redux"
import { useTransform, useViewportScroll } from "framer-motion"
import useWindowSize from "../../lib/hooks/useWindowSize"
import { Group } from "three"
import { interpolate } from "@popmotion/popcorn"

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

const FingerBlobs: FunctionComponent<{ navRefs: RefObject<HTMLElement>[] }> = ({
  navRefs,
}) => (
  <group>
    {/* Thumb */}
    <Blob
      wireframe
      segments={20}
      position={[-18, -10, -30]}
      sizeFactor={1}
      navRef={navRefs[0]}
    />
    {/* Index */}
    <Blob
      wireframe
      segments={20}
      position={[-9, -4, -40]}
      sizeFactor={1}
      navRef={navRefs[1]}
    />
    {/* Middle */}
    <Blob
      wireframe
      segments={20}
      position={[0, -2.5, -36]}
      sizeFactor={1}
      navRef={navRefs[2]}
    />
    {/* Ring */}
    <Blob
      wireframe
      segments={20}
      position={[7, -4, -35]}
      sizeFactor={1}
      navRef={navRefs[3]}
    />
    {/* Pinkie */}
    <Blob
      wireframe
      segments={20}
      position={[12.5, -7, -33]}
      sizeFactor={1}
      navRef={navRefs[4]}
    />
    {/* Palm */}
    <Blob
      wireframe
      segments={40}
      position={[0, -15, -25]}
      sizeFactor={6}
      navRef={navRefs[5]}
    />
  </group>
)

// const CanvasContainer = styled(motion.div)`
const CanvasContainer = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`

const HandCanvas: FunctionComponent<{
  navRefs: RefObject<HTMLElement>[]
}> = ({ navRefs }) => {
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

  const { height } = useWindowSize()
  const { scrollY } = useViewportScroll()
  const shrinkSize = useTransform(
    scrollY,
    [0, height ? height : 900],
    [1, 0.2999999999999999]
  )

  /* const xPos = useTransform(shrinkSize, [1, 0.1], [0, 4])
  const rotVal = useTransform(xPos, val => val / 10) */
  const yPos = useTransform(shrinkSize, [1, 0.3], [7, 5])
  const rotVal = useTransform(shrinkSize, [1, 0.3], [0, 0.3])

  const sceneGroup = useRef<Group>()

  shrinkSize.onChange(val => {
    sceneGroup.current?.scale.set(val, val, val)
    sceneGroup.current?.position.set(10, yPos.get(), 14)
    sceneGroup.current?.rotation.set(0, -1, rotVal.get())
  })

  // Hack for Gatsby static site generator since window is not available at compilation time
  // See: https://www.gatsbyjs.com/docs/debugging-html-builds/
  const pixelRatio = useRef(1)
  useEffect(() => {
    pixelRatio.current = window.devicePixelRatio

    const mapper = interpolate([0, window.innerHeight], [1, 0.2999999999999999])

    setTimeout(() => {
      shrinkSize.set(mapper(window.scrollY) as number)
    }, 500)
  }, [])

  return (
    <CanvasContainer>
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
                  position={[10, 7, 14]}
                  rotation={[0, -1, 0]}
                >
                  <HandAnimatedModel
                    gltfURL={handAnimated.publicURL}
                    textureURL={textureImage.publicURL}
                    position={[0, -80, 0]}
                    rotation={[0, 0, 0]}
                    scale={[40, 40, 40]}
                  />

                  <FingerBlobs navRefs={navRefs} />
                </group>
              </Suspense>
              {/* <CameraControls /> */}
            </Provider>
          </Canvas>
        )}
      </ReactReduxContext.Consumer>
      <SceneLoader />
    </CanvasContainer>
  )
}

export default HandCanvas
