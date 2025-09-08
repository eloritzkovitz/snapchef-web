export const metadata = {
  title: "Home - SnapChef",
  description: "Welcome to SnapChef - Manage your ingredients and recipes with ease.",
};

import Image from 'next/image';
import Link from 'next/link';
import Features from '../components/Features';

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
          
          <div className="md:w-1/2 flex justify-center">
            <div className="border-4 border-black rounded-[2.5rem] bg-black p-2 flex items-center justify-center shadow-lg">
              <Image 
                src="/images/screenshots/main.gif" 
                alt="SnapChef App" 
                width={260} 
                height={540} 
                className="rounded-[2rem] object-cover"
                priority
                style={{ width: "260px", height: "540px" }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="container">          
          <Features />
        </div>
      </section>
    </div>
  );
}