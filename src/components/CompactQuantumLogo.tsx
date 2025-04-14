import React from 'react';
import { motion } from 'framer-motion';

const CompactQuantumLogo: React.FC = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="compact-navy-3d-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3950A3" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          
          <linearGradient id="compact-pink-3d-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
          
          <linearGradient id="compact-yellow-3d-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>

          <radialGradient id="compact-core-3d" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F9A8D4" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="90%" stopColor="#DB2777" />
            <stop offset="100%" stopColor="#9D174D" />
          </radialGradient>

          <radialGradient id="compact-glow-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
          </radialGradient>

          <filter id="compact-inner-bevel" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/>
            <feOffset in="blur" dx="1" dy="1" result="offsetBlur"/>
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.5" specularExponent="10" lightingColor="#ffffff" result="specOut">
              <fePointLight x="-5000" y="-10000" z="20000"/>
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
          </filter>

          <filter id="compact-glow">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <g transform="translate(50 50)">
          <circle 
            r="40" 
            fill="url(#compact-glow-gradient)"
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.6;0.8;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <g>
            <ellipse
              rx="35"
              ry="14"
              fill="none"
              stroke="url(#compact-navy-3d-top)"
              strokeWidth="2.5"
              opacity="0.8"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur="20s"
                repeatCount="indefinite"
              />
            </ellipse>

            <ellipse
              rx="25"
              ry="25"
              fill="none"
              stroke="url(#compact-pink-3d-top)"
              strokeWidth="2.5"
              opacity="0.8"
              transform="rotate(60)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="60 0 0"
                to="420 0 0"
                dur="15s"
                repeatCount="indefinite"
              />
            </ellipse>

            <ellipse
              rx="18"
              ry="10"
              fill="none"
              stroke="url(#compact-yellow-3d-top)"
              strokeWidth="2"
              opacity="0.8"
              transform="rotate(120)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="120 0 0"
                to="480 0 0"
                dur="10s"
                repeatCount="indefinite"
              />
            </ellipse>
          </g>

          <g>
            <circle r="2.5" fill="url(#compact-navy-3d-top)" filter="url(#compact-inner-bevel)">
              <animateMotion
                dur="20s"
                repeatCount="indefinite"
                path="M 0,0 A 35,14 0 1 1 0.1,0"
              />
            </circle>

            <circle r="2.5" fill="url(#compact-pink-3d-top)" filter="url(#compact-inner-bevel)">
              <animateMotion
                dur="15s"
                repeatCount="indefinite"
                path="M 0,0 A 25,25 0 1 1 0.1,0"
              />
            </circle>

            <circle r="2.5" fill="url(#compact-yellow-3d-top)" filter="url(#compact-inner-bevel)">
              <animateMotion
                dur="10s"
                repeatCount="indefinite"
                path="M 0,0 A 18,10 0 1 1 0.1,0"
              />
            </circle>
          </g>

          <circle
            r="10"
            fill="url(#compact-core-3d)"
            filter="url(#compact-glow)"
          >
            <animate
              attributeName="r"
              values="10;11;10"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <text
            x="0"
            y="4"
            fontSize="10"
            fontFamily="'Montserrat', sans-serif"
            fill="white"
            textAnchor="middle"
            fontWeight="bold"
          >
            33
          </text>
        </g>
      </svg>
    </motion.div>
  );
};

export default CompactQuantumLogo;