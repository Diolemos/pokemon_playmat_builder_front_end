import { useState } from "react";
import Input from "./Input"
import Output from "./Output";

function App() {
  const [image, setImage] = useState(null);
  const [overlay, setOverlay] = useState("black");
  const [preview, setPreview] = useState(sessionStorage.getItem("playmatPreview"));

  const handleSelectOverlay = (userChoice)=>{
      setOverlay(userChoice)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
  };
  const handleGenerate = () => {
    if (!image) {
        console.error("No image selected");
        return;
    }
    
    console.log("Sending request with image:", image);
    console.log("Selected overlay:", overlay);
    
    const formData = new FormData();
    formData.append("file", image);
    formData.append("overlay", overlay);
    
    fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      body: formData,
    })
    .then((res) => {
        console.log("Response received:", res);
        return res.blob();
    })
    .then((blob) => {
        const url = URL.createObjectURL(blob);
        setPreview(url);
        sessionStorage.setItem("playmatPreview", url);
        console.log("Preview updated:", url);
    })
    .catch((err) => console.error("Error uploading image:", err));
};
  const handleDownload = () => {
    if (!preview) return;
    const link = document.createElement("a");
    link.href = preview;
    link.download = "playmat.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return (
    <>
     <Input onImageUpload={handleImageUpload} overlay={overlay}  onGenerate={handleGenerate} onSelectOverlay={handleSelectOverlay}/> 
    {/* display preview */}
    <Output preview={preview} onDownload={handleDownload} />
    </>
  )
}

export default App
