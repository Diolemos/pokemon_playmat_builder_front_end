import Input from "./Input"

function App() {
  const [image, setImage] = useState(null);
  const [overlay, setOverlay] = useState("");

  const handleSelectOverlay = (userChoice)=>{
      setOverlay(userChoice)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
  };

  
  return (
    <>
     <Input onImageUpload={handleImageUpload}  onGenerate onSelectOverlay={handleSelectOverlay}/> 
    </>
  )
}

export default App
