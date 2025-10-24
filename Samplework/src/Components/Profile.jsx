
import React, { useState } from 'react';
import './Profile.css'; 

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500',
    'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=500'
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState('next');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? Math.max(0, images.length - 3) : prev - 1
    );
    setActiveArrow('prev'); 
    console.log('Active Arrow:', 'prev');
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev >= images.length - 3 ? 0 : prev + 1
    );
    setActiveArrow('next'); 
    console.log('Active Arrow:', 'next');
  };

  const visibleImages = images.slice(currentImageIndex, currentImageIndex + 3);

  return (
    <div className="page-container">
      {/* Left Empty Section */}
      <div className="left-empty-section"></div>
      
      {/* Right Section with Widgets */}
      <div className="right-widgets-section">
        {/* About Me Widget */}
        <div className="widget about-widget">
          <div className="help-icon">?</div>
          
          <div className="tabs-container">
            <button 
              className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
            <button 
              className={`tab-btn ${activeTab === 'experiences' ? 'active' : ''}`}
              onClick={() => setActiveTab('experiences')}
            >
              Experiences
            </button>
            <button 
              className={`tab-btn ${activeTab === 'recommended' ? 'active' : ''}`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended
            </button>
          </div>
          
          <div className="content-box">
            {/* <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div> */}

            <div className="grid-icon-container">
              <div className="grid-icon">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            
            <div className="scrollable-content">
              {activeTab === 'about' && (
                <>
                  <p className="paragraph">
                    Hello! I'm Dave, your sales rep here from Salesforce. I've been 
                    working at this awesome company for 3 years now.
                  </p>
                  <p className="paragraph">
                    I was born and raised in Albany, NY& have been living in Santa 
                    Carla for the past 10 years my wife Tiffany and my 4 year old twin 
                    daughters- Emma and Ella. Both of them are just starting school, 
                    so my calendar is usually blocked between 9-10 AM. This is a...
                  </p>
                </>
              )}
              {activeTab === 'experiences' && (
                <p className="paragraph">Experience content goes here...</p>
              )}
              {activeTab === 'recommended' && (
                <p className="paragraph">Recommended content goes here...</p>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Widget */}
        <div className="widget gallery-widget">
          <div className="help-icon">?</div>
          
          <div className="gallery-header">
            <button className="gallery-title-btn">Gallery</button>
            
            <div className="gallery-actions">
              <label htmlFor="file-upload" className="add-image-btn">
                + ADD IMAGE
              </label>
              <input 
                type="file" 
                id="file-upload" 
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              
              <button className={`arrow-btn prev-btn ${activeArrow === 'prev' ? 'active' : ''}`} onClick={handlePrevImage}>
                ←
              </button>
              <button className={`arrow-btn next-btn ${activeArrow === 'next' ? 'active' : ''}`} onClick={handleNextImage}>
                →
              </button>
            </div>
          </div>
          
          <div className="gallery-content">
            <div className="grid-icon-container">
              <div className="grid-icon">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            
            <div className="images-grid">
              {visibleImages.map((img, idx) => (
                <div key={`${currentImageIndex}-${idx}`} className="image-wrapper">
                  <img src={img} alt={`Gallery ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
