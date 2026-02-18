"use client"
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

// 3D Shield Model สำหรับหน้านโยบาย
export default function PolicyShield() {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mountRef.current) return

        // ===== สร้าง Scene =====
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
        camera.position.z = 4

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(400, 400)
        renderer.setPixelRatio(window.devicePixelRatio)
        mountRef.current.appendChild(renderer.domElement)

        // ===== แสง =====
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
        scene.add(ambientLight)

        const pointLight1 = new THREE.PointLight(0x8b5cf6, 2, 10) // ม่วง
        pointLight1.position.set(3, 3, 3)
        scene.add(pointLight1)

        const pointLight2 = new THREE.PointLight(0x3b82f6, 1.5, 10) // ฟ้า
        pointLight2.position.set(-3, -2, 3)
        scene.add(pointLight2)

        const pointLight3 = new THREE.PointLight(0xec4899, 1, 10) // ชมพู
        pointLight3.position.set(0, 3, -3)
        scene.add(pointLight3)

        // ===== โมเดล Shield (ทำจาก geometry หลายชิ้น) =====
        const group = new THREE.Group()

        // ตัว Shield หลัก — Icosahedron เหมือนเพชร
        const shieldGeo = new THREE.IcosahedronGeometry(1.2, 1)
        const shieldMat = new THREE.MeshPhysicalMaterial({
            color: 0x1e1b4b,
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.85,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
        })
        const shield = new THREE.Mesh(shieldGeo, shieldMat)
        group.add(shield)

        // Wireframe รอบนอก
        const wireGeo = new THREE.IcosahedronGeometry(1.5, 1)
        const wireMat = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0.3,
        })
        const wireframe = new THREE.Mesh(wireGeo, wireMat)
        group.add(wireframe)

        // วงแหวน
        const ringGeo = new THREE.TorusGeometry(1.8, 0.02, 16, 100)
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            transparent: true,
            opacity: 0.5,
        })
        const ring = new THREE.Mesh(ringGeo, ringMat)
        ring.rotation.x = Math.PI / 2
        group.add(ring)

        // วงแหวน 2
        const ring2Geo = new THREE.TorusGeometry(2.0, 0.015, 16, 100)
        const ring2Mat = new THREE.MeshBasicMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.3,
        })
        const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
        ring2.rotation.x = Math.PI / 3
        ring2.rotation.y = Math.PI / 4
        group.add(ring2)

        // จุดเล็กๆ รอบๆ
        for (let i = 0; i < 30; i++) {
            const dotGeo = new THREE.SphereGeometry(0.02, 8, 8)
            const dotMat = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: Math.random() * 0.5 + 0.2,
            })
            const dot = new THREE.Mesh(dotGeo, dotMat)
            dot.position.set(
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 3
            )
            group.add(dot)
        }

        scene.add(group)

        // ===== Animation Loop =====
        let mouseX = 0
        let mouseY = 0

        const handleMouse = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2
        }
        window.addEventListener("mousemove", handleMouse)

        const animate = () => {
            requestAnimationFrame(animate)

            // หมุนตาม Mouse
            group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05
            group.rotation.x += (-mouseY * 0.3 - group.rotation.x) * 0.05

            // หมุนช้าๆ
            wireframe.rotation.y += 0.003
            wireframe.rotation.x += 0.002
            ring.rotation.z += 0.005
            ring2.rotation.z -= 0.003

            renderer.render(scene, camera)
        }
        animate()

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouse)
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement)
            }
            renderer.dispose()
        }
    }, [])

    return (
        <div
            ref={mountRef}
            className="flex items-center justify-center pointer-events-auto"
            style={{ width: 400, height: 400 }}
        />
    )
}
