// "use client"; //It is required while using hooks like useRef

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if (scrollPosition > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       } else {
//         imageElement.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="w-full  pt-36 md:pt-48 pb-10">
//       <div className="space-y-6 text-center">
//         <div className="space-y-6 mx-auto">
//           <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
//             Your AI Career Guide for
//             <br />
//             Professional Success
//           </h1>
//           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
//             Boost your career with personalized guidance, interview coaching, and
//             AI-driven tools for job success.
//           </p>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8">
//               Get Started
//             </Button>
//           </Link>
//           <Link href="https://youtu.be/J60N0NIGaqM">
//             <Button size="lg" variant="outline" className="px-8">
//               Watch Demo
//             </Button>
//           </Link>
//         </div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src={"/banner.jpeg"}
//               width={1280}
//               height={720}
//               alt="Banner of sensai"
//               className="rounded-lg shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Target, Zap, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-28 md:pt-36 pb-16 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-8 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-subtle text-sm text-cyan-200 shadow-glow-cyan animate-fadeIn">
          🚀 AI-Powered Career Coach
        </div>

     {/* Title */}
     {/* Title */}
<h1 className="font-extrabold leading-tight animate-slideUp drop-shadow-lg text-center">
  <span className="block text-3xl md:text-4xl lg:text-5xl text-slate-300 tracking-wide">
    Your AI Guide to
  </span>
  <span className="relative inline-block text-5xl md:text-6xl lg:text-7xl mt-2">
    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
      Career Success
    </span>
    {/* Underline exactly matching text */}
    <span className="absolute left-0 -bottom-2 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-pulse rounded-full"></span>
  </span>
</h1>




        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-slate-300 md:text-lg animate-fadeIn delay-200">
          Unlock your potential with <span className="text-cyan-400 font-semibold">personalized AI coaching</span> – from resume optimization to interview mastery.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 animate-fadeIn delay-300">
          {[
            { icon: Target, text: "Smart Career Matching", color: "text-cyan-400" },
            { icon: Zap, text: "Resume Optimization", color: "text-purple-400" },
            { icon: Trophy, text: "Interview Success", color: "text-pink-400" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <feature.icon className={`w-5 h-5 ${feature.color} drop-shadow`} />
              <span className="text-slate-200">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-fadeIn delay-500">
          <Link href="/dashboard">
            <Button className="btn-modern-primary group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link
            href="https://youtu.be/J60N0NIGaqM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="btn-modern-secondary">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="mt-14 animate-fadeIn delay-700 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent rounded-xl blur-3xl"></div>
          <Image
            src="/banner.jpeg"
            width={1200}
            height={600}
            alt="AI Career Coach Preview"
            className="relative rounded-xl glass-strong shadow-glow-purple mx-auto hover:scale-[1.02] transition-transform duration-500"
            priority
          />
        </div>

        {/* Trusted Section */}
        <div className="mt-16 animate-fadeIn delay-900">
          <p className="text-slate-400 text-sm mb-4">
            Trusted by professionals at
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300 text-sm">
            {["Google", "Microsoft", "Amazon", "Meta", "Apple"].map(
              (company, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 glass-subtle rounded-md hover:shadow-glow-cyan transition-all cursor-pointer"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Animated glowing blobs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
    </section>
  );
};

export default HeroSection;

