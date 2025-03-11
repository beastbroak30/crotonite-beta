import React, { useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarContext } from './NavbarProvider';

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  features: string[];
  specifications: string[];
  applications: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'EA-10',
    description: 'Entry-level electron accelerator perfect for educational institutions and small research labs.',
    longDescription: 'The EA-10 is our foundational electron accelerator model, designed specifically for educational institutions and research facilities taking their first steps into particle physics. This compact yet powerful system provides an ideal platform for hands-on learning and basic research applications.',
    price: '$49,999 - $60,000',
    features: [
      'Energy range: 100 keV - 1 MeV',
      'Compact 2m x 1m footprint',
      'Basic beam control',
      'Standard safety features'
    ],
    specifications: [
      'Beam current: 0.1 - 1 mA',
      'Beam diameter: 1-5 mm',
      'Power consumption: 3 kW',
      'Cooling: Air-cooled system'
    ],
    applications: [
      'Basic materials research',
      'Educational demonstrations',
      'Simple sterilization processes',
      'Entry-level radiation studies'
    ]
  },
  {
    id: 2,
    name: 'EA-NEO',
    description: 'Professional-grade accelerator with advanced controls and higher energy range.',
    longDescription: 'The EA-NEO represents our mid-tier professional solution, incorporating advanced control systems and enhanced energy capabilities. Perfect for research institutions and industrial applications requiring precise beam control and comprehensive diagnostics.',
    price: '$99,999 - $120,000',
    features: [
      'Energy range: 500 keV - 5 MeV',
      'Precision beam steering',
      'Advanced diagnostics',
      'Remote operation capability'
    ],
    specifications: [
      'Beam current: 0.5 - 5 mA',
      'Beam diameter: 0.5-3 mm',
      'Power consumption: 8 kW',
      'Cooling: Integrated water cooling'
    ],
    applications: [
      'Advanced materials modification',
      'Industrial processing',
      'Medical device sterilization',
      'Research & Development'
    ]
  },
  {
    id: 3,
    name: 'EA-10M',
    description: 'Research-grade system for advanced applications and specialized research.',
    longDescription: 'The EA-10M is our flagship research-grade electron accelerator, designed for cutting-edge research and specialized applications. This sophisticated system offers unprecedented control over beam parameters and supports multi-beam configurations for complex experiments.',
    price: '$199,999 - $250,000',
    features: [
      'Energy range: 1 MeV - 10 MeV',
      'Full spectrum diagnostics',
      'Multi-beam configuration',
      'Custom beam profiles'
    ],
    specifications: [
      'Beam current: 1 - 10 mA',
      'Beam diameter: 0.1-2 mm',
      'Power consumption: 15 kW',
      'Cooling: Cryogenic system in later upgrades'
    ],
    applications: [
      'Cutting-edge research projects',
      'Advanced materials development',
      'Specialized industrial processes',
      'High-precision medical applications'
    ]
  }
];

interface FloatingSquare {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const FloatingSquares: React.FC = () => {
  const [squares, setSquares] = React.useState<FloatingSquare[]>([]);
  
  useEffect(() => {
    // Generate random squares
    const generateSquares = () => {
      const newSquares: FloatingSquare[] = [];
      const colors = ['#2563eb', '#3b82f6', '#49baff', '#60a5fa'];
      
      // Reduced number of squares from 15 to 5
      for (let i = 0; i < 5; i++) {
        newSquares.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          // Increased size range from 10-40px to 50-100px
          size: Math.random() * 50 + 50,
          opacity: Math.random() * 0.2 + 0.05, // 0.05-0.25
          duration: Math.random() * 20 + 10, // 10-30s
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setSquares(newSquares);
    };
    
    generateSquares();
  }, []);
  
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {squares.map((square) => (
        <motion.div
          key={square.id}
          style={{
            position: 'absolute',
            left: `${square.x}%`,
            top: `${square.y}%`,
            width: `${square.size}px`,
            height: `${square.size}px`,
            backgroundColor: square.color,
            opacity: square.opacity,
            borderRadius: '8px',
            boxShadow: `0 0 15px ${square.color}40`
          }}
          animate={{
            x: ['-20px', '20px', '-20px'],
            y: ['-20px', '20px', '-20px'],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: square.duration,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: square.delay,
            repeatType: 'reverse'
          }}
        />
      ))}
    </div>
  );
};

const ProductPage: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const navbarContext = useContext(NavbarContext);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  
  const handleProductClick = (product: Product) => {
    const newSelectedProduct = product === selectedProduct ? null : product;
    setSelectedProduct(newSelectedProduct);
    
    // Toggle navbar visibility when product details are shown/hidden
    if (navbarContext) {
      navbarContext.setNavbarVisible(newSelectedProduct === null);
    }
  };
  
  const handleCloseDetails = () => {
    setSelectedProduct(null);
    // Restore navbar visibility when details are closed
    if (navbarContext) {
      navbarContext.setNavbarVisible(true);
    }
  };

  // Effect to handle navbar visibility when component mounts/unmounts
  useEffect(() => {
    return () => {
      // Ensure navbar is visible when component unmounts
      if (navbarContext) {
        navbarContext.setNavbarVisible(true);
      }
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    margin: '0',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #0a0a0f 0%, #111827 50%, #1e3a8a 100%)',
    minHeight: '100vh'
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
    padding: '60px 0 20px 0'
  };

  const headerTitleStyle: React.CSSProperties = {
    fontSize: '48px',   
    fontWeight: '700',
    color: '#ffffff',
    textShadow: '0 0 20px rgba(255, 255, 255, 0.4)',
    position: 'relative',
    zIndex: 2
  };

  const headerDescriptionStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#c0caf5',
    maxWidth: '800px',
    margin: '20px auto 0',
    lineHeight: '1.6',
    position: 'relative',
    zIndex: 2
  };

  const headerLineStyle: React.CSSProperties = {
    width: '100%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
    position: 'absolute',
    bottom: 0,
    left: 0
  };

  const productSectionStyle = (id: number): React.CSSProperties => ({
    marginBottom: '40px',
    padding: '30px',
    background: 'rgba(17, 24, 39, 0.4)',
    backdropFilter: 'blur(12px)',
    borderRadius: '16px',
    border: '1px solid rgba(73, 186, 255, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.05}deg) rotateY(${(mousePosition.x - 50) * 0.05}deg)`,
    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.15)',
    '&:hover': {
      background: 'rgba(30, 58, 138, 0.3)',
      transform: 'translateY(-5px) scale(1.02)',
      boxShadow: '0 12px 40px rgba(73, 186, 255, 0.25), 0 0 15px rgba(59, 130, 246, 0.3)',
      border: '2px solid rgba(73, 186, 255, 0.5)'
    }
  });

  const leftColumnStyle: React.CSSProperties = {
    flex: '1.5',
    minWidth: '400px'
  };

  const rightColumnStyle: React.CSSProperties = {
    flex: '1',
    minWidth: '300px'
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '32px',
    marginBottom: '16px',
    color: '#49baff',
    fontWeight: '600',
    textShadow: '0 0 10px rgba(73, 186, 255, 0.3)'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#c0caf5',
    marginBottom: '24px'
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '30px',
    background: 'linear-gradient(145deg, rgba(26, 27, 38, 0.4), rgba(36, 40, 59, 0.4))',
    padding: '20px',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(73, 186, 255, 0.1)'
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    marginBottom: '16px',
    color: '#49baff',
    fontWeight: '500'
  };

  const listItemStyle: React.CSSProperties = {
    padding: '10px 0',
    position: 'relative',
    paddingLeft: '24px',
    color: '#a9b1d6',
    fontSize: '15px',
    lineHeight: '1.6'
  };

  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #49baff 0%, #3d84ff 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(73, 186, 255, 0.2)',
    marginTop: '20px',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(73, 186, 255, 0.3)'
    }
  };

  return (
    <div style={containerStyle}>
      <FloatingSquares />
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>Our Products</h1>
        <p style={headerDescriptionStyle}>Discover our cutting-edge electron accelerator technology, designed for research institutions, educational facilities, and industrial applications. From entry-level to advanced research-grade systems, our products deliver precision, reliability, and innovation.</p>
        <div style={headerLineStyle}></div>
      </header>

      <div style={productsGridStyle}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            onClick={() => handleProductClick(product)}
            onMouseMove={handleMouseMove}
            style={productCardStyle}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 12px 40px rgba(73, 186, 255, 0.25), 0 0 15px rgba(59, 130, 246, 0.3)',
              borderColor: 'rgba(73, 186, 255, 0.5)'
            }}
          >
            <h2 style={cardHeadingStyle}>{product.name}</h2>
            <p style={cardPriceStyle}>{product.price}</p>
            <p style={cardDescriptionStyle}>{product.description}</p>
            <div style={cardFeatureListStyle}>
              {product.features.slice(0, 2).map((feature, index) => (
                <div key={index} style={cardFeatureItemStyle}>{feature}</div>
              ))}
            </div>
            <button style={viewDetailsButtonStyle}>View Details</button>
          </motion.div>
        ))}
      </div>

      <div style={modelSectionStyle}>
        <h2 style={{...headerTitleStyle, fontSize: '36px', marginBottom: '20px'}}>Interactive 3D Model</h2>
        <p style={{...headerDescriptionStyle, marginBottom: '30px'}}>Explore our EA-10 electron accelerator in 3D. Rotate and zoom to examine the details of our cutting-edge technology.</p>
        <ModelViewer 
          modelPath="/EA-10v1.gltf" 
          height="500px" 
          autoRotate={true} 
          rotationSpeed={0.005} 
          backgroundColor="rgba(17, 24, 39, 0.2)"
        />
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={productDetailsOverlayStyle}
            onClick={handleCloseDetails}
            onMouseMove={handleMouseMove}
          >
            {/* Blue gradient that follows mouse cursor */}
            <motion.div
              style={{
                position: 'absolute',
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.1) 50%, transparent 70%)',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 0,
                transform: `translate(calc(${mousePosition.x}% - 200px), calc(${mousePosition.y}% - 200px))`,
                opacity: 0.7,
                filter: 'blur(40px)'
              }}
            />
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              style={productDetailsCardStyle}
              onClick={(e) => e.stopPropagation()}
              onMouseMove={(e) => e.stopPropagation()}
            >
              <button style={closeButtonStyle} onClick={handleCloseDetails}>×</button>
              
              <div style={flexContainerStyle}>
                <div style={leftColumnStyle}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                    <h2 style={headingStyle}>{selectedProduct.name}</h2>
                    <p style={{...priceStyle, textAlign: 'left', marginBottom: 0, marginLeft: '20px'}}>{selectedProduct.price}</p>
                  </div>
                  <p style={descriptionStyle}>{selectedProduct.longDescription}</p>
                  
                  <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                    <div style={{...sectionStyle, flex: 1, minWidth: '300px'}}>
                      <h3 style={sectionTitleStyle}>Key Features</h3>
                      <ul style={listStyle}>
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} style={listItemStyle}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{...sectionStyle, flex: 1, minWidth: '300px'}}>
                      <h3 style={sectionTitleStyle}>Specifications</h3>
                      <ul style={listStyle}>
                        {selectedProduct.specifications.map((spec, index) => (
                          <li key={index} style={listItemStyle}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>Applications</h3>
                    <ul style={listStyle}>
                      {selectedProduct.applications.map((app, index) => (
                        <li key={index} style={listItemStyle}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    style={buttonStyle}
                    onClick={() => handleContact(selectedProduct.name)}
                  >
                    Contact Us About {selectedProduct.name}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;

const productsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px'
};

const productCardStyle: React.CSSProperties = {
  background: 'rgba(17, 24, 39, 0.4)',
  backdropFilter: 'blur(12px)',
  borderRadius: '16px',
  border: '1px solid rgba(73, 186, 255, 0.3)',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: '400px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 30px rgba(59, 130, 246, 0.15)'
};

const cardHeadingStyle: React.CSSProperties = {
  fontSize: '32px',
  color: '#49baff',
  fontWeight: '700',
  marginBottom: '15px',
  textShadow: '0 0 10px rgba(73, 186, 255, 0.3)'
};

const cardPriceStyle: React.CSSProperties = {
  fontSize: '24px',
  color: '#ffffff',
  marginBottom: '15px',
  fontWeight: '600',
  textAlign: 'left'
};

const cardDescriptionStyle: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#c0caf5',
  marginBottom: '20px',
  flexGrow: 1
};

const cardFeatureListStyle: React.CSSProperties = {
  marginBottom: '20px'
};

const cardFeatureItemStyle: React.CSSProperties = {
  fontSize: '13px',
  color: '#a9b1d6',
  padding: '8px 0',
  borderBottom: '1px solid rgba(73, 186, 255, 0.1)'
};

const viewDetailsButtonStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
  color: '#ffffff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)',
  marginTop: 'auto',
  textAlign: 'center'
};

const productDetailsOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(10, 10, 15, 0.65)', // More translucent background
  backdropFilter: 'blur(10px)', // Increased blur for better visibility
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100
};

const productDetailsCardStyle: React.CSSProperties = {
  background: 'rgba(17, 24, 39, 0.4)', // More translucent background
  backdropFilter: 'blur(20px)', // Increased blur effect for glass-like appearance
  borderRadius: '16px',
  border: '1px solid rgba(73, 186, 255, 0.3)',
  padding: '40px',
  maxWidth: '1100px',
  width: '95%',
  maxHeight: '90vh',
  overflow: 'auto',
  position: 'relative',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2), 0 0 30px rgba(73, 186, 255, 0.15)'
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: 'rgba(59, 130, 246, 0.2)',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  zIndex: 10
};

const flexContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '40px',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxHeight: '70vh',
  overflow: 'auto',
  padding: '10px'
};

const priceStyle: React.CSSProperties = {
  fontSize: '32px',
  color: '#ffffff',
  marginBottom: '20px',
  fontWeight: '600',
  textAlign: 'right'
};

const listStyle: React.CSSProperties = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  margin: 0
};

const handleContact = (productName: string) => {
  // Redirect to contact page with product name and set contribution type to 'product'
  window.location.href = `/contact?product=${encodeURIComponent(productName)}&type=product`;
};

import ModelViewer from './ModelViewer';

const modelSectionStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '60px auto 40px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};