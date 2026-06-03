import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Info, Map as MapIcon, ChevronRight, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// High-quality equirectangular panoramas
const LOCATIONS = [
  {
    id: 'grand-hall',
    name: 'The Grand Hall',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=4000',
    description: 'The architectural heart of Aurelius, where traditions meet innovation.',
    hotspots: [
      { position: [10, 0, -10], title: 'Original 18th Century Organ', detail: 'This pipe organ has been meticulously restored and is used for weekly assemblies.' },
      { position: [-15, 2, 5], title: 'Grand Chandelier', detail: 'A magnificent centerpiece that illuminates the hall during evening ceremonies.' }
    ]
  },
  {
    id: 'library',
    name: 'The Athenaeum',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=4000',
    description: 'Home to over 100,000 rare volumes and state-of-the-art digital archives.',
    hotspots: [
      { position: [0, 0, -20], title: 'Manuscript Vault', detail: 'Contains original letters from founding members dating back to 1982.' },
      { position: [15, -2, 10], title: 'Reading Nooks', detail: 'Quiet, secluded spaces designed for deep focus and research.' }
    ]
  },
  {
    id: 'science',
    name: 'Innovation Lab',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=4000',
    description: 'Cutting-edge facilities for advanced chemistry, physics, and robotics research.',
    hotspots: [
      { position: [10, 0, -15], title: 'Spectrometer', detail: 'High-precision equipment for molecular analysis.' }
    ]
  },
  {
    id: 'sports',
    name: 'Athletic Pavilion',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=4000',
    description: 'A professional-grade complex supporting 24 different Olympic and traditional sports.',
    hotspots: [
      { position: [-10, -5, -15], title: 'Training Floor', detail: 'Versatile space for various athletic disciplines and team practices.' }
    ]
  },
  {
    id: 'dorm',
    name: 'St. George Residence',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=4000',
    description: 'Luxury boarding that balances personal privacy with community building.',
    hotspots: [
      { position: [5, 2, -15], title: 'Communal Lounge', detail: 'The social hub of the house, where students gather for tea and discussion.' }
    ]
  }
];

function Scene({ location }: { location: typeof LOCATIONS[0] }) {
  const texture = useLoader(THREE.TextureLoader, location.image);
  
  return (
    <>
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[50, 64, 32]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      
      {location.hotspots.map((spot, idx) => (
        <group key={idx} position={spot.position as [number, number, number]}>
          <Html center>
            <div className="group relative">
              <button className="w-8 h-8 bg-gold rounded-full flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(212,175,55,0.5)] border-2 border-white pointer-events-auto">
                <Info className="w-4 h-4 text-navy" />
              </button>
              
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 p-4 bg-navy text-paper rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-white/10 shadow-2xl">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-gold mb-1">{spot.title}</h4>
                <p className="text-[10px] leading-relaxed text-paper/60">{spot.detail}</p>
              </div>
            </div>
          </Html>
        </group>
      ))}
    </>
  );
}

export default function VirtualTour() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const currentLocation = LOCATIONS[currentIdx];

  return (
    <div className="fixed inset-0 z-0 bg-navy">
      {/* 3D Canvas */}
      <div className="w-full h-full cursor-move">
        <Canvas camera={{ position: [0, 0, 0.1] }}>
          <Suspense fallback={null}>
            <Scene location={currentLocation} />
            <OrbitControls 
              enableZoom={false} 
              rotateSpeed={-0.5} 
              autoRotate={false}
              dampingFactor={0.05}
              enableDamping={true}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Loading Overlay */}
      <div className="absolute inset-0 pointer-events-none items-center justify-center flex bg-navy/20 backdrop-blur-sm z-[-1]">
        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between pointer-events-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 h-full pointer-events-none">
          <motion.div 
            key={currentLocation.id + 'header'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-navy/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 pointer-events-auto max-w-sm w-full md:w-auto"
          >
            <Link to="/" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-gold mb-6 block hover:text-white transition-colors">
              Exit Experience
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif text-paper mb-4">{currentLocation.name}</h1>
            <p className="text-xs md:text-sm text-paper/60 leading-relaxed">{currentLocation.description}</p>
          </motion.div>

          {/* Controls */}
          <div className="flex flex-col gap-4 absolute top-8 right-8 md:relative md:top-0 md:right-0">
            <button 
              onClick={() => setShowMap(!showMap)}
              className="w-12 h-12 md:w-14 md:h-14 bg-paper/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-paper hover:bg-gold hover:text-navy transition-all pointer-events-auto shadow-xl"
            >
              <MapIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              className="lg:hidden w-12 h-12 md:w-14 md:h-14 bg-paper/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-paper pointer-events-auto shadow-xl"
              onClick={() => {
                if (!document.fullscreenElement) {
                   document.documentElement.requestFullscreen();
                } else {
                   document.exitFullscreen();
                }
              }}
            >
              <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-start md:justify-center items-end gap-6 overflow-x-auto pb-4 md:pb-0 no-scrollbar pointer-events-auto">
          {LOCATIONS.map((loc, idx) => (
            <button
              key={loc.id}
              onClick={() => setCurrentIdx(idx)}
              className={`group flex flex-col items-center gap-2 md:gap-3 transition-all duration-500 pb-2 border-b-2 flex-shrink-0 ${
                currentIdx === idx ? 'border-gold opacity-100 scale-105' : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-black text-paper/40 group-hover:text-gold">0{idx + 1}</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-paper whitespace-nowrap">{loc.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Map Overlay Modal */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-2xl flex items-center justify-center p-12"
          >
            <button 
              onClick={() => setShowMap(false)}
              className="absolute top-12 right-12 text-paper hover:text-gold transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="aspect-square bg-paper/5 border border-white/10 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.1" />
                      <path d="M10 50 Q 50 10 90 50 T 10 50" fill="none" stroke="white" strokeWidth="0.1" />
                    </svg>
                 </div>
                 <h3 className="text-gold uppercase tracking-[0.5em] font-bold">Campus Topography</h3>
                 {/* Decorative Points */}
                 <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-gold rounded-full animate-ping" />
                 <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full" />
              </div>

              <div className="flex flex-col justify-center space-y-12">
                <h2 className="text-5xl font-serif text-paper">Select Destination</h2>
                <div className="space-y-6">
                  {LOCATIONS.map((loc, idx) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setCurrentIdx(idx);
                        setShowMap(false);
                      }}
                      className="group flex items-center justify-between w-full p-6 border-b border-white/10 hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-gold font-mono text-sm leading-none">0{idx + 1}</span>
                        <span className="text-paper text-2xl font-serif">{loc.name}</span>
                      </div>
                      <ChevronRight className="text-gold group-hover:translate-x-2 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
