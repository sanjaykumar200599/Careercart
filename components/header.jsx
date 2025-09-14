// import React from 'react'
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from '@clerk/nextjs'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Button } from './ui/button'
// import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { checkUser } from '@/lib/checkUser'


// const Header = async() => {
//   await checkUser();
//   return (
//     <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60"  >
//         <nav className='container mx-auto px-4 h-16 flex items-center justify-between'> 
//           <Link href="/">
//           <Image src="/logo.png" alt="Senai logo" width={200} height={60} className="h-12 py-1 w-auto object-contain"/>
         
//           </Link>

//           <div className='flex items-center space-x-2 md:space-x-4'>
//             <SignedIn>
//               <Link href={"/dashboard"}>
//                  <Button variant="outine" >
//                     <LayoutDashboard className='H-4 W-4 '/>
//                     <span className='hidden md:block'>Industry Highlights</span>
//                   </Button>
//               </Link>
            
            
//           {/* import from  dropdown menu shacn */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button >
//                   <StarsIcon className='H-4 W-4 '/>
//                   <span className='hidden md:block'>Growth Tools</span>
//                   <ChevronDown className='h-4 w-4'/>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//                  < DropdownMenuItem>
//                      <Link href={'/resume'} className='flex items-center gap-2'>
//                      <FileText className='h-4 w-4 '/>
//                       <span>Build Resume</span>
//                      </Link>
//                   </DropdownMenuItem>
//                  <DropdownMenuItem>
//                      <Link href={'/ai-cover-letter'} className='flex items-center  gap-2'>
//                       <PenBox className='h-4 w-4 '/>
//                         Cover Letter
//                    </Link>
//                   </DropdownMenuItem>
//                    <DropdownMenuItem>
//                           <Link href={'/interview'} className='flex    items-center gap-2'>
//                            <GraduationCap className='h-4 w-4 '/>
//                            Interview Prep
//                          </Link>
//                    </DropdownMenuItem>
//               </DropdownMenuContent>
//           </DropdownMenu>
//           </SignedIn>

//           <SignedOut>
//               <SignInButton>
//                 <Button variant="outline">
//                   Sign In
//                 </Button>
//               </SignInButton>
              
//             </SignedOut>
//             <SignedIn>
//               <UserButton
//                 appearance={{
//                   elements:{
//                     avatarBox:"w-10 h-10",
//                     userButtonPopoverCard:"shadow-xl",
//                     userPreviewMainIdentifier:"font-semibold",
//                   },
//                 }}
//                 afterSignOutUrl='/'
//               />
//             </SignedIn>
//            </div>
//         </nav>
// </header>
//   )
// }

// export default Header
"use client";
import React, { useState, useEffect } from 'react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { 
  ChevronDown, 
  FileText, 
  GraduationCap, 
  LayoutDashboard, 
  PenBox, 
  StarsIcon,
  Menu,
  X,
  Sparkles 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderClient = () => {
  return (
    <header className="fixed top-0 w-full glass-strong border-b border-white/10 backdrop-blur-xl z-50 transition-all duration-300">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px gradient-tech-primary opacity-60" />
      
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between relative'>
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Image 
              src="/logo.png" 
              alt="AI Career Coach logo" 
              width={200} 
              height={60} 
              className="h-12 py-1 w-auto object-contain transition-all duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center space-x-1'>
          <SignedIn>
            <Link href="/dashboard">
              <Button 
                variant="ghost" 
                className="glass-subtle hover:glass-strong text-white border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <LayoutDashboard className='h-4 w-4 mr-2 group-hover:text-blue-400 transition-colors' />
                <span className='font-medium'>Dashboard</span>
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="glass-subtle hover:glass-strong text-white border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                  variant="ghost"
                >
                  <StarsIcon className='h-4 w-4 mr-2 group-hover:text-purple-400 transition-colors' />
                  <span className='font-medium'>Growth Tools</span>
                  <ChevronDown className='h-4 w-4 ml-1 group-hover:rotate-180 transition-transform duration-300' />
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent 
                className="glass-strong border-white/20 backdrop-blur-xl rounded-xl p-2 min-w-[200px]"
                align="end"
              >
                <DropdownMenuItem>
                  <Link href='/resume' className='flex items-center gap-3 w-full p-2'>
                    <div className="w-8 h-8 rounded-lg gradient-tech-primary flex items-center justify-center">
                      <FileText className='h-4 w-4 text-white' />
                    </div>
                    <div>
                      <span className="font-medium text-white">Resume Builder</span>
                      <p className="text-xs text-slate-300 mt-1">Create ATS-optimized resumes</p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href='/ai-cover-letter' className='flex items-center gap-3 w-full p-2'>
                    <div className="w-8 h-8 rounded-lg gradient-tech-secondary flex items-center justify-center">
                      <PenBox className='h-4 w-4 text-white' />
                    </div>
                    <div>
                      <span className="font-medium text-white">Cover Letter</span>
                      <p className="text-xs text-slate-300 mt-1">AI-powered cover letters</p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href='/interview' className='flex items-center gap-3 w-full p-2'>
                    <div className="w-8 h-8 rounded-lg gradient-tech-accent flex items-center justify-center">
                      <GraduationCap className='h-4 w-4 text-white' />
                    </div>
                    <div>
                      <span className="font-medium text-white">Interview Prep</span>
                      <p className="text-xs text-slate-300 mt-1">Practice with AI coaching</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <div className="flex items-center space-x-2">
              <SignInButton>
                <Button variant="ghost" className="glass-subtle text-white">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="btn-modern-primary text-sm px-6 py-2">
                  Get Started <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ring-2 ring-blue-400/50 hover:ring-blue-400 transition-all duration-300",
                },
              }}
              afterSignOutUrl='/'
            />
          </SignedIn>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </nav>
    </header>
  );
};

// Mobile Navigation
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center space-x-2">
      <SignedOut>
        <SignInButton>
          <Button variant="ghost" size="sm" className="glass-subtle text-white">Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="glass-subtle text-white p-2"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute top-16 right-4 left-4 glass-strong rounded-2xl p-6 space-y-4">
            <SignedIn>
              <Link href="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-3 rounded-xl">
                <LayoutDashboard className="h-5 w-5 text-blue-400" />
                <span className="font-medium text-white">Dashboard</span>
              </Link>
              <div className="border-t border-white/10 pt-3">
                <Link href="/resume" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-3 rounded-xl">
                  <FileText className="h-5 w-5 text-purple-400" />
                  <span className="text-white">Resume Builder</span>
                </Link>
                <Link href="/ai-cover-letter" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-3 rounded-xl">
                  <PenBox className="h-5 w-5 text-green-400" />
                  <span className="text-white">Cover Letter</span>
                </Link>
                <Link href="/interview" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-3 rounded-xl">
                  <GraduationCap className="h-5 w-5 text-yellow-400" />
                  <span className="text-white">Interview Prep</span>
                </Link>
              </div>
            </SignedIn>
            <SignedOut>
              <SignUpButton>
                <Button className="btn-modern-primary w-full justify-center" onClick={() => setIsOpen(false)}>
                  Get Started <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderClient;
