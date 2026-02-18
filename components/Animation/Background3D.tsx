"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const Background3D = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Canvas & Renderer
        const width = window.innerWidth;
        const height = window.innerHeight;

        const scene = new THREE.Scene();
        // Dark background but slightly tinted to match modern dark themes
        // scene.background = new THREE.Color("#050510"); 
        // Or transparent to overlay on gradient

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 700;

        const posArray = new Float32Array(particleCount * 3);

        // Create random positions
        for (let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 60; // Spread wide
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Material
        const material = new THREE.PointsMaterial({
            size: 0.15,
            color: 0x4f46e5, // Indigo-600 like color
            transparent: true,
            opacity: 0.8,
        });

        // Mesh
        const particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        const animateParticles = (event: MouseEvent) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        // Animation Loop
        const clock = new THREE.Clock();

        const tick = () => {
            const elapsedTime = clock.getElapsedTime();

            // Slow rotation
            particlesMesh.rotation.y = elapsedTime * 0.05;
            particlesMesh.rotation.x = elapsedTime * 0.02;

            // Mouse interaction effect (gentle)
            // We smooth it with linear interpolation or just simple factor
            // particlesMesh.rotation.y += mouseX * 0.00005; 
            // particlesMesh.rotation.x += mouseY * 0.00005;

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        }

        tick();

        // GSAP Intro
        gsap.from(particlesMesh.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 2,
            ease: "elastic.out(1, 0.5)"
        });

        gsap.to(particlesMesh.rotation, {
            y: Math.PI * 2,
            duration: 200,
            repeat: -1,
            ease: "none"
        });

        // Resize handling
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', animateParticles);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', animateParticles);
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            // Cleanup Three.js resources
            particlesGeometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-gradient-to-br from-gray-900 via-slate-900 to-black"
        />
    );
};

export default Background3D;
