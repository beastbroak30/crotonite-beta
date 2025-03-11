import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ModelViewerProps {
  modelPath: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  modelPath,
  width = '100%',
  height = '400px',
  backgroundColor = 'transparent',
  autoRotate = true,
  rotationSpeed = 0.005
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create a globe-like environment with the specified image
    const textureLoader = new THREE.TextureLoader();
    const bgTexture = textureLoader.load('/space.jpg'); // Using local file from public directory
    
    // Create a large sphere for the environment
    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    // Invert the geometry so that the texture faces inward
    sphereGeometry.scale(-1, 1, 1);
    
    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: bgTexture,
      color: 0x020209, // Darker blue-tinted color for night effect
      transparent: true, // Enable transparency
      opacity: 0.9, // Make it slightly transparent to see the background
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 10, 50);
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5; // Further reduced for darker night scene
    containerRef.current.appendChild(renderer.domElement);
    
    // Add lights - reduced for night effect
    const ambientLight = new THREE.AmbientLight(0x3a4a9c, 0.15); // Blue-tinted ambient light at lower intensity
    scene.add(ambientLight);
    
    // Main light - like moonlight
    const directionalLight1 = new THREE.DirectionalLight(0xc4d7ff, 0.4); // Blue-white light like moonlight
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);
    
    // Secondary fill light
    const directionalLight2 = new THREE.DirectionalLight(0x2a3b8c, 0.15); // Deeper blue for night shadows
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);
    
    // Add a subtle point light for highlights
    const pointLight = new THREE.PointLight(0x8aa0ff, 0.3, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Add denser fog with blue tint for night atmosphere
    scene.fog = new THREE.FogExp2(0x0a0a1a, 0.002);
    
    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 2.0;
    controls.enableZoom = true; // Enable zoom to allow users to zoom in and out
    controls.enablePan = false; // Disable panning to keep fixed position
    controls.update();
    
    // Load model
    const loader = new GLTFLoader();
    let model: THREE.Group;
    
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;
        
        // Apply white/grey materials to the model
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // Create a new material with blue-white moonlit colors
            const material = new THREE.MeshStandardMaterial({
              color: new THREE.Color(0xd8e8ff), // Slight blue tint like moonlight
              metalness: 0.4,
              roughness: 0.3,
              emissive: new THREE.Color(0x101025), // Subtle glow in the dark
              emissiveIntensity: 0.05,
            });
            
            child.material = material;
          }
        });
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        
        // Set camera position
        camera.position.z = cameraZ * 1.5;
        
        // Reposition model to center
        model.position.x = -center.x;
        model.position.y = -center.y;
        model.position.z = -center.z;
        
        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (model && !controls.autoRotate) {
        model.rotation.y += rotationSpeed;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [modelPath, backgroundColor, autoRotate, rotationSpeed]);
  
  return (
    <div 
      ref={containerRef} 
      style={{ 
        width, 
        height, 
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.7)', // Increased shadow intensity
        background: 'linear-gradient(to bottom, #000005, #030318)', // Night sky gradient with deep blue
        border: '1px solid rgba(10, 20, 50, 0.3)',
      }}
    />
  );
};

export default ModelViewer;