import React, {
  useRef,
  useState,
  useEffect,
  FunctionComponent,
  useLayoutEffect,
  useCallback,
} from "react"
import { useFrame } from "react-three-fiber"
// import { Html } from "@react-three/drei"

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import {
  AnimationAction,
  AnimationMixer,
  Bone,
  Group,
  IUniform,
  LoopOnce,
  MeshStandardMaterial,
  ShaderMaterial,
  SkinnedMesh,
  Vector3,
} from "three"
import useGLTF from "../../lib/hooks/use-gltf"
import useTexture from "../../lib/hooks/use-texture"

// Leveraging WebPack's raw loader
import fluidMarbleFragment from "raw-loader!./shaders/fluid-marble-fragment.glsl"
import fluidMarbleVertex from "raw-loader!./shaders/fluid-marble-vertex.glsl"
import { useSpring } from "framer-motion"
import { useDispatch, useStore } from "react-redux"
import { MotionAction, MotionState } from "../../state/reducers/motion.reducer"

type GLTFResult = GLTF & {
  nodes: {
    hand_anatomy_man: SkinnedMesh
    root: Bone
    ["MCH-hand_ikparentL"]: Bone
    ["MCH-upper_arm_ik_targetparentL"]: Bone
  }
  materials: {
    White: MeshStandardMaterial
  }
}

type ActionName = "rigAction"
type GLTFActions = Record<ActionName, AnimationAction>

interface HandProps {
  gltfURL: string
  textureURL: string
}

interface FragmentUniforms {
  [uniform: string]: IUniform
}

const HandAnimatedModel: FunctionComponent<
  HandProps & JSX.IntrinsicElements["group"]
> = ({ gltfURL, textureURL, position, ...props }) => {
  const store = useStore<{ motion: MotionState }>()
  const dispatch = useDispatch()

  const group = useRef<Group>()
  const {
    nodes,
    // materials,
    animations,
  } = useGLTF<GLTFResult>(gltfURL)
  const texture = useTexture(textureURL)
  const uniforms = useRef<FragmentUniforms>({
    time: { value: 0 },
    marble: { value: texture },
  })
  const actions = useRef<GLTFActions>()
  const [mixer] = useState(() => new AnimationMixer(nodes.hand_anatomy_man))
  const shaderMaterial = new ShaderMaterial({
    uniforms: uniforms.current,
    vertexShader: fluidMarbleVertex,
    fragmentShader: fluidMarbleFragment,
    skinning: true,
  })

  const motion = useSpring(1, {
    restDelta: 0.1, // 0.01
    stiffness: 77, // 100
    // mass: 1,
    // damping: 10,
  })
  const textMotion = useSpring(0, {
    stiffness: 200,
    damping: 20,
  })

  // const guiText = useRef<HTMLAnchorElement>(null)

  const offsetVector = new Vector3(-0.2, 82.2, 0)

  // Add text offset
  if (position instanceof Vector3) {
    offsetVector.add(position)
  } else if (position !== undefined) {
    offsetVector.add(new Vector3(...position))
  }

  const canAnimate = useRef(true)
  const timerToken = useRef(0)

  const clickHandler = useCallback(() => {
    if (timerToken.current === 0 && actions.current && motion.get() === 0) {
      timerToken.current = setTimeout(() => {
        dispatch<MotionAction>({
          type: "UPDATE_MOTION",
          handMotionValue: 1,
        })
        timerToken.current = 0

        setTimeout(() => {
          canAnimate.current = true
        }, 100)
      }, 2000 / 15)
      actions.current.rigAction.paused = false
      // Time set to just before final frame =>
      //  2 seconds (normal animation duration) / 15 timescale (playback multiplier)
      actions.current.rigAction.getMixer().setTime(0.13)
      actions.current.rigAction.setEffectiveTimeScale(-15)
      textMotion.set(0)
    }
  }, [timerToken, actions, motion])

  const pointerMoveHandler = useCallback(() => {
    if (document.body.style.cursor !== "pointer")
      document.body.style.cursor = "pointer"
  }, [])
  const pointerOutHandler = useCallback(() => {
    document.body.style.cursor = "auto"
  }, [])

  /* textMotion.onChange(val => {
    if (guiText.current) guiText.current.style.fontSize = `${42 * val}px`
  }) */

  store.subscribe(() => {
    motion.set(store.getState().motion.handMotionValue)
  })

  useLayoutEffect(() => void useGLTF.preload(gltfURL), [gltfURL])
  useEffect(() => {
    actions.current = {
      rigAction: mixer.clipAction(animations[0], group.current),
    }
    // actions.current.rigAction.loop = LoopPingPong
    actions.current.rigAction.loop = LoopOnce
    actions.current.rigAction.clampWhenFinished = true

    return () => animations.forEach(clip => mixer.uncacheClip(clip))
  }, [])

  useFrame(({ clock, camera }, delta) => {
    camera.lookAt(10, 0, 0)
    mixer.update(delta)
    uniforms.current.time.value = clock.getElapsedTime()

    if (
      canAnimate.current &&
      actions.current &&
      !actions.current.rigAction.isRunning() &&
      motion.get() === 0
    ) {
      actions.current?.rigAction.setEffectiveTimeScale(15)
      actions.current.rigAction.paused = false
      actions.current.rigAction.play()
      canAnimate.current = false

      textMotion.set(1)
    }
  })

  return (
    <group
      ref={group}
      position={position}
      {...props}
      onPointerMove={pointerMoveHandler}
      onPointerOut={pointerOutHandler}
      onClick={clickHandler}
    >
      <group position={[0, 0, 0]} scale={[1, 1, 1]}>
        <group position={[0, 0, 0]} scale={[1, 1, 1]}>
          <primitive object={nodes.root} />
          <primitive object={nodes["MCH-hand_ikparentL"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentL"]} />

          <skinnedMesh
            material={shaderMaterial}
            geometry={nodes.hand_anatomy_man.geometry}
            skeleton={nodes.hand_anatomy_man.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

export default HandAnimatedModel
