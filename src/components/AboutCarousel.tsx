"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './AboutCarousel.css';

// Type definitions
interface AppScreenshot {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
}

// חיצי הניווט
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// About Carousel Component
const appScreenshots: AppScreenshot[] = [
  {
    id: 1,
    title: "Secure Login",
    description: "Quick and secure authentication to protect your data",
    image: "/images/screenshots/login_screen.jpg",
    thumbnail: "Login"
  },
  {
    id: 2,
    title: "Personal Profile",
    description: "Manage your preferences and dietary requirements",
    image: "/images/screenshots/profile_screen.jpg",
    thumbnail: "Profile"
  },
  {
    id: 3,
    title: "Fridge Management",
    description: "Track your ingredients easily with our intuitive interface",
    image: "/images/screenshots/fridge_screen_1.jpg",
    thumbnail: "Fridge"
  },
  {
    id: 4,
    title: "Clean Interface", 
    description: "Enjoy our minimalist design that puts functionality first",
    image: "/images/screenshots/fridge_screen_2.jpg",
    thumbnail: "Interface"
  }
];

export default function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % appScreenshots.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % appScreenshots.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + appScreenshots.length) % appScreenshots.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const currentScreenshot = appScreenshots[activeIndex];
  
  return (
    <div 
      className="about-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="about-carousel-container">
        <button 
          className="about-carousel-arrow about-carousel-arrow-left" 
          onClick={prevSlide}
          aria-label="Previous screenshot"
        >
          <ChevronLeft />
        </button>
        
        <div className="about-carousel-content">
          <div className={`about-carousel-item ${isAnimating ? 'animating' : ''}`}>
            <div className="about-screenshot-container">
              <div className="about-screenshot-frame">
                <Image 
                  src={currentScreenshot.image} 
                  alt={currentScreenshot.title}
                  width={200}
                  height={400}
                  className="about-screenshot-image"
                  priority={activeIndex === 0}
                />
              </div>
            </div>
            <div className="about-screenshot-details">
              <h3 className="about-screenshot-title">{currentScreenshot.title}</h3>
              <p className="about-screenshot-description">{currentScreenshot.description}</p>
              
              {/* Screenshot indicator */}
              <div className="about-screenshot-counter">
                <span className="about-counter-text">
                  {activeIndex + 1} of {appScreenshots.length}
                </span>
                <div className="about-progress-bar">
                  <div 
                    className="about-progress-fill" 
                    style={{ width: `${((activeIndex + 1) / appScreenshots.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          className="about-carousel-arrow about-carousel-arrow-right" 
          onClick={nextSlide}
          aria-label="Next screenshot"
        >
          <ChevronRight />
        </button>
      </div>
      
      {/* Thumbnail navigation */}
      <div className="about-carousel-thumbnails-container">
        <div className="about-carousel-thumbnails">
          {appScreenshots.map((screenshot, index) => (
            <button
              key={screenshot.id}
              className={`about-carousel-thumbnail ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to screenshot ${index + 1}: ${screenshot.title}`}
            >
              <div className="about-thumbnail-wrapper">
                <Image 
                  src={screenshot.image}
                  alt={`Thumbnail for ${screenshot.title}`}
                  width={40}
                  height={80}
                  className="about-thumbnail-image"
                />
              </div>
              <span className="about-thumbnail-title">{screenshot.thumbnail}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Indicators for small screens */}
      <div className="about-carousel-dots">
        {appScreenshots.map((_, index) => (
          <button
            key={index}
            className={`about-carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}