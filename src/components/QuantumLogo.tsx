import React from 'react';
import { motion } from 'framer-motion';

const QuantumLogo: React.FC = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg viewBox="0 0 800 600" className="w-full h-full max-h-[600px]">
        <defs>
          <linearGradient id="navy-3d-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3950A3" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="navy-3d-bottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F254D" />
          </linearGradient>
          
          <linearGradient id="pink-3d-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
          <linearGradient id="pink-3d-bottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DB2777" />
            <stop offset="100%" stopColor="#9D174D" />
          </linearGradient>
          
          <linearGradient id="yellow-3d-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>
          <linearGradient id="yellow-3d-bottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
          
          <radialGradient id="core-3d" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F9A8D4" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="90%" stopColor="#DB2777" />
            <stop offset="100%" stopColor="#9D174D" />
          </radialGradient>
          
          <radialGradient id="sphere-highlight" cx="25%" cy="25%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          
          <filter id="inner-bevel" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
            <feOffset in="blur" dx="2" dy="2" result="offsetBlur"/>
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.5" specularExponent="10" lightingColor="#ffffff" result="specOut">
              <fePointLight x="-5000" y="-10000" z="20000"/>
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
          </filter>
          
          <filter id="extrusion-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
            <feOffset in="blur" dx="4" dy="8" result="offsetBlur"/>
            <feComponentTransfer in="offsetBlur" result="shadow">
              <feFuncA type="linear" slope="0.6"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="shadow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="atmosphere-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.4 0"/>
          </filter>
        </defs>
        
        <g transform="translate(400, 300)">
          <circle cx="0" cy="0" r="180" fill="none" opacity="0.2" filter="url(#atmosphere-glow)">
            <animate attributeName="opacity" values="0.2;0.3;0.2" dur="10s" repeatCount="indefinite"/>
          </circle>
          
          <g>
            <ellipse cx="0" cy="2" rx="160" ry="40" fill="none" stroke="url(#navy-3d-bottom)" strokeWidth="8" filter="url(#extrusion-shadow)" opacity="0.8" transform="rotate(-15)">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" 
                from="-15 0 0" to="345 0 0" dur="15s" repeatCount="indefinite"/>
            </ellipse>
            
            <ellipse cx="0" cy="0" rx="160" ry="40" fill="none" stroke="url(#navy-3d-top)" strokeWidth="8" filter="url(#inner-bevel)" transform="rotate(-15)">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" 
                from="-15 0 0" to="345 0 0" dur="15s" repeatCount="indefinite"/>
            </ellipse>
          </g>
          
          <g>
            <ellipse cx="0" cy="3" rx="120" ry="30" fill="none" stroke="url(#pink-3d-bottom)" strokeWidth="6" filter="url(#extrusion-shadow)" opacity="0.8" transform="rotate(45)">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" 
                from="45 0 0" to="405 0 0" dur="12s" repeatCount="indefinite"/>
            </ellipse>
            
            <ellipse cx="0" cy="0" rx="120" ry="30" fill="none" stroke="url(#pink-3d-top)" strokeWidth="6" filter="url(#inner-bevel)" transform="rotate(45)">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" 
                from="45 0 0" to="405 0 0" dur="12s" repeatCount="indefinite"/>
            </ellipse>
          </g>
          
          <g>
            <ellipse cx="0" cy="4" rx="80" ry="20" fill="none" stroke="url(#yellow-3d-bottom)" strokeWidth="5" filter="url(#extrusion-shadow)" opacity="0.8" transform="rotate(105)">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" 
                from="105 0 0" to="465 0 0" dur="8s" repeatCount="indefinite"/>
            </ellipse>
            
            <ellipse cx="0" cy="0" rx="80" ry="20" fill="none" stroke="url(#yellow-3d-top)" strokeWidth="5" filter="url(#inner-bevel)" transform="rotate(105)">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" 
                from="105 0 0" to="465 0 0" dur="8s" repeatCount="indefinite"/>
            </ellipse>
          </g>
          
          <g>
            <circle cx="0" cy="-160" r="8" fill="url(#navy-3d-top)" filter="url(#inner-bevel)">
              <animateMotion path="M 0,0 A 160,40 0 1 1 0.1,0" dur="12s" repeatCount="indefinite"/>
              <animate attributeName="r" values="8;10;6;8" dur="12s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="-160" r="5" fill="url(#navy-3d-top)" filter="url(#inner-bevel)">
              <animateMotion path="M 0,0 A 160,40 0 1 1 0.1,0" dur="12s" begin="4s" repeatCount="indefinite"/>
              <animate attributeName="r" values="5;7;3;5" dur="12s" repeatCount="indefinite"/>
            </circle>
          </g>
          
          <g>
            <circle cx="0" cy="-120" r="8" fill="url(#pink-3d-top)" filter="url(#inner-bevel)">
              <animateMotion path="M 0,0 A 120,30 0 1 1 0.1,0" dur="8s" repeatCount="indefinite"/>
              <animate attributeName="r" values="8;10;6;8" dur="8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="-120" r="5" fill="url(#pink-3d-top)" filter="url(#inner-bevel)">
              <animateMotion path="M 0,0 A 120,30 0 1 1 0.1,0" dur="8s" begin="2.5s" repeatCount="indefinite"/>
              <animate attributeName="r" values="5;7;3;5" dur="8s" repeatCount="indefinite"/>
            </circle>
          </g>
          
          <g>
            <circle cx="0" cy="-80" r="8" fill="url(#yellow-3d-top)" filter="url(#inner-bevel)">
              <animateMotion path="M 0,0 A 80,20 0 1 1 0.1,0" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="r" values="8;10;6;8" dur="6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="-80" r="5" fill="url(#yellow-3d-top)" filter="url(#inner-bevel)">
              <animateMotion path="M 0,0 A 80,20 0 1 1 0.1,0" dur="6s" begin="2s" repeatCount="indefinite"/>
              <animate attributeName="r" values="5;7;3;5" dur="6s" repeatCount="indefinite"/>
            </circle>
          </g>
          
          <g filter="url(#extrusion-shadow)">
            <circle cx="0" cy="0" r="50" fill="url(#core-3d)"/>
            <circle cx="0" cy="0" r="50" fill="url(#sphere-highlight)" opacity="0.7"/>
            <circle cx="0" cy="0" r="32" fill="#ffffff" filter="url(#inner-bevel)"/>
            
            <g transform="translate(0, 10)">
              <text x="0" y="0" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="32" fill="#888888" textAnchor="middle" transform="translate(2, 2)">33</text>
              <text x="0" y="0" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="32" fill="#1E3A8A" textAnchor="middle">33</text>
              <text x="0" y="0" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="32" fill="#ffffff" textAnchor="middle" opacity="0.3" transform="translate(-1, -1)" filter="url(#inner-bevel)">33</text>
            </g>
          </g>
          
          <g>
            <circle cx="0" cy="-160" r="10" fill="url(#navy-3d-top)" filter="url(#inner-bevel)"/>
            <circle cx="0" cy="160" r="10" fill="url(#navy-3d-top)" filter="url(#inner-bevel)"/>
          </g>
          
          <g>
            <circle cx="-113" cy="-113" r="10" fill="url(#pink-3d-top)" filter="url(#inner-bevel)"/>
            <circle cx="113" cy="113" r="10" fill="url(#pink-3d-top)" filter="url(#inner-bevel)"/>
          </g>
          
          <g>
            <circle cx="160" cy="0" r="10" fill="url(#yellow-3d-top)" filter="url(#inner-bevel)"/>
            <circle cx="-160" cy="0" r="10" fill="url(#yellow-3d-top)" filter="url(#inner-bevel)"/>
          </g>
          
          <g>
            <circle cx="113" cy="-113" r="10" fill="url(#pink-3d-top)" filter="url(#inner-bevel)"/>
            <circle cx="-113" cy="113" r="10" fill="url(#yellow-3d-top)" filter="url(#inner-bevel)"/>
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

export default QuantumLogo;