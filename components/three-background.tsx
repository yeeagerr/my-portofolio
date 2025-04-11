"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useFrame, Canvas } from "@react-three/fiber"
import { useInView } from "framer-motion"

function Particles({ count = 2000, color = "#000000" }) {
  const mesh = useRef<THREE.Points>(null!)
  const hover = useRef(false)
  const positions = useRef<Float32Array>(null!)
  const velocities = useRef<Float32Array>(null!)

  useEffect(() => {
    positions.current = new Float32Array(count * 3)
    velocities.current = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions.current[i3] = (Math.random() - 0.5) * 10
      positions.current[i3 + 1] = (Math.random() - 0.5) * 10
      positions.current[i3 + 2] = (Math.random() - 0.5) * 10

      velocities.current[i3] = (Math.random() - 0.5) * 0.01
      velocities.current[i3 + 1] = (Math.random() - 0.5) * 0.01
      velocities.current[i3 + 2] = (Math.random() - 0.5) * 0.01
    }

    mesh.current.geometry.setAttribute("position", new THREE.BufferAttribute(positions.current, 3))
  }, [count])

  useFrame(() => {
    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      if (positions.current && velocities.current) {
        positions.current[i3] += velocities.current[i3]
        positions.current[i3 + 1] += velocities.current[i3 + 1]
      }
      positions.current[i3 + 2] += velocities.current[i3 + 2]

      // Boundaries check
      if (Math.abs(positions.current[i3]) > 5) velocities.current[i3] *= -1
      if (Math.abs(positions.current[i3 + 1]) > 5) velocities.current[i3 + 1] *= -1
      if (Math.abs(positions.current[i3 + 2]) > 5) velocities.current[i3 + 2] *= -1
    }

    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.x += 0.001
    mesh.current.rotation.y += 0.001
  })

  return (
    <points ref={mesh}>
      <bufferGeometry />
      <pointsMaterial size={0.05} color={color} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function FloatingShape() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2
    mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3
    mesh.current.position.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.2
  })

  return (
    <mesh ref={mesh}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.6} />
    </mesh>
  )
}

export default function ThreeBackground({ type = "particles", color = "#000000", className = "" }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <div
      ref={ref}
      className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-1000 ${isInView ? "opacity-100" : "opacity-0"} ${className}`}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        {type === "particles" ? <Particles color={color} /> : <FloatingShape />}
      </Canvas>
    </div>
  )
}
