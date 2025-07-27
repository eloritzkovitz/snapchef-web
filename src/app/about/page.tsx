export const metadata = {
  title: "About - SnapChef",
  description: "Learn more about the SnapChef team and our mission.",
};

import Image from 'next/image';
import AboutCarousel from '../../components/AboutCarousel';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-about">
        <div className="container">
          <h1 className="hero-title">About SnapChef</h1>
          <p className="tagline">The team behind your AI sous-chef</p>
        </div>
      </div>
      
      {/* About Content Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-container">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-text">
              SnapChef was created to solve a common problem: figuring out what to cook with the ingredients you already have at home. Our mission is to reduce food waste, save money, and make cooking more accessible and enjoyable for everyone.
            </p>
            <p className="about-text">
              By combining advanced image recognition technology with AI-powered recipe generation, we&apos;ve built an app that helps you create delicious meals from whatever is in your fridge or pantry.
            </p>
            
            {/* App Screenshots Carousel */}
            <div className="app-showcase-carousel">
              <h2 className="about-section-title">See SnapChef in Action</h2>
              <AboutCarousel />
            </div>
            
            {/* Team Section - Enhanced */}
            <div className="team-section">
              <h2 className="about-section-title">Meet Our Team</h2>
              <div className="team-members-enhanced">
                <div className="team-member-card">
                  <div className="profile-image-container">
                    <Image
                      src="/images/about/elor_profile.jpg"
                      alt="Elor Itzkovitz"
                      width={100}
                      height={100}
                      className="profile-image"
                    />
                  </div>
                  <h3 className="member-name">Elor Itzkovitz</h3>
                  <p className="member-role">The Flavor Infuser</p>
                  <p className="member-text mt-3">The mastermind behind the app! Whisked together the Android build using Flutter and a dash of Dart. Stirred in the essential API ingredients that bring the whole dish to life.</p>                  
                </div>
                
                <div className="team-member-card">
                  <div className="profile-image-container">
                    <Image
                      src="/images/about/yuval_profile.jpg"
                      alt="Yuval Lavi"
                      width={100}
                      height={100}
                      className="profile-image"
                    />
                  </div>
                  <h3 className="member-name">Yuval Lavi</h3>
                  <p className="member-role">The Visual Plater</p>
                  <p className="member-text mt-3">Expert in visual plating, this chef cooked the web version of our app with React as the main ingredient - combining components like a true front-end culinary artist.</p>
                </div>
                
                <div className="team-member-card">
                  <div className="profile-image-container">
                    <Image
                      src="/images/about/yonatan_profile.jpg"
                      alt="Yonatan Cohen"
                      width={100}
                      height={100}
                      className="profile-image"
                    />
                  </div>
                  <h3 className="member-name">Yonatan Cohen</h3>
                  <p className="member-role"> The Sous-Tech Chef</p>
                  <p className="member-text mt-3">Handled the secret sauce: our AI! Taste-tested the app using Jest, and managed server deployment to deliver everything fresh from the kitchen.</p>
                </div>
                
                <div className="team-member-card">
                  <div className="profile-image-container">
                    <Image
                      src="/images/about/adi_profile.jpg"
                      alt="Adi Cahal"
                      width={100}
                      height={100}
                      className="profile-image"
                    />
                  </div>
                  <h3 className="member-name">Adi Cahal</h3>
                  <p className="member-role">The Pantry Keeper</p>
                  <p className="member-text mt-3">The one behind our data - be it ingredients, barcodes or scrolls of receipts. With a Cloud Vision, you will recognize them all! Also baked the iOS version!</p>                  
                </div>
              </div>
            </div>
            
            {/* Project Info Section */}
            <div className="project-info">
              <h2 className="about-section-title">Academic Project</h2>
              <p>This project was developed as part of our studies at The College of Management Academic Studies</p>
              <Image 
                src="/images/College_logo.png" 
                alt="College Logo" 
                width={60} 
                height={60} 
                className="college-logo" 
              />
              <p className="supervisor">Supervisor: Dr. Gal Badishi</p>
            </div>
            
            {/* Copyright Section */}
            <div className="copyright">
              <p>&copy; 2025 SnapChef. All rights reserved.</p>
              <p>Developed by Elor Itzkovitz, Yuval Lavi, Yonatan Cohen, and Adi Cahal.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}