"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './FeatureCarousel.css';

// החלפת הסמלים מ-lucide-react בסמלים פשוטים
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

const features = [
  {
    id: 1,
    title: "Identify your ingredients",
    description: "Take a photo, scan a receipt/barcode, or add them manually! Our advanced AI will recognize ingredients instantly.",
    image: "/images/Identify_ingredients.jpg"
  },
  {
    id: 2,
    title: "Generate your recipe",
    description: "Fine-tune your creation to match your diet, skills and style! Get personalized recipes based on what you have.",
    image: "/images/Generate_recipe.png"
  },
  {
    id: 3,
    title: "Manage your cookbook",
    description: "Save, view, rate and share recipes with friends! Build your personal collection of favorite meals.",
    image: "/images/Manage_cookbook.jpg"
  }
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const currentFeature = features[activeIndex];
  
  return (
    <div className="feature-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={prevSlide}
          aria-label="Previous feature"
        >
          <ChevronLeft />
        </button>
        
        <div className="carousel-content">
          <div className={`carousel-item ${isAnimating ? 'animating' : ''}`}>
            <div className="feature-image-container">
              <div className="image-hover-wrapper" style={{ borderRadius: '12px' }}>
                <Image 
                  src={currentFeature.image} 
                  alt={currentFeature.title}
                  width={400}
                  height={400}
                  className="feature-image"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            </div>
            <div className="feature-details">
              <h3 className="feature-title">{currentFeature.title}</h3>
              <p className="feature-description">{currentFeature.description}</p>
            </div>
          </div>
        </div>
        
        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={nextSlide}
          aria-label="Next feature"
        >
          <ChevronRight />
        </button>
      </div>
      
      {/* Thumbnail navigation */}
      <div className="carousel-thumbnails">
        {features.map((feature, index) => (
          <button
            key={feature.id}
            className={`carousel-thumbnail ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to feature ${index + 1}`}
          >
            <div className="thumbnail-wrapper" style={{ borderRadius: '8px' }}>
              <Image 
                src={feature.image}
                alt={`Thumbnail for ${feature.title}`}
                width={60}
                height={60}
                className="thumbnail-image"
                style={{ borderRadius: '6px' }}
              />
            </div>
            <span className="thumbnail-title">{feature.title.split(' ').slice(-1)[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}