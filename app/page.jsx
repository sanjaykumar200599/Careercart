// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ArrowRight,
//   Trophy,
//   Target,
//   Sparkles,
//   CheckCircle2,
// } from "lucide-react";
// import HeroSection from "@/components/hero";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Image from "next/image";
// import { features } from "@/data/features";
// import { testimonial } from "@/data/testimonial";
// import { faqs } from "@/data/faqs";
// import { howItWorks } from "@/data/howItWorks";

// export default function LandingPage() {
//   return (
//     <>
//       <div className="grid-background"></div>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Features Section */}
//       <section className="w-full h-10 py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
//             Powerful Features for Your Career Growth
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="border-2 hover:border-primary transition-colors duration-300"
//               >
//                 <CardContent className="pt-6 text-center flex flex-col items-center">
//                   <div className="flex flex-col items-center justify-center">
//                     {feature.icon}
//                     <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                     <p className="text-muted-foreground">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold"></h3>
//               <p className="text-muted-foreground"></p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold"></h3>
//               <p className="text-muted-foreground"></p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold"></h3>
//               <p className="text-muted-foreground"></p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold"></h3>
//               <p className="text-muted-foreground"></p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="w-full py-12 md:py-24 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-muted-foreground">
//               Four simple steps to accelerate your career growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {howItWorks.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-xl">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What Our Users Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {testimonial.map((testimonial, index) => (
//               <Card key={index} className="bg-background">
//                 <CardContent className="pt-6">
//                   <div className="flex flex-col space-y-4">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="relative h-12 w-12 flex-shrink-0">
//                         <Image
//                           width={40}
//                           height={40}
//                           src={testimonial.image}
//                           alt={testimonial.author}
//                           className="rounded-full object-cover border-2 border-primary/20"
//                         />
//                       </div>
//                       <div>
//                         <p className="font-semibold">{testimonial.author}</p>
//                         <p className="text-sm text-muted-foreground">
//                           {testimonial.role}
//                         </p>
//                         <p className="text-sm text-primary">
//                           {testimonial.company}
//                         </p>
//                       </div>
//                     </div>
//                     <blockquote>
//                       <p className="text-muted-foreground italic relative">
//                         <span className="text-3xl text-primary absolute -top-4 -left-2">
//                           &quot;
//                         </span>
//                         {testimonial.quote}
//                         <span className="text-3xl text-primary absolute -bottom-4">
//                           &quot;
//                         </span>
//                       </p>
//                     </blockquote>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="w-full py-12 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-muted-foreground">
//               Find answers to common questions about our platform
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger className="text-left">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent>{faq.answer}</AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="w-full">
//         <div className="mx-auto py-24 gradient rounded-lg">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
//               Ready to Accelerate Your Career?
//             </h2>
//             <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
//               Join thousands of professionals who are advancing their careers
//               with AI-powered guidance.
//             </p>
//             <Link href="/dashboard" passHref>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="h-11 mt-5 animate-bounce"
//               >
//                 Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
  Brain,
  Rocket,
  Shield,
  Zap,
  ChevronDown,
  Play,
  Star,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}} />
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      
      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return (
    <span id={`counter-${end}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections with data-section attribute
    setTimeout(() => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => observer.observe(section));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)] opacity-20" />
        <div className="particle-bg absolute inset-0 opacity-30" />
        <FloatingElements />
      </div>

      {/* Enhanced Grid Background */}
      <div className="grid-background"></div>

      {/* Modern Hero Section */}
      <HeroSection />

      {/* Modern Stats Section */}
      <section className="relative z-10 py-20 px-4 glass-subtle" data-section id="stats">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {[
              { number: 50000, label: "Success Stories", icon: Users, color: "text-blue-400" },
              { number: 95, label: "Success Rate", suffix: "%", icon: TrendingUp, color: "text-green-400" },
              { number: 500, label: "Partner Companies", suffix: "+", icon: Award, color: "text-purple-400" },
              { number: 24, label: "AI Models", suffix: "/7", icon: Brain, color: "text-yellow-400" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`modern-card group hover:shadow-glow-blue transform transition-all duration-700`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="p-6">
                  <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform float-animation`} />
                  <div className="text-4xl font-black gradient-text-primary">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix || ""} />
                  </div>
                  <p className="text-slate-300 text-sm mt-2">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="relative z-10 w-full py-12 md:py-24 lg:py-32" data-section id="features">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 gradient-text-accent">
              Powerful Features for Your Career Growth
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Advanced AI technology meets career development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="modern-card group cursor-pointer transform transition-all duration-700 border-0"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300 float-animation">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:gradient-text-primary transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="relative z-10 w-full py-12 md:py-24 glass-subtle" data-section id="how-it-works">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-5xl font-black mb-6 gradient-text-secondary">How It Works</h2>
            <p className="text-xl text-slate-300">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 gradient-tech-primary opacity-60" />
                )}
                
                <div className="flex flex-col items-center text-center space-y-4 group hover-scale">
                  <div className="w-16 h-16 rounded-full gradient-tech-primary flex items-center justify-center group-hover:shadow-glow-blue transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-white group-hover:gradient-text-primary transition-all">
                    {item.title}
                  </h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="relative z-10 w-full py-12 md:py-24" data-section id="testimonials">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-5xl font-black text-center mb-12 gradient-text-primary">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="modern-card group border-0">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={48}
                          height={48}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-purple-400/50"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-slate-400">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-blue-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote>
                      <p className="text-slate-300 italic relative">
                        <span className="text-3xl gradient-text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl gradient-text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="relative z-10 w-full py-12 md:py-24 glass-subtle" data-section id="faq">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-5xl font-black mb-6 gradient-text-accent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="modern-card border-0">
                  <AccordionTrigger className="text-left text-white hover:gradient-text-primary transition-all px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 px-6 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
     <section className="relative z-10 w-full py-24">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <div className="relative">
      {/* Soft neon border glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-50 animate-pulse" />
      
      {/* Main card */}
      <div className="relative rounded-2xl p-14 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">
          Ready to Accelerate Your Career?
        </h2>
        
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals advancing their careers with{" "}
          <span className="font-semibold text-white">AI-powered guidance</span>.
        </p>
        
        {/* CTA Button */}
        <Link href="/dashboard" passHref>
          <Button className="px-12 py-5 text-lg font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300 group">
            Start Your Journey Today
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>


    </>
  );
}