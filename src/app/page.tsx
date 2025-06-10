export const metadata = {
  title: "Home - SnapChef",
  description: "Welcome to SnapChef - Manage your ingredients and recipes with ease.",
};

import Image from 'next/image';
import Link from 'next/link';
import FeatureCarousel from '../components/FeatureCarousel';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="hero-section relative">
        <div className="hero-background">
          <Image 
            src="/images/background_homePage.png" 
            alt="Fresh ingredients" 
            layout="fill" 
            objectFit="cover" 
            priority 
            className="hero-bg-image"
          />
          <div className="overlay"></div>
        </div>
        
        <div className="container relative z-10 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="hero-content md:w-1/2 mb-10 md:mb-0">
            <h1 className="hero-title mb-4">Cook with what you have</h1>
            <p className="hero-subtitle mb-8">
              Turn your ingredients into delicious meals without shopping or ordering in
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="download-button">
                Download Now
              </Link>
              <Link href="/about" className="learn-more-button">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="app-showcase md:w-1/2 flex justify-center">
            <div className="phone-mockup">
              <Image 
                src="/images/scan_ing.png" 
                alt="SnapChef App" 
                width={280} 
                height={550} 
                className="phone-image" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section with Carousel */}
      <section className="features">
        <div className="container">
          <h2 className="features-heading">Our Features</h2>
          <FeatureCarousel />
        </div>
      </section>
    </div>
  );
}