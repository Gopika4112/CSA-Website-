import './Gallery.css';
import { useState, useEffect } from 'react';

const galleryImages = [
  { id: 1, alt: 'Group photo 1' },
  { id: 2, alt: 'Certificate presentation' },
  { id: 3, alt: 'Team gathering' },
  { id: 4, alt: 'Award ceremony' },
  { id: 5, alt: 'Outdoor event' },
  { id: 6, alt: 'Workshop session' },
  { id: 7, alt: 'Conference' },
  { id: 8, alt: 'Team celebration' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const duplicatedImages = [...galleryImages, ...galleryImages];

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="gallery-section">
      <div className="gallery-title-container">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="dinosaur-logo-gallery">
          <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#f8f6f4" />
        </svg>
        <div className="gallery-title-section">
          <div className="gallery-title-frame">
            <div className='gallery-line gallery-line-left'></div>
            <h1 className="gallery-title">Gallery</h1>
            <div className='gallery-line gallery-line-right'></div>
          </div>
          <div className="gallery-border-frame">
            <div className='gallery-border-top'></div>
            <div className='gallery-border-bottom'></div>
          </div>
        </div>
      </div>

      <div className="gallery-carousel-wrapper">
        <div className="gallery-carousel">
          {duplicatedImages.map((img, index) => (
            <div 
              className="gallery-card" 
              key={`${img.id}-${index}`}
              onClick={() => openLightbox(img)}
            >
              <div className="gallery-image-placeholder">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#5a4a52"/>
                  <rect x="20" y="20" width="360" height="260" rx="12" fill="#6b5c63" opacity="0.6"/>
                  <circle cx="120" cy="120" r="40" fill="#7a6b72"/>
                  <circle cx="200" cy="100" r="35" fill="#8a7b82"/>
                  <circle cx="280" cy="120" r="40" fill="#7a6b72"/>
                  <circle cx="150" cy="180" r="38" fill="#8a7b82"/>
                  <circle cx="250" cy="180" r="38" fill="#7a6b72"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="lightbox-image">
              <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="600" fill="#5a4a52"/>
                <rect x="40" y="40" width="720" height="520" rx="20" fill="#6b5c63" opacity="0.6"/>
                <circle cx="200" cy="200" r="80" fill="#7a6b72"/>
                <circle cx="400" cy="180" r="70" fill="#8a7b82"/>
                <circle cx="600" cy="200" r="80" fill="#7a6b72"/>
                <circle cx="300" cy="380" r="76" fill="#8a7b82"/>
                <circle cx="500" cy="380" r="76" fill="#7a6b72"/>
              </svg>
            </div>
            <p className="lightbox-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
