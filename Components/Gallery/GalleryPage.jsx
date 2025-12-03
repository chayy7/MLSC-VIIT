import React from "react";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import "./GalleryPage.css";

const images = [
  "https://i.postimg.cc/52S5pW0K/DSC-0461-%282%29.jpg",
  "https://i.postimg.cc/ZqZmtpJm/DSC-0440-%282%29.jpg",
  "https://i.postimg.cc/DfY59h78/DSC-0346-%282%29.jpg",
  "https://i.postimg.cc/N0pRR8M1/DSC-0445-%282%29.jpg",
];

while (images.length < 100) {
  images.push(...images);
  if (images.length > 100) images.length = 100;
}

const GalleryPage = () => {
  return (
    <div className="w-full">

      {/* Scroll Text */}
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

      <div className="gallery-container">

        {/* ⭐ Perfect 3-image-per-row grid ⭐ */}
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img} alt={`img-${i}`} />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default GalleryPage;
