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
    const bgTexture = textureLoader.load('https://wallpapercave.com/wp/wp9116602.jpg');
    
    // Create a large sphere for the environment
    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    // Invert the geometry so that the texture faces inward
    sphereGeometry.scale(-1, 1, 1);
    
    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: bgTexture,
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(30, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 30);
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    containerRef.current.appendChild(renderer.domElement);
    
    // Add lights
    // Add ambient light with reduced intensity for night ambiance
    const ambientLight = new THREE.AmbientLight(0x1a237e, 0.5); // Increased intensity
    scene.add(ambientLight);
    
    // Add directional lights with blue tint for night effect
    const directionalLight1 = new THREE.DirectionalLight(0x4a5baf, 1.0); // Increased intensity
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0x1a237e, 0.6); // Increased intensity
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);
    
    // Add point lights for enhanced highlights
    const pointLight1 = new THREE.PointLight(0x4a5baf, 1.0, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight2.position.set(-5, 3, -5);
    scene.add(pointLight2);
    
    // Add rim light
    const rimLight = new THREE.SpotLight(0x2196f3, 1.0);
    rimLight.position.set(0, 10, -10);
    scene.add(rimLight);
    
    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 2.0;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    };
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
            // Create a new material with white/grey colors
            const material = new THREE.MeshStandardMaterial({
              color: new THREE.Color(0xeeeeee),
              metalness: 0.9,
              roughness: 0.2,
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
        camera.position.z = cameraZ * 0.4; // Reduced multiplier to make model appear larger
        
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
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
        background: 'linear-gradient(to bottom, #000000, #101820)',
        border: '1px solid rgba(30, 30, 30, 0.5)',
        touchAction: 'none',
        WebkitTapHighlightColor: 'transparent'
      }}
    />
  );
};

export default ModelViewer;