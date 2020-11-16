import React, {
  useRef,
  FunctionComponent,
  useEffect,
  RefObject,
  useCallback,
  MouseEvent,
} from "react"
import { useFrame } from "react-three-fiber"
import {
  Mesh,
  UniformsUtils,
  ShaderLib,
  Color,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
} from "three"
import { useSpring, useTransform } from "framer-motion"

import blobVertex from "raw-loader!./shaders/blob-vertex.glsl"
import { useDispatch, useSelector, useStore } from "react-redux"
import { MotionAction } from "../../state/reducers/motion.reducer"
import { Html } from "@react-three/drei"
import styled from "styled-components"

const StyledNavLink = styled.a`
  color: #d94c4c;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  font-size: 18px;

  &:link {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

interface BlobProps {
  isInvalid?: boolean
  isModified?: boolean
  segments?: number
  wireframe?: boolean
  sizeFactor?: number
  isClickable?: boolean
  navRef?: RefObject<HTMLElement>
  navName?: string
  navOffset?: Vector3
}

const Blob: FunctionComponent<BlobProps & JSX.IntrinsicElements["mesh"]> = ({
  isInvalid = false,
  isModified = false,
  segments = 50,
  wireframe = false,
  sizeFactor: size = 1,
  isClickable = false,
  navRef,
  navName,
  navOffset,
  position,
  ...props
}) => {
  const store = useStore<{ motion: { handMotionValue: number } }>()
  const dispatch = useDispatch()
  const { active } = useSelector<
    { loader: { active: boolean } },
    { active: boolean }
  >(({ loader: { active } }) => ({ active }))

  const timeOffset = useRef(Math.random() * 1000)
  const rotationOffset = useRef({
    x: Math.random() / 100,
    y: Math.random() / 100,
    z: Math.random() / 100,
  })
  const amp = useSpring(0, {
    stiffness: 42,
  })
  const color = useTransform(
    amp,
    [0, 0.3, 0.6],
    [`#ff00ff`, `#ff00ff`, `#ff0050`]
  )

  const motion = useSpring(1, {
    restDelta: 0.1, // 0.01
    stiffness: 77, // 100
    // mass: 1,
    // damping: 10,
  })

  const blobMotion = useTransform(motion, val => val * size)

  const diffuseColor = useRef(new Color("#ff00ff"))
  const customUniforms = useRef(
    UniformsUtils.merge([
      ShaderLib.phong.uniforms,
      { diffuse: { value: diffuseColor.current } },
      { amp: { value: 0.0 } },
      { time: { value: 0.0 } },
    ])
  )

  const mesh = useRef<Mesh<SphereGeometry>>(null)
  const customMaterial = useRef<ShaderMaterial>(null)
  const guiText = useRef<HTMLAnchorElement>(null)

  const offsetVector = new Vector3(-4, 4.8, 0)

  // Add text offset
  if (position instanceof Vector3) {
    offsetVector.add(position)
  } else if (position !== undefined) {
    offsetVector.add(new Vector3(...position))
  }

  if (navOffset !== undefined) {
    offsetVector.add(navOffset)
  }

  const clickHandler = useCallback(
    (e?: MouseEvent<any, any>) => {
      if (e && e.preventDefault) e.preventDefault()

      if (!active && isClickable) {
        amp.set(0.8)
        dispatch<MotionAction>({
          type: "UPDATE_MOTION",
          handMotionValue: 0,
        })

        if (navRef && navRef.current) {
          const elementYPos =
            window.scrollY + navRef.current.getBoundingClientRect().top

          window.scrollTo({
            top: elementYPos,
            left: 0,
            behavior: "smooth",
          })
        }
      }
    },
    [active, amp, dispatch, navRef]
  )

  const pointerOverHandler = useCallback(() => {
    if (!active && isClickable) {
      amp.set(0.6)
      document.body.style.cursor = "pointer"
    }
  }, [active, amp])

  const pointerOutHandler = useCallback(() => {
    if (!active && isClickable) {
      amp.set(0.0)
      document.body.style.cursor = "auto"
    }
  }, [active, amp])

  blobMotion.onChange(val => {
    const newTextSize = motion.get()
    if (mesh.current) mesh.current.scale.set(val, val, val)
    if (guiText.current)
      guiText.current.style.fontSize = `${18 * newTextSize}px`
  })

  store.subscribe(() => {
    if (isClickable) motion.set(store.getState().motion.handMotionValue)
  })

  useEffect(() => {
    if (isInvalid) amp.set(0.8)
    else if (isModified) amp.set(0.3)
    else amp.set(0.0)
  }, [isInvalid, isModified])

  useFrame(({ clock }) => {
    if (mesh.current) {
      // mesh.current.rotation.x += 0.005
      mesh.current.rotation.x += rotationOffset.current.x
      mesh.current.rotation.y += rotationOffset.current.y
      mesh.current.rotation.z += rotationOffset.current.z
    }

    if (customMaterial.current) {
      customMaterial.current.uniforms.amp.value = amp.get()
      customMaterial.current.uniforms.diffuse.value = diffuseColor.current
      customMaterial.current.uniforms.time.value =
        clock.getElapsedTime() + timeOffset.current

      diffuseColor.current.set(color.get())
    }
  })

  return (
    <group>
      <mesh
        ref={mesh}
        scale={[blobMotion.get(), blobMotion.get(), blobMotion.get()]}
        onClick={clickHandler}
        onPointerOver={pointerOverHandler}
        onPointerOut={pointerOutHandler}
        position={position}
        {...props}
      >
        <sphereGeometry attach="geometry" args={[1, segments, segments]} />
        <shaderMaterial
          ref={customMaterial}
          attach="material"
          uniforms={customUniforms.current}
          vertexShader={blobVertex}
          fragmentShader={ShaderLib.phong.fragmentShader}
          wireframe={wireframe}
          lights
        />
      </mesh>
      {navName ? (
        <Html position={offsetVector}>
          <StyledNavLink
            onClick={clickHandler}
            onMouseOver={pointerOverHandler}
            onFocus={pointerOverHandler}
            onMouseOut={pointerOutHandler}
            href="#"
            ref={guiText}
          >
            {navName}
          </StyledNavLink>
        </Html>
      ) : null}
    </group>
  )
}

export default Blob
