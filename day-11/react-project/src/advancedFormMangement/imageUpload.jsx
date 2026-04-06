import { useState } from 'react';

export default function ImageUploadDemo() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      alert("Upload image only");
    }
  };

  return (
    <div>
      <h3>Image Upload</h3>

      <input
        type="file"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {selectedImage && (
        <img src={selectedImage} alt="preview" width="200" />
      )}

      {selectedImage && (
        <button onClick={() => setSelectedImage(null)}>
          Remove
        </button>
      )}
    </div>
  );
}