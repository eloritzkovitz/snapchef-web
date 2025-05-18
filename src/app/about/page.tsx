
export const metadata = {
  title: "About - SnapChef",
  description: "Learn more about the SnapChef team and our mission.",
};

import Image from 'next/image';

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
              By combining advanced image recognition technology with AI-powered recipe generation, we've built an app that helps you create delicious meals from whatever is in your fridge or pantry.
            </p>
            
            {/* Team Section */}
            <div className="team-section">
              <h2 className="about-section-title">Meet Our Team</h2>
              <div className="team-members">
                <div className="team-member">
                  <h3 className="member-name">Elor Itzkovitz</h3>
                </div>
                
                <div className="team-member">
                  <h3 className="member-name">Yuval Lavi</h3>
                </div>
                
                <div className="team-member">
               
                  <h3 className="member-name">Yonatan Cohen</h3>
                  
                </div>
                
                <div className="team-member">
                  
                  <h3 className="member-name">Adi Cahal</h3>
                
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