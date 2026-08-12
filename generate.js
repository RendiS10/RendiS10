const fs = require('fs');

// Constants for SVG
const svgWidth = 1000;
const svgHeight = 500;

// Colors
const bgColor = "#0A101F"; // dark.svg background
const glowColor = "#22D3EE";
const dotColor = "#A78BFA";
const textColor = "#94A3B8";
const primaryColor = "#F8FAFC";

// Text Data
const name = "Rendi Sutendi";
const role = "Fullstack Developer";
const toolchain = "Next.js, Flutter, Node.js";
const coreLang = "TypeScript, Dart, JavaScript";
const coreFront = "React, Tailwind, Zustand";
const coreBack = "Express, Prisma, PostgreSQL";
const coreInfra = "Docker, Redis, JWT";
const github = "@RendiS10";
const linkedin = "rendi-sutendi-813a90270";

try {
  // Read JPEG and convert to base64
  const jpegData = fs.readFileSync('images/profile.jpeg');
  const base64Image = `data:image/jpeg;base64,${jpegData.toString('base64')}`;

  // Generate SVG string
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}" width="${svgWidth}" height="${svgHeight}">
  
  <!-- Definitions for glow effects and image clipping -->
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <clipPath id="imgClip">
      <rect x="50" y="80" width="350" height="350" rx="20" />
    </clipPath>
    <filter id="monochrome">
      <feColorMatrix type="matrix" values="
        0.33 0.33 0.33 0 0
        0.33 0.33 0.33 0 0
        0.33 0.33 0.33 0 0
        0 0 0 1 0" />
      <feComponentTransfer>
         <!-- Add a purple tint matching the theme -->
         <feFuncR type="linear" slope="0.7" intercept="0.3" />
         <feFuncG type="linear" slope="0.5" intercept="0.2" />
         <feFuncB type="linear" slope="0.9" intercept="0.5" />
      </feComponentTransfer>
    </filter>
  </defs>

  <!-- Background -->
  <rect x="10" y="10" width="${svgWidth - 20}" height="${svgHeight - 20}" rx="15" fill="${bgColor}" stroke="${glowColor}" stroke-width="2" stroke-opacity="0.3" />
  
  <!-- Glowing corners -->
  <path d="M 10 30 Q 10 10 30 10" fill="none" stroke="${glowColor}" stroke-width="2" filter="url(#glow)"/>
  <path d="M 10 470 Q 10 490 30 490" fill="none" stroke="${glowColor}" stroke-width="2" filter="url(#glow)"/>
  <path d="M 990 30 Q 990 10 970 10" fill="none" stroke="${glowColor}" stroke-width="2" filter="url(#glow)"/>
  <path d="M 990 470 Q 990 490 970 490" fill="none" stroke="${glowColor}" stroke-width="2" filter="url(#glow)"/>

  <!-- Top Bar -->
  <circle cx="30" cy="30" r="5" fill="#EF4444" />
  <circle cx="50" cy="30" r="5" fill="#EAB308" />
  <circle cx="70" cy="30" r="5" fill="#22C55E" />
  <text x="500" y="34" fill="${textColor}" font-family="monospace" font-size="12" text-anchor="middle">rendi.sutendi - % ./profile.sh --live</text>
  
  <line x1="10" y1="50" x2="${svgWidth - 10}" y2="50" stroke="${glowColor}" stroke-width="1" stroke-opacity="0.2" />

  <!-- Left Side: Actual Image -->
  <rect x="40" y="70" width="370" height="370" rx="25" fill="none" stroke="${glowColor}" stroke-width="1" stroke-opacity="0.5" />
  <image href="${base64Image}" x="50" y="80" width="350" height="350" preserveAspectRatio="xMidYMid slice" clip-path="url(#imgClip)" filter="url(#monochrome)" />
  <text x="50" y="460" fill="${textColor}" font-family="monospace" font-size="10" opacity="0.6">VISUAL.MAP // SECURE.CONNECTION</text>

  <!-- Right Side: Info Text -->
  <g font-family="monospace" font-size="14" fill="${textColor}">
    
    <text x="450" y="100" font-weight="bold" fill="${primaryColor}">SYSTEM.INFO</text>
    <text x="950" y="100" fill="#EF4444" font-size="12" text-anchor="end">● LIVE</text>
    <line x1="450" y1="110" x2="950" y2="110" stroke="${glowColor}" stroke-width="1" stroke-opacity="0.2" />
    
    <rect x="450" y="125" width="200" height="25" rx="4" fill="${dotColor}" opacity="0.2" />
    <text x="460" y="142" fill="${primaryColor}" font-weight="bold">Hi, I'm ${name}</text>
    
    <text x="450" y="180">Role ...................... <tspan fill="${primaryColor}" font-weight="bold">${role}</tspan></text>
    <text x="450" y="210">ToolChain ................. <tspan fill="${primaryColor}">${toolchain}</tspan></text>
    
    <text x="450" y="250">Core.Lang ................. <tspan fill="${primaryColor}">${coreLang}</tspan></text>
    <text x="450" y="280">Core.Frontend ............. <tspan fill="${primaryColor}">${coreFront}</tspan></text>
    <text x="450" y="310">Core.Backend .............. <tspan fill="${primaryColor}">${coreBack}</tspan></text>
    <text x="450" y="340">Core.Infra ................ <tspan fill="${primaryColor}">${coreInfra}</tspan></text>
    
    <line x1="450" y1="360" x2="950" y2="360" stroke="${textColor}" stroke-width="1" stroke-opacity="0.2" stroke-dasharray="4" />
    
    <text x="450" y="390">- Contact</text>
    <text x="450" y="420">Grid.LinkedIn ............. <tspan fill="${primaryColor}">${linkedin}</tspan></text>
    <text x="450" y="450">Grid.Github ............... <tspan fill="${primaryColor}">${github}</tspan></text>
    
    <text x="450" y="480" font-size="12" fill="${glowColor}">&gt; More about me &amp; projects below in README ↓</text>
    <rect x="800" y="470" width="8" height="12" fill="${glowColor}">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
    </rect>

  </g>
</svg>`;

  fs.writeFileSync('dark.svg', svgContent);
  fs.writeFileSync('light.svg', svgContent);
  console.log("Successfully generated dark.svg and light.svg");

} catch(err) {
  console.error("Error generating SVG:", err);
}
