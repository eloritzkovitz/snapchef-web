"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './FeatureCarousel.css';

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

// 8 הפיצרים החדשים עם התמונות שהעלית
const features = [
  {
    id: 1,
    title: "Identify Your Ingredients",
    description: "Take a photo, scan a receipt/barcode, or add them manually!",
    image: "/images/ingredients.jpg", // תמונה 1 - הירקות והבשר
    thumbnail: "Ingredients"
  },
  {
    id: 2,
    title: "Generate Your Recipe", 
    description: "Fine-tune your creation to match your diet, skills and style!",
    image: "/images/recipe.jpg", // תמונה 2 - הספגטי המוגש
    thumbnail: "Recipe"
  },
  {
    id: 3,
    title: "Manage Your Cookbook",
    description: "Save, view, rate and share recipes with friends!",
    image: "/images/cookbook.jpg", // תמונה 3 - המטבח עם הכלים
    thumbnail: "Cookbook"
  },
  {
    id: 4,
    title: "Cooking Assistance",
    description: "Follow step-by-step text and voice instructions!",
    image: "/images/cooking_assistance.jpg", // תמונה 4 - הידיים עם הכלים
    thumbnail: "Assistance"
  },
  {
    id: 5,
    title: "Organize Your Groceries",
    description: "Keep your personalized shopping list in sync!",
    image: "/images/groceries.jpg", // תמונה 5 - עגלת הקניות
    thumbnail: "Groceries"
  },
  {
    id: 6,
    title: "Always Stay Ahead",
    description: "Set reminders for expiring or missing products!",
    image: "/images/alerts.jpg", // תמונה 6 - המקרר עם השעון
    thumbnail: "Alerts"
  },
  {
    id: 7,
    title: "Professional Chef Experience",
    description: "Learn from the best with expert techniques and tips!",
    image: "/images/chef.jpg", // תמונה 7 - השף במטבח
    thumbnail: "Chef"
  },
  {
    id: 8,
    title: "Start Cooking Today!",
    description: "Access your data even when offline, but with limited functionality.",
    image: "/images/start_cooking.jpg", // תמונה 8 - השף הישן במטבח
    thumbnail: "Start"
  }
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-advance carousel every 6 seconds (מעט יותר מהר עם יותר תמונות)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const currentFeature = features[activeIndex];
  
  return (
    <div 
      className="feature-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
                  priority={activeIndex === 0}
                />
              </div>
            </div>
            <div className="feature-details">
              <h3 className="feature-title">{currentFeature.title}</h3>
              <p className="feature-description">{currentFeature.description}</p>
              
              {/* אינדיקטור מספר הפיצר */}
              <div className="feature-counter">
                <span className="counter-text">
                  {activeIndex + 1} of {features.length}
                </span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                  ></div>
                </div>
              </div>
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
      
      {/* Thumbnail navigation - עם גלילה אופקית למסכים קטנים */}
      <div className="carousel-thumbnails-container">
        <div className="carousel-thumbnails">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              className={`carousel-thumbnail ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to feature ${index + 1}: ${feature.title}`}
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
              <span className="thumbnail-title">{feature.thumbnail}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* אינדיקטורים נוספים למסכים קטנים */}
      <div className="carousel-dots">
        {features.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}