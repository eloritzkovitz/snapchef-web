"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './AboutCarousel.css';

interface AppScreenshot {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
}

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

const appScreenshots: AppScreenshot[] = [
  {
    id: 1,
    title: "Home",
    description: "Navigate easily between features using the bottom menu.",
    image: "/images/screenshots/1home.png",
    thumbnail: "Home"
  },
  {
    id: 2,
    title: "Fridge",
    description: "View and manage ingredients you already have at home.",
    image: "/images/screenshots/2fridge.png",
    thumbnail: "Fridge"
  },
  {
    id: 3,
    title: "Ingredient Search",
    description: "Look up ingredients and add them to your fridge.",
    image: "/images/screenshots/3ingredientSearch.png",
    thumbnail: "Search"
  },
  {
    id: 4,
    title: "Grocery List",
    description: "Automatically track ingredients you need to purchase.",
    image: "/images/screenshots/4groceries.png",
    thumbnail: "Groceries"
  },
  {
    id: 5,
    title: "Reminders",
    description: "Set alerts for expiring ingredients so nothing goes to waste.",
    image: "/images/screenshots/5setReminder.png",
    thumbnail: "Reminders"
  },
  {
    id: 6,
    title: "Cookbook",
    description: "Save and manage your favorite recipes in one place.",
    image: "/images/screenshots/6cookbook.png",
    thumbnail: "Cookbook"
  },
  {
    id: 7,
    title: "AI Recipe Generator",
    description: "Create recipes using ingredients from your fridge.",
    image: "/images/screenshots/7generateRecipe.png",
    thumbnail: "AI"
  },
  {
    id: 8,
    title: "Add Recipe",
    description: "Manually add your favorite recipes to the cookbook.",
    image: "/images/screenshots/8addRecipe.png",
    thumbnail: "Add"
  },
  {
    id: 9,
    title: "View Recipe",
    description: "Get full instructions and ingredients for any saved recipe.",
    image: "/images/screenshots/9viewRecipe.png",
    thumbnail: "View"
  },
  {
    id: 10,
    title: "Profile",
    description: "View your profile details and app usage.",
    image: "/images/screenshots/10profile.png",
    thumbnail: "Profile"
  },
  {
    id: 11,
    title: "Friends",
    description: "Add friends to share recipes and explore what others cook.",
    image: "/images/screenshots/11friends.png",
    thumbnail: "Friends"
  },
  {
    id: 12,
    title: "Notifications",
    description: "Stay updated when your friends connect with you.",
    image: "/images/screenshots/12notifications.png",
    thumbnail: "Alerts"
  }
];

export default function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const current = appScreenshots[activeIndex];

  return (
    <div className="about-carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="about-carousel-container">
        <button className="about-carousel-arrow about-carousel-arrow-left" onClick={prevSlide}>
          <ChevronLeft />
        </button>

        <div className="about-carousel-content">
          <div className={`about-carousel-item ${isAnimating ? 'animating' : ''}`}>
            <div className="about-screenshot-container">
              <div className="about-screenshot-frame">
                <Image
                  src={current.image}
                  alt={current.title}
                  width={200}
                  height={400}
                  className="about-screenshot-image"
                  priority={activeIndex === 0}
                />
              </div>
            </div>
            <div className="about-screenshot-details">
              <h3 className="about-screenshot-title">{current.title}</h3>
              <p className="about-screenshot-description">{current.description}</p>
              <div className="about-screenshot-counter">
                <span className="about-counter-text">
                  {activeIndex + 1} of {appScreenshots.length}
                </span>
                <div className="about-progress-bar">
                  <div className="about-progress-fill" style={{ width: `${((activeIndex + 1) / appScreenshots.length) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="about-carousel-arrow about-carousel-arrow-right" onClick={nextSlide}>
          <ChevronRight />
        </button>
      </div>

      <div className="about-carousel-thumbnails-container">
        <div className="about-carousel-thumbnails">
          {appScreenshots.map((s, i) => (
            <button
              key={s.id}
              className={`about-carousel-thumbnail ${i === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
            >
              <div className="about-thumbnail-wrapper">
                <Image
                  src={s.image}
                  alt={`Thumbnail for ${s.title}`}
                  width={40}
                  height={80}
                  className="about-thumbnail-image"
                />
              </div>
              <span className="about-thumbnail-title">{s.thumbnail}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="about-carousel-dots">
        {appScreenshots.map((_, i) => (
          <button
            key={i}
            className={`about-carousel-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
