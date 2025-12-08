import React from "react";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import Hyperspeed from "../HyperSpeed/HyperSpeed";
import "./GalleryPage.css";

const images = [
  "https://i.postimg.cc/52S5pW0K/DSC-0461-%282%29.jpg",
  "https://i.postimg.cc/ZqZmtpJm/DSC-0440-%282%29.jpg",
  "https://i.postimg.cc/DfY59h78/DSC-0346-%282%29.jpg",
  "https://i.postimg.cc/N0pRR8M1/DSC-0445-%282%29.jpg",
  "https://i.postimg.cc/50cg6Qy6/DSC-0326-%282%29.jpg",
  "https://i.postimg.cc/CK61NbkF/DSC-0348-%282%29.jpg",
  "https://i.postimg.cc/63YDRhvY/DSC-0456-%282%29.jpg",
  "https://i.postimg.cc/zG7M4jdf/DSC-0447-%282%29.jpg",
  "https://i.postimg.cc/28chJL4J/DSC-0446.jpg-%282%29.jpg",
  "https://i.postimg.cc/9MgcV21L/DSC-0444.jpg-%282%29.jpg",
  "https://i.postimg.cc/vmkdShBc/DSC-0443-%282%29.jpg",
  "https://i.postimg.cc/PJLyVbCh/DSC-0442.jpg-%282%29.jpg",
  "https://i.postimg.cc/52JGyGHJ/DSC-0420.jpg-%282%29.jpg",
  "https://i.postimg.cc/7Zv4Vm5r/DSC-0359.jpg-%282%29.jpg",
];

// duplicate up to 100
while (images.length < 100) {
  images.push(...images);
  if (images.length > 100) images.length = 100;
}

const GalleryPage = () => {
  return (
    <div className="gallery-page-wrapper">
      {/* ⭐ Background */}
      <div className="gallery-bg">
        <Hyperspeed />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full">
        {/* ---------- HERO SECTION ---------- */}
        <div className="hero-section">
          <div className="scroll-text-wrap">
            <ScrollVelocity
              texts={["MLSC GALLERY"]}
              velocity={-100}
              numCopies={6}
            />
            <ScrollVelocity
              texts={["MLSC GALLERY"]}
              velocity={100}
              numCopies={6}
            />
          </div>

          <div className="scroll-down-wrapper">
            <p className="scroll-down-text">
  Scroll Down <i className="fa-solid fa-arrow-down scroll-down-icon"></i>
</p>

          </div>
        </div>

        {/* ---------- GALLERY ---------- */}
        <div className="gallery-container">
          <div className="gallery-grid">
            {images.map((img, i) => (
              <div className="gallery-item" key={i}>
                <img src={img} alt={`img-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
