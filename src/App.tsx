import { useState } from "react";
import Autocomplete from "./components/Autocomplete";
import PhotoGallery from "./components/PhotoGallery";
import images from "./data/images.json";
import "./globals.css";
import PhotoCarousel from "./components/PhotoCarousel";

function App() {
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>("");

  const imageTitles = images.map((img) => img.title);

  const filteredImages = selectedImageTitle
    ? images.filter((image) =>
        image.title.toLowerCase().includes(selectedImageTitle.toLowerCase()),
      )
    : images;

  const featuredImages = images.filter((image) => image.is_featured);

  return (
    <div className="container">
      <h1 className="app-title mb-5 mt-5">Image Gallery with Custom Components</h1>
      <section>
        <Autocomplete items={imageTitles} onSelect={setSelectedImageTitle} />
      </section>

      <section>
        <PhotoCarousel images={featuredImages} />
      </section>

      <section>
        <PhotoGallery images={filteredImages} />
      </section>
    </div>
  );
}

export default App;
