import React from "react";
import { Download } from "lucide-react"; // icon library

const images = [
  "https://images.unsplash.com/photo-1432462770865-65b70566d673?auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=927&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1552960562-daf630e9278b?auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80",
  "https://docs.material-tailwind.com/img/team-3.jpg",
];

const GalleryPage = () => {
  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "mlsc-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white py-10">
      <h1 className="text-center text-3xl font-semibold mb-10">
        MLSC Photo Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16">
        {images.map((img, idx) => (
          <div key={idx} className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-900">
            
            {/* Image */}
            <img
              src={img}
              alt="gallery"
              className="w-full h-64 object-cover rounded-xl group-hover:brightness-75 transition"
            />

            {/* Download Icon on Hover */}
            <button
              onClick={() => downloadImage(img)}
              className="absolute top-3 right-3 bg-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Download size={22} className="text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
