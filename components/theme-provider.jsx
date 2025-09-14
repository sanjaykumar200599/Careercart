"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
// "use client"

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"

// export function ThemeProvider({
//   children,
//   ...props
// }) {
//   const [mounted, setMounted] = React.useState(false);

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Enhanced theme provider with modern dark theme optimizations
//   const enhancedProps = {
//     ...props,
//     // Force dark theme for the modern tech aesthetic
//     defaultTheme: "dark",
//     forcedTheme: "dark",
//     // Disable system theme detection to maintain consistent dark experience
//     enableSystem: false,
//     // Prevent theme transition flicker
//     disableTransitionOnChange: true,
//     // Custom storage key
//     storageKey: "ai-career-coach-theme",
//     // Theme switching configuration
//     themes: ["dark", "system"],
//   };

//   // Prevent hydration mismatch
//   if (!mounted) {
//     return (
//       <div className="min-h-screen bg-slate-900 text-white">
//         {children}
//       </div>
//     );
//   }

//   return (
//     <NextThemesProvider {...enhancedProps}>
//       <ThemeEnhancer>
//         {children}
//       </ThemeEnhancer>
//     </NextThemesProvider>
//   );
// }

// // Theme enhancement component for additional dark theme optimizations
// const ThemeEnhancer = ({ children }) => {
//   React.useEffect(() => {
//     // Ensure dark theme CSS variables are properly set
//     const root = document.documentElement;
    
//     // Enhanced dark theme variables
//     const darkThemeVars = {
//       '--background': '222.2 84% 4.9%',
//       '--foreground': '210 40% 98%',
//       '--card': '222.2 84% 4.9%',
//       '--card-foreground': '210 40% 98%',
//       '--popover': '222.2 84% 4.9%',
//       '--popover-foreground': '210 40% 98%',
//       '--primary': '217.2 91.2% 59.8%',
//       '--primary-foreground': '222.2 84% 4.9%',
//       '--secondary': '217.2 32.6% 17.5%',
//       '--secondary-foreground': '210 40% 98%',
//       '--muted': '217.2 32.6% 17.5%',
//       '--muted-foreground': '215 20.2% 65.1%',
//       '--accent': '217.2 32.6% 17.5%',
//       '--accent-foreground': '210 40% 98%',
//       '--destructive': '0 62.8% 30.6%',
//       '--destructive-foreground': '210 40% 98%',
//       '--border': '217.2 32.6% 17.5%',
//       '--input': '217.2 32.6% 17.5%',
//       '--ring': '224.3 76.3% 94.1%',
//     };

//     // Apply enhanced dark theme variables
//     Object.entries(darkThemeVars).forEach(([property, value]) => {
//       root.style.setProperty(property, value);
//     });

//     // Add dark theme class
//     root.classList.add('dark');
    
//     // Set meta theme color for mobile browsers
//     let metaThemeColor = document.querySelector('meta[name="theme-color"]');
//     if (!metaThemeColor) {
//       metaThemeColor = document.createElement('meta');
//       metaThemeColor.name = 'theme-color';
//       document.head.appendChild(metaThemeColor);
//     }
//     metaThemeColor.content = '#0f172a'; // slate-900

//     // Optimize for dark theme performance
//     const style = document.createElement('style');
//     style.textContent = `
//       /* Enhanced dark theme optimizations */
//       * {
//         color-scheme: dark;
//       }
      
//       /* Smooth scrolling with momentum on iOS */
//       html {
//         -webkit-overflow-scrolling: touch;
//         scroll-behavior: smooth;
//       }
      
//       /* Improved text rendering */
//       body {
//         -webkit-font-smoothing: antialiased;
//         -moz-osx-font-smoothing: grayscale;
//         text-rendering: optimizeSpeed;
//       }
      
//       /* Dark theme selection colors */
//       ::selection {
//         background-color: rgb(59 130 246 / 0.3);
//         color: rgb(248 250 252);
//       }
      
//       /* Custom scrollbar for dark theme */
//       ::-webkit-scrollbar {
//         width: 8px;
//       }
      
//       ::-webkit-scrollbar-track {
//         background: rgb(15 23 42 / 0.1);
//       }
      
//       ::-webkit-scrollbar-thumb {
//         background: rgb(71 85 105 / 0.5);
//         border-radius: 4px;
//       }
      
//       ::-webkit-scrollbar-thumb:hover {
//         background: rgb(71 85 105 / 0.7);
//       }
      
//       /* Reduced motion support */
//       @media (prefers-reduced-motion: reduce) {
//         *, *::before, *::after {
//           animation-duration: 0.01ms !important;
//           animation-iteration-count: 1 !important;
//           transition-duration: 0.01ms !important;
//           scroll-behavior: auto !important;
//         }
//       }
      
//       /* High contrast mode support */
//       @media (prefers-contrast: high) {
//         .glass, .glass-strong, .glass-subtle {
//           background: rgb(0 0 0 / 0.9) !important;
//           border-color: rgb(255 255 255 / 0.5) !important;
//         }
//       }
      
//       /* Focus visible improvements */
//       *:focus-visible {
//         outline: 2px solid rgb(59 130 246);
//         outline-offset: 2px;
//         border-radius: 4px;
//       }
      
//       /* Loading state optimization */
//       .loading-skeleton {
//         background: linear-gradient(
//           90deg,
//           rgb(30 41 59) 0%,
//           rgb(51 65 85) 50%,
//           rgb(30 41 59) 100%
//         );
//         background-size: 200px 100%;
//         animation: loading-skeleton 1.2s ease-in-out infinite;
//       }
      
//       @keyframes loading-skeleton {
//         0% {
//           background-position: -200px 0;
//         }
//         100% {
//           background-position: calc(200px + 100%) 0;
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   return <>{children}</>;
// };