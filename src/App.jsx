import Input from "./Input"

function App() {
  const [image, setImage] = useState(null);
  const [overlay, setOverlay] = useState("");
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
    if (!image) return;
    
    const formData = new FormData();
    formData.append("file", image);
    formData.append("overlay", overlay);
   
    
    fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setPreview(url);
        sessionStorage.setItem("playmatPreview", url);
      })
      .catch((err) => console.error("Error uploading image:", err));
  };

  
  return (
    <>
     <Input onImageUpload={handleImageUpload}  onGenerate={handleGenerate} onSelectOverlay={handleSelectOverlay}/> 
    {/* display preview */}
    </>
  )
}

export default App
